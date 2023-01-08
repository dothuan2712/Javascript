let m = new Array()
let n = new Array()

function canNest(m, n) {
    // const minm = Math.min(...m)
    // const minn = Math.min(...n)
    // const mam = Math.max(...m)
    // const maxn = Math.max(...n)
    if (Math.min(...m) >= Math.min(...n) && Math.max(...m) <= Math.max(...n)) {
        return true;
    } else 
    return false;

    //  if(n[0]< n[1]){

    //     if(m[0] >= n[0] && m[m.length - 1]<=n[n.length-1]){
    //         return true;
    //     }
    //     else return false

    //  } else if(n[0] > n[1]){
    //     if(m[0] <= n[0] && m[m.length - 1] >= n[n.length-1]){
    //         return true;
    //     }
    //     else return false
    // }


}

console.log(canNest([4, 3, 2, 1], [0, 10]))

console.log(canNest([3, 1], [0, 6]))

console.log(canNest([1, 2, 3], [3, 4]))