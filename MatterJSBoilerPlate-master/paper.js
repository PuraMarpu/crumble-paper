class paper{
    constructor(x,y){
      this.pap = Bodies.circle(x,y,10);
      World.add(world,this.pap);
    }
    display(){
        var pos = this.pap.position;
        var physics ={
          restitution: 0.4
        }

        ellipseMode(CENTER);
        fill("red");

        ellipse(pos.x,pos.y,20);
    }
}