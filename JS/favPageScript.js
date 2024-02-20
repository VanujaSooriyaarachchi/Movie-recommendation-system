fetch("http://127.0.0.1:5501/XML/movies.xml")
  .then((response) => {
  return response.text();
  })
  .then((xmlString) => {
  let parser = new DOMParser();
  const XMLDocument = parser.parseFromString(xmlString, "text/xml");
  const movies = XMLDocument.querySelectorAll("movie");

  const movieContainer = document.querySelector(".movie-container");
  for (const movie of movies) {
  const name = movie.querySelector("name").textContent;
  const director = movie.querySelector("director").textContent;
  const year = movie.querySelector("year").textContent;
  const image = movie.querySelector("image").textContent;

  // Create a movie card element
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  // Create and append movie image to the card
  const movieImage = document.createElement("img");
  movieImage.classList.add("movie-image");
  movieImage.src = image;
  movieImage.alt = name;
  movieCard.appendChild(movieImage);

  // Create and append movie details to the card
  const movieName = document.createElement("div");
  movieName.classList.add("movie-name");
  movieName.textContent = name;

  const movieDirector = document.createElement("div");
  movieDirector.classList.add("movie-director");
  movieDirector.textContent = director;

  const movieYear = document.createElement("div");
  movieYear.classList.add("movie-year");
  movieYear.textContent = year;

  movieCard.appendChild(movieName);
  movieCard.appendChild(movieDirector);
  movieCard.appendChild(movieYear);

  // Append the movie card to the container
  movieContainer.appendChild(movieCard);
  }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const backgroundColorDropdown = document.getElementById("background-color");
    const textColorDropdown = document.getElementById("text-color");
    const htmlElement = document.documentElement;
  
    backgroundColorDropdown.addEventListener("change", function() {
      const selectedBackgroundColor = this.value;
      htmlElement.style.backgroundColor = selectedBackgroundColor;
  
      if (selectedBackgroundColor == "black") {
        htmlElement.style.color = "white";
        textColorDropdown.value = "white";
        disableColorOption(textColorDropdown, "black");
      } else if (selectedBackgroundColor == "white") {
        htmlElement.style.color = "black";
        textColorDropdown.value = "black";
        disableColorOption(textColorDropdown, "white");
      } else {
        htmlElement.style.color = textColorDropdown.value;
        enableAllColorOptions(textColorDropdown);
      }
    });
    
  
    textColorDropdown.addEventListener("change", function() {
      const selectedTextColor = this.value;
      htmlElement.style.color = selectedTextColor;
    });
  
    function disableColorOption(selectElement, color) {
      for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value == color) {
          selectElement.options[i].disabled = true;
        } else {
          selectElement.options[i].disabled = false;
        }
      }
    }
  
    function enableAllColorOptions(selectElement) {
      for (let i = 0; i < selectElement.options.length; i++) {
        selectElement.options[i].disabled = false;
      }
    }
  });

          
          