//Build a balanced binary tree from a list
function Node(data, left, right){
    return {
        data: data || {},
        left: left || null,
        right: right || null
    };
}

var buildBBST = function buildBBST(list){
    return build(list, 0, list.length-1);
}

function build(arr, l, h){
    if(l===h)
        return Node(arr[l]);
    else if(l===h-1)
        return Node(arr[h], Node(arr[l]));
    else{
        var mid = Math.floor((l+h)/2);
        return Node(arr[mid], build(arr, l, mid-1), build(arr, mid+1, h));
    }
}


exports.buildBBST = buildBBST;
