// Dynamically load jQuery
function loadJQuery() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
    script.onload = function() {
        main(); // Call the main function after jQuery is loaded
    };
    document.head.appendChild(script);
}

// Function to be executed after jQuery is loaded
function main() {
  
        // Your jQuery-dependent code
        console.log('jQuery is ready!');
        
        // Save last opened page and scroll position
        $(window).on('beforeunload', function() {
            localStorage.setItem('lastPage', window.location.href);
            localStorage.setItem('scrollTop', $('.markdown-preview-view').scrollTop());
        });
  
        // Check if we're on the index page
     
    );


// Load jQuery
loadJQuery();
