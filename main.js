const NODE_SIZE = 30;
const EDGE_SIZE = 1;
const NUM_NODES = 15;
const WIDTH = 640;
const HEIGHT = 480;

let nodes = [];
let edges = [];

let debug_point;
let DISTANCE = Infinity;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    // Don't draw points within 20% of the screen size
    let paddingX = 0.1 * WIDTH;
    let paddingY = 0.1 * HEIGHT;

    // edges = new Array(NUM_NODES);
    // edges.fill(new Array(NUM_NODES).fill(0, 0), 0);

    for (let i = 0; i < NUM_NODES; i++) {
        let x = random(paddingX, WIDTH - paddingX);
        let y = random(paddingY, HEIGHT - paddingY);

        // Make sure the nodes aren't too close to eachother
        while (nodes.some(n => dist(x, y, n.x, n.y) < NODE_SIZE * 2)) {
            x = random(paddingX, WIDTH - paddingX);
            y = random(paddingY, HEIGHT - paddingY);
        }

        let node = new Node(/* id */ i, x, y);
        // // Add edges
        // for (let n of nodes){
        //     min_dist = WIDTH*HEIGHT;
        //     e = new Edge(node, n);
        //     edges.push(e);
        // }
        nodes.push(node);
    }
    debug_point = createVector(WIDTH / 2, HEIGHT / 2);
    frameRate(10)
}

function draw() {
    background(220);
    edges.forEach(e => e.show());
    nodes.forEach(n => n.show());
    point(debug_point);
    textSize(20);
    edges_copy = edges;
    prev_dist = DISTANCE;
    nearest_neighbor();
    if (prev_dist < DISTANCE) {
        edges = edges_copy;
        DISTANCE = prev_dist;
    }
    text("TOTAL DISTANCE: "+DISTANCE,0,HEIGHT-10)
}

/**
 * Nearest Neighbor Algorithm starts at a random node and adds the nearest adjacent
 * node to the tour, the repeating the process for that node, until all nodes have
 * been visited. The final node is then linked to the start node. 
 */
function nearest_neighbor() { 
    edges = [];
    let visited = new Set();
    current_node = random(nodes); // random starting node
    current_id = current_node.id
    visited.add(current_id);
    starting_id = current_id;
    // repeat until all nodes have been visited
    while (visited.size < nodes.length) {
        current_node = nodes[current_id]
        nearest_id = nodes
            .filter(n => !visited.has(n.id))
            .map(n => [n.id, dist(n.x, n.y, current_node.x, current_node.y)])
            .sort((a, b) => a[1] - b[1])
            .shift()[0]; // fuck this is hacky
        visited.add(nearest_id)
        edges.push(new Edge(nodes[current_id], nodes[nearest_id]))
        current_id = nearest_id;
    }
    // lastly, connect the first and last node together
    edges.push(new Edge(nodes[current_id], nodes[starting_id]))
    DISTANCE = round(edges.reduce((acc, cur)=>acc+cur.d,0))
    // console.log("Total Distance: "+DISTANCE)
}


function mousePressed() {
    // find the closest node to the mouse
    // selected_node = nodes.find(n => dist(n.x, n.y, mouseX, mouseY) < NODE_SIZE);
    // if (!selected_node){
    //     console.log('no node selected');
    //     return;
    // }
    // selected_node.is_selected = true;
    // debug_point = createVector(mouseX, mouseY);
    console.log("Execution Stopped");
    noLoop();

}

function debug() {
    console.log(debug_point);
    nodes.forEach(n => console.log("Node ID: " + n.id + " dist: " + dist(debug_point.x, debug_point.y, n.x, n.y)));
}