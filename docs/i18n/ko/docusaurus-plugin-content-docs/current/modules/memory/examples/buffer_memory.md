# Buffer Memory

BufferMemory는 가장 단순한 타입의 memory로, 이전 대화 내용을 바로 기억합니다.

```typescript
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({});
const memory = new BufferMemory();
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

또한 `ChatHistory` 객체를 생성하고 전달하여 `BufferMemory` 객체에 메시지를 로드할 수도 있습니다.
메시지를 로드하면서 과거 대화에서 메시지를 쉽게 가져올 수 있습니다:

```typescript
import { ChatMessageHistory } from "langchain/memory";
import { HumanChatMessage, AIChatMessage } from "langchain/schema";

const pastMessages = [
  new HumanChatMessage("My name's Jonas"),
  new AIChatMessage("Nice to meet you, Jonas!"),
];

const memory = new BufferMemory({
  chatHistory: new ChatMessageHistory(pastMessages),
});
```
