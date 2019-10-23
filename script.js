let data = [
    {
        name: 'abc def',
        age: 24,
        single: true,
    },
    {
        name: 'ghi jkl',
        age: 25,
        single: false,
    },
    {
        name: 'mno pqr',
        age: 26,
        single: true,
    }

]

// let getData = [...data, {
//     name: 'stu vwx',
//     age: 27,
//     single: false,
// }
// ]
// console.log(data)
// console.log(getData)


// let getData = data.map((a, i) => {
//     var changeData = { ...a }
//     if (i == 2) {
//         changeData.name = 'hello';
//     }
//     return changeData;
// })

// console.log(data)
// console.log(getData)

let getData = data.map((a, i) => {
    var changeData = { ...a }
    if (i == 2) {
        changeData.splice(i, 1);

    }
    return changeData
})

console.log(getData)
