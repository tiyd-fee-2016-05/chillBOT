var submit = $(".user-input");
var chatBox= $(".chat-box");
//var input = $('.write-here');

//function to display help options
$(".write-here").keypress(function (e) {  //Got this from stackoverflow, allows the enter key to work as a submit but not shift enter. Stackoverflow is bae
    if(e.which == 13 && !e.shiftKey) {    //http://stackoverflow.com/questions/8934088/how-to-make-enter-key-in-a-textarea-submit-a-form
        $(this).closest("form").submit();
        e.preventDefault();
        return false;
    }
});
submit.submit(function(e){
  e.preventDefault();
  chatBox.append('<div class="user-chat">' + $('.write-here').val() + '</div>')
  if ($('.write-here').val() === "@help"){
    helpFunction(e);
  }
  else if ($('.write-here').val() === "help") {
    chatBox.append('<div class="response-chat">' + "Did you mean @Help?" + '</div>');
  }

  $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight}, 500); //got this from Stackoverflow once again you are bae!
  $(".write-here").val("");                                                                          //http://stackoverflow.com/questions/14918787/jquery-scroll-to-bottom-of-div-even-after-it-updates

});
