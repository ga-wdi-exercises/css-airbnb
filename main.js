var spots = document.getElementsByClassName('spot');

for (var i = 0; i < spots.length; i++) {
  var spot = spots[i];
  spot.style.backgroundImage = "url('img/" + spot.id + ".jpg')";
}
