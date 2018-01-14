const path = require(`path`);
const _ = require("lodash");
const rootPath = path.resolve(`./`);
const srcPath = path.resolve(`./src`);
const templatePath = `${srcPath}/templates`;
const homeImages = require(`${rootPath}/data/home.json`);

exports.onCreatePage = ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  return new Promise(resolve => {

    const path = page.path.split("/").filter(v => (v.length !== 0));
    const isPathHome = path.length === 0;

    if (isPathHome) {

      createPage({
        path: `/`,
        component: `${templatePath}/home/home.js`,
        context: homeImages
      });

    }
    resolve();
  });
};