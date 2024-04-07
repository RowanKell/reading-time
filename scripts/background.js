chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg === "tab_close_msg") {
      chrome.tabs.query({
          currentWindow: true,
          active: true
      }, function (tabs) {
          sendResponse("Closing Tab"); // Send a response immediately
          delay(5000); 
          chrome.tabs.remove(tabs[0].id);
      });
      return true; // Indicate that sendResponse will be called asynchronously
  }
});
