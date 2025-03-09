const certificateList = [
    {
      certificateName : "Belajar Dasar Pemrograman Web",
      link : "https://www.dicoding.com/certificates/6RPN1L0K8X2M"
    },
    {
      certificateName : "Alat Sensor Detak Jantung",
      link : "project/iot-project.html"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container-certificate");
  
    certificateList.forEach(certificateList => {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${certificateList.certificateName}</h5>
          <a href="${certificateList.link}" class="text-decoration-none">
            See Certificate
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </a>
        </div>
      `;
  
      cardContainer.appendChild(card);
    });
  });