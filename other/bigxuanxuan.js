 $.ajax({
            url: "http://webh.huajiao.com/live/rankList?fmt=jsonp&uid=102464246&name=fans",
            jsonp: "_callback",
            dataType: "jsonp",
            data: {
                fmt: "jsonp",
                uid: 102464246,
                name: "fans"
            },
            success: function(data) {
                console.log(data);
                data = data.data;
                data = data.map(function(v) {
                    return {
                        label: v.name.replace(/<[\s\S]+?>/g, ""),
                        value: v.score
                    }
                });

                function $(selector, el = document) {
                    return el.querySelector(selector);
                }

                const radius = 100;
                const svg = d3.select("#container").append("svg")
                    .attr("id", "my-svg")
                    .attr("width", 200)
                    .attr("height", 200)

                const g = svg.append("g")

                const color = ["#19B29F", "#53C8BA", "#62DDCF", "#82E3D9", "#9EF0E8", "#74E7DA", "#93F3E8", "#ACFBF2", "#BFF3EE", "#D0FFFB"];

                function diagonal(x, y, x0, y0) {
                    return "M" + [x, y] + "C" + [(x + x0) / 2, (y+y0)/2] + " " + [(x + x0) / 2, (y+y0)/2] + " " + [x0, y0];
                }
                const padAngle = Math.PI / 200;

                const startAngle = Math.PI / 2 * 1.5;

                function getPie() {
                    return d3.pie()
                        .startAngle(startAngle)
                        .sort(null)
                        .value(function(d) {
                            return d.value;
                        });
                }
                const pie0 = getPie().endAngle(Math.PI / 2 + Math.PI * 0.5)
                    .padAngle(padAngle)

                const pie = getPie()
                    .endAngle(startAngle + Math.PI * 2)
                    .padAngle(padAngle)

                const pieWhite = getPie()
                    .endAngle(startAngle + Math.PI * 2)
                    .padAngle(padAngle)

                const labelArc = d3.arc()
                    .outerRadius(radius + 35)
                    .innerRadius(radius + 35);

                const whiteArc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);


                const arc = g.selectAll(".arc")
                    .data(pie0(data))
                    .enter()
                    .append("g")
                    .attr("class", "arc");

                const pieData = pie(data);
                const text = arc.append("text")
                    .attr("class", "label")
                    .attr("transform", function(d, i) {
                        return `translate(${labelArc.centroid(pieData[i])})`
                    })
                    .attr("dy", "0.35em")
                    .attr("opacity", 0)
                    .text(function(d) {
                        return d.data.label
                    });
                setTimeout(function() { //async to get real width
                    text.attr("transform", function(d, i) {
                            let [x, y] = labelArc.centroid(pieData[i]);
                            if (x < 0) {
                                x -= (this.clientWidth + 10);
                            }
                            return `translate(${[x,y]})`
                        })
                        .attr("opacity", 1)
                });


                arc.append("path")
                    .attr("class", "link")
                    .attr("d", function(d, i) {
                        d = labelArc.centroid(pieData[i]);
                        return diagonal(d[0], d[1], d[0] / 3, d[1] / 3);
                    });
                arc.append("path")
                    .data(pieWhite(data))
                    .attr("fill", "#ffffff")
                    .attr("d", whiteArc)

                arc.append("path")
                    .attr("fill", function(d, i) {
                        return color[i % color.length];
                    })
                    .transition().duration(1000)
                    .attrTween("d", function(d, i) {
                        return arcTween(pie(data)[i].startAngle, pie(data)[i].endAngle, radius - 10, i)(d);
                    });

                const arc1 = d3.arc()
                    .innerRadius(1);

                function arcTween(sa, ea, r, i) { //start angle, end angle, radius, index
                    return function(d) {
                        const interpolate = d3.interpolate(d.startAngle, sa);
                        const interpolate2 = d3.interpolate(d.endAngle, ea);
                        const interpolateR = d3.interpolate(10, r);
                        return function(t) {
                            d.startAngle = interpolate(t);
                            d.endAngle = interpolate2(t);
                            return arc1.outerRadius(interpolateR(t))(d);
                        };
                    };
                }
            }
        });