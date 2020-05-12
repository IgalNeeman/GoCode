function matsum(arr: number[][]): number[] {
    var temparr: number[] = [];

    for (var i: number = 0; i < arr.length; i++)
        for (var j: number = 0; j < arr[j].length; j++)
            temparr[temparr.length] = arr[i][j];

    return sortarr(temparr);
}

function sortarr(brr: number[]): number[] {
    var temp2:number=0;
    for(var i:number=(brr.length-1);i>=0;i--)
    for(var j:number=0;j<i;j++)
    if(brr[j]>brr[j+1])
    {
        temp2=brr[j];
        brr[j]=brr[j+1];
        brr[j+1]=temp2;
    }
    return brr;
}

console.log(matsum([[0,9],[2,3],[7,4]]));

