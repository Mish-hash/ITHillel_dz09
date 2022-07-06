/*
Творческое задание

Напишите пример глубокого копирования объекта

const object = {
a: 5,
b: { g: 8, y: 9, t: { q: 48 } },
x: 47
}
*/

const object = {
    a: 5,
    b: {
        g: 8,
        y: 9,
        t: {
            q: 48,
            console: function () {
                console.log(this)
            }
        }
    },
    x: 47,
    console: function () {
        console.log(this);
    },
    h: {
        i: 48,
        console: function () {
            console.log(this)
        },
    },
}

function deepRecurciveCopy (inObj) {

    if (typeof inObj !== 'object' || inObj === null) {
        return inObj;
    }

    const outObj = Array.isArray(inObj)? [] : {};

    for (key in inObj) {
        outObj[key] = deepRecurciveCopy(inObj[key]);
    }

    return outObj;
}

const object2 = deepRecurciveCopy(object);

console.log(object === object2) //false
console.log(object.b === object2.b) //false
console.log(object.b.t === object2.b.t) //false

