from pdf2image import convert_from_path
import pytesseract
from bs4 import BeautifulSoup
import re
import cv2
import numpy as np
from PIL import Image, ImageEnhance

def preprocess_image(image):
    # PIL Image를 OpenCV 형식으로 변환
    cv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    
    # 그레이스케일 변환
    gray = cv2.cvtColor(cv_image, cv2.COLOR_BGR2GRAY)
    
    # 노이즈 제거
    denoised = cv2.fastNlMeansDenoising(gray)
    
    # 대비 향상
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    enhanced = clahe.apply(denoised)
    
    # 이진화
    _, binary = cv2.threshold(enhanced, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    
    # OpenCV 이미지를 PIL Image로 변환
    return Image.fromarray(binary)

def clean_text(text):
    # 불필요한 특수문자 및 공백 정리
    text = re.sub(r'[^\w\s\.\,\?\!\(\)\[\]\{\}\-\:\;\"\'\°]', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def detect_title(text):
    # 제목으로 보이는 텍스트 탐지
    if len(text) < 100:
        # 숫자로 시작하는 패턴 (예: "1.", "1.1", "제1장")
        if re.match(r'^\d+\.|\d+\.\d+|제\d+장|제\d+절', text):
            return True
        # 특정 키워드를 포함하는 패턴
        if any(marker in text for marker in ['장', '절', '항', '조', '목차', '개요']):
            return True
    return False

def detect_table(text):
    # 표 형식으로 보이는 텍스트 탐지
    lines = text.split('\n')
    if len(lines) > 2:
        # 구분자(|, -, +) 패턴 확인
        separators = re.findall(r'[\|\-\+]+', text)
        if len(separators) > len(lines) / 2:
            return True
    return False

def create_toc(sections):
    toc = '<div class="toc">\n<h2>목차</h2>\n<ul>\n'
    for section in sections:
        toc += f'<li><a href="#{section["id"]}">{section["title"]}</a></li>\n'
    toc += '</ul>\n</div>\n'
    return toc

# PDF를 이미지로 변환
images = convert_from_path('re.pdf', dpi=300)  # DPI 향상

# HTML 문서 시작
html_content = '''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>재활용 가이드라인</title>
    <style>
        body { 
            font-family: 'Nanum Gothic', Arial, sans-serif; 
            line-height: 1.8; 
            margin: 40px;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .toc {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 30px;
        }
        .toc h2 {
            margin-top: 0;
        }
        .toc ul {
            list-style-type: none;
            padding-left: 20px;
        }
        .toc a {
            color: #2c3e50;
            text-decoration: none;
        }
        .toc a:hover {
            text-decoration: underline;
        }
        .section {
            margin-bottom: 2em;
            padding: 1em;
            border-bottom: 1px solid #eee;
        }
        .title {
            font-size: 1.2em;
            font-weight: bold;
            margin: 1em 0;
            color: #2c3e50;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        .content {
            margin-left: 1em;
            line-height: 1.8;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
            background: white;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f5f5f5;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        @media print {
            body {
                max-width: none;
                margin: 0;
                padding: 0;
            }
        }
    </style>
</head>
<body>
<div class="container">
'''

# 섹션 정보 저장
sections = []
current_section = None
section_id = 0

# 각 페이지에 OCR 적용
for i, image in enumerate(images):
    print(f'Processing page {i+1}/{len(images)}...')
    
    # 이미지 전처리
    processed_image = preprocess_image(image)
    
    # OCR 설정 개선
    custom_config = r'--oem 3 --psm 6 -l kor+eng --dpi 300'
    text = pytesseract.image_to_string(processed_image, config=custom_config)
    
    # 텍스트를 문단으로 분리
    paragraphs = text.split('\n\n')
    
    for p in paragraphs:
        p = clean_text(p)
        if not p:
            continue
            
        if detect_title(p):
            # 새로운 섹션 시작
            section_id += 1
            if current_section:
                html_content += '</div>\n'  # 이전 섹션 닫기
            
            section_anchor = f'section-{section_id}'
            sections.append({"id": section_anchor, "title": p})
            
            html_content += f'<div class="section" id="{section_anchor}">\n'
            html_content += f'<div class="title">{p}</div>\n'
            current_section = p
        elif detect_table(p):
            # 표 형식 데이터 처리
            html_content += '<div class="content"><table>\n'
            for row in p.split('\n'):
                cells = row.split('|')
                html_content += '<tr>\n'
                for cell in cells:
                    html_content += f'<td>{cell.strip()}</td>\n'
                html_content += '</tr>\n'
            html_content += '</table></div>\n'
        else:
            # 일반 내용
            html_content += f'<div class="content">{p}</div>\n'

# 마지막 섹션 닫기
if current_section:
    html_content += '</div>\n'

# 목차 생성 및 삽입
toc = create_toc(sections)
html_content = html_content.replace('<div class="container">\n', f'<div class="container">\n{toc}')

# HTML 문서 닫기
html_content += '''
</div>
</body>
</html>'''

# HTML 파일로 저장
with open('re.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('변환이 완료되었습니다.') 