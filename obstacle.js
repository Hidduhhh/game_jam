/**
 * Created by lahid on 13-10-2017.
 */
import Move from "./movement.js"

export default class Wall{
    constructor(x,y,width,height,color,movement,field){
        this.x = 600;
        this.y = 400;
        this.width = width;
        this.height = height;
        this.color = color;
        this.movement = movement;
        this.draw(field);
    }

    draw(field){
        field.fillStyle=this.color;
        field.fillRect(this.x,this.y,this.width,this.height);
    }
}

