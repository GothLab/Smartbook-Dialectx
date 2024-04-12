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
        $(window).on('beforeunload', function() {
            localStorage.setItem('lastPage', window.location.href);
            localStorage.setItem('scrollTop', $('.markdown-preview-view').scrollTop());
            localStorage.setItem('redirected', 'true'); // Set redirected flag
        });
  
        // Check if we're on the index page
        if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
            // Load last opened page and scroll to position if not already redirected
            var lastPage = localStorage.getItem('lastPage');
            var scrollTop = localStorage.getItem('scrollTop');
            var redirected = localStorage.getItem('redirected');
  
            if (lastPage && scrollTop && !redirected && lastPage !== '/index.html' && lastPage !== '/') {
                // Append a button to continue reading
                var continueButton = $('<button>Continue reading</button>');
                continueButton.css({
                    'position': 'absolute',
                    'bottom': '20px',
                    'left': '50%',
                    'transform': 'translateX(-50%)',
                    'padding': '10px 20px',
                    'background-color': '#007bff',
                    'color': '#fff',
                    'border': 'none',
                    'border-radius': '5px',
                    'cursor': 'pointer'
                });
                continueButton.click(function() {
                    window.location.href = lastPage; // Redirect to last opened page
                });
                $('body').append(continueButton);
                
                $('.markdown-preview-view').scrollTop(scrollTop); // Scroll to saved position
            }
        }
    });
}

// Load jQuery
loadJQuery();
