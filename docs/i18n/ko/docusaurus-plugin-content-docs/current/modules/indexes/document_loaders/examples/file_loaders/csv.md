# CSV files

이 예시는 CSV file에서 data를 로드하는 방법에 대해 전반적으로 살펴봅니다. 두 번째 인자는 CSV file에서 추출하고 싶은 `column` 명입니다. CSV file 안에 각 행은 하나의 document로 만들어질 것입니다. 추출하고 싶은 `column`이 명시되지 않았을 때, 각 행은 각각의 document로 만들어지며, document의 `pageContent` 안에 한 쌍의 key/value로 변환되어 새로운 줄로 입력됩니다. 추출하고 싶은 `column`을 명시했을 때, 명시된 열은 document의 `pageContent`로 사용되며, 각 행은 각각의 document로 만들어집니다.

## 준비

```bash npm2yarn
npm install d3-dsv@2
```

## 사용 방법, 모든 열을 추출하기

CSV file 예시:

```csv
id,text
1,This is a sentence.
2,This is another sentence.
```

코드 예시:

```typescript
import { CSVLoader } from "langchain/document_loaders/fs/csv";

const loader = new CSVLoader("src/document_loaders/example_data/example.csv");

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "line": 1,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "id: 1
text: This is a sentence.",
  },
  Document {
    "metadata": {
      "line": 2,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "id: 2
text: This is another sentence.",
  },
]
*/
```

## 사용 방법, 열 하나만 추출하기

CSV file 예시:

```csv
id,text
1,This is a sentence.
2,This is another sentence.
```

코드 예시:

```typescript
import { CSVLoader } from "langchain/document_loaders/fs/csv";

const loader = new CSVLoader(
  "src/document_loaders/example_data/example.csv",
  "text"
);

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "line": 1,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is a sentence.",
  },
  Document {
    "metadata": {
      "line": 2,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is another sentence.",
  },
]
*/
```
