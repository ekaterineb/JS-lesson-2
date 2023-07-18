// დავალება 1

const numberArrays = [2, 4, 6, 8, 10, 12]

numberArrays.pop()
numberArrays.unshift(12)

console.log(numberArrays)


// დავალება 2


const arr = [{
    productTitle: "title1",
    productPrice: 100
},
{
    productTitle: "title2",
    productPrice: 200
},
{
    productTitle: "title3",
    productPrice: 300
}
]
console.table(arr)

// დავალება 3

const numbers = [20, 40, 60, 80, 100]
console.log((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]) / numbers.length);

// დავალება 4

const phone = {
    phoneName: "iPhone 14 Pro Max",
    phoneDescription: "The recent model of Apple's smartphone",
    phonePrice: 1200,
    shopAddresses: ["Sample Shop Address 1", "Sample Shop Address 2", "Sample Shop Adress 3"],
    phoneMemoryInGB: 128
};
console.log(phone)

// დავალება 5

console.log(`Phone name is ${phone.phoneName}, phone price is ${phone.phonePrice} and you can buy it at ${phone.shopAddresses[0]}`);
