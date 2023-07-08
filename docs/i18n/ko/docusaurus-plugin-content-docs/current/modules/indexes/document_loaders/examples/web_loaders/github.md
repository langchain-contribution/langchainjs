---
hide_table_of_contents: true
---

# GitHub

This example goes over how to load data from a GitHub repository.
You can set the `GITHUB_ACCESS_TOKEN` environment variable to a GitHub access token to increase the rate limit and access private repositories.
이 예시에서는 GitHub 레포지토리에서 데이터를 로드하는 방법에 대해 살펴봅니다.
`GITHUB_ACCESS_TOKEN` 환경 변수에 GitHub 액세스 토큰을 설정하여 속도 제한을 높이고 비공개 리포지토리에 액세스할 수 있습니다.

```typescript
import { GithubRepoLoader } from "langchain/document_loaders/web/github";

const loader = new GithubRepoLoader(
  "https://github.com/hwchase17/langchainjs",
  { branch: "main", recursive: false, unknown: "warn" }
);
const docs = await loader.load();
```
