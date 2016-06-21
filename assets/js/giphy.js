

function giphyFunction(e) {
  e.preventDefault();
   var searchTerm= $('.write-here').val();
  console.log("@giphy");
$.ajax({
  dataType: 'json',
  url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm.slice(7) + "&api_key=dc6zaTOxFJmzC",
  method: "GET",
}).done(function(json) {
    chatBox.append(
                        //'<li>' + json.data[0].images.downsized.url + '</li>'
                      '<div class="response-chat">' + "<img src='" + json.data[0].images.downsized_large.url + "'/>" + '</div>'
    );
    $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight}, 500); //got this from Stackoverflow once again you are bae!
    console.log(json);
    console.log(searchTerm.slice(7));
console.log("Look?")
});
}
