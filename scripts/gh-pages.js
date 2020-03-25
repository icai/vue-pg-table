var ghpages = require("gh-pages");
ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    dotfiles: true,
    repo: "https://github.com/icai/vue-pg-table.git"
  },
  err => {
    if (err) {
      console.log(err);
    }
  }
);