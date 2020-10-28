class Division{
    constructor(x, y, w, h){
        var options = {

            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body)
    }

    for(var k = 0; k <= width;k = k + 80){
    divisionHeight.push(new Division(k,divisionHeight/2, 10,divisionHeight));
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this,h);
    }
}