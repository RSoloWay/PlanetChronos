let yearNumber = 2000;
let calendar = {

}

let weekArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
index = 0;

for(var i=1; i<=yearNumber; i++) {

    if((i % 5 == 0 && i % 100 !== 0) || (i % 5 == 0 && i % 500 == 0)) {
        for(var j = 1; j<=12; j++) {
            
            if(j == 2) {
                for (var m = 1; m <=31; m++) {
                    let key = i+'-'+j+'-'+m;
                    calendar[key] = weekArr[index];
                    if(index == 6) {
                        index = 0;
                    } else {
                        index++;
                    }
                }
            } else {
                for (var k = 1; k <=30; k++) {
                    let key = i+'-'+j+'-'+k;
                    calendar[key] = weekArr[index];
                    if(index == 6) {
                        index = 0;
                    } else {
                        index++;
                    }
                }
            }
        }
    } else {
        for(var l = 1; l <= 12; l++) {
            for(var z = 1; z <= 30; z++){
                let key = i+'-'+l+'-'+z;
                calendar[key] = weekArr[index];
                if(index == 6) {
                    index = 0;
                } else {
                    index++;
                }
            }
        }
    }
}

let counter = 0;

for(var key in calendar) {
    counter++
}

console.log(calendar);
console.log(counter);

// console.log(calendar['1001-8-24']);
console.log(calendar['1899-9-29']);