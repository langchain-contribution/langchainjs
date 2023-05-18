# JSON files

Json loader는 JSON 파일의 원하는 키를 대상으로 지정하기 위해 [JSON pointer](https://github.com/janl/node-jsonpointer)를 사용합니다.

### JSON pointer 미사용 예제

JSON loader를 가장 간단하게 사용하는 방법은 JSON pointer를 사용하지 않는 것입니다.
JSON loader는 JSON 객체 안에 모든 문자열들을 찾아 로드합니다.

JSON file 예시:

```json
{
  "texts": ["This is a sentence.", "This is another sentence."]
}
```

코드 예시:

```typescript
import { JSONLoader } from "langchain/document_loaders/fs/json";

const loader = new JSONLoader("src/document_loaders/example_data/example.json");

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "blobType": "application/json",
      "line": 1,
      "source": "blob",
    },
    "pageContent": "This is a sentence.",
  },
  Document {
    "metadata": {
      "blobType": "application/json",
      "line": 2,
      "source": "blob",
    },
    "pageContent": "This is another sentence.",
  },
]
*/
```

### JSON pointer 사용법

JSON 객체에서 문자열을 추출하고 싶은 키를 지정하여 더 복잡한 작업을 수행할 수 있습니다.
이 예시에서는, "from"을 키로 가지는 정보와 "surname"을 키로 가지는 정보만 추출하는 예시입니다.

```json
{
  "1": {
    "body": "BD 2023 SUMMER",
    "from": "LinkedIn Job",
    "labels": ["IMPORTANT", "CATEGORY_UPDATES", "INBOX"]
  },
  "2": {
    "body": "Intern, Treasury and other roles are available",
    "from": "LinkedIn Job2",
    "labels": ["IMPORTANT"],
    "other": {
      "name": "plop",
      "surname": "bob"
    }
  }
}
```

코드 예시:

```typescript
import { JSONLoader } from "langchain/document_loaders/fs/json";

const loader = new JSONLoader(
  "src/document_loaders/example_data/example.json",
  ["/from", "/surname"]
);

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "blobType": "application/json",
      "line": 1,
      "source": "blob",
    },
    "pageContent": "BD 2023 SUMMER",
  },
  Document {
    "metadata": {
      "blobType": "application/json",
      "line": 2,
      "source": "blob",
    },
    "pageContent": "LinkedIn Job",
  },
  ...
]
```
