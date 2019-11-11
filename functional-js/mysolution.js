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

// ***
module.exports = function countWords(inputWords) {
   return inputWords.reduce((a, b) => {
            a[b] = ++a[b] || 1
            return a
          }, {})
}

/*
module.exports = function countWords(inputWords) {
    let obj = {};
    inputWords.forEach(w => {
        if (!obj.hasOwnProperty(w)) {
            obj[w] = 1;
        } else {
            obj[w] += 1;
        }
    });
    return obj;
}
*/

module.exports = function reduce(arr, fn, initial) {
    if (!arr.length) return initial
    var head = arr[0];
    var tail = arr.slice(1);
    initial = fn(initial, head);
    return reduce(tail, fn, initial);
}

module.exports = function duckCount() {
   return Object.values(arguments)
            .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack'))
            .length;
}

// ***
var slice = Array.prototype.slice;
module.exports = function logger(namespace) {
    /*
    return function info(...message) {
        console.log(namespace, ...message)
    }
    */
   return function() {
       console.log.apply(console, [namespace].concat(slice.call(arguments)))
   }
}

module.exports = function (namespace) {
    return console.log.bind(console, namespace)
}

module.exports = function arrayMap(arr, fn) {
    return arr.reduce((x,y) => {
        x.push(fn(y))
        return x
    }, [])
}

// *** need to review this
module.exports = function Spy(target, method) {
    var originalFn = target[method];
    
    var result = {
        count: 0
    }

    target[method] = function() {
        result.count ++;
        return originalFn.apply(this, arguments)
    }
    return result;
}
