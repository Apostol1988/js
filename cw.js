First

var sec=6000, h, m, s;
	h=Math.trunc(sec/3600);
	m=Math.trunc((sec-(h*3600))/60);
	s=Math.trunc(sec-(h*3600+(m*60)));
	console.log("Исходные данные:"+sec+"сек "+"результат: "+h+"часов "+m+"минут "+s+"секунд");




по названию месяца - номер месяца

var month=["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemder", "December"];
var kar = new Date('September 20, 00 00:20:18');

console.log((kar.getMonth(month))+1);




По номеру месяца - название месяца

var month=["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemder", "December"], num=1;

if (num < 1)
  console.log("Номер месяца не может быть меньше 1");
else console.log(month[num-1]);




