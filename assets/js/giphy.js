

function giphyFunction{
$.ajax({
  dataType: 'json',
  url: "http://api.giphy.com/v1/gifs/search?q=" + giphySearch + "&api_key=dc6zaTOxFJmzC",
  method: "GET",
}).done(function(json) {
    chatBox.append(
                        //'<li>' + json.data[0].images.downsized.url + '</li>'
                      '<div class=response-chat>' + "<img src='" + json.data[0].images.fixed_height.url + "'/>" + '</div>'
    );
}
