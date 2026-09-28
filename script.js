document.addEventListener("DOMContentLoaded", () => {

  const introScreen = document.getElementById("introScreen");
  const searchPanel = document.getElementById("searchPanel");
  const searchOpen = document.getElementById("searchOpen");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");
  const languageButton = document.getElementById("languageButton");
  const languageMenu = document.getElementById("languageMenu");

  const movieModal = document.getElementById("movieModal");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPlay = document.querySelector(".modal-play");
  const modalSecondary = document.querySelector(".modal-secondary");

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  const movieCards = [...document.querySelectorAll(".cinema-card")];
  const categoryButtons = [...document.querySelectorAll(".category-card")];
  const searchSuggestions = [
    ...document.querySelectorAll(".search-suggestions button")
  ];

  let selectedMovie = null;
  let toastTimer = null;

  /* INTRO */

  setTimeout(() => {
    introScreen.classList.add("hidden");
  }, 800);


  /* TOAST */

  function showToast(message) {
    clearTimeout(toastTimer);

    toastText.textContent = message;
    toast.classList.add("show");

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }


  /* SEARCH */

  function openSearch() {
    searchPanel.classList.add("open");

    setTimeout(() => {
      searchInput.focus();
    }, 150);
  }

  function closeSearch() {
    searchPanel.classList.remove("open");
  }

  searchOpen.addEventListener("click", openSearch);
  searchClose.addEventListener("click", closeSearch);


  function filterMovies(value) {

    const query = value.trim().toLowerCase();
    let visible = 0;

    movieCards.forEach(card => {

      const title = card.dataset.title.toLowerCase();
      const genre = card.dataset.genre.toLowerCase();

      const match =
        !query ||
        title.includes(query) ||
        genre.includes(query);

      card.style.display = match ? "" : "none";

      if (match) {
        visible++;
      }
    });

    const noResults = document.getElementById("noResults");

    noResults.style.display =
      visible === 0 ? "block" : "none";

    document.getElementById("searchResultsText").textContent =
      query
        ? `${visible} film${visible === 1 ? "" : "s"} found`
        : "";

  }


  searchInput.addEventListener("input", () => {
    filterMovies(searchInput.value);
  });


  searchSuggestions.forEach(button => {

    button.addEventListener("click", () => {

      const value = button.dataset.search;

      searchInput.value = value;

      filterMovies(value);

    });

  });


  /* LANGUAGE */

  languageButton.addEventListener("click", event => {

    event.stopPropagation();

    languageMenu.classList.toggle("open");

  });


  document.querySelectorAll("[data-language]").forEach(button => {

    button.addEventListener("click", () => {

      const language = button.dataset.language;

      languageButton.querySelector("span").textContent = language;

      languageMenu.classList.remove("open");

      showToast(`Language selected: ${language}`);

    });

  });


  /* MOVIE MODAL */

  function openMovie(card) {

    selectedMovie = card;

    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;

    movieModal.classList.add("open");

    document.body.style.overflow = "hidden";
  }


  function closeMovie() {

    movieModal.classList.remove("open");

    document.body.style.overflow = "";

    selectedMovie = null;

  }


  movieCards.forEach(card => {

    card.addEventListener("click", event => {

      if (event.target.closest(".card-play")) {
        event.stopPropagation();
      }

      openMovie(card);

    });

  });


  modalClose.addEventListener("click", closeMovie);


  movieModal.addEventListener("click", event => {

    if (event.target === movieModal) {
      closeMovie();
    }

  });


  /* PLAY */

  modalPlay.addEventListener("click", () => {

    if (!selectedMovie) {
      return;
    }

    /*
      The catalogue currently contains interface/demo entries.
      No fake video is started here.
      movie.html will be used when a real legal video source
      is assigned to a movie.
    */

    const movieName = selectedMovie.dataset.title;

    window.location.href =
      `movie.html?movie=${encodeURIComponent(movieName)}`;

  });


  /* MY LIST */

  modalSecondary.addEventListener("click", () => {

    if (!selectedMovie) {
      return;
    }

    const movieName = selectedMovie.dataset.title;

    let list =
      JSON.parse(localStorage.getItem("freeflixList") || "[]");

    if (!list.includes(movieName)) {

      list.push(movieName);

      localStorage.setItem(
        "freeflixList",
        JSON.stringify(list)
      );

      showToast("Added to My List");

    } else {

      showToast("Already in My List");

    }

  });


  /* CATEGORY FILTER */

  categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.dataset.filter;

      filterMovies(filter);

      document.getElementById("discover")
        .scrollIntoView({
          behavior: "smooth"
        });

      showToast(`${filter} films`);

    });

  });


  /* RANDOM MOVIE */

  const randomMovie =
    document.getElementById("randomMovie");

  randomMovie.addEventListener("click", () => {

    const available =
      movieCards.filter(card => {
        return getComputedStyle(card).display !== "none";
      });

    if (!available.length) {
      return;
    }

    const random =
      available[Math.floor(Math.random() * available.length)];

    openMovie(random);

  });


  /* COLLECTION */

  const collectionButton =
    document.getElementById("collectionButton");

  collectionButton.addEventListener("click", () => {

    const list =
      JSON.parse(localStorage.getItem("freeflixList") || "[]");

    if (!list.length) {

      showToast("Your My List is empty");

      return;
    }

    showToast(`${list.length} film${list.length === 1 ? "" : "s"} saved`);

  });


  /* KEYBOARD */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeSearch();
      closeMovie();
      languageMenu.classList.remove("open");

    }

  });


  /* OUTSIDE LANGUAGE MENU */

  document.addEventListener("click", event => {

    if (
      !languageMenu.contains(event.target) &&
      event.target !== languageButton
    ) {
      languageMenu.classList.remove("open");
    }

  });


  /* NAVIGATION LINKS */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (targetId === "#") {
        event.preventDefault();
        return;
      }

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

});
