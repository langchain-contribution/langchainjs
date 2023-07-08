---
sidebar_position: 3
hide_table_of_contents: true
sidebar_class_name: node-only
sidebar_label: Playwright
---

# Webpages, with Playwright

:::호환성 팁
Node.js 환경에서만 동작합니다.
:::

이 예시는 Playwright를 사용하여 웹페이지로부터 데이터를 로드하는 방법에 대해 살펴봅니다. 각 웹페이지마다 하나의 document가 생성됩니다.

Playwright는 Chromium, firefox, webkit 등 여러 브라우저 엔진을 제어하기 위한 고수준 API를 제공하는 Node.js 라이브러리입니다. Playwright를 사용하면 렌더링에 JavaScript가 필요한 동적 웹 페이지에서 데이터를 추출하는 등 웹 페이지 상호 작용을 자동화할 수 있습니다.

더 가벼운 솔루션을 원하고 로드하려는 웹페이지에 렌더링하는 데 자바스크립트가 필요하지 않은 경우, [CheerioWebBaseLoader](./web_cheerio.md)를 대신 사용할 수 있습니다.

## 준비

```bash npm2yarn
npm install playwright
```

## 사용 방법

```typescript
import { PlaywrightWebBaseLoader } from "langchain/document_loaders/web/playwright";

/**
 * Loader uses `page.content()`
 * as default evaluate function
 **/
const loader = new PlaywrightWebBaseLoader("https://www.tabnews.com.br/");

const docs = await loader.load();
```

## 옵션

다음은 PlaywrightWebBaseLoaderOptions 인터페이스를 사용하여 PlaywrightWebBaseLoader 생성자에 전달할 수 있는 파라미터에 대한 설명입니다.:

```typescript
type PlaywrightWebBaseLoaderOptions = {
  launchOptions?: LaunchOptions;
  gotoOptions?: PlaywrightGotoOptions;
  evaluate?: PlaywrightEvaluate;
};
```

1. `launchOptions`: playwright.chromium.launch() 메서드에 전달할 추가 옵션을 지정하는 선택 객체입니다. 여기에는 헤드리스 모드에서 브라우저를 실행하는 헤드리스 플래그와 같은 옵션이 포함될 수 있습니다.

2. `gotoOptions`: page.goto() 메서드에 전달할 추가 옵션을 지정하는 선택 객체입니다. 여기에는 최대 탐색 시간(ms)을 지정하는 시간 초과 옵션이나 탐색이 성공한 것으로 간주할 시점을 지정하는 waitUntil 옵션과 같은 옵션이 포함될 수 있습니다.

3. `evaluate`: 사용자 정의 평가 함수를 사용하여 페이지에서 자바스크립트 코드를 평가하는 데 사용할 수 있는 선택적 함수입니다. 페이지에서 데이터를 추출하거나 페이지 요소와 상호 작용하는 데 사용할 수 있습니다. 이 함수는 평가 결과가 포함된 문자열을 담은 promise를 반환해야 합니다.

위 옵션을 `PlaywrightWebBaseLoader` 생성자에 전달하면 로더의 동작을 맞춤 설정하고, Playwright의 강력한 기능을 사용하여 웹 페이지를 스크래핑하고 상호 작용할 수 있습니다.

다음은 이를 수행하는 기본 예시입니다.:

```typescript
import { PlaywrightWebBaseLoader } from "langchain/document_loaders/web/playwright";

const loader = new PlaywrightWebBaseLoader("https://www.tabnews.com.br/", {
  launchOptions: {
    headless: true,
  },
  gotoOptions: {
    waitUntil: "domcontentloaded",
  },
  /** Pass custom evaluate, in this case you get page and browser instances */
  async evaluate(page: Page, browser: Browser) {
    await page.waitForResponse("https://www.tabnews.com.br/va/view");

    const result = await page.evaluate(() => document.body.innerHTML);
    return result;
  },
});

const docs = await loader.load();
```
