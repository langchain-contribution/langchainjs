---
hide_table_of_contents: true
---

# Hacker News

이 예시에서는 Cheerio를 사용하여 'hacker news' 웹사이트에서 데이터를 로드하는 방법에 대해 살펴봅니다. 각 페이지마다 하나의 document가 생성됩니다.

## 준비

```bash npm2yarn
npm install cheerio
```

## 사용 방법

```typescript
import { HNLoader } from "langchain/document_loaders/web/hn";

const loader = new HNLoader("https://news.ycombinator.com/item?id=34817881");

const docs = await loader.load();
```
