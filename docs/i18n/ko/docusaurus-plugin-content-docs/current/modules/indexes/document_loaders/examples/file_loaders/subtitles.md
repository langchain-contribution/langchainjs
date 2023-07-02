---
hide_table_of_contents: true
---

# Subtitles

이 예시는 subtitle 파일들로부터 data를 로드하는 방법에 대해 살펴봅니다. 한 document는 각각의 subtitle 파일로부터 생성됩니다.

## 준비

```bash npm2yarn
npm install srt-parser-2
```

## 사용 방법

```typescript
import { SRTLoader } from "langchain/document_loaders/fs/srt";

const loader = new SRTLoader(
  "src/document_loaders/example_data/Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.srt"
);

const docs = await loader.load();
```
