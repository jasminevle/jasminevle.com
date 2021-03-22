module.exports = {
    siteMetadata: {
        title: `eggsite`,
        description: `:sparkle: built from my own blood, sweat, and tears :sparkle:`,
        author: `@jasminevle`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `eggsite`,
                short_name: `eggsite`,
                start_url: `/`,
                background_color: `#80bfff`,
                theme_color: `#80bfff`,
                display: `minimal-ui`,
                icon: `src/images/jasmine-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
