---
hide_table_of_contents: true
---

# College Confidential

이 예시에서는 Cheerio를 사용하여 'College Confidential' 웹사이트로부터 데이터를 로드하는 방법에 대해 살펴봅니다. 각 페이지마다 하나의 document가 생성됩니다.

## 준비

```bash npm2yarn
npm install cheerio
```

## 사용 방법

```typescript
import { CollegeConfidentialLoader } from "langchain/document_loaders/web/college_confidential";

const loader = new CollegeConfidentialLoader(
  "https://www.collegeconfidential.com/colleges/brown-university/"
);

const docs = await loader.load();
```
