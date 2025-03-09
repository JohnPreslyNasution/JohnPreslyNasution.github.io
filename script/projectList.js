const projectList = [
  {
    projekName : "Aplikasi ToDoLi Berbasis Android",
    caption : "Aplikasi ToDoLi ini menerapkan interaksi AI untuk membantu menyusun daftar kerja.",
    link : "project/iot-project.html"
  },
  {
    projekName : "Alat Sensor Detak Jantung",
    caption : "Rakitan alat sensor detak jantung menggunkan pulse sensor heart dan Arduino Uno.",
    link : "project/iot-project.html"
  }
  ,
  {
    projekName : "Aplikasi Toko Kopi Berbasis Desktop",
    caption : "Aplikasi sederhana untuk mengelola toko kopi.",
    link : "project/iot-project.html"
  },
  {
    projekName : "Aplikasi Toko Kopi Berbasis Desktop",
    caption : "Aplikasi sederhana untuk mengelola toko kopi.",
    link : "project/iot-project.html"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("card-container");

  projectList.forEach(projectList => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${projectList.projekName}</h5>
        <p class="card-title">${projectList.caption}</p>
        <a href="${projectList.link}" class="text-decoration-none">
          See More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </a>
      </div>
    `;

    cardContainer.appendChild(card);
  });
});