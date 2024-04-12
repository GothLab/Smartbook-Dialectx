// Dynamically load jQuery
function loadJQuery(callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
    script.onload = callback;
    document.head.appendChild(script);
}

// Function to be executed after jQuery is loaded
function main() {
    // Your code that depends on jQuery goes here
    $(document).ready(function() {
        // Your jQuery-dependent code
        console.log('jQuery is ready!');
    });
}

// Load jQuery and execute main function
loadJQuery(main,function() {
    // Check if localStorage is supported

      // Save last opened page and scroll position
      $(window).on('beforeunload', function() {
        localStorage.setItem('lastPage', window.location.href);
        localStorage.setItem('scrollTop', $(window).scrollTop());
      });
  
      // Check if we're on the index page
      if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Load last opened page and scroll to position
        var lastPage = localStorage.getItem('lastPage');
        var scrollTop = localStorage.getItem('scrollTop');
  
        if (lastPage && scrollTop) {
          window.location.href = lastPage; // Load last opened page
          $(window).scrollTop(scrollTop); // Scroll to saved position
        }
      }
   
  });


//
