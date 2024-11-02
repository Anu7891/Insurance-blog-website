// next.config.js
const isGithubPages = process.env.GITHUB_ACTIONS || false;

module.exports = {
    basePath: isGithubPages ? '/insurance-blog-website' : '', // Add a leading slash
    assetPrefix: isGithubPages ? '/insurance-blog-website/' : '', // Add a leading and trailing slash
    images: {
        loader: 'default',
        path: '/',
    },
};
