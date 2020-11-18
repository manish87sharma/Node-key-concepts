let shootCounter = 0;
function clickShoot() {
    console.log("Shot", shootCounter++);
}

const curryShoot = throttle(clickShoot, 1000);

function throttle(fn, delay) {
    let flag = true;
    let time = 0;
    return function () {
        if (flag) {
            flag = false;
            fn();
            setTimeout(() => {
                flag = true;
            }, delay);
        }

        // let context = this,
        //     args = arguments;
        // fn.apply(context, args)
        // setInterval(() => {

        // }, interval);


    }
}