const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});


// GOOGLE MAPS

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -12.0431800, lng: -77.0282400 },
    zoom: 8,
  });
}

// GRAPHS
var xValues = ["Exito", "Fracaso"];
var yValues = [98, 2];
var barColors = [
  "#00aba9",
  "#b91d47",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});