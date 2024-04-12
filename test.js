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
    $(document).ready(function() {
        // Your jQuery-dependent code
        console.log('jQuery is ready!');
        
        // Save last opened page and scroll position
        $(window).on('beforeunload', function(event) {
            // Check if the current page is not the index page
            if (!(window.location.pathname === '/index.html' || window.location.pathname === '/')) {
                localStorage.setItem('lastPage', window.location.href);
                localStorage.setItem('scrollTop', $('.markdown-preview-view').scrollTop());
            }
        });
  
        // Check if we're on the index page
        if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
            // Load last opened page and scroll to position
            var lastPage = localStorage.getItem('lastPage');
            var scrollTop = localStorage.getItem('scrollTop');
  
            if (lastPage && scrollTop) {
                // Append the 'Continue reading' button
                var continueReadingButton = $('<button>').text('Continue reading').addClass('continue-reading-button');
                continueReadingButton.css({
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    background: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                });
                continueReadingButton.appendTo('body');
                
                // Add click event handler to the button to redirect and scroll
                continueReadingButton.on('click', function() {
                    window.location.href = lastPage; // Redirect to the last page
                    // Scroll to the saved position after 2 seconds
                    setTimeout(function() {
                        $('.markdown-preview-view').scrollTop(scrollTop);
                    }, 2000);
                });
            }
        }
    });
}

// Load jQuery
loadJQuery();
