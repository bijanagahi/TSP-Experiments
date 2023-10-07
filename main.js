const NODE_SIZE = 10;
const EDGE_SIZE = 1;
const NUM_NODES = 15;
const WIDTH = 640;
const HEIGHT = 480;

let nodes = [];
let edges = [];

function setup() {
    createCanvas(WIDTH, HEIGHT);
    // Don't draw points within 20% of the screen size
    let paddingX = 0.1 * WIDTH;
    let paddingY = 0.1 * HEIGHT; 
    
    for (let i =0;i<NUM_NODES;i++){
        let node = new Node(
            random(paddingX, WIDTH - paddingX),
            random(paddingY, HEIGHT - paddingY));
        
        // before addding this node, we need to calculate edges.
        // iterate through existing nodes
        let new_edges = [];
        for (let n of nodes){
            min_dist = WIDTH*HEIGHT;
            e = new Edge(node, n);
            edges.push(e);
        }
        nodes.push(node);
    }
  }
  
  function draw() {
    background(220);
    for (let e of edges){
        e.show();
    }
    for (let n of nodes){
        n.show();
    }
  }