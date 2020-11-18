var obj = {
    "First_Name": "Manish",
    "Last_Name": "Sharma"
}


Function.prototype.mybind = function () {
    console.log("My bind function")
};

function getFullName() {
    console.log(`Full Name is ${this.First_Name} ${this.Last_Name}`);
}

getFullName.mybind();

var obj2 = {
    First_Name: "rajesh",
    Last_Name: "Sharma",
    state: "orissa",
    address: function () {
        console.log(`Full Name is ${this.First_Name} ${this.Last_Name} and state is ${this.state}`);
    }
}
obj.__proto__ = obj2;

obj.address();
