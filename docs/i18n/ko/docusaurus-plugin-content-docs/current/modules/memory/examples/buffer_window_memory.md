# Buffer Window Memory

BufferWindowMemory는 대화의 앞뒤를 추적한 다음 `k` 크기의 window를 사용하여 memory로 사용할 마지막 `k`의 앞뒤를 표시합니다.

```typescript
import { OpenAI } from "langchain/llms/openai";
import { BufferWindowMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({});
const memory = new BufferWindowMemory({ k: 1 });
const chain = new ConversationChain({ llm: model, memory: memory });
const res1 = await chain.call({ input: "Hi! I'm Jim." });
console.log({ res1 });
```

```shell
{response: " Hi Jim! It's nice to meet you. My name is AI. What would you like to talk about?"}
```

```typescript
const res2 = await chain.call({ input: "What's my name?" });
console.log({ res2 });
```

```shell
{response: ' You said your name is Jim. Is there anything else you would like to talk about?'}
```
