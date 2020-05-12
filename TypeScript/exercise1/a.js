function matsum(arr) {
    var temparr = [];
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[j].length; j++)
            temparr[temparr.length] = arr[i][j];
    return sortarr(temparr);
}
function sortarr(brr) {
    var temp2 = 0;
    for (var i = (brr.length - 1); i >= 0; i--)
        for (var j = 0; j < i; j++)
            if (brr[j] > brr[j + 1]) {
                temp2 = brr[j];
                brr[j] = brr[j + 1];
                brr[j + 1] = temp2;
            }
    return brr;
}
console.log(matsum([[0, 9], [2, 3], [7, 4]]));
