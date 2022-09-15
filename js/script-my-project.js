let dataBlog = [];

function addData(event) {
  event.preventDefault();

  let gambar = document.getElementById("upload-file").files;
  let judul = document.getElementById("input-project").value;
  let deskripsi = document.getElementById("description").value;

  gambar = URL.createObjectURL(gambar[0]);
  console.log(gambar);

  let blog = {
    gambar,
    judul,
    deskripsi,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  document.getElementById("content").innerHTML='';
  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);
    
    document.getElementById("content").innerHTML += `

    <div class="card">
          <div class="image-content">
            <img src="${gambar}" alt="foto" style="width: 100%" />
          </div>
          <div>
            <p style="font-weight: bold">${judul}</p>
          </div>
          <div>
            ${deskripsi}
          </div>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>`;
  }
}
