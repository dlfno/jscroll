// The page that the script is running have to be opened, otherwise it
// won't keep running the script.

// Scroll to the bottom of the page
window.scrollTo(0, document.body.scrollHeight);

// Keeps scrolling
let interval = setInterval(function() {
    window.scrollTo(0, document.body.scrollHeight);
}, 1000);

// One line
let interval = setInterval(function() { window.scrollTo(0, document.body.scrollHeight); }, 1000);

// A cleaner way
function scrollPage() {
    window.scrollTo(0, document.body.scrollHeight);
}
let interval = setInterval(scrollPage, 1000);

// Stop scrolling
clearInterval(interval);
