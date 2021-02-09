class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
         'restitution':1.0,
         'friction':0.5,
         'density':1.2

        }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=radius

    }
    display(){
        ellipseMode(RADIUS)
        fill("chartreuse");
        circle(this.body.position.x,this.body.position.y,this.radius);
    }
    
};