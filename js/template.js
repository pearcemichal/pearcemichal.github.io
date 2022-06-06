window.addEventListener('DOMContentLoaded', (event) => {

  // get current file name
  var url = window.location.pathname;
  var file = url.substring(url.lastIndexOf('/')+1);

  // Remove the extension
  var filename = file.substring(0, file.lastIndexOf('.')) 

  fetch("./templates/header.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("header").innerHTML = html;

        var link = Document.getElementById(fileName);
        link.classList.add("current-page");
    })
    .catch((error) => {
        console.warn(error);
  });

  fetch("./templates/footer.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
  });

});

