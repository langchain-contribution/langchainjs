/* eslint-disable global-require,import/no-extraneous-dependencies */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// eslint-disable-next-line import/no-extraneous-dependencies
const { ProvidePlugin } = require("webpack");
const path = require("path");

const examplesPath = path.resolve(__dirname, "..", "examples", "src");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "🦜️🔗 Langchain",
    tagline: "LangChain JS Docs",
    favicon: "img/favicon.ico",
    customFields: {
        mendableAnonKey: process.env.MENDABLE_ANON_KEY,
    },
    // Set the production url of your site here
    url: "https://js.langchain.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",

    i18n: {
        defaultLocale: "en",
        locales: ['en', 'ko'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
            },
            ko: {
                label: '한국어',
                direction: 'ltr',
                htmlLang: 'ko-KR',
            },
        },
    },

    plugins: [
        [
            "docusaurus-plugin-typedoc",
            {
                tsconfig: "../langchain/tsconfig.json",
            },
        ],
        () => ({
            name: "custom-webpack-config",
            configureWebpack: () => ({
                plugins: [
                    new ProvidePlugin({
                        process: require.resolve("process/browser"),
                    }),
                ],
                resolve: {
                    fallback: {
                        path: false,
                        url: false,
                    },
                    alias: {
                        "@examples": examplesPath,
                    },
                },
                module: {
                    rules: [{
                            test: examplesPath,
                            use: ["json-loader", "./code-block-loader.js"],
                        },
                        {
                            test: /\.m?js/,
                            resolve: {
                                fullySpecified: false,
                            },
                        },
                    ],
                },
            }),
        }),
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/hwchase17/langchainjs/edit/main/docs/",
                    remarkPlugins: [
                        [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
                    ],
                    async sidebarItemsGenerator({
                        defaultSidebarItemsGenerator,
                        ...args
                    }) {
                        const sidebarItems = await defaultSidebarItemsGenerator(args);
                        sidebarItems.forEach((subItem) => {
                            // This allows breaking long sidebar labels into multiple lines
                            // by inserting a zero-width space after each slash.
                            if (
                                "label" in subItem &&
                                subItem.label &&
                                subItem.label.includes("/")
                            ) {
                                // eslint-disable-next-line no-param-reassign
                                subItem.label = subItem.label.replace(/\//g, "/\u200B");
                            }
                        });
                        return sidebarItems;
                    },
                },
                pages: {
                    remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        prism: {
            theme: require("prism-react-renderer/themes/vsLight"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
        },
        image: "img/parrot-chainlink-icon.png",
        navbar: {
            title: "🦜️🔗 LangChain",
            items: [{
                    href: "https://docs.langchain.com/docs/",
                    label: "Concepts",
                    position: "left",
                },
                {
                    href: "https://python.langchain.com/en/latest/",
                    label: "Python Docs",
                    position: "left",
                },
                {
                    to: "/docs/",
                    label: "JS/TS Docs",
                    position: "left",
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                // Please keep GitHub link to the right for consistency.
                {
                    href: "https://github.com/hwchase17/langchainjs",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "light",
            links: [{
                    title: "Community",
                    items: [{
                            label: "Discord",
                            href: "https://discord.gg/cU2adEyC7w",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/LangChainAI",
                        },
                    ],
                },
                {
                    title: "GitHub",
                    items: [{
                            label: "Python",
                            href: "https://github.com/hwchase17/langchain",
                        },
                        {
                            label: "JS/TS",
                            href: "https://github.com/hwchase17/langchainjs",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [{
                            label: "Homepage",
                            href: "https://langchain.com",
                        },
                        {
                            label: "Blog",
                            href: "https://blog.langchain.dev",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} LangChain, Inc.`,
        },
    }),
};

module.exports = config;