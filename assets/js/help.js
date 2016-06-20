var submit = $(".user-input");
var chatBox= $(".chat-box");
var input = $('textarea[name="user-input"]')

// function to desplay help options
submit.click(function ({
  if (input.val() === "@help"){
    chatBox.append('<div class="response-chat">' + '<p>Here are a list of commands<p></br>' +
    '<p>@temp city st gives you the current temperature for a city.</p></br>' +
    '<p>@giphy anything gives you a chill gif matchings your word </p></br>' +
    '<p>@chill genre gives you a chill movie to chill to</p></br>' +
    '<p> or...we can just chill?</p>'
    )
  }
}))
