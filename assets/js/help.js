var submit = $(".user-input");
var chatBox= $(".chat-box");
//var input = $('.write-here');

// function to desplay help options
// $(".write-here").keypress(function (e) {  //Got this from stackoverflow, allows the enter key to work as a submit but not shift enter. Stackoverflow is bae
//     if(e.which == 13 && !e.shiftKey) {    //http://stackoverflow.com/questions/8934088/how-to-make-enter-key-in-a-textarea-submit-a-form
//         $(this).closest("form").submit();
//         e.preventDefault();
//         return false;
//     }
// });
function helpFunction(e){
  e.preventDefault()
  console.log("Submit works!");
    chatBox.append('<div class="response-chat">' + '<p>Here are a list of commands<p></br>' +
    '<p>@temp city st gives you the current temperature for a city.</p></br>' +
    '<p>@giphy anything gives you a chill gif matchings your word </p></br>' +
    '<p>@chill genre gives you a chill movie to chill to</p></br>' +
    '<p> or...we can just chill?</p>'
  );
  }
  $(".write-here").val("");
