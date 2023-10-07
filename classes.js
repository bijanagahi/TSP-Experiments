class Graph {

}

class Node {
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
    }

    show(){
        push();
        strokeWeight(NODE_SIZE);
        stroke('purple');
        point(this.x, this.y);
        pop();
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