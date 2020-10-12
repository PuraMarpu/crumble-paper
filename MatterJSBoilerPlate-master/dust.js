class bin{
    constructor(x,y,width,height){
       this.gara = Bodies.rectangle(x,y,width,height);
       World.add(world,this.gara);

       this.gara.franxx = height;
       this.gara.darling = width;
    }
    hiro(){
        var pos = this.gara.position;

        rectMode(CENTER);

        fill("green");
        rect(pos.x,pos.y,this.gara.darling,this.gara.franxx);
    }
}