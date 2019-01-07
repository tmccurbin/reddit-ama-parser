/*global CommentParser */

// Extract the comments
var $comments = $('.commentarea > .sitetable > .thing');
// Extract the original poster
var op = $('#siteTable').find('a.author')[0];


window.parser = new CommentParser($comments, $(op).text());
window.parser.parse();
