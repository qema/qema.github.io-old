Title: Dialogue Graphs

Click to inspect a node, or drag to move a node.

<script type="text/javascript" src="http://wanganzhou.com/lib/vis/vis.js"></script>
<link href="http://wanganzhou.com/lib/vis/vis.css" rel="stylesheet" type="text/css" />

<style type="text/css">
    #mynetwork {
	width: 100%;
	height: 800px;
	border: 1px solid lightgray;
    }
</style>
<div id="mynetwork"></div>

<script type="text/javascript">
var nodes = new vis.DataSet([
    {id: 0, label: 'BOTTOM', color: '#0099ff'},
    {id: 1, label: 'COBWEB', color: '#d099ff'},
    {id: 2, label: 'DEMETRIUS', color: '#6899ff'},
    {id: 3, label: 'EGEUS', color: '#d899ff'},
    {id: 4, label: 'FLUTE', color: '#d099ff'},
    {id: 5, label: 'Fairy', color: '#f099ff'},
    {id: 6, label: 'HELENA', color: '#c799ff'},
    {id: 7, label: 'HERMIA', color: '#be99ff'},
    {id: 8, label: 'HERNIA', color: '#e099ff'},
    {id: 9, label: 'HIPPOLYTA', color: '#9f99ff'},
    {id: 10, label: 'LYSANDER', color: '#8699ff'},
    {id: 11, label: 'Lion', color: '#e899ff'},
    {id: 12, label: 'MOTH', color: '#d099ff'},
    {id: 13, label: 'MUSTARDSEED', color: '#d099ff'},
    {id: 14, label: 'Moonshine', color: '#d899ff'},
    {id: 15, label: 'OBERON', color: '#9399ff'},
    {id: 16, label: 'PEASEBLOSSOM', color: '#d099ff'},
    {id: 17, label: 'PHILOSTRATE', color: '#f099ff'},
    {id: 18, label: 'PUCK', color: '#7899ff'},
    {id: 19, label: 'Pyramus', color: '#d099ff'},
    {id: 20, label: 'QUINCE', color: '#c799ff'},
    {id: 21, label: 'SNOUT', color: '#d099ff'},
    {id: 22, label: 'SNUG', color: '#d099ff'},
    {id: 23, label: 'STARVELING', color: '#d099ff'},
    {id: 24, label: 'THESEUS', color: '#6899ff'},
    {id: 25, label: 'TITANIA', color: '#be99ff'},
    {id: 26, label: 'Thisbe', color: '#c799ff'},
    {id: 27, label: 'Wall', color: '#e099ff'}
]);
var edges = new vis.DataSet([
    {from: 0, to: 9},
    {from: 0, to: 10},
    {from: 1, to: 0},
    {from: 1, to: 13},
    {from: 2, to: 0},
    {from: 2, to: 3},
    {from: 2, to: 6},
    {from: 2, to: 7},
    {from: 2, to: 9},
    {from: 2, to: 10},
    {from: 2, to: 11},
    {from: 2, to: 14},
    {from: 2, to: 15},
    {from: 2, to: 18},
    {from: 2, to: 19},
    {from: 2, to: 26},
    {from: 2, to: 27},
    {from: 3, to: 7},
    {from: 3, to: 9},
    {from: 3, to: 10},
    {from: 4, to: 0},
    {from: 4, to: 21},
    {from: 6, to: 0},
    {from: 6, to: 10},
    {from: 7, to: 0},
    {from: 7, to: 6},
    {from: 7, to: 10},
    {from: 7, to: 18},
    {from: 8, to: 2},
    {from: 8, to: 6},
    {from: 8, to: 7},
    {from: 8, to: 10},
    {from: 9, to: 14},
    {from: 9, to: 26},
    {from: 10, to: 9},
    {from: 11, to: 9},
    {from: 12, to: 0},
    {from: 12, to: 1},
    {from: 12, to: 13},
    {from: 12, to: 15},
    {from: 12, to: 16},
    {from: 13, to: 0},
    {from: 14, to: 10},
    {from: 14, to: 24},
    {from: 15, to: 0},
    {from: 15, to: 1},
    {from: 15, to: 5},
    {from: 15, to: 6},
    {from: 15, to: 10},
    {from: 15, to: 13},
    {from: 15, to: 16},
    {from: 15, to: 18},
    {from: 15, to: 24},
    {from: 16, to: 0},
    {from: 16, to: 1},
    {from: 16, to: 13},
    {from: 17, to: 9},
    {from: 18, to: 0},
    {from: 18, to: 4},
    {from: 18, to: 5},
    {from: 18, to: 6},
    {from: 18, to: 10},
    {from: 18, to: 20},
    {from: 18, to: 21},
    {from: 18, to: 22},
    {from: 18, to: 23},
    {from: 19, to: 9},
    {from: 19, to: 10},
    {from: 19, to: 26},
    {from: 19, to: 27},
    {from: 20, to: 0},
    {from: 20, to: 4},
    {from: 20, to: 9},
    {from: 20, to: 21},
    {from: 20, to: 22},
    {from: 21, to: 0},
    {from: 22, to: 0},
    {from: 22, to: 4},
    {from: 22, to: 21},
    {from: 23, to: 0},
    {from: 23, to: 4},
    {from: 23, to: 20},
    {from: 23, to: 21},
    {from: 23, to: 22},
    {from: 24, to: 0},
    {from: 24, to: 2},
    {from: 24, to: 3},
    {from: 24, to: 7},
    {from: 24, to: 9},
    {from: 24, to: 10},
    {from: 24, to: 11},
    {from: 24, to: 17},
    {from: 24, to: 18},
    {from: 24, to: 19},
    {from: 24, to: 27},
    {from: 25, to: 0},
    {from: 25, to: 1},
    {from: 25, to: 12},
    {from: 25, to: 13},
    {from: 25, to: 15},
    {from: 25, to: 16},
    {from: 25, to: 18},
    {from: 25, to: 24},
    {from: 26, to: 10},
    {from: 26, to: 14},
    {from: 26, to: 24},
    {from: 26, to: 27}
]);
    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };

    var options = {
        configure: {enabled: false}
    };

    // initialize your network!
var network = new vis.Network(container, data, options);

var curID = 1;
var numEdges = 0;
network.on ("click", function (params) {
    if (params.nodes.length === 0) {
	nodes.add({id: curID, label: 'Node ' + curID + '', x: params.pointer.canvas.x, y: params.pointer.canvas.y});
	for (i = 1; i < curID; i++) {
	    if (numEdges % 3 !== 0) {
	        edges.add({from: i, to: curID});
	    }
	    numEdges++;
	}
	curID++;
    }
});
</script>

## About

This is a visualization of social networks in A Midsummer Night's Dream created with Python and [vis.js](http://visjs.org), using data from the [MIT Shakespare collection](http://shakespeare.mit.edu).

Each vertex represents a character, and the edges connect characters who talk with each other. I did this by taking all the sets of characters on stage between each stage direction, and then merging these sets. This turns out to be a good heuristic because it breaks groups between character entrances and exits, and other stage directions simply cause redundant groups to form which get filtered during merging.

The edges are modeled as physical springs with vis.js so clusters tend to form based on the emergent "cliques". Finally, the characters are colored in the graph by popularity.