class ground{
    constructor(){
        this.terra = Bodies.rectangle(400,365,800,30,{isStatic: true});
        World.add(world,this.terra);
    }
    earth(){
        rectMode(CENTER);
        
        fill("brown");

        rect(400,365,800,30);
    }
}
