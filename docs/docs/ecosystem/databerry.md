# Databerry

이 페이지는 LangChain 안에서 [DataBerry](https://databerry.ai) 를 어떻게 사용하는지를 다룹니다.

## What is Databerry?

DataBerry 는 [오픈소스](https://github.com/gmpetrov/databerry) 문서 검색 플랫픔으로 LLM 에 개인적인 데이터를 쉽게 연결할 수 있도록 도와줍니다.

![Databerry](/img/DataberryDashboard.png)

## Quick start

DataBerry 에 저장된 문서를 랭체인으로 찾는것은 매우 쉽습니다!

```typescript
import { DataberryRetriever } from "langchain/retrievers/databerry";

const retriever = new DataberryRetriever({
  datastoreUrl: "https://api.databerry.ai/query/clg1xg2h80000l708dymr0fxc",
  apiKey: "DATABERRY_API_KEY", // optional: needed for private datastores
  topK: 8, // optional: default value is 3
});

// Create a chain that uses the OpenAI LLM and Databerry retriever.
const chain = RetrievalQAChain.fromLLM(model, retriever);

// Call the chain with a query.
const res = await chain.call({
  query: "What's Databerry?",
});

console.log({ res });
/*
{
  res: {
    text: 'Databerry provides a user-friendly solution to quickly setup a semantic search system over your personal data without any technical knowledge.'
  }
}
*/
```
