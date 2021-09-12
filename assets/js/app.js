let height = +prompt('Рост в метрах');
let mass = +prompt('Масса в кг');
let index = mass / (height * height);
alert (`Ваш индекс массы тела равен ${index}`);
let result = +prompt ('Напишите результат индекса');

if(result = 0-16){
    alert('Явный Дефицит Массы Тела');
    console.log('Явный Дефицит Массы Тела')
}

if(result = 17-19){
    alert('Дефицит')
    console.log('Дефицит')
}
 
if(result = 20-25){
    alert('Норма')
    console.log('Норма')
}
 
if(result = 26-30){
    alert('Избыток')
    console.log('Избыток')
}

if(result = 31-35){
    alert('Ожирение 1 степени')
    console.log('Ожирение 1 степени')
}

if(result = 36-40){
    alert('Ожирение 2 степени')
    console.log('Ожирение 2 степени')
}

if(result >= 40 ){
    alert('Ожирение 3 степени')
    console.log('Ожирение 3 степени')
}
 

 
 
