var submit = $(".user-input");
var chatBox= $(".chat-box");
//var input = $('.write-here');

// function to display help options
$(".write-here").keypress(function (e) {  //Got this from stackoverflow, allows the enter key to work as a submit but not shift enter. Stackoverflow is bae
    if(e.which == 13 && !e.shiftKey) {    //http://stackoverflow.com/questions/8934088/how-to-make-enter-key-in-a-textarea-submit-a-form
        $(this).closest("form").submit();
        e.preventDefault();
        return false;
    }
});
