// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

// Used to debug production build issues faster
const isDev = !!process.env.DEVELOP;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gene',
  tagline: "A Simple Rule Format to Match your Logs",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gene.rawsec.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rawsec', // Usually your GitHub org/user name.
  projectName: 'gene', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //includeCurrentVersion: isDev,
          includeCurrentVersion: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/0xrawsec/gene-doc-v2/tree/main/',
          versions: {
            current: {
              label: `Unreleased`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/0xrawsec/gene-doc-v2/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Gene',
        logo: {
          alt: 'Gene',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // blog is disabled
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            //dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            //dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/sponsors/0xrawsec',
            position: 'right',
            className: 'button button--secondary',
            html: "❤️ Sponsor"
          },
          {
            href: 'https://github.com/0xrawsec/gene',
            position: 'right',
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/quickstart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              /*{
                label: 'Discord',
                href: 'https://discord.gg/AUMaBvHvNU',
              },*/
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xrawsec',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // blog is disabled
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/0xrawsec/gene',
              },
              {
                href: 'https://github.com/sponsors/0xrawsec',
                label: 'Sponsor',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RawSec, sàrl Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      }
    }),
};

module.exports = config;
