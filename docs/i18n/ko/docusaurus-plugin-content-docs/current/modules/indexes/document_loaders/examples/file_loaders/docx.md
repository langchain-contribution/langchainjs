---
hide_table_of_contents: true
---

# Docx files

이 에제는 docx file로부터 data를 로드하는 방법에 대해 전반적으로 살펴봅니다.

# 준비

```bash npm2yarn
npm install mammoth
```

# 사용 방법

```typescript
import { DocxLoader } from "langchain/document_loaders/fs/docx";

const loader = new DocxLoader(
  "src/document_loaders/tests/example_data/attention.docx"
);

const docs = await loader.load();
```
