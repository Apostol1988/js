Привет, мир! 

const massiv = ["Привет,", "мир", "!"];
let result = "";
for (let k = 0; k < massiv.length; k++) {
  result = result + massiv[k] + " ";
}
document.write(result);




Квартиры

let etag = prompt('Этаж', 'Какой этаж? 1-25'),
  pod = prompt('Подьезд', 'Введите номер'),
  kvart = prompt('Квартира', 'сколько квартир на площадке?'),
  number = prompt('Номер квартиры', 'Укажите номер квартиры');
if (etag < 1 || etag > 25) {
  alert('Ввведите этаж в диапазоне 1-25');
} else if (pod < 1 || pod > 10) {
  alert('Подьезд 1-10');
} else if (kvart < 1 || kvart > 20) {
  alert('Значение неверное 1-20');
}
else if (number > (pod * etag * kvart)) {
alert('В выбранном доме нет такой квартиры');
}
let sum = (pod * etag * kvart);
let rez = (number / (etag * kvart));
document.write(Math.ceil(rez));



Дни недели


const en=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
ru=["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
sel=prompt("1-en, 2-ru", "выберите нужный язык");
if (sel == 1) {
document.write(en);
}
else if (sel == 2) {
document.write(ru);
}
else
alert ('Неверный ввод');


const en = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ru = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  sel = prompt("1-en, 2-ru", "выберите нужный язык");
switch (sel) {
  case "1":
    document.write(en);
    break;
  case "2":
    document.write(ru);
    break;
  default:
    alert('Неверный ввод');
}



const lang = [
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  ],
  sel = prompt("1-en, 2-ru", "выберите нужный язык");
 document.write(lang[sel-1]);
