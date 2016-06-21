var submit = $(".user-input");
var chatBox= $(".chat-box");
var hellos= ["hello","hey","hi","sup","what's up","whats up"]
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
  if ($('.write-here').val().toLowerCase() === "@help"){
    helpFunction(e);
  }
  else if ($('.write-here').val().toLowerCase() === "help") {
    chatBox.append('<div class="response-chat">' + "Did you mean @help?" + '</div>');
  }
  else if ($('.write-here').val().toLowerCase().search("@chill") >=0){
    chillFunction(e);
    console.log("chill");
  }
  else if ($.inArray($('.write-here').val().toLowerCase(), hellos)  >= 0){
    chatBox.append('<div class="response-chat">' + "ello gubanor" + '</div>')
  }
  else if($('.write-here').val().toLowerCase().search("@giphy") >= 0){
    giphyFunction(e)
    console.log($('.write-here').val().toLowerCase().search("@giphy"))
  }
  else{
    console.log("what?");
  }

  $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight}, 500); //got this from Stackoverflow once again you are bae!
  $(".write-here").val("");                                                                          //http://stackoverflow.com/questions/14918787/jquery-scroll-to-bottom-of-div-even-after-it-updates

});
