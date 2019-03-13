class Shape {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

class Square extends Shape {
    constructor(height, width){
        super(height, width);
        let newsquare = $(`<div class="square" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.width, 600)}px"></div>`);
        $('#displayarea').append(newsquare);
    }
}

class Rectangle extends Shape {
    constructor(height, width){
        super(height, width);
        let newrectangle = $(`<div class="rectangle" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.height, 600)}px"></div>`);
        $('#displayarea').append(newrectangle);
    }
}

class Circle extends Shape {
    constructor(height, width){
        super(height, width);
        let newcircle = $(`<div class="rectangle" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.height, 600)}px"></div>`);
        $('#displayarea').append(newcircle);
    }
}

$('#squarebutton').click( () => addSquare() );
$('#rectanglebutton').click( () => addRectangle() );

const addSquare = () => {
    let size = $('#squareinput').val();
    let news = new Square(size, size);
};

const addRectangle = () => {
    let height = $('#rech').val();
    let width = $('#recw').val();
    let news = new Rectangle(height, width);
}

const addCircle = () => {
    let height = 
};


const randomNumber = (min, max) => {
    let rand = Math.floor(Math.random() * max) - min;
    if(rand <= 0){
        return 0;
    }
    return rand;
};
