// curry with closure

function multiply(x) {
    return function (y) {
        console.log(x * y);
    }
}

function multi(x, y) {
    console.log(x * y);
}



// const multiplyBy2 = multiply(2);
// const multiplyBy3 = multi.bind(this, 3);
// multiplyBy2(5);
// multiplyBy3(5);
// console.log(parseInt('A', 10))
// console.log(parseInt('A', 11))

// let str = 'a.b.c'
// console.log(str.split('\.'))


// var arr = ['a', 'b']
// let b = arr;
// arr.pop();
// console.log(arr, b)

// console.log("1" + 1)

// var num = 5;
// (function(){
//     console.log(num);
//     var num=10;
//     console.log(num)

// })()

// console.log(undefined==null)
// console.log(null + 1)

// var a={};
// var b={a:1}
// var c={b:2}
// a[b]=888;
// a[c]=999;
// console.log(a[b])

var test = "Welcome to export";
let ind = test.substr(3, 3)
console.log(ind)