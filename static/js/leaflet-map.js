function initMap() {
    var latLong = [31.696921,-106.4175507];

    var map = L.map("map").setView(latLong, 18);

    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    }).addTo(map);

    var icon = L.icon({
      iconUrl: "images/map-marker.png",
      iconSize:     [25, 41],
      //iconUrl: "images/map-loc.png",
      //iconSize:     [57, 66],
    });
    var marker = L.marker(latLong, { icon: icon }).addTo(map);
}
document.addEventListener("DOMContentLoaded", initMap);
