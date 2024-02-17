// const hex = (r,g,b) => {
//     return '#' + ((1 << 24)+(r << 16)+(g << 8)+b).toString(16).slice(1);
// };

// bentuk fungsi biasa

// function hexLain(r,g,b){
//    return '#' + ((1 << 24)+(r << 16)+(g << 8)+b).toString(16).slice(1);
// };

// ------------------------------------------------

// const rgb = (r,g,b) => {
//     return `rgb(${r}, ${g}, ${b})`;
// };


// ---- belajar factory function ------------

function konversiKolor (r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
};




// ----- factory function dengan contoh dari chatgpt

function buatperson(nama,umur){
    return {
        nama : nama,
        umur : umur,
        sayHello : function() {
            return `hello ${nama} berumur ${umur} tahun` ;
        }
    };
};

let personBaru = buatperson('moko', 77);
let anu = personBaru.sayHello();

// -------- objek dengan constructor function --------------

function Kolor(r,g,b){ //ini adalah instance
    this.r = r;
    this.g = g;
    this.b = b;
};

Kolor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Kolor.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};


// ------------ membuat objek dengan class -------------------------

class Warna {
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    isiRGB(){
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    rgb() {
        console.log('halo saya rgb');
        return this.isiRGB()
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
};