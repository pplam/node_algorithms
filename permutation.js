//Generate all permutations of a set
var permutations = function perms(arr){
    var permuted = [arr.slice()];
    for(var i=arr.length-2; i>=0; i--){
        var j = permuted.length - 1;
        while(j>=0){
            permuted = permuted.concat(release(permuted[j], i));
            j--;
        }
    }
    return permuted;
}

function release(coll, k){
    var released = [ahead(coll, k)];
    var i = k + 1;
    while(i<coll.length-1){
        released.push(ahead(released[released.length-1], i));
        i++;
    }
    return released;
}

function ahead(list, i){
    var next_list = list.slice();
    var temp = next_list[i];
    next_list[i] = next_list[i+1];
    next_list[i+1] = temp;
    return next_list;
}


exports.permutations = permutations;
