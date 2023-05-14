---
sidebar_class_name: node-only
---

# OpenSearch

:::tip Compatibility
Node.js에서만 사용합니다.
:::

[OpenSearch](https://opensearch.org/)는 [Elasticsearch](https://www.elastic.co/elasticsearch/)의 자식(fork) 오픈소스로, Elasticsearch API와 완벽하게 호환됩니다. 이를 이용하여 가장 가까운 근사 검색에 대한 자세한 내용은 [여기](https://opensearch.org/docs/latest/search-plugins/knn/approximate-knn/)를 참고하세요.

Langchain.js는 OpenSearch vectorstore를 사용하기 위한 클라이언트로 [@opensearch-project/opensearch](https://opensearch.org/docs/latest/clients/javascript/index/)를 허용합니다.

## 설치

```bash npm2yarn
npm install -S @opensearch-project/opensearch
```

OpenSearch 인스턴스가 실행중인 상태여야 합니다. [공식 Docker 이미지](https://opensearch.org/docs/latest/opensearch/install/docker/)를 사용하여 시작할 수 있습니다. [여기](https://github.com/hwchase17/langchainjs/blob/main/examples/src/indexes/vector_stores/opensearch/docker-compose.yml)를 참고하세요.

## Index docs

```typescript
import { Client } from "@opensearch-project/opensearch";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenSearchVectorStore } from "langchain/vectorstores/opensearch";

const client = new Client({
  nodes: [process.env.OPENSEARCH_URL ?? "http://127.0.0.1:9200"],
});

const docs = [
  new Document({
    metadata: { foo: "bar" },
    pageContent: "opensearch is also a vector db",
  }),
  new Document({
    metadata: { foo: "bar" },
    pageContent: "the quick brown fox jumped over the lazy dog",
  }),
  new Document({
    metadata: { baz: "qux" },
    pageContent: "lorem ipsum dolor sit amet",
  }),
  new Document({
    metadata: { baz: "qux" },
    pageContent:
      "OpenSearch is a scalable, flexible, and extensible open-source software suite for search, analytics, and observability applications",
  }),
];

await OpenSearchVectorStore.fromDocuments(docs, new OpenAIEmbeddings(), {
  client,
  indexName: process.env.OPENSEARCH_INDEX, //기본 값은 `documents`입니다.
});
```

## Query docs

```typescript
import { Client } from "@opensearch-project/opensearch";
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { OpenSearchVectorStore } from "langchain/vectorstores/opensearch";

const client = new Client({
  nodes: [process.env.OPENSEARCH_URL ?? "http://127.0.0.1:9200"],
});

const vectorStore = new OpenSearchVectorStore(new OpenAIEmbeddings(), {
  client,
});

/* meta filters로 vector DB를 독립적으로 검색 */
const results = await vectorStore.similaritySearch("hello world", 1);
console.log(JSON.stringify(results, null, 2));
/* [
    {
      "pageContent": "Hello world",
      "metadata": {
        "id": 2
      }
    }
  ] */

/* chain의 일부로 사용 (현재 metadata filters 없음) */
const model = new OpenAI();
const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
  k: 1,
  returnSourceDocuments: true,
});
const response = await chain.call({ query: "What is opensearch?" });

console.log(JSON.stringify(response, null, 2));
/* 
  {
    "text": " Opensearch is a collection of technologies that allow search engines to publish search results in a standard format, making it easier for users to search across multiple sites.",
    "sourceDocuments": [
      {
        "pageContent": "What's this?",
        "metadata": {
          "id": 3
        }
      }
    ]
  } 
  */
```
