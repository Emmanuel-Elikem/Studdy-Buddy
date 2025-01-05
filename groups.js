// Select elements
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

// Add event listener to the search button
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim(); // Get the search query
  if (query) {
    alert(`You searched for: ${query}`); // Replace this with your search logic
  } else {
    alert('Please enter a search term.');
  }
});
