// Получаем canvas элемент
import reportWebVitals from "./reportWebVitals";

let canvas = document.getElementById('lineChart');

// Указываем элемент для 2D рисования
let ctx = canvas.getContext('2d');

ctx.fillStyle = "black"; // Задаём чёрный цвет для линий
ctx.lineWidth = 4.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(30, 10); // Указываем начальный путь
ctx.lineTo(30, 460); // Перемешаем указатель
ctx.lineTo(1200, 460); // Ещё раз перемешаем указатель
ctx.stroke(); // Делаем контур

// Цвет для рисования
ctx.fillStyle = "black";
// Цикл для отображения значений по Y
for(let i = 0; i < 6; i++) {
    ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
    ctx.beginPath();
    ctx.moveTo(25, i * 80 + 60);
    ctx.lineTo(30, i * 80 + 60);
    ctx.stroke();
}

// Массив с меткам месяцев
let labels = ["Январь", "Февраль", "Март", "Апрель", "Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

// Выводим меток
for(var i=0; i<12; i++) {
    ctx.fillText(labels[i], 50+ i*100, 475);
}

// Объявляем массив данных графика
let data = [ 10, 53, 39, 54, 21, 39, 89, 23, 44, 44, 23, 10 , 2, 5 ];

// Назначаем зелёный цвет для графика
ctx.fillStyle = "purple";
// Цикл для от рисовки графиков
for(var i=0; i<data.length; i++) {
    var dp = data[i];
    ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

