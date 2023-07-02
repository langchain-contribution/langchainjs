---
sidebar_position: 2
sidebar_label: Puppeteer
hide_table_of_contents: true
sidebar_class_name: node-only
---

# Webpages, with Puppeteer

:::호환성 팁
Node.js 환경에서만 동작합니다.
:::

이 예시 에서는 Puppeteer를 사용하여 웹페이지로부터 데이터를 로드하는 방법에 대해 설명합니다. 각 웹페이지마다 하나의 document가 생성됩니다.

Puppeteer는 headless Chrome 또는 Chromium을 제어하기 위한 상위 수준의 API를 제공하는 Node.js 라이브러리입니다. Puppeteer를 사용하면 렌더링에 JavaScript가 필요한 동적 웹 페이지에서 데이터를 추출하는 등 웹 페이지 상호 작용을 자동화할 수 있습니다.

더 가벼운 솔루션을 원하고 로드하려는 웹페이지에 렌더링하는 데 자바스크립트가 필요하지 않은 경우, [CheerioWebBaseLoader](./web_cheerio.md)를 대신 사용할 수 있습니다.

## 준비

```bash npm2yarn
npm install puppeteer
```

## 사용 방법

```typescript
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";

/**
 * Loader uses `page.evaluate(() => document.body.innerHTML)`
 * as default evaluate function
 **/
const loader = new PuppeteerWebBaseLoader("https://www.tabnews.com.br/");

const docs = await loader.load();
```

## 옵션

다음은 PuppeteerWebBaseLoaderOptions 인터페이스를 사용하여 생성자에 전달할 수 있는 파라미터에 대한 설명입니다.:

```typescript
type PuppeteerWebBaseLoaderOptions = {
  launchOptions?: PuppeteerLaunchOptions;
  gotoOptions?: PuppeteerGotoOptions;
  evaluate?: (page: Page, browser: Browser) => Promise<string>;
};
```

1. `launchOptions`: puppeteer.launch() 메서드에 전달할 추가 옵션을 지정하는 선택 객체입니다. 여기에는 브라우저를 헤드리스 모드로 실행하는 headless flag나 Puppeteer의 동작을 따라하기 쉽도록 느리게 하는 slowMo 옵션과 같은 옵션이 포함될 수 있습니다.

2. `gotoOptions`: page.goto() 메서드에 전달할 추가 옵션을 지정하는 선택 객체입니다. 여기에는 최대 탐색 시간(ms)을 지정하는 시간 초과 옵션이나 탐색이 성공한 것으로 간주할 시점을 지정하는 waitUntil 옵션과 같은 옵션이 포함될 수 있습니다.

3. `evaluate`: page.evaluate() 메서드를 사용하여 페이지에서 자바스크립트 코드를 평가하는 데 사용할 수 있는 선택 함수입니다. 페이지에서 데이터를 추출하거나 페이지 요소와 상호 작용하는 데 사용할 수 있습니다. 이 함수는 평가 결과가 포함된 문자열을 담은 promise를 반환해야 합니다.

이 옵션을 `PuppeteerWebBaseLoader` 생성자에 전달하면 로더의 동작을 맞춤 설정하고, Puppeteer의 강력한 기능을 사용하여 웹 페이지를 스크래핑하고 상호 작용할 수 있습니다.

다음은 이를 수행하는 기본 예시입니다.:

```typescript
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";

const loader = new PuppeteerWebBaseLoader("https://www.tabnews.com.br/", {
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
