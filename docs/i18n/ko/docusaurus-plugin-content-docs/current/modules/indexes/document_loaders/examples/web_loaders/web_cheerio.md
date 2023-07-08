---
sidebar_position: 1
sidebar_label: Cheerio
hide_table_of_contents: true
---

# Webpages, with Cheerio

이 예시에서는 Cheerio를 사용하여 웹페이지에서 데이터를 로드하는 방법에 대해 살펴봅니다. 각 웹페이지마다 하나의 document가 생성됩니다.

Cheerio는 빠르고 가벼운 라이브러리로, jQuery와 유사한 구문을 사용하여 HTML 문서를 분석하고 탐색할 수 있습니다. 또한, 브라우저에서 렌더링할 필요 없이 Cheerio를 사용하여 웹 페이지에서 데이터를 추출할 수 있습니다.

그러나, Cheerio는 웹 브라우저를 시뮬레이션하지 않아 페이지에서 자바스크립트 코드를 실행할 수 없습니다. 즉, 렌더링에 JavaScript가 필요한 동적 웹 페이지에서 데이터를 추출할 수 없습니다. 대신 [PlaywrightWebBaseLoader](./web_playwright.md) 또는 [PuppeteerWebBaseLoader](./web_puppeteer.md)를 사용할 수 있습니다.

## 준비

```bash npm2yarn
npm install cheerio
```

## 사용 방법

```typescript
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

const loader = new CheerioWebBaseLoader(
  "https://news.ycombinator.com/item?id=34817881"
);

const docs = await loader.load();
```

## 사용자 지정 selector 사용 방법

```typescript
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

const loader = new CheerioWebBaseLoader(
  "https://news.ycombinator.com/item?id=34817881",
  {
    selector: "p.athing",
  }
);

const docs = await loader.load();
```
