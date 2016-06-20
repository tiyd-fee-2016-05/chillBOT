var submit = $(".user-input");
var chatBox= $(".chat-box");
//var input = $('.write-here');

// function to desplay help options
submit.submit(function (e){
  e.preventDefault()
  console.log("Submit works!");
  //$(".write-here").val("");

  if ($('.write-here').val() == "@help"){
    chatBox.append('<div class="response-chat">' + '<p>Here are a list of commands<p></br>' +
    '<p>@temp city st gives you the current temperature for a city.</p></br>' +
    '<p>@giphy anything gives you a chill gif matchings your word </p></br>' +
    '<p>@chill genre gives you a chill movie to chill to</p></br>' +
    '<p> or...we can just chill?</p>'
  );
  }
  $(".write-here").val("");
})
