console.log('PlanetChronos');
const task = `На планете Хронос празднуется тысячелетие основания колонии, сегодня 24 августа 1001 года, вторник. 
В день основания тоже был вторник. Календарь Хроноса похож на земной: 12 месяцев по 30 дней, в феврале високосного года 31 день. 
Год является високосным, если его номер кратен 5, однако из кратных 100 високосными являются лишь кратные 500, 
например, 700, 800 и 900 — невисокосные года, 1000 — високосный. Необходимо написать функцию, которая находит день недели на Хроносе 
для любой заданной даты.`
console.log(task);

const dayInYear = 360;
const dayInMonth = 30;
const colonizationDate = '24-08-0001';
const colonizationDay = 'ВТ';
let date,
    weekArr = ['ПН', 'ВТ','СР','ЧТ','ПТ','СБ','ВС'],
    dayQuantity = 0,
    result;
    
planetChronos();

function planetChronos() {
    
    date = prompt('Enter the date in the format DD-MM-YYYY (for example: 29-09-1899)').split('-');

    getFirstDay(colonizationDate, colonizationDay);
    getDayQuantity();
    determineDay();
    let again = confirm(result + '! \nХотите проверить еще дату?');
    if (again) {
        planetChronos();
    } else {
        alert('Спасибо!')
    }
}


    
/*================Узнаем день какой день недели был 01-01-0001 и преобразуем масив weekArr в соответсвии с датой ================*/

function getFirstDay(param1, param2) {
    
    let dayToColonization = dayInMonth * (param1.split('-')[1] - 1) + Number(param1.split('-')[0]), /*Прошло дней до колонизации*/
        colonizationDayIndex = dayToColonization % weekArr.length; /*Узнаем каким по счету днем в первом году был самый первый вторник*/
        
    while (weekArr[colonizationDayIndex - 1] != 'ВТ') { /*Преобразовываем массив weekArr тем самым узнаем*/
        weekArr.unshift(weekArr.pop());              /*с какого дня недели началось летоисчисление на планете*/  
    }    
    console.log(weekArr);
}

// getFirstDay(colonizationDate, colonizationDay);


/*================ Вычисляем сколько дней прошло до даты заданой пользователем ================*/

function getDayQuantity() {

    let leapYearQuantity = 0;

    if(date[2] % 5 == 0 && ((date[1] == 2 && date[0] == 31) || date[1] > 2)) { /**Проверка на то является ли указанный пользователем */
                                                                               /**год высокосным и если да, то стоит ли его учитывать */
        leapYearQuantity = date[2] / 5;
        leapYearQuantity = leapYearQuantity - (Math.round(date[2] / 100) - Math.round(date[2] / 500));                                      
        console.log(leapYearQuantity);
    } else {
        leapYearQuantity = (date[2] - date[2] % 5) / 5;
        leapYearQuantity = leapYearQuantity - (Math.round((date[2] - date[2] % 5) / 100) - Math.round((date[2] - date[2] % 5) / 500));
        console.log(leapYearQuantity);
    }

    


    dayQuantity = dayInYear * (date[2] - 1) + dayInMonth * (date[1]-1) + Number(date[0]) + leapYearQuantity;
}



/*================ Определяем день недели ================*/

function determineDay() {
    resultIndex = dayQuantity % 7;
    if(dayQuantity % 7 == 0){
        resultIndex = 6;
    } else {
        resultIndex = dayQuantity % 7 - 1;
    }
    switch(weekArr[resultIndex]) {
        case 'ВС':
            result = 'В выбраную Вами дату было/будет Воскресенье';
            break;
        case 'ПН':
            result = 'В выбраную Вами дату был/будет Понедельник';
            break;
        case 'ВТ':
            result = 'В выбраную Вами дату был/будет Вторник';
            break;
        case 'СР':
            result = 'В выбраную Вами дату была/будет Среда';
            break;
        case 'ЧТ':
            result = 'В выбраную Вами дату был/будет Четверг';
            break;
        case 'ПТ':
            result = 'В выбраную Вами дату была/будет Пятница';
            break;
        case 'СБ':
            result = 'В выбраную Вами дату была/будет Суббота';
            break;
    }
}

