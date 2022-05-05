/*
Реализовать функцию copy(list) по копированию массива.
Предусмотреть возможность передачи вторым аргументом функции. 
При копировании массива - функция применится к каждому элементу копируемого массива. 
newL = copy(list, function(value){ return value*10; })
*/
var copyArray = [];

function copy(list, f) {
// debugger;
    Window.copyArray = [...list];
    for(i = 0; i < list.length; i++) {
        copyArray[i] = f(list[i]);
    };

    return copyArray;
};

let multiply = function(value) {
    return value * 10;
};

let newL = copy([1,2,3], multiply);

console.log(newL);

