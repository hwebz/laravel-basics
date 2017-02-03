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