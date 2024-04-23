//Belajar perulangan While

//Perulangan while akan terus berjalan selama kondisi tesnya bernilai true

// let num = 0;
// while(num <  0 ) {
//     console.log(num)
//     num++
// }

// //contoh lain dari perulangan while
// const password = 'Pass123'

// let guess = prompt('Enter the password')

// while(guess !== password) {
//     console.log('enter the password ')
// }
// alert('congrats! the password is correct')

//contoh penggunaan break dalam perulangan
// let input = prompt('Say Something Please!')
// while(true) {
//     input = prompt(input);
//     if(input ==='stop') break;
// }

// alert('ok');

//contoh pada for
// for(let i = 0; i < 100; i++) {
//     console.log(i);
//     if(i >= 50) break;
// }

//MEMBUAT GAME SEDERHANA MENGGUNAKAN PERULANGAN
// let maximum = parseInt(prompt('Masukan nilai maksimum anda!'))
// while(!maximum) {
//     maximum= parseInt(prompt('jangan kosongkan nilai maksimal anda!'))
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt('Isi tebakan angka menurut kamu!'))
// let attemps = 1;
// while(parseInt(guess)!==targetNum) {
//     attemps++
//     if(guess > targetNum) {
//         guess = parseInt(prompt('Terlalu tinggi!tebak lagi'))
//     } else{
//         guess = parseInt(prompt('Terlalu rendah!tebak lagi'))
//     }
// }

// alert(`Selamat tebakan kamu berhasil,dan kamu menebak dengan percobaan ${attemps}`)



//cara lebih baik dan mudah untuk melakukan perulangan dengan tipe data array 

//case 1 
// const fruits = ['Banana','orange','Apple','Mango']

// for (let fruit of fruits) {
//     console.log(`Buah ${fruit}`)
// }

//case 2 nested array

// const studentRows = [
//     ['Mikael','Subaki','Hara','Sino'],
//     ['kael','baki','ra','no'],
//     ['Mik','Suaki','ara','ino']
// ]

// for(let row of studentRows) {
//     for(let student of row) {
//         console.log(student)
//     }
// }

//cara lebih baik dan mudah untuk melakukan perulangan dengan tipe data object

const studentScore = {
    olivia: 10,
    sasuke: 20,
    chisandra: 30,
    chitato: 40,
    Neji: 50,
}

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore[student]}`)
// }

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)