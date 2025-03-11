# Re-Treasure: 재활용 교육 웹사이트

재활용 교육을 위한 웹사이트입니다. 올바른 분리배출 방법과 재활용 과정을 쉽게 이해할 수 있도록 도와줍니다.

## 주요 기능

- 재활용 과정 소개
- 분리배출 가이드
- 자주 묻는 질문 (FAQ)
- 재활용 통계 시각화

## 기술 스택

- Next.js 15.2.2
- TypeScript
- Tailwind CSS
- Chart.js

## 시작하기

```bash
# 저장소 클론
git clone [repository-url]

# 디렉토리 이동
cd re-treasure

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조

```
re-treasure/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── recycle-process/
│   │   ├── guide/
│   │   └── qa/
│   └── components/
│       ├── Hero.tsx
│       └── RecyclingStats.tsx
├── public/
├── package.json
└── README.md
```

## 라이선스

MIT License 