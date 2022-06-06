  window.addEventListener('DOMContentLoaded', (event) => {

    fetch("./templates/footer.html" /*, options */)
      .then((response) => response.text())
      .then((html) => {
          document.getElementById("footer").innerHTML = html;
      })
      .catch((error) => {
          console.warn(error);
    });

  });