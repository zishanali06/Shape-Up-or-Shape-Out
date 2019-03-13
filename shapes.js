class Shape {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

class Square extends Shape {
    constructor(height, width){
        super(height, width);
        this.name = 'Square';
        this.radius = height / 2;
        this.area = Math.pow(height, 2);
        this.perimeter = height * 4;
        this.shapediv = $(`<div class="square" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.width, 600)}px"></div>`);
        this.shapediv.click( () => this.describe() );
        $('#displayarea').append(this.shapediv);
    }

    describe() {
        $('#sn').empty();
        $('#sn').append(`Shape Name: ${this.name}`);
        $('#w').empty();
        $('#w').append(`Width: ${this.width} pixels`);
        $('#h').empty();
        $('#h').append(`Height: ${this.height} pixels`);
        $('#r').empty();
        $('#r').append(`Radius: ${this.radius} pixels`);
        $('#a').empty();
        $('#a').append(`Area: ${this.area} pixels`);
        $('#p').empty();
        $('#p').append(`Perimeter: ${this.perimeter} pixels`);
    }
}

class Rectangle extends Shape {
    constructor(height, width){
        super(height, width);
        this.name = 'Rectangle';
        this.radius = this.width / 2;
        this.area = this.height * this.width;
        this.perimeter = this.height * 2 + this.width * 2;
        this.shapediv = $(`<div class="rectangle" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.height, 600)}px"></div>`);
        this.shapediv.click( () => this.describe() );
        $('#displayarea').append(this.shapediv);
    }

    describe() {
        $('#sn').empty();
        $('#sn').append(`Shape Name: ${this.name}`);
        $('#w').empty();
        $('#w').append(`Width: ${this.width} pixels`);
        $('#h').empty();
        $('#h').append(`Height: ${this.height} pixels`);
        $('#r').empty();
        $('#r').append(`Radius: ${this.radius} pixels`);
        $('#a').empty();
        $('#a').append(`Area: ${this.area} pixels`);
        $('#p').empty();
        $('#p').append(`Perimeter: ${this.perimeter} pixels`);
    }
}

class Circle extends Shape {
    constructor(radius){
        super(radius * 2, radius * 2)
        this.radius = radius;
        this.name = 'Circle';
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.perimeter = 2 * Math.PI * this.radius;
        this.shapediv = $(`<div class="circle" style="width: ${this.width}px; height: ${this.height}px; left: ${randomNumber(this.width, 600)}px; top:${randomNumber(this.height, 600)}px"></div>`);
        this.shapediv.click( () => this.describe());
        $('#displayarea').append(this.shapediv);
    }

    describe() {
        console.log(this.height);
        $('#sn').empty();
        $('#sn').append(`Shape Name: ${this.name}`);
        $('#w').empty();
        $('#w').append(`Width: ${this.width} pixels`);
        $('#h').empty();
        $('#h').append(`Height: ${this.height} pixels`);
        $('#r').empty();
        $('#r').append(`Radius: ${this.radius} pixels`);
        $('#a').empty();
        $('#a').append(`Area: ${this.area} pixels`);
        $('#p').empty();
        $('#p').append(`Perimeter: ${this.perimeter} pixels`);
    }
}

class Triangle extends Shape {
    constructor(height){
        super(height);
        this.shapediv = $(`<div class="triangle" style="width: 0px; height: 0px; left: ${randomNumber(this.height, 600)}px; top:${randomNumber(this.height, 600)}px; border-bottom: ${this.height}px solid green; border-right: ${this.height}px solid transparent"></div>`);
        $('#displayarea').append(this.shapediv);
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
