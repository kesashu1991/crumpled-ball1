class pole{
    constructor(x,y,width,height){
        var pole_options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,pole_options);
        World.add(world,this.body);
        this.width=width
        this.height=height
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

    
};



