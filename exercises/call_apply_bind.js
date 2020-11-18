var obj1 = {
    "First_Name": "Manish",
    "Last_Name": "Sharma",
    "city": "Gwalior"
}

var obj2 = {
    First_Name: "rajesh",
    Last_Name: "Jena",
    state: "orissa",
    address: function () {
        console.log(`Full Name is ${this.First_Name} ${this.Last_Name} and state is ${this.state}`);
    }
}

function getFullName(city, state) {
    console.log(`Full Name is ${this.First_Name} ${this.Last_Name} and city is ${city} state is ${state}`);
}



getFullName.call(obj1, "gwalior", "MP");
let mybind = getFullName.bind(obj2, "Bangalore", "Karnataka");
getFullName.apply(obj2, ["Bhubneswar", "Orissa"]);
mybind();


