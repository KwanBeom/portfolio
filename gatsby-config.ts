import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `web-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: 'src/components',
          images: 'src/images',
          hooks: 'src/hooks',
        },
        extensions: ['.mjs', '.js', '.jsx', '.wasm', '.json', '.ts', '.tsx'],
      },
    },
  ],
};

export default config;
