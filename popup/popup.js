$(function () {

  // Event listening code goes here.
  // Be sure to check popup.html to learn the `id` attributes of the apply/remove filter
  // buttons and the username input box - you'll need those to listen for events!

  $('#filter-on').click(function (e) {
    chrome.tabs.executeScript(null, {code: 'window.parser.parse();'});
  });

  $('#filter-off').click(function (e) {
    chrome.tabs.executeScript(null, {code: 'window.parser.filter(false);'});
  });

  $('#username').keydown(function (e) {
    chrome.tabs.executeScript({code: 'console.log($(\'#username\').val());'});
  });

  // HINT: You can't access window.parser here. You'll have to use chrome.tabs.executeScript
  // to call window.parser.filter and window.parser.parse.

});
