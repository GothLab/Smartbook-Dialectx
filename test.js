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
loadJQuery(main);