class Roof {
    constructor(x,y){
      var options = {
          isStatic: true,
          "restitution":0.3,
          "friction":1,
          "density":1
      }
      this.body = Bodies.rectangle(x,y,700,50,options);
      this.width = 700;
      this.height = 50;
      World.add(world,this.body);
      }
      display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          
          rectMode(CENTER);
          fill("white");
          rect(10,100,this.width,this.height);
          pop();
      }
      };
      