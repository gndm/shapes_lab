// For each class, consider:
// what parameters should its constructor take in?
// what state does it need?
// what methods does it need?


// create a new class called Circle
// cheat sheet: the radius of a circle is the distance from the center to the edge. 
// A circle's perimeter is equal to 2 * pi * radius. A circle's area is equal to pi * radius * radius
// Write your Circle class here

class Cirlcle {
    constructor(radius){
        this.radius = radius;
    }
    getPeri(){
        return this.radius * 2 * Math.PI;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }


}

// create a new class called Triangle
// cheat sheet: a triangle's perimeter is equal to the sum of all its sides. 
//A triangle is a right triangle if (first side)^2 + (second side)^2 === (third side)^2
// Write your Triangle class here

class Triangle {
    constructor(s1, s2, s3){
        this.s1 = s1,
        this.s2 = s2,
        this.s3 = s3
    }
    getPeri(){
        return (this.s1 + this.s2 + this.s3)
    }
    isRightT(){
        if((Math.pow(this.s1, 2) + Math.pow(this.s2, 2)) === Math.pow(this.s3, 2)){
            return true;
        } else {
            return false
        }
    }
}



// create a new class called Rectangle
// cheat sheet: a rectangle's area is equal to the width times the height. 
//a rectangle's area is equal to the sum of all its sides (drawing a picture might help here)
// Write your Rectangle class here

class Rectangle {
    constructor(w, h){
        this.w = w,
        this.h = h
    }
    getArea(){
        return (this.w * this.h)
    }
    getPeri(){
        return ((this.w * 2) + (this.h * 2))
    }
}



// create a new class called Square
// cheat sheet: a square is just a rectangle where the width and the height are the same! 
//the tricky part here is building the right constructor. once that is done, the Rectangle class will do all the work. 
//in other words, you should not have to define a new perimeter and area for the square.
// Write your Square class here

class Square extends Rectangle {
    constructor(s){
        super(w,h);
        this.s = w
        this.s = h
    }
}




// ==================
// TEST SUITE BEGINS HERE
// ==================

// Circle tests:
// console.log('Circle Tests:')
// const myCircle = new Circle(3);
// console.log(myCircle.radius === 3);
// console.log(myCircle.perimeter() > 18.849 && myCircle.perimeter() < 18.85);
// console.log(myCircle.area() > 28.274 && myCircle.area() < 28.275);



// Triangle tests:
// console.log('Triangle Tests:')
// const myTriangle = new Triangle(2, 5, 6);
// console.log(myTriangle.side1 === 2);
// console.log(myTriangle.side2 === 5);
// console.log(myTriangle.side3 === 6);
// console.log(myTriangle.perimeter() === 13);
// console.log(myTriangle.isRightTriangle() === false);

// const myRightTriangle = new Triangle(3,4,5);
// console.log(myRightTriangle.side1 === 3);
// console.log(myRightTriangle.side2 === 4);
// console.log(myRightTriangle.side3 === 5);
// console.log(myRightTriangle.perimeter() === 12);
// console.log(myRightTriangle.isRightTriangle() === true);


// Rectangle tests:
// console.log('Rectangle Tests:')
// const myRectangle = new Rectangle(3, 5);
// console.log(myRectangle.width === 3);
// console.log(myRectangle.height === 5);
// console.log(myRectangle.perimeter() === 16);
// console.log(myRectangle.area() === 15);


// Square tests
// console.log('Square Tests:')
// const mySquare = new Square(2);
// console.log(mySquare instanceof Rectangle === true);
// console.log(mySquare.width === 2);
// console.log(mySquare.height === 2);
// console.log(mySquare.perimeter() === 8);
// console.log(mySquare.area() === 4);