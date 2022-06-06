window.addEventListener('DOMContentLoaded', (event) => {

  fetch("./templates/header.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("header").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
  });

  fetch("./templates/footer.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
  });

  // get current file name
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);

  // Remove the extension
  filename = file.substring(0, file.lastIndexOf('.')) 
  console.log(fileName);

  var link = Document.getElementById(fileName);
  link.classList.add("current-page");

});

