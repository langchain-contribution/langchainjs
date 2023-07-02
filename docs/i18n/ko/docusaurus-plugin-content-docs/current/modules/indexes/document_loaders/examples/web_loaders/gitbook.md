---
hide_table_of_contents: true
---

# GitBook

이 예시에서는 Cheerio를 사용하여 모든 GitBook에서 데이터를 로드하는 방법에 대해 살펴봅니다. 각 페이지마다 하나의 document가 생성됩니다.

## 준비

```bash npm2yarn
npm install cheerio
```

## GitBook 한 페이지 로드

```typescript
import { GitbookLoader } from "langchain/document_loaders/web/gitbook";

const loader = new GitbookLoader(
  "https://docs.gitbook.com/product-tour/navigation"
);

const docs = await loader.load();
```

## 주어진 Gitbook의 모든 페이지 로드

이 작업을 위해, GitbookLoader가 root 경로에 선언되어야 하며 `shouldLoadAllPaths`를 `true`로 설정해야 합니다.

```typescript
import { GitbookLoader } from "langchain/document_loaders/web/gitbook";

const loader = new GitbookLoader("https://docs.gitbook.com", {
  shouldLoadAllPaths: true,
});

const docs = await loader.load();
```
