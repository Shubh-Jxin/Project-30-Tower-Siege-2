class Block{
    constructor(x,y,color){
        var options= {
            'restitution':0.8,
            'friction':0.5,
            "density" : 0.001 
        }
        this.block= Bodies.rectangle(x,y,40,40,options);
        this.width= 40;
        this.height= 40;
        this.color=color;
        this.visibility=255;
        World.add(world, this.block);
    }

    display(){
        var angle=this.block.angle;
        var pos= this.block.position;
        stroke(0);
        strokeWeight(3);
        
        
        if(this.block.speed<3.5){
        fill(this.color);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.block);
            push();
            this.visibility= this.visibility-5
            //rect(pos.x,pos.y,this.width,this.height);
            tint(255,this.visibility);
            pop();
        }
    }
}