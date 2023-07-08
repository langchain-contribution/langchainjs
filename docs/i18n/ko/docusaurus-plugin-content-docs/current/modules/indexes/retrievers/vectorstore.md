---
hide_table_of_contents: true
---

# Vector Store

[Vector Store](../vector_stores/)를 생성한 후 Retriever로 사용하는 방법은 매우 간단합니다.:

```typescript
vectorStore = ...
retriever = vectorStore.asRetriever()
```
