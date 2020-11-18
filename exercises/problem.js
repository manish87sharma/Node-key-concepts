function solve(arr) {
    arr = arr.sort();
    let max = arr.length && arr[arr.length - 1] > 0 ? arr.length && arr[arr.length - 1] : 0;
    let counter = 0;
    let positiveArray = arr.filter(x => x > 0);
    let lastPosNumber = 1;
    for (let val of arr) {
        if (val < 0) {
            while (val < max) {

                if (val <= 0) {
                    counter++;
                }
                if (val >= lastPosNumber && !positiveArray.includes(val)) {
                    counter++;
                }
                val++;
            }
            lastPosNumber = val - 1;
            positiveArray.push(val - 1);
        }
    }
    return counter;
}
solve([-1, -1, 2])
// solve([-1, 2])