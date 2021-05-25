class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:400

        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        



    }
    display(){  
        if(this.sling.bodyA){
        
        
            var posA=this.sling.bodyA.position
            var posB=this.pointB
            push()
            strokeWeight(5)
            fill("yellow")
            stroke("green")
            line(posA.x,posA.y,posB.x,posB.y)
            pop()
            }
        }
    }