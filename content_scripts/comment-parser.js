var CommentParser = function ($comments, op) {
  // Save the $comments and op as state!
  this.$comments = $comments;
  this.op = op;
  this.numberOfComments = this.$comments.length;
};

// parse and filter implementations go here.
CommentParser.prototype.parse = function (username) {

	// if a username isn't provided, use the OP
  if (!username) {
    username = this.op;
  }

	// Parse top-level comments
  for (var i = 0; i < this.numberOfComments; i++) {
    if (this.$comments[i].id) {
      // Extract the text, id, and DOM element
      var innerText = this.$comments[i].innerText;
      var id = this.$comments[i].id;
      var post = document.getElementById(id);
		
      if (innerText.includes(this.op)) {
        post.classList.add('answered-chain');
      } else {
        post.classList.add('unanswered-chain');
      }

    }
  }

  // Filter the comments
  this.filter(true);
};

CommentParser.prototype.filter = function (bool) {

  console.log(bool);

  // Identify unanswered comment chains
  var $unansweredComments = $(document.getElementsByClassName('unanswered-chain'));

  if (bool) {
    // Hide unanswered comment chains
    $unansweredComments.css('display', 'none');
    return;
  }

  // Else, display unanswered comment chains
  $unansweredComments.css('display', 'block');
};