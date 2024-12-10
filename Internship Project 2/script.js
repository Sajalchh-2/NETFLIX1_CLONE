// Sample movie data (replace with actual API data or database fetch)
const movieCategories = {
    "Trending Now": ["Movie1", "Movie2", "Movie3"],
    "Top Picks for You": ["Movie4", "Movie5", "Movie6"],
    "Netflix Originals": ["Movie7", "Movie8", "Movie9"],
  };
  
  // Function to dynamically render movie categories
  const renderCategories = () => {
    const mainContainer = document.getElementById("main");
  
    for (const [category, movies] of Object.entries(movieCategories)) {
      // Create a category section
      const section = document.createElement("section");
      section.classList.add("category");
  
      // Add category title
      const title = document.createElement("h2");
      title.innerText = category;
      section.appendChild(title);
  
      // Add movie row
      const row = document.createElement("div");
      row.classList.add("movie-row");
      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerText = movie; // Placeholder for movie title
        movieCard.addEventListener("click", () => showPreview(movie)); // Add click event
        row.appendChild(movieCard);
      });
  
      section.appendChild(row);
      mainContainer.appendChild(section);
    }
  };
  
  // Call the render function on page load
  document.addEventListener("DOMContentLoaded", renderCategories);
// Function to show a modal preview
const showPreview = (movieTitle) => {
    const modal = document.getElementById("preview-modal");
    const modalContent = document.getElementById("modal-content");
  
    modalContent.innerText = `Previewing: ${movieTitle}`;
    modal.style.display = "block";
  };
  
  // Close the modal
  const closeModal = () => {
    const modal = document.getElementById("preview-modal");
    modal.style.display = "none";
  };
  
  // Add event listener for closing modal
  document.getElementById("close-modal").addEventListener("click", closeModal);
// Scroll movie rows horizontally
const scrollRow = (rowId, direction) => {
    const row = document.getElementById(rowId);
    const scrollAmount = direction === "left" ? -300 : 300;
    row.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
      