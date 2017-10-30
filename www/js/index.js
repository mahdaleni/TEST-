document.addEventListener('deviceready', function() {
  var mapDiv = document.getElementById("map");
  var map = plugin.google.maps.Map.getMap(mapDiv);

  map.on(plugin.google.maps.event.MAP_READY, function() {
    map.addMarker({
      position: {lat: 0, lng: 0}
    });
  });

  var page = document.getElementById("page");
  showVirtualDialog(page, "Please click on the marker");

});

function showVirtualDialog(parentDiv, message) {
  var virtualDialog = document.createElement("div");
  virtualDialog.className = "virtualDialog";
  var text = document.createElement("div");
  text.innerText = message;
  text.style.width="200px";
  text.style.height="50px";
  virtualDialog.appendChild(text);
  virtualDialog.addEventListener("click", function() {
    parentDiv.removeChild(virtualDialog);
    virtualDialog.removeEventListener("click", arguments.callee);
    virtualDialog = null;
  });
  parentDiv.appendChild(virtualDialog);
  return virtualDialog;
}
