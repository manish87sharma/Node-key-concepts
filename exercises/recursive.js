function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b)
        } else {
            return a
        }
    }

}

let sumRec = a => b => b ? sum(a + b) : a;

// console.log(sumRec(1)(2)(3)(4)())


var user = {
    name: "manish",
    address: {
        personal: {
            city: "gwalior",
            state: "MP"
        },
        Work: {
            city: "bangalore",
            state: "karnataka"
        }
    }
}

let flattenUser = {
    user_name: "manish",
    user_address_personal_city: "gwalior",
    user_address_personal_state: "mp",
    user_address_work_city: "gwalior",
    user_address_work_state: "karnataka"
}

let test = {
    "user_name": "manish",
    "user_address_personal_city": "gwalior",
    "user_address_personal_state": "MP",
    "user_address_Work_city": "bangalore",
    "user_address_Work_state": "karnataka"
}

let newObj = {};
function flatten(user, parent) {
    for (const [key, value] of Object.entries(user)) {
        if (typeof user[key] === "object") {
            flatten(value, `${parent}_${key}`)
        } else {
            newObj[`${parent}_${key}`] = value;
        }
    }
    // return user;

}
let obj = flatten(user, "user");

console.log(JSON.stringify(newObj))