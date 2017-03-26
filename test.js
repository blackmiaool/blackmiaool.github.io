

function Neuron(brain, layer) {
    var that = this;
    brain.counter++;
    brain.globalReferenceNeurons[brain.counter] = this;
    this.active = true; //as the brain mutates, some neurons and 
    //connections are disabled via this property
    this.layer = layer;
    this.id = brain.counter;
    this.connected = {};
    this.connections = {};
    this.connect = function (target) {
        if (that.active == true) {
            new Connection(brain, this, target, function (id, connection) {
                brain.globalReferenceConnections[id] = connection;
                that.connections[id] = connection;
            });
        }
    };
}

function Connection(brain, source, target, callback) {
    if (source.layer < target.layer) {
        brain.counter++;
        brain.globalReferenceConnections[brain.counter] = this;
        this.active = true; //as the brain mutates, some neurons and 
        //connections are disabled via this property
        this.id = brain.counter;
        this.source = source;
        this.target = target;
        target.connected[this.id] = this;
        callback(this.id, this);
    }
}


function renderBrain(brain, context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var width = canvas.width;
    var height = canvas.height;
    var layers = brain.layers;
    var heightDivision = height / layers;
    var layerList = [];
    for (var i1 = 0; i1 < brain.layers; i1++) {
        layerList.push([]);
        for (var prop1 in brain.globalReferenceNeurons) {
            if (brain.globalReferenceNeurons[prop1].layer === i1) {
                layerList[i1].push(brain.globalReferenceNeurons[prop1]);
            }
        }
    }

    function renderLayer(layer, layerCount, layerTotal) {
        var length = layer.length;
        var widthDivision = width / length;
        var neuronCount = 0;
        for (var i1 = 0; i1 < layer.length; i1++) {
            neuronCount++;
            const getActiveProps = obj => Object.keys(obj).filter(k => obj[k].active)

            function hasActivePathAhead(obj) {
                if (obj.active) {
                    var targets = getActiveProps(obj.connections);
                    if (obj.layer === 2) {
                        return true;
                    } else if (targets.length) {
                        var target;
                        for (var i1 = 0; i1 < targets.length; i1++) {
                            target = targets[i1];
                            var result = hasActivePathAhead(obj.connections[target].target);
                            if (result) {
                                return true;
                            }
                        }
                        return false;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            function hasActivePathBehind(obj) {
                if (obj.active) {
                    var sources = getActiveProps(obj.connected);
                    if (obj.layer === 0) {
                        return true;
                    } else if (sources.length) {
                        var source;
                        for (var i1 = 0; i1 < sources.length; i1++) {
                            source = sources[i1];
                            var result =
                                hasActivePathBehind(obj.connected[source].source);
                            return result;
                        }
                        return false;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            if (hasActivePathAhead(layer[i1]) && hasActivePathBehind(layer[i1])) {
                context.beginPath();
                context.arc((widthDivision * neuronCount) -
                    (0.5 * widthDivision),
                    (heightDivision * layerCount) -
                    (heightDivision * 0.5),
                    5, 0, 2 * Math.PI, false);
                context.fillStyle = '#adf442';
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = '#56cc41';
                context.stroke();
                var connectionCount = 0;
                for (var i2 = 0; i2 < Object.keys(layer[i1].connections).length; i2++) {
                    var connection =
                        layer[i1].connections[Object.keys(layer[i1].connections)[i2]];
                    if (hasActivePathAhead(connection.target) &&
                        hasActivePathBehind(connection.target)) {
                        var targetLayer = connection.target.layer;
                        var index = layerList[targetLayer].findIndex(function (e) {
                            return e == connection.target
                        });
                        if (index > -1) {
                            var targetLayerLength = Object.keys(layerList[targetLayer]).length;
                            var targetLayerWidthDivision = width / targetLayerLength;
                            var p1 = {
                                x: (widthDivision * neuronCount) - (0.5 * widthDivision),
                                y: (heightDivision * layerCount) - (heightDivision * 0.5)
                            };
                            var p2 = {
                                x: (index * targetLayerWidthDivision) +
                                    (0.5 * targetLayerWidthDivision),
                                y: (targetLayer * heightDivision) +
                                    (heightDivision * 0.5)
                            };
                            connectionCount++;
                            context.beginPath();
                            context.moveTo(p1.x, p1.y);
                            context.lineTo(p2.x, p2.y);
                            context.lineWidth = 1;
                            context.stroke();
                        }
                    }
                }
            }
        }
    }
    var layerCount = 0;
    for (i1 = 0; i1 < layerList.length; i1++) {
        layerCount++;
        renderLayer(layerList[i1], layerCount, layerList.length);
    }
}





var brain = {
    counter: 0,
    layers: 3,
    globalReferenceNeurons: {},
    globalReferenceConnections: {},
}
var layer0 = [new Neuron(brain, 0), new Neuron(brain, 0), new Neuron(brain, 0),new Neuron(brain, 0), new Neuron(brain, 0)];
var layer1 = [new Neuron(brain, 1), new Neuron(brain, 1), new Neuron(brain, 1)];
var layer2 = [new Neuron(brain, 2), new Neuron(brain, 2), new Neuron(brain, 2), new Neuron(brain, 2)];

layer0[0].connect(layer1[1]);
layer0[1].connect(layer1[0]);
layer0[3].connect(layer1[0]);
layer1[0].connect(layer2[0]);

layer1[2].connect(layer2[2]);
layer1[1].connect(layer2[3]);



var canvas = document.getElementById('cav');

var ctx = canvas.getContext('2d');
renderBrain(brain, ctx, canvas);