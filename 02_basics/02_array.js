const marval_heros = ["thor", "ironmen", "spidermen"]
const dc_heros = ["supermen", "flace", "betmen"]


// i like this method in array {prit}

const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

// other interview qustion

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("krish"))
// console.log(Array.from("krish"))
// console.log(Array.from({name: "krish"}))  //intersting interview

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));      

// {} <= Object
// [] <= array