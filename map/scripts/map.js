"use strict";

let latsList = [];
let lngsList = [];

window.addEventListener("DOMContentLoaded", function () {
    let popupTemplate = document.querySelector
        ("#template-infowindow").innerHTML;
    let compiledPopupTemplate = Handlebars.compile(popupTemplate);
    let map = L.map("map_container");
    map.setView([0, 0], 2);
    // required attribution
    var attributionHTML =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    // create tile layer with attribution
    let tileLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: attributionHTML,
        }
    );
    tileLayer.addTo(map);
    let markersLayer = new L.LayerGroup();

    for (let place of parksData.parks) {
        console.log(place);
        latsList.push(place.latitude);
        lngsList.push(place.longitude);
        let latlng = [place.latitude, place.longitude];
        let popupHTML = compiledPopupTemplate(place);
        let marker = L.marker(latlng);
        marker.bindPopup(popupHTML);
        markersLayer.addLayer(marker);
    }
    markersLayer.addTo(map);

    let padding = 0.5;  // lat and lang padding
    // fitBounds - takes two corners
    map.fitBounds([
        [Math.min(...latsList) - padding,
        Math.min(...lngsList) - padding],
        [Math.max(...latsList) + padding,
        Math.max(...lngsList) + padding]
    ]);
});
