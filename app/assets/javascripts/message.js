$(function(){
  function buildHTML(comment){
    var image_url = (comment.image)? `<image class="lower-message_image" src="${comment.image}">`:"";
    var html = `<li class="timeline__bodyList">
                  <div class="timeline__bodyInfoWrap">
                  <div class="timeline__bodyName">
                  ${comment.user_name}
                  </div>
                  <div class="timeline__bodyDate">
                  ${comment.created_at}
                  </div>
                  </div>
                  <div class="timeline__bodyMessage">
                  ${comment.content}
                  </div>
                  ${image_url}
                </li>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $('.form__submit').removeAttr('data-disable-with');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('#message').append(html);
      $('#new_message')[0].reset();
      $('.timeline__body').animate({scrollTop: $(".timeline__body")[0].scrollHeight }, 'fast');
    })
    .fail(function() {
      alert('メッセージを送信できません');
    });
  })
})
