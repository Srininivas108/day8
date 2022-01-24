class Movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(a){
        var x=[];
        for(let i=0;i<a.length;i++){
            if(a[i].rating === 'PG'){
                x.push(a[i]);
            }
        }
        
      return x;  
    }
    
}

var s1=new Movie('Casino Royale','Eon Productions','PG13');
var s2=new Movie('aaa','xyz');
var s3=new Movie('pushpa','mytri production','PG11');
var s4=new Movie('RRR','DVV');
var a=[s1,s2,s3,s4];
console.log(s1.getPG(a));
