function getFullName(city, state, country) {
    console.log(`Full Name is ${this.First_Name} ${this.Last_Name} and city is ${city} state is ${state},country is ${country}`);
}

var obj1 = {
    "First_Name": "Manish",
    "Last_Name": "Sharma"
}

let myLocalAddress = getFullName.bind(obj1);
// myLocalAddress("Bangalore", "Karnataka")

Function.prototype.mybind = function (...newArgs) {
    console.log(`Args ${newArgs}`)
    let obj = this;
    let self = newArgs[0];
    let params = newArgs.slice(1);
    return function (...args) {
        obj.apply(self, [...params, ...args])
    }
}

let mybindNew = getFullName.mybind(obj1, "Bangalore", "Karnataka");


mybindNew("India")