// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and inject content into an element
    function loadComponent(url, elementId) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        })
        .catch(err => {
          console.error('Error loading component:', err);
        });
    }
  
    // Load the header and footer after the DOM is ready
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
  });
  