'use strict';

let isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

let setNumber = function (targetNumber) { //загадываем число
  targetNumber = parseInt(Math.random() * 100); //генерация случайного числа от 0 до 100
  if (targetNumber == 0) { //если число загаданно 0
    targetNumber = 1; //то присваиваем ему значение 1
  }
  console.log(targetNumber);

  let guessNumber = function (userNum) {
    userNum = prompt("Угадай число от 1 до 100");
    if (userNum === null) {
      alert("Игра окончина");
      return;
    }

    if (!isNumber(userNum)) {
      alert("Введи число!");
    } else if (userNum > targetNumber) {
      alert("Загаданное число меньше");
    } else if (userNum < targetNumber) {
      alert("Загаданное число больше");
    } else if (userNum == targetNumber) {
      confirm("Поздравляю, Вы угадали!!!");
      return;
    }
    guessNumber(userNum);
  };
  return guessNumber;
};
