class Graph {

}

class Node {
    constructor(id_, x_, y_){
        this.x = x_;
        this.y = y_;
        this.id = id_;
        this.is_selected = false;
    }

    add_edge(){

    }

    show(){
        push();
        strokeWeight(EDGE_SIZE);
        stroke('purple');
        textSize(12)
        if (this.is_selected){
            fill('green')
            textColor('white');
        }
        textAlign(CENTER, CENTER)
        circle(this.x, this.y, NODE_SIZE);
        text(this.id, this.x, this.y,)
        pop();
    }

    select(){

    }
}

class Edge{
    constructor(a_, b_){
        this.a = a_;
        this.b = b_;
        this.d = dist(this.a.x, this.a.y, this.b.x, this.b.y);
    }

    show(){
        push();
        strokeWeight(EDGE_SIZE);
        stroke(150);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
        pop();
    }

}