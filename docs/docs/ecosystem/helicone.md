# Helicone

이 페이지는 [Helicone](https://helicone.ai) 을 랭체인 안에서 사용하는 법을 다룹니다.

## What is Helicone?

Helicone 은 오픈소스 관측(observability) 플랫폼 입니다. 사용자의 OpenAI 트래픽을 프록시 할수 있도록 하고, 사용량과 지연(Latency)에 관한 인싸이트를 제공합니다.

![Helicone](/img/HeliconeDashboard.png)

## Quick start

LangChain 환경에서는 아래와 같이 Parameter 를 추가하는 것만으로 사용할 수 있습니다.

```typescript
const model = new OpenAI(
  {},
  {
    basePath: "https://oai.hconeai.com/v1",
  }
);
const res = await model.call("What is a helicone?");
```

이제 [helicon.ai](https://helicone.ai/onboarding?step=2) 주소로 이동해 계정을 만들고, OpenAI API 키를 추가하면 위에서 언급한것과 같이 OpenAI 트래픽에 관한 로그를 확인할 수 있습니다. 

![Helicone](/img/HeliconeKeys.png)

## How to enable Helicone caching

```typescript
const model = new OpenAI(
  {},
  {
    basePath: "https://oai.hconeai.com/v1",
    baseOptions: {
      headers: {
        "Helicone-Cache-Enabled": "true",
      },
    },
  }
);
const res = await model.call("What is a helicone?");
```

[Helicone caching docs](https://docs.helicone.ai/advanced-usage/caching)

## How to use Helicone custom properties

```typescript
const model = new OpenAI(
  {},
  {
    basePath: "https://oai.hconeai.com/v1",
    baseOptions: {
      headers: {
        "Helicone-Property-Session": "24",
        "Helicone-Property-Conversation": "support_issue_2",
        "Helicone-Property-App": "mobile",
      },
    },
  }
);
const res = await model.call("What is a helicone?");
```

[Helicone property docs](https://docs.helicone.ai/advanced-usage/custom-properties)
