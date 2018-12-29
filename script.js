//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is  box number' + self.position + ' and it is ' + self.color;
            alert(str);

        });

    }
}

//box5.clickMe();

//ES56
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click',  () => {
            var str = 'This is  box number' + this.position + ' and it is ' + this.color;
            alert(str);

        });

    }
}

//box6.clickMe();

//ES5

function Person(name) {
    this.name = name;

}

/*
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friend with ' + el;

    }.bind(this));
    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/

Person.prototype.myFriends6 = function (friends6) {
    const arr = friends6.map(el => `${this.name} is friend with   ${el}`);


    console.log(arr);
}

const friends6 = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends6);

//ES5

//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, year] = ['John', 26];

console.log(name);
console.log(year);
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const{firstName, lastName} = obj;
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() -year;
    return [age, 65-age];

}
const [age2, retirement]= calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';

});
*/


Array.from(boxes).forEach( cur => cur.style.backgroundColor = 'dodgerblue');