class Ground {

    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            'restitution':1,
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
        
        this.width=width;
    
        this.height=height;
    }

    display (){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
};