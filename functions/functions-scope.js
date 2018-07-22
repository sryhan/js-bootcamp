
//global scope (f2c, c1, c2)
    //local scope (f, fah)
        //local scope (isFreezing)
        
f2c = function(f) {
    let cel = ((f-32)*5) / 9;

    if (cel <= 0) {
        let isFreezing = true;
    }

    return cel;
};

let c1 = f2c(32);
let c2 = f2c(68)
console.log(c1);
console.log(c2);