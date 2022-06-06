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

  var fileName = new URI(url).filename();
  console.log(fileName);
  var link = Document.getElementById(fileName);
  link.classList.add("current-page");

});

function fileName(url) {
  if (url === null || typeof url === 'undefined')
     return ''
  let file = new URI(url).filename() // File name with file extension
  return file.substring(0, file.lastIndexOf('.')) // Remove the extension
}