class Block{
    constructor(x, y, width, height) {
        var options = {
          friction:0.4,
          restitution:0.4                   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
          push()
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          stroke("yellow")
          strokeWeight(5)
          rectMode(CENTER);
          rect(0,0,this.width,this.height)
          pop()
        }
      
      }