const number = document.querySelectorAll(".number");
const screen = document.querySelector(".result");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".equal-sign");
const reset = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const negative = document.querySelector(".negative");


// membuat tampilan lawar awal kalkulator menjadi 0, namun ketika kita memasukkan angka maka tampilan akan berubah
const updateScreenNumber = (number) => {
    if(screen.value === "0" || screen.value === "NaN"){
        screen.value = number;
    }else{
        screen.value += number;
    }
}

// mengubah operator supaya hanya menggunakan 1 operator
const updateScreenOperator = (operator) => {
    if(/[+*\/%]/.test(screen.value[screen.value.length-1])){
        screen.value = screen.value.slice(0, -1) + operator; //-1 pada slice berarti mengakses karakter terakhir
    }else{
        screen.value += operator;
    }


    // if(screen.value === "0"){
    //     screen.value = "0";
    // }else if (screen.value[screen.value.length - 1] === "+" || screen.value[screen.value.length - 1] === "-" || screen.value[screen.value.length - 1] === "*" || screen.value[screen.value.length - 1] === "/" || screen.value[screen.value.length - 1] === "%") {
    //     // Mengganti operator terakhir jika sudah ada
    //     screen.value = screen.value.substring(0, screen.value.length - 1) + operator;
    // } else {
    //     screen.value += operator;
    // }
}

negative.addEventListener("click", () => {
        screen.value =screen.value * -1;
})




// menambahkan event listener untuk setiap tombol sehingga kalkulator menampilkan angka ketika tombol di klik
number.forEach(element => {
    element.addEventListener("click", () => {
        updateScreenNumber(element.value);
    });
});

// menambahkan event listener untuk setiap tombol sehingga kalkulator menampilkan operator ketika tombol di klik
operator.forEach(element => {
    element.addEventListener("click", () => {
        updateScreenOperator(element.value);
    });
});

// menampilkan hasil kalkulasi
result.addEventListener("click", () => {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "NaN"; // Handle kesalahan evaluasi
    }
})

// mereset kalkulator
reset.addEventListener("click", () => {
    screen.value = "0";
})

// mendeklarasikan bilangan desimal, kita menambahkan logika supaya titik hanya diproses 1 kali
decimal.addEventListener("click", () => {
    if(/[\.]/.test(screen.value[screen.value.length-1])){
        screen.value = screen.value.slice(0, -1) + ".";
    }else{
        screen.value += ".";
    }
})