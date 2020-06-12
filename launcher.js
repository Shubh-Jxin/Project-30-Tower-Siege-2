class Launcher {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.01
        }
        this.launcher= Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.launcher);
    }
    attatch(body){
        this.launcher.bodyA=body
    }

    fly(){
       this.launcher.bodyA=null;
    }

    display(){
        if(this.launcher.bodyA){
       var posA= this.launcher.bodyA.position;
       var posB= this.pointB;
       stroke(225)
       strokeWeight(3);
       line(posA.x,posA.y,posB.x,posB.y);
         }
    }
}

