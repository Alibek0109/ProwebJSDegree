

let a = +prompt('Введите число')
let b = +prompt('Введите степень числа')

let i = 0
let sum = 0

a = !isNaN(a) ? a : console.log('First number: wrote incorrected');
b = !isNaN(b) ? b : console.log('Second number: wrote incorrected');

for (i; i <= b; i++) {
    sum = a ** i
    
}console.log(sum);

if (b < 0) {
    alert('Степень ' + b + ' должна быть больше нуля')
}else {
    alert(sum)
}