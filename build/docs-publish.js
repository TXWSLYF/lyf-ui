const path = require("path");
const ghpages = require("gh-pages");

ghpages.publish(path.resolve(__dirname, "../docs/.vuepress/dist"), function(
  err
) {
  if (err) throw err;
  console.log("文档部署成功！");
});
