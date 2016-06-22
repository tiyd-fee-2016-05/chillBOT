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
    chatBox.append('<div class="response-chat">' + '<p>here are a list of commands:<p></br>' +
    '<p>@temp following my prompts gives you the current temperature for a city</p></br>' +
    '<p>@giphy "any word" gives you a chill gif matching your word(s) </p></br>' +
    '<p>@chill "bae&#39;s name" gives you a chill movie to chill to with bae</p></br>' +
    '<p>@clear I can get a little too chill and lose my place (know what I mean? ;p), if that happens use this to reset me</p></br>' +
    '<p> or...we can just chill?</p>'
  );
  }
  $(".write-here").val("");
