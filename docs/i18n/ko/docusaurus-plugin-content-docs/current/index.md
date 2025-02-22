# LangChain 한국어 문서

LangChain은 언어 모델을 기반으로 하는 애플리케이션을 개발하기 위한 프레임워크입니다. 우리가 생각하는 가장 강력하고 차별화된 애플리케이션은 단순히 API를 통해 언어 모델을 호출하는 것뿐만 아니라 아래과 같은 특징도 함께 가지고 있어야 합니다.

- _데이터 인식(Data-aware) 할 것_: 언어 모델을 다른 데이터 소스와 연결할 수 있어야 합니다.
- _상호작용이 가능할 것_: 언어 모델이 환경과 상호작용할 수 있어야 합니다.

LangChain 프레임워크는 위의 원칙들을 염두에 두고 설계되었습니다.

## 시작하기

LangChain을 사용하여 언어 모델 애플리케이션을 만드는 방법을 안내하는 아래 가이드를 확인하세요.

- [빠른 시작, 대규모 언어 모델(LLM) 사용](./getting-started/guide-llm.mdx)
- [빠른 시작, 대화 모델 사용](./getting-started/guide-chat.mdx)

## 컴포넌트

LangChain은 여러 가지 주요 모듈을 지원하며, 각 모듈의 사용법과 개념에 익숙해지는 것을 돕는 예제도 함께 제공하고 있습니다. 각 예시를 클릭하면 해당 모듈의 API 문서로 이동합니다.

아래로 갈수록 점점 복잡해지는 순서로 나열되어 있습니다.

- [스키마(Schema)](./modules/schema/): 라이브러리 전체에서 사용되는 인터페이스와 기본 클래스를 포함하고 있습니다.

- [모델(Models)](./modules/models/): 다양한 LLM, 대화 모델, 임베딩 모델과의 통합을 포함하고 있습니다.

- [프롬프트(Prompts)](./modules/prompts/): 프롬프트 템플릿 및 결괏값 파서(Output Parsers), 예시 선택기(Example Selectors)와 같은 프롬프트를 작업 기능을 포함하고 있습니다.

- [인덱스(Indexes)](./modules/indexes/): 자체 데이터 작업 및 언어 모델과 상호작용할 수 있도록 준비하는 패턴과 기능을 포함하고 있습니다 (예: 문서 로더(document loaders), 벡터 저장소(vectorstores), 텍스트 분할기(text splitters) 및 리트리버(retrievers)).

- [메모리(Memory)](./modules/memory/): 메모리는 체인/에이전트의 호출 사이에 상태를 유지하는 개념입니다. LangChain은 메모리에 대한 표준 인터페이스, 메모리 구현 방식 모음 및 메모리를 사용하는 체인/에이전트 예제를 제공합니다. 

- [체인(Chains)](./modules/chains/): 체인은 단일 LLM 호출을 넘어서, 다른 유틸리티로의 호출까지 엮어놓은 것입니다. LangChain은 체인에 대한 표준 인터페이스, 다른 도구들과의 통합, 그리고 일반적인 애플리케이션에 대한 체인을 제공합니다.

- [에이전트(Agents)](./modules/agents/): 에이전트는 LLM이 할 행동을 결정하고, 그 행동을 수행하고, 행동의 결과를 관찰하고, 그리고 그것을 완료될 때까지 반복합니다. LangChain은 에이전트에 대한 표준 인터페이스, 선택할 수 있는 에이전트 모음 및 end-to-end 에이전트 예제를 제공합니다.

## API 참조

[여기](./api/)에서는 LangChain의 모든 모듈에 대한 API 참조와 모든 클래스 및 함수에 대한 전체 문서를 찾을 수 있습니다. 

## 프로덕션

프로토타입에서 프로덕션으로 이동하는 과정을 지원하기 위한 리소스를 개발하고 있습니다. 이러한 리소스에는 다음이 포함됩니다.

- [배포](./production/deployment): 애플리케이션을 프로덕션에 배포하는 방법에 대한 리소스를 제공합니다.
- [이벤트/콜백(Callbacks)](./production/callbacks): LangChain 모듈에 의해 발생하는 이벤트에 대한 리소스를 제공합니다.
- [추적](./production/tracing): 애플리케이션을 로깅하고 디버깅하는 방법에 대한 추적 사용 리소스를 제공합니다.

## 추가 자료

애플리케이션 개발에 도움이 될 것으로 생각하는 추가 자료 모음입니다!

- [LangChainHub](https://github.com/hwchase17/langchain-hub): LangChainHub는 프롬프트, 체인, 에이전트를 공유하고 탐색할 수 있는 공간입니다.

- [Discord](https://discord.gg/6adMQxSpJS): 디스코드에서 LangChain에 대한 모든 것을 같이 얘기해봐요!

- [프로덕션 지원](https://forms.gle/57d8AmXBYp8PP8tZA): 랭체인을 프로덕션에 활용하는 경우, 더욱 많은 종합적인 지원을 제공하고 있습니다. 이 양식을 제출해주시면, 슬랙에 전용 지원 채널을 만들겠습니다.
