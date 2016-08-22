//Get all subsets of a set
var subsets = function subs(collection){
    if(collection.length === 0)
        return [[]];
    else{
        return comb(collection.shift(), subs(collection));
    }
}

var comb = function comb(ele, arr){
    var addition = [];
    var i = arr.length - 1;
    while(i >= 0){
        addition.unshift([ele].concat(arr[i]));
        i--;
    }
    return addition.concat(arr);
}

var inplace_comb = function inplace_comb(ele, arr){
    // var addition = [];
    var i = j = arr.length - 1;
    while(i >= 0){
        arr.unshift([ele].concat(arr[j]));
        i--;
    }
    return arr;
}

exports.subsets = subsets;
exports.comb = comb;
