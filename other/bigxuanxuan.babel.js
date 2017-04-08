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
        console.log(data);
        data = data.data;
        data = data.map(function (v) {
            return {
                label: v.name.replace(/<[\s\S]+?>/g, ""),
                value: v.score
            };
        });

        function $(selector) {
            var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

            return el.querySelector(selector);
        }

        var radius = 100;
        var svg = d3.select("#container").append("svg").attr("id", "my-svg").attr("width", 200).attr("height", 200);

        var g = svg.append("g");

        var color = ["#19B29F", "#53C8BA", "#62DDCF", "#82E3D9", "#9EF0E8", "#74E7DA", "#93F3E8", "#ACFBF2", "#BFF3EE", "#D0FFFB"];

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

        var pieWhite = getPie().endAngle(startAngle + Math.PI * 2).padAngle(0);

        var labelArc = d3.arc().outerRadius(radius + 35).innerRadius(radius + 35);

        var whiteArc = d3.arc().outerRadius(radius - 10).innerRadius(0);

        var arc = g.selectAll(".arc").data(pie0(data)).enter().append("g").attr("class", "arc");

        var pieData = pie(data);
        var text = arc.append("text").attr("class", "label").attr("transform", function (d, i) {
            return "translate(" + labelArc.centroid(pieData[i]) + ")";
        }).attr("dy", "0.35em").attr("opacity", 0).text(function (d) {
            return d.data.label;
        });
        setTimeout(function () {
            //async to get real width
            text.attr("transform", function (d, i) {
                var _labelArc$centroid = labelArc.centroid(pieData[i]),
                    x = _labelArc$centroid[0],
                    y = _labelArc$centroid[1];

                if (x < 0) {
                    x -= this.clientWidth + 10;
                }
                return "translate(" + [x, y] + ")";
            }).attr("opacity", 1);
        });

        arc.append("path").attr("class", "link").attr("d", function (d, i) {
            d = labelArc.centroid(pieData[i]);
            return diagonal(d[0], d[1], d[0] / 3, d[1] / 3);
        });
        arc.append("path").data(pieWhite(data)).attr("fill", "#ffffff").attr("d", whiteArc);

        arc.append("path").attr("fill", function (d, i) {
            return color[i % color.length];
        }).transition().duration(1000).attrTween("d", function (d, i) {
            return arcTween(pie(data)[i].startAngle, pie(data)[i].endAngle, radius - 10, i)(d);
        });

        var arc1 = d3.arc().innerRadius(1);

        function arcTween(sa, ea, r, i) {
            //start angle, end angle, radius, index
            return function (d) {
                var interpolate = d3.interpolate(d.startAngle, sa);
                var interpolate2 = d3.interpolate(d.endAngle, ea);
                var interpolateR = d3.interpolate(10, r);
                return function (t) {
                    d.startAngle = interpolate(t);
                    d.endAngle = interpolate2(t);
                    return arc1.outerRadius(interpolateR(t))(d);
                };
            };
        }
    }
});