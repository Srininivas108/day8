class uber{
    constructor(km,price){
        this.km=km
        this.price=price;
    }
    getTotalPrice(){
        return this.price*this.km;
    }
}
var r1=new uber(5,13);
var r2=new uber(200,13);
console.log(r1.getTotalPrice());
console.log(r2.getTotalPrice());