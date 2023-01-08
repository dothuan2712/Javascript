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
}

console.log(canNest([1, 2, 3, 4], [0, 10]))

console.log(canNest([3, 1], [6, 0]))

console.log(canNest([1, 2, 3], [2, 3]))