AFRAME.registerComponent('displace-text', {
    schema: {
        value: {
            type: 'string'
        },
        width: {
            default: 1
        },
        baseline: {
            default: "top"
        },
        anchor: {
            default: "align"
        },
        color: {
            default: "#fff"
        },
        transparent: {
            default: "false"
        },
        align: {
            default: "left"
        },
        shader: {
            default: "msdf"
        },
        font: {
            default: "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/librebaskerville/LibreBaskerville-Regular.json"
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        var lines = data.value.split(" \\n ");
        var yDisplace = 0;
        lines.forEach(function (line) {
            words = line.split(" ");
            var lineWidth = (line.length+1) * (1/40);
            var xDisplace = (-lineWidth/2)*data.width;
            words.forEach(function (word) {
                var scaleEl = document.createElement('a-entity');
                scaleEl.object3D.position.set(0, 0, 0);
                var wordEl = document.createElement('a-entity');
                var randomZ = Math.random()*2;
                wordEl.setAttribute('text', {
                    width: data.width,
                    baseline: data.baseline,
                    anchor: data.anchor,
                    color: data.color,
                    transparent: data.transparent,
                    align: data.align,
                    shader: data.shader,
                    font: data.font,
                    value: word
                });
                var wordWidth = (word.length+1) * (data.width/40);
                wordEl.object3D.position.set(xDisplace, yDisplace, -2);
                xDisplace += wordWidth;
                console.log(wordWidth);
                scaleEl.object3D.scale.x += randomZ;
                scaleEl.object3D.scale.y += randomZ;
                scaleEl.object3D.scale.z += randomZ;
                scaleEl.appendChild(wordEl)
                el.appendChild(scaleEl);
            });
            yDisplace -= 0.06*data.width;
        });
        
        


    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
});
