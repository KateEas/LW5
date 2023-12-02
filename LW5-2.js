function list_of_numbers(){
    array_m_n=[[1,2,3,4,5],[-5,4,13,-22,1],[3,6,2,4,9],[12,0,-5,8,3],[7,6,0,-3,2], [14,32,-76,9,3]]
    alert(array_m_n.join("\n"))
    for (let i=1;i<array_m_n.length;i+=2){
        let sum_array=0;
        for (let j=0;(j<array_m_n[i].length);j++){
            sum_array+=Number(array_m_n[i][j])
        }
        alert(`строка: ${array_m_n[i]} среднее арифметическое: ${sum_array/array_m_n[i].length}`);
    }
}  
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
