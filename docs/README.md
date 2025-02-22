# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn run build && yarn run serve
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To ensure proper organization, commit your translations under the `/i18n/{language}/docusaurus-plugin-content-docs/current` directory, matching the original English markdown docs path in the `/docs` folder.

For example, if you want to translate a markdown document located at `/docs/api/agents_load.md`, you should commit the translated file to the `i18n/ko/docusaurus-plugin-content-docs/current/api/agents_load.md` path.

See more info on the [official](https://knowledge.optimisemedia.com/docs/tutorial-extras/translate-your-site/) documentation of [i18n plugin](https://docusaurus.io/docs/i18n/tutorial).

### Build

```
$ yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```
