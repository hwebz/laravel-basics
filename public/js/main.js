var postId = 0;
var postBodyElement = null;

$('.post').each(function() {
	$(this).find('.interaction a').eq(2).on('click', function(e) {
		e.preventDefault();

		postBodyElement = event.target.parentNode.parentNode.childNodes[1];
		var oldValue = postBodyElement.textContent;
		postId = event.target.parentNode.parentNode.dataset['postid'];
		$("#post-body").val(oldValue);
		$("#edit-modal").modal();
		return false;
	});
});

$("#modal-save").on('click', function() {
	var $this = $(this);
	$.ajax({
		method: 'POST',
		url: url,
		data: {body: $("#post-body").val(), postId: postId, _token: token}
	}).done(function(msg) {
		// console.log(msg['message']);
		// console.log(JSON.stringify(msg));
		$(postBodyElement).text(msg['new-body']);
		$this.modal('hide');
	});
});

$(".like").on('click', function(event) {
	event.preventDefault();
	postId = event.target.parentNode.parentNode.dataset['postid'];
	var isLike = event.target.previousElementSibling == null;
	$.ajax({
		method: 'POST',
		url: urlLike,
		data: {isLike: isLike, postId: postId, _token: token}
	}).done(function() {
		event.target.innerText = isLike ? event.target.innerText == 'Like' ? 
										'You\'ve liked this post' : 'Like' 
										: event.target.innerText == 'Dislike' ? 
										'You didn\'t like this post' : 'Dislike' ;
		if (isLike) {
			event.target.nextElementSibling.innerText = 'Dislike';
		} else {
			event.target.previousElementSibling.innerText = 'Like';
		}

		// update Like, Dislike status
	});
	return false;
});