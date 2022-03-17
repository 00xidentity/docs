// theme.config.js
export default {
  projectLink: "https://github.com/00xidentity/docs", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/00xidentity/docs/blob/master", // base URL for the docs repository
  titleSuffix: " – Nextra",
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Roy Osherove.`,
  footerEditLink: `Edit this page`,
  logo: (
    <>
      <svg>...</svg>
      <span>0xIdentity</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
