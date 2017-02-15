/*
 * Функция для нахождения определителя
 * @param Array matrix - матрица 2 на 2
 * @return Integer - определитель матрицы
 */
function getDeterm(matrix) {
    let firstDiag = matrix[0][0]*matrix[1][1];
    let secondDiag = matrix[0][1]*matrix[1][0];
    return firstDiag - secondDiag;
}

/*
 * Константы известных значений в системе уравнений
 * a1*x + b1*y = c1;
 * a2*x + b2*y = c2;
 */
const a1 = 4,
    b1 = 3,
    c1 = 2,
    a2 = 2,
    b2 = 5,
    c2 = -4;

/*
 * Инициализируем матрицы
 */
const mainMatrix = [[a1, b1], [a2, b2]],
    aMatrix = [[c1, b1], [c2, b2]],
    bMatrix = [[a1, c1], [a2, c2]];

/*
 * Получаем гланвый определитель
 */
const mainDeterm = getDeterm(mainMatrix);

if(mainDeterm == 0) {
    console.log("Решений нет.");
} else {
    let x = getDeterm(aMatrix) / mainDeterm,
        y = getDeterm(bMatrix) / mainDeterm;
    console.log('X = ' + x + '; Y = ' + y);
}