var readFileTree = require("read-file-tree");

readFileTree("./", function (err, tree) {
  console.log(
    Object.fromEntries(
      Object.keys(tree)
        .filter((key) => {
          return typeof tree[key] === "object";
        })
        .map((key) => {
          return [
            key,
            Object.keys(tree[key]).map((childKey) => [key, childKey].join("/")),
          ];
        })
        .sort((a, b) => a[0].localeCompare(b[0]))
    )
  );
});
