// prototypes(khuôn mẫu)
// prototype được chia sẻ với tất cả các new Object() 
// tiet kiem bo nho
// best preactical

function Mouse(color) {
    this.type = 'mouse';
    this.color = color;
}

Mouse.prototype.sleep = function() {
    return this.color + ' sleeping....';
}


var jenky = new Mouse('white');
console.log(jenky);
console.log(jenky.sleep()); // shared