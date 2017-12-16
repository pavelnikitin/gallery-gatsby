/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage, deletePage } = boundActionCreators;
  
    return new Promise((resolve, reject) => {
      // Remove trailing slash
      const newPage = Object.assign({}, page, {
        path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
      });
  
      if (newPage.path !== page.path) {
        // Remove the old page
        deletePage(page);
        // Add the new page
        createPage(newPage);
      }
  
      resolve();
    });
  };