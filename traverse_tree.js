var Node = function Node(data, children){
  return {
    data: data || {},
    children: children || []
  }
}

var traverseDF = function traverseDF(tree){
  if(tree){
    var stack = [];
    var list = [];
    stack.push(tree);
    while(stack.length > 0){
      var node = stack.pop();
      list.push(node.data);
      while(node.children.length > 0){
        stack.push(node.children.pop());
      }
    }
    return list;
  }
  else
    return null;
}

var tst = Node(1, [
		  Node(2, [
		          Node(3),
			  Node(4, [
			          Node(5), 
				  Node(6, [
				          Node(9)
			          ])
			  ]), 
			  Node(8)
	           ])
	    ]);

exports.tst = tst; 
exports.Node = Node;
exports.traverseDF = traverseDF;

