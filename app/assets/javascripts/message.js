$(function(){
  // HTML作成
  function buildHTML(comment){
    var image_url = (comment.image)? `<image class="lower-message_image" src="${comment.image}">`:"";
    var html = `<li class="timeline__bodyList" data-id="${comment.id}">
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

  //メッセージ送信の非同期化
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

  //自動更新
  // function reloadMessages(){
  //   var last_message_id = $('.timeline__bodyList').last().data('id');
  //   var href = 'api/messages'
  //   $.ajax({
  //   url: href,
  //   type: 'GET',
  //   data:{id: last_message_id},
  //   dataType: 'json'
  //   })

  //   .done(function(messages){
  //     console.log(messages);
  //     messages.forEach(function(message){
  //       var insertHTML = buildHTML(message)
  //       $('#message').append(insertHTML)
  //     });

  //     $('.timeline__body').animate({scrollTop: $('.timeline__body')[0].scrollHeight}, 'fast');
  //   })

  //   .fail(function(){
  //     console.log('error');
  //   });
  // };
  // setInterval(reloadMessages, 5000);

  var interval = setInterval(function() {
    if (location.href.match(/\/groups\/\d+\/messages/)){
      $('.timeline__body').animate({scrollTop: $('.timeline__body')[0].scrollHeight}, 'fast');
      var last_message_id = $('.timeline__bodyList').last().data('id');
      var href = 'api/messages'
      $.ajax({
        url: href,
        type: "GET",
        data: {id: last_message_id},
        dataType: "json"
      })
      .done(function(messages) {
        messages.forEach(function(message) {
          var insertHTML = buildHTML(message)
          $('#message').append(insertHTML)
          $('.timeline__body').animate({scrollTop: $('.timeline__body')[0].scrollHeight}, 'fast');
        })
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    } else {
        clearInterval(interval);
      }
  } , 5000 );
})
