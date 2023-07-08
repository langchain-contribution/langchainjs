---
hide_table_of_contents: true
---

# IMSDB

이 예시에서는 Cheerio를 사용하여 'internet movie script database' 웹사이트에서 데이터를 로드하는 방법에 대해 살펴봅니다. 각 페이지마다 하나의 document가 생성됩니다.

## 준비

```bash npm2yarn
npm install cheerio
```

## 사용 방법

```typescript
import { IMSDBLoader } from "langchain/document_loaders/web/imsdb";

const loader = new IMSDBLoader("https://imsdb.com/scripts/BlacKkKlansman.html");

const docs = await loader.load();
```
