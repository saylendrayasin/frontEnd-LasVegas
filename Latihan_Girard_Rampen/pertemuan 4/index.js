let bilangan = 5;
let bilangan2 = "5";
console.log(bilangan === bilangan2);

//ternary operator
let umur = 17;
let hasil = umur >= 17 ? "Anda bisa buat SIM" : "Anda belum bisa buat SIM";
console.log(hasil);

console.log(true && true);
console.log(true || false);
console.log(!false);

//JS function
let age = 30;//global scope
function v1(a, b){ // Function declaration
    let grade = 80; //local scope (function)
    let v3 =  "ALOHA" + a + b + "umur saya " + age + " tahun. ";
    let v4 = "Nilai saya " + grade;
    if(grade >= 1){
        let index = 4.0;//local scope(block)
    }

    return v3 + v4;
}
console.log(v1(5," kali "));

let v2 = function(){
    console.log("YAHARO");
}
v2();//function expression
 