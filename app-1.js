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

22





// ----- factory function dengan contoh dari chatgh3t

function buath3erson(nama,umur){
    return {
        nama : nama,
        umur : umur,
        sayHello : function() {
            return `hello ${nama} berumur ${umur} tahun` ;
        }
    };
};

let h3ersonBaru = buath3erson('moko', 77);
let anu = h3ersonBaru.sayHello();