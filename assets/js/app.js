var submit = $(".user-input");
var chatBox= $(".chat-box");
var hellos= ["hello","hey","hi","sup","what's up","whats up"]
var responses = ["that's chill", "totes", "I'm not sure what you're trying to say", "huh?", "word", "pizza?", "Have you ever been to the Catskills in September?", "Today is gonna be a good day", "Out of the office, try again later."]
//var input = $('.write-here');
  var count = 1;
  console.log("count=" + count)
$('.fa-info').click(function(e){
  if (count === 1) {
    $('.write-here').val("");
    // $('.hidden-icons').show("slow");
    $('.hidden-icons').slideDown("fast", (function(){
    $('.user-input').css("box-shadow", "0 -18px 40px #28385e");
    console.log(count);
    count ++
  }));
}
  else if (count === 2) {
    $('.hidden-icons').slideUp("fast", (function(){
      $('.user-input').css("box-shadow", "none");
      count = 1;
      console.log(count);
    }));
  }
});

  // });
//  $('.user-input').css("box-shadow", "0 -18px 40px #28385e");

  console.log(count)
    $(".icon-help").click(function(e){
      console.log("this works");
      $('.write-here').val("@help");
    if($(window).width() <= 1024){
      $('.hidden-icons').slideUp("fast", (function(){
        $('.user-input').css("box-shadow", "none");
        count = 1;
      }));
    };
  });
    $(".icon-temp").click(function(e){
      $('.write-here').val("@temp");
      if($(window).width() <= 1024){
        $('.hidden-icons').slideUp("fast", (function(){
          $('.user-input').css("box-shadow", "none");
          count = 1;
        }));
      };
    });
    $(".icon-giphy").click(function(e){
      $('.write-here').val("@giphy");
      if($(window).width() <= 1024){
        $('.hidden-icons').slideUp("fast", (function(){
          $('.user-input').css("box-shadow", "none");
          count = 1;
        }));
      };
    });
    $(".icon-chill").click(function(e){
      $('.write-here').val("@chill");
      if($(window).width() <= 1024){
        $('.hidden-icons').slideUp("fast", (function(){
          $('.user-input').css("box-shadow", "none");
          count = 1;
        }));
      };
    });



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
  if($('.write-here').val().toLowerCase() === "@clear"){
    chatBox.html("");
    tempCount=0
  }
  else if ($('.write-here').val().toLowerCase() === "@help"){
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
    giphyFunction(e);
    console.log($('.write-here').val().toLowerCase().search("@giphy"))
  }
  else if (tempCount === 1){
    tempFunction(e);
  }
  else if (tempCount === 2){
    tempFunction(e);
  }

  else if($('.write-here').val().toLowerCase().search("@temp") >= 0){
    tempFunction(e);
    console.log("temp Yay");
  }
  // else if($('.write-here').val().toLowerCase() === "bye"){
  //   $('body').html("bye");
  // }
  else{
    randomResponse = Math.floor((Math.random() * responses.length))

    chatBox.append('<div class="response-chat">' + responses[randomResponse] + '</div>')
    console.log("what?");
  }

  $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight}, 500); //got this from Stackoverflow once again you are bae!
  $(".write-here").val("");                                                                          //http://stackoverflow.com/questions/14918787/jquery-scroll-to-bottom-of-div-even-after-it-updates

});
