var M = 4;
var arr = new Array();
var res_arr = '';
let str_for_write='';
for (var i = 0; i < M; i++) {
    arr[i] = new Array();
    for (var j = 0; j < M; j++)arr[i][j] = Math.round(Math.random(0,1) * 10);   //Math.round для привед к натуральным
    str_for_write=arr[i].join("  :  ")  //превращаем массив в строку с разделителем м/д элементами в виде точки
    let li =document.createElement('li');   //создаем элемент под названием li с тегом li
    li.innerHTML=str_for_write; //Передаем значение тегу
    ol.prepend(li); //Вносим элемент в тег ol
}

let max_el_arr_d1=0;
let max_el_arr_d2=0;
for (let i = M-2; i >=0; i--) {  //Диагонали ниже главной
    for (let j = 0; j < M - 1 - i; j++) {
        if (arr[j][i + j + 1] > max_el_arr_d1) {
            max_el_arr_d1 = arr[j][j + 1 + 1];

        }
    }
}
for (let i = 0; i < M - 1; i++) {   //Диагонали выше главной
    for (let d = 0; d <M-1-i; d++) {
        if (arr[d][i+d+1] > max_el_arr_d2) {
            max_el_arr_d2 = arr[d][i+d+1]
        }
    }
}
// for (let i = 0; i < M - 1; i++) {   // Диагонали выше побочной
//     for (var j = 0; j <= i; j++) {
//         if (arr[j][i - j] > max_el_arr_d1) {
//             max_el_arr_d1 = arr[i][i - j];
//         }
//     }
// }
// for (var i = 1; i < M; i++)  // Диагонали ниже побочной
// {
//     for (var j = 1; j <= M - i; j++) {
//         if (arr[i + j - 1][M - j] > max_el_arr_d2) {
//             max_el_arr_d2 = arr[i + j - 1][M - j];
//         }
//     }
// }
if (max_el_arr_d1 > max_el_arr_d2) {
    alert(`Максимальный элемент: ${max_el_arr_d1}`);
}
else {
    alert(`Максимальный элемент: ${max_el_arr_d2}`);
}