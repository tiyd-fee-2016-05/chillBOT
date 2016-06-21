function chillFunction(e) {
  e.preventDefault();
   var searchTerm= $('.write-here').val();
  console.log("@chill");
$.ajax({
  dataType: 'json',
  url: "http://netflixroulette.net/api/api.php?actor="+searchTerm.slice(9),
  method: "GET",
}).done(function(json) {
  randomMovie = Math.floor((Math.random() * json.length))

    chatBox.append(
                      '<div class="response-chat">Title:' + json[randomMovie].show_title+ '</br></br>' + 'Summary:' + json[0].summary
                       + '</br>' + "<img src='" + json[randomMovie].poster + "'/>" + '</div>'
    );
    $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight}, 2500); //got this from Stackoverflow once again you are bae!
    console.log(json);
    console.log(searchTerm.slice(6));
console.log("Look?")
});
}
