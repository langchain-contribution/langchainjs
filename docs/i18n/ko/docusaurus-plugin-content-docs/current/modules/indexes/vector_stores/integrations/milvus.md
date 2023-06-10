---
sidebar_class_name: node-only
---

# Milvus

[Milvus](https://milvus.io/)는 임베딩 유사도 검색 및 AI 애플리케이션을 위해 구축된 벡터 데이터베이스입니다.

:::tip Compatibility
Node.js에서만 사용 가능합니다.
:::

## Setup

1. 로컬 컴퓨터에서 Milvus instance를 Docker로 실행 [docs](https://milvus.io/docs/v2.1.x/install_standalone-docker.md)
2. Milvus Node.js SDK를 설치

```bash npm2yarn
npm install -S @zilliz/milvus2-sdk-node
```

3. 코드 실행 전, Milvus 환경 변수 설정

```bash
export OPENAI_API_KEY=YOUR_OPEN_API_HERE
export MILVUS_URL=YOUR_MILVUS_URL_HERE # for example http://localhost:19530
```

## Index, query docs

```typescript
import { Milvus } from "langchain/vectorstores/milvus";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

// text sample from Godel, Escher, Bach
const vectorStore = await Milvus.fromTexts(
  [
    "Tortoise: Labyrinth? Labyrinth? Could it Are we in the notorious Little\
            Harmonic Labyrinth of the dreaded Majotaur?",
    "Achilles: Yiikes! What is that?",
    "Tortoise: They say-although I person never believed it myself-that an I\
            Majotaur has created a tiny labyrinth sits in a pit in the middle of\
            it, waiting innocent victims to get lost in its fears complexity.\
            Then, when they wander and dazed into the center, he laughs and\
            laughs at them-so hard, that he laughs them to death!",
    "Achilles: Oh, no!",
    "Tortoise: But it's only a myth. Courage, Achilles.",
  ],
  [{ id: 2 }, { id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }],
  new OpenAIEmbeddings(),
  {
    collectionName: "goldel_escher_bach",
  }
);

// 또는 문서에서 가져오는 방법
const vectorStore = await Milvus.fromDocuments(docs, new OpenAIEmbeddings(), {
  collectionName: "goldel_escher_bach",
});

const response = await vectorStore.similaritySearch("scared", 2);
```

## 기존에 존재하는 Collection에서 문서 쿼리하기

```typescript
import { Milvus } from "langchain/vectorstores/milvus";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const vectorStore = await Milvus.fromExistingCollection(
  new OpenAIEmbeddings(),
  {
    collectionName: "goldel_escher_bach",
  }
);

const response = await vectorStore.similaritySearch("scared", 2);
```
