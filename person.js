class Person{
    constructor(name,age,profession,city){
        this.name=name;
        this.age=age;
        this.profession= profession;
        this.city=city;
    }
}
var p1=new Person('ajay',25,'engineer','Chennai');
var p2=new Person('vinay',27,'doctor','HYD');
var p3=new Person('arun',28,'Actor','Mumbai');

console.log(p1.age);
console.log(p2.name);
console.log(p3.city);