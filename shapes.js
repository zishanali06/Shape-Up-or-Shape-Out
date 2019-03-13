class Shape {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

class Square extends Shape {
    constructor(height, width){
        super(height, width);
        this.shapediv = $(`<div class="square" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.width, 600)}px"></div>`);
        $('#displayarea').append(this.shapediv);
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
    constructor(radius){
        super(radius * 2, radius * 2)
        this.radius = radius;
        let newcircle = $(`<div class="circle" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.height, 600)}px"></div>`);
        $('#displayarea').append(newcircle);
    }
}

class Triangle extends Shape {
    constructor(height){
        super(height);
        let newtriangle = $(`<div class="triangle" style="width: 0px; height: 0px; left: ${randomNumber(this.height, 600)}px; top:${randomNumber(this.height, 600)}px; border-bottom: ${this.height}px solid green; border-right: ${this.height}px solid transparent"></div>`);
        $('#displayarea').append(newtriangle);
    }
}

$('#squarebutton').click( () => addSquare() );
$('#rectanglebutton').click( () => addRectangle() );
$('#circlebutton').click( () => addCircle() );
$('#trianglebutton').click( () => addTriangle() );


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
    let circleradius = $('#circleinput').val();
    let news = new Circle(circleradius);
};

const addTriangle = () => {
    let trih = $('#triangleinput').val();
    let news = new Triangle(trih);
}


const randomNumber = (min, max) => {
    let rand = Math.floor(Math.random() * max) - min;
    if(rand <= 0){
        return 0;
    }
    return rand;
};
