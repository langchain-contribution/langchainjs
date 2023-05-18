---
hide_table_of_contents: true
---

# JSONLines files

이 예시는 JSONLines 또는 JSON file들로부터 데이터를 로드하는 방법에 대해 전반적으로 살펴봅니다. 두 번째 인자는 파일의 각 JSON 객체로부터 추출할 프로퍼티에 대한 JSONPointer입니다. 파일의 JSON 객체는 각각 하나의 document가 됩니다.

JSONLines file 예시:

```json
{"html": "This is a sentence."}
{"html": "This is another sentence."}
```

코드 예시:

```typescript
import { JSONLinesLoader } from "langchain/document_loaders/fs/json";

const loader = new JSONLinesLoader(
  "src/document_loaders/example_data/example.jsonl",
  "/html"
);

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "blobType": "application/jsonl+json",
      "line": 1,
      "source": "blob",
    },
    "pageContent": "This is a sentence.",
  },
  Document {
    "metadata": {
      "blobType": "application/jsonl+json",
      "line": 2,
      "source": "blob",
    },
    "pageContent": "This is another sentence.",
  },
]
*/
```
