// console.log('contoh penggunaan dari perulangan for')

// for (let i = 20;i>= 0;i--) {
//     console.log('Ini contoh pengurangan')
// }

// for (let i = 0; i<= 20; i++) {
//     console.log('ini contoh penambahan')
// }


// //setiap melakukan perulangan dengan array,selalu awali nilai dengan 0 dan batasnya sampai panjangnya suatu data array yg akan digunakan
// const animals = ['Serigala','Macan','Singa','Burung']

// for (let i= 0; i<animals.length;i++) {
//     console.log(i+1,animals[i])
// }

// //contoh penggunaan dari nested loop 
// let soal = ['A','B','C','D','E']
// for (let i = 1; i <10; i++) {
//     console.log(`${i} ini adalah soal nomor ${i}`)
//     for(let j = 0; j<soal.length; j++) {
//         console.log(`  ${soal[j]}. Pilihan jawaban`)
//     }
// }

//CARA MEMANFAATKAN ARRAY DALAM ARRAY DENGAN NESTED LOOP

const studentRow = [
    ['Syifa','Mikael','Naruto'],
    ['Milo','Mikel','Ruto'],
    ['Yifa','Mika','Nato']
]

for(let i  = 0;i < studentRow.length;i++){
    const row = studentRow[i];
    console.log(`Seat row ${studentRow}`)
    for(let j = 0; j<row.length;j++){
        console.log(` ${row[j]}`)
    }
}