

function square(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    return result;
}
function Memoization() {
    let memo = {};
    return function (n) {
        console.time("perf");
        let res;
        if (!memo[n]) {
            res = square(n);
            memo[n] = res;
        } else {
            res = memo[n];
        }
        console.timeEnd("perf")
        return res;
    }
}

let res = Memoization({});
console.log(res(5))
console.log(res(5))
console.log(res(900))
console.log(res(900))
console.log(res(900))
console.log(res(900))
console.log(res(900))

// console.log(square(100));

// obj.getFullName();