const a = 1;
let b = 2;
const c = () => {
    console.log(this);
    let d = () => {
        console.log(this);
    }
}
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    }
}