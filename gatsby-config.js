module.exports = {
  siteMetadata: {
    title: `Megan Phan`,
    description: `Megan Phan, a Vietnamese girl, who is pursuing her B.S. in Computer Science at Texas Christian University. Her core values as a CS major are learning, creating, and contributing.
    She enjoys building high quality responsive websites and thrives to become a web developer.`,
    author: `@meganphan`,
    siteUrl: `https://ourmegan.com`,
    keywords: `megan, phan, hoang, tcu, texas, computer, science, website, web, development, software, engineer, frontend, personal`,
  },    
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases:{sh: "bash", js:"javascript"},
            showLineNumbers: true,
          }
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GatsbyJS',
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_new.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141793430-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
