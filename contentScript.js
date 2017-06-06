// Sending messages from Content Script
const msg = 'Hello from content Script ⚡'
chrome.runtime.sendMessage({ message: msg }, function(response) {
    console.log(response);
});


// Listening to messages in Context Script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback
    sendResponse({ message: 'Content script has received that message ⚡' })
})

