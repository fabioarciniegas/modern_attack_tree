    /* update */
    function update() {
        /* based on http://bl.ocks.org/mbostock/999346 */
        var g = d3.select("#tree-container>svg>g");
        if (toggleCollapse = !toggleCollapse)
            $("#tree-container>svg").css('background', '');
        else
            $("#tree-container>svg").css('background', 'white');

        /** Group containing the nodes and links **/
        svg = d3.select("#tree-container>svg>g");

        var node = svg.selectAll(".node"),
                link = svg.selectAll(".link");


        var n = {id: nodes.length},
                p = nodes[Math.random() * nodes.length | 0];
        if (p.children) p.children.push(n); else p.children = [n];
        nodes.push(n);

        // Recompute the layout and data join.
        node = node.data(tree.nodes(root), function (d) {
            return d.id;
        });
        link = link.data(tree.links(nodes), function (d) {
            return d.source.id + "-" + d.target.id;
        });


        // Add entering nodes in the parent’s old position.
        node.enter().append("circle")
                .attr("class", "node")
                .attr("r", 4)
                .attr("cx", function (d) {
                    return d.parent.px;
                })
                .attr("cy", function (d) {
                    return d.parent.py;
                });

        // Add entering links in the parent’s old position.
        link.enter().insert("path", ".node")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = {x: d.source.px, y: d.source.py};
                    return diagonal({source: o, target: o});
                });

        // Transition nodes and links to their new positions.
        var t = svg.transition()
                .duration(10);

        t.selectAll(".link")
                .attr("d", diagonal);

        t.selectAll(".node")
                .attr("cx", function (d) {
                    return d.px = d.x;
                })
                .attr("cy", function (d) {
                    return d.py = d.y;
                });

    }
