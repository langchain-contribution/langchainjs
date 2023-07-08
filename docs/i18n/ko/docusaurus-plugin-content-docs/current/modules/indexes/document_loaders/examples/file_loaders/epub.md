---
hide_table_of_contents: true
---

# EPUB files

이 에시는 EPUB file로부터 데이터를 로드하는 방법에 대해 전반적으로 살펴봅니다. EPUB 파일의 각 챕터는 document로 만들어집니다. 각 챕터로 document가 생성되길 원하지 않는다면, `splitChapters` option을 false로 설정하여 파일 전체를 하나의 document로 만들 수 있습니다.

# 준비

```bash npm2yarn
npm install epub2 html-to-text
```

# 사용법, 챕터 당 document 하나

```typescript
import { EPubLoader } from "langchain/document_loaders/fs/epub";

const loader = new EPubLoader("src/document_loaders/example_data/example.epub");

const docs = await loader.load();
```

# 사용법, 파일 당 document 하나

```typescript
import { EPubLoader } from "langchain/document_loaders/fs/epub";

const loader = new EPubLoader(
  "src/document_loaders/example_data/example.epub",
  {
    splitChapters: false,
  }
);

const docs = await loader.load();
```
