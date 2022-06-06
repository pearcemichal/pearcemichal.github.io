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

});