---
hide_table_of_contents: true
---

# Text files

이 예시는 text 파일로부터 data를 가져오는 방법에 대해 살펴봅니다.

```typescript
import { TextLoader } from "langchain/document_loaders/fs/text";

const loader = new TextLoader("src/document_loaders/example_data/example.txt");

const docs = await loader.load();
```
