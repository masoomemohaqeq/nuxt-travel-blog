export default function buildHierarchy(arry) {
  var roots = [],
    children = {};

  // find the top level nodes and hash the children based on parent
  for (var i = 0, len = arry.length; i < len; ++i) {
    var item = arry[i],
      p = item.parentId,
      target = !p ? roots : children[p] || (children[p] = []);

    target.push({ value: item });
  }

  // function to recursively build the tree
  var findChildren = function (parent) {
    if (children[parent.value.id]) {
      parent.children = children[parent.value.id];
      for (var i = 0, len = parent.children.length; i < len; ++i) {
        findChildren(parent.children[i]);
      }
    }
  };

  // enumerate through to handle the case where there are multiple roots
  for (var i = 0, len = roots.length; i < len; ++i) {
    findChildren(roots[i]);
  }

  return roots;
}
