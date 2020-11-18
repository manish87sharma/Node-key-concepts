let counter = 0;
function clickShoot() {
    console.log("fetching record", counter++);
}

const getBetterData = debounce_new(clickShoot, 1000);

function debounce(fn, delay) {
    let lastExec = true;;
    return function () {
        let timeDiff = Date.now() - lastExec;
        let flag = timeDiff > delay;
        console.log(timeDiff);
        if (flag) {
            lastExec = Date.now();
            fn()
        }
        // clearTimeout(timeout);
        // timeout = setTimeout(() => {

        // }, delay);
    }
}

function debounce_new(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        let context = this,
            args = arguments;
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}
