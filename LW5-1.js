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
