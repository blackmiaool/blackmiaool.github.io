"use strict";

$.ajax({
    url: "http://webh.huajiao.com/live/rankList?fmt=jsonp&uid=102464246&name=fans",
    jsonp: "_callback",
    dataType: "jsonp",
    data: {
        fmt: "jsonp",
        uid: 102464246,
        name: "fans"
    },
    success: function success(data) {
        var color = ["#19B29F", "#53C8BA", "#62DDCF", "#82E3D9", "#9EF0E8", "#74E7DA", "#93F3E8", "#ACFBF2", "#BFF3EE", "#D0FFFB"];
        data = data.data;
        data = data.map(function (v, i) {
            return {
                label: v.name.replace(/<[\s\S]+?>/g, ""),
                value: v.score,
                avatar: v.avatar,
                color: color[i % color.length]
            };
        });
        data.forEach(function (d) {
            $("#container-select").append($("<div><label><input type=\"checkbox\" checked data-name=\"" + d.label + "\">" + d.label + "(" + d.value + ")</label><div>"));
        });

        $("#container-select input").on("change", function (e) {
            var newData = [];
            $("#container-select input:checked").each(function () {
                var name = $(this).data("name");
                newData.push(data.filter(function (d) {
                    return d.label === name;
                })[0]);
            });
            update(newData);
        });

        var width = 300;
        var height = 300;
        var radius = 100;
        var svg = d3.select("#container").append("svg").attr("id", "my-svg").attr("width", width).attr("height", height);

        var g = svg.append("g");
        g.attr("transfrom", "translate(" + width / 2 + "," + height / 2 + ")");

        function diagonal(x, y, x0, y0) {
            return "M" + [x, y] + "C" + [(x + x0) / 2, (y + y0) / 2] + " " + [(x + x0) / 2, (y + y0) / 2] + " " + [x0, y0];
        }
        var padAngle = Math.PI / 200;

        var startAngle = Math.PI / 2 * 1.5;

        function getPie() {
            return d3.pie().startAngle(startAngle).sort(null).value(function (d) {
                return d.value;
            });
        }

        var pie0 = getPie().endAngle(Math.PI / 2 + Math.PI * 0.5).padAngle(padAngle);

        var pie = getPie().endAngle(startAngle + Math.PI * 2).padAngle(padAngle);

        var pieWhite = getPie().endAngle(startAngle + Math.PI * 2).padAngle(padAngle);

        var labelArc = d3.arc().outerRadius(radius + 35).innerRadius(radius + 35);

        var whiteArc = d3.arc().outerRadius(radius).innerRadius(0);
        var lastData = void 0;
        update(data, true);

        function update(data) {
            var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var pieData0 = void 0;
            if (first) {
                pieData0 = pie0(data);
            } else {
                if (data.length < lastData.length) {
                    pieData0 = pie(lastData);
                    pieData0 = pieData0.filter(function (p) {
                        return data.some(function (d) {
                            return p.data.label === d.label;
                        });
                    });
                } else {
                    var p1 = pie(lastData);
                    var p2 = pie(data);
                    var index = void 0;
                    p2.forEach(function (p, i) {
                        var ret = p1.every(function (d) {
                            return p.data.label !== d.data.label;
                        });
                        if (ret) {
                            index = i;
                        }
                        return ret;
                    });
                    p1.splice(index, 0, p2[index]);
                    pieData0 = p1;
                }
            }

            lastData = data;
            var arcUpdate = g.selectAll(".arc").data(pieData0, function (d) {
                return d.data.label;
            });

            arcUpdate.exit().remove();

            var arcEnter = arcUpdate.enter().append("g").attr("class", "arc");

            var arc = arcEnter.merge(arcUpdate);

            var pieData = pie(data);

            arc.selectAll("text.label").remove();
            var text = arc.append("text").attr("class", "label").attr("transform", function (d, i) {
                var _labelArc$centroid = labelArc.centroid(pieData[i]),
                    x = _labelArc$centroid[0],
                    y = _labelArc$centroid[1];

                var gap = 20;
                if (x > 0) {
                    x += gap;
                } else {
                    x -= gap;
                }
                return "translate(" + [x, y] + ")";
            }).attr("dy", "0.35em").text(function (d) {
                return d.data.label;
            }).attr("text-anchor", function (d, i) {
                var _labelArc$centroid2 = labelArc.centroid(pieData[i]),
                    x = _labelArc$centroid2[0],
                    y = _labelArc$centroid2[1];

                if (x < 0) {
                    return "end";
                }
                return "start";
            });

            arc.selectAll("path.link").remove();
            arc.append("path").attr("class", "link").attr("d", function (d, i) {
                d = labelArc.centroid(pieData[i]);
                var ratio = Math.sqrt(d[0] * d[0] + d[1] * d[1]) / radius;
                return diagonal(d[0], d[1], d[0] / ratio, d[1] / ratio);
            });

            arc.selectAll("image.avatar").remove();
            var avatar = arc.append("image").attr("class", "avatar").attr("href", function (d) {
                return d.data.avatar;
            }).attr("height", "20").attr("width", "20").attr("dy", "0.35em").attr("transform", function (d, i) {
                var _labelArc$centroid3 = labelArc.centroid(pieData[i]),
                    x = _labelArc$centroid3[0],
                    y = _labelArc$centroid3[1];

                var gap = 20;
                y -= 10;
                x -= 10;
                return "translate(" + [x, y] + ")";
            });

            arcEnter.append("path").attr("class", "green").attr("fill", function (d, i) {
                return d.data.color;
            }).transition().duration(1000).attrTween("d", function (d, i) {
                return arcTween(pie(data)[i].startAngle, pie(data)[i].endAngle, radius, i, 10)(d);
            });
            if (first) {} else {
                arc.select('path.green').transition().duration(1000).attrTween("d", function (d, i) {
                    return arcTween(pie(data)[i].startAngle, pie(data)[i].endAngle, radius, i, radius)(d);
                });
            }

            var arc1 = d3.arc().innerRadius(1);

            function arcTween(sa, ea, r, i, initr) {
                //start angle, end angle, radius, index
                return function (d) {
                    var interpolate = d3.interpolate(d.startAngle, sa);
                    var interpolate2 = d3.interpolate(d.endAngle, ea);
                    var interpolateR = d3.interpolate(initr, r);
                    return function (t) {
                        d.startAngle = interpolate(t);
                        d.endAngle = interpolate2(t);
                        return arc1.outerRadius(interpolateR(t))(d);
                    };
                };
            }
        }
    }
});