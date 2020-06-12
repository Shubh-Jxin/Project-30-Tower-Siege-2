class Ground {
    constructor(x,y,w,color){
        var options={
            isStatic:true 
        }
        this.body= Bodies.rectangle(x,y,w,20,options);
        this.width=w;
        this.height=20;
        this.color=color;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        
    }
}