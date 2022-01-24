class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(x){
        this.radius= x;
    }
    getColor(){
        return this.color;
    }
    setColor(c){
        this.color=c;
    }
   
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

var s=new circle(10,'red');
console.log(s.radius);
s1.setRadius(3);
s1.setColor('green');
console.log(s1.getArea());
console.log(s1.getCircumference());