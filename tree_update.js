/* --------------------- ZOOM ----------------------- */
/* -------------------------------------------------- */

/* TODO: add contents from the codemirror, in a smart way */
function update() {
    /* based on http://bl.ocks.org/mbostock/999346 */
    if (toggleCollapse = !toggleCollapse)
        $("#tree-container>svg").css('background', '');
    else
        $("#tree-container>svg").css('background', 'white');

    /** Group containing the nodes and links **/
    svg = d3.select("#tree-container>svg>g");

    var node = svg.selectAll(".node"),
        link = svg.selectAll(".link");

	/ * create a node, assign it at random to a parent */
    var n = {id: nodes.length, "name": ""+ nodes.length},
            p = nodes[Math.random() * nodes.length | 0];
	
    if (p.children) p.children.push(n); else p.children = [n];

    /* very confusing because nodes was calculated outside of the function */
    nodes.push(n);
    /* no need to add a link explicity  to the model?
       But now reconstruct the VISUAL nodes using tree.nodes( */

    // Recompute the layout and data join.
    // Notice that the root tree DATA has been updated by nodes.push
    // resulting on a very convenient root call
    node = node.data(tree.nodes(root), function (d) {
        return d.id;
    });
    link = link.data(tree.links(nodes), function (d) {
        return d.source.id + "-" + d.target.id;
    });

    var nodeEnter = node.enter().append("g");

    nodeEnter.append("circle")
                .attr("class", "node")
                .attr("r", 4)
        .attr("cx", function (d) {
	    // parent is a apparently a propertiy updated by the
	    // layout routine
                    return d.parent.x;
                })
                .attr("cy", function (d) {
                    return d.parent.y;
                });

    // TODO: start the text transparent and transition to the final color
    nodeEnter.append("text")
        .attr("class", "text")
	.attr("x", function(d) {
            return d.parent.x;
	})
	.attr("y", function(d) {
            return d.parent.y;
	})
	.style("fill","red")
	.text(function(d) {
                return d.name;
        });


    // Add entering links in the parent’s old position.
    /*
    link.enter().insert("path", ".node")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = {x: d.px, y: d.py};
	    var p = {x: d.x, y: d.y};
            return diagonal({source: p, target: o});
        });
*/
    // Not quite sure what happens to removed nodes

    // Transition nodes and links to their new positions.

    var t = svg.transition()
        .duration(750);

//    t.selectAll(".link")
//        .attr("d", diagonal);

    t.selectAll(".node")
        .attr("cx", function (d) {
            return d.px = d.x;
        })
        .attr("cy", function (d) {
            return d.py = d.y;
        });

    t.selectAll(".text")
        .attr("x", function (d) {
            return d.px;
        })
        .attr("y", function (d) {
            return d.py;
        });
}


