AFRAME.registerComponent('last-draw', {
    schema: {},

    tick: function () {
        var sceneEl = this.el; // Reference to the component's entity
        var cam = document.getElementById("cam");
        var spheres = sceneEl.querySelectorAll('.sphere');
        var sphereLocations;
        var listOfObjects = [];
spheres.forEach(function(s) {
    var pos = s.getAttribute('position');
    var singleObj = {}
    singleObj['object'] = s;
    singleObj['position'] = pos;
    listOfObjects.push(singleObj);
});

console.log(listOfObjects);
    }
});
