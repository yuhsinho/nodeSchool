module.exports = function upperCaser(input) {
    return input.toUpperCase();
}

module.exports = function repeat(operation, num) {
    if ( num <= 0) return 
    operation()
    return repeat(operation, --num)
}

module.exports = function doubleAll(numbers) {
    return numbers.map(n => n * 2);
}

module.exports = function getShortMessages(messages) {
    return messages
            .filter(msg => msg.message.length < 50)
            .map(m => m.message)
}

module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submmitedUsers) {
        return submmitedUsers.every(su => goodUsers.some(gu => gu.id == su.id))
    }
}

// module.exports = function countWords(inputWords) {
//     // console.log(inputWords)
//     console.log(inputWords.reduce((a, b) => {
//         let obj = {}
//         if (a !== undefined) {
//             obj[a] = a.length
//         } else {
//             obj[b] = b.length
//         }
//         // console.log(obj)
//         // console.log('a',a, 'b',b, b.length)
//         return obj
//     }))
// }