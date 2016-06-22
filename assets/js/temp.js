var tempCount = 0;

function tempFunction(e) {
  if (tempCount === 0){
    console.log(tempCount)
    chatBox.append(
      '<div class="response-chat">' + "Wanna know the temp? Chill. What state you in?" + '</div>'
    )
    tempCount = 1
  }
  else if (tempCount === 1 &&  $('.write-here').val().toLowerCase() !== ''){
  state = $('.write-here').val()
  console.log(state);
  chatBox.append(
    '<div class="response-chat">' + state + " chillll. what city?" + '</div>'
  )
  tempCount=2;
  }
  else if (tempCount === 2 &&  $('.write-here').val().toLowerCase() !== ''){
    var city = $('.write-here').val()
    $.ajax({
      dataType: 'json',
      url: "https://api.wunderground.com/api/35c9d364b4732721/conditions/q//"+ state + "/" + city + ".json",
      method: "GET",
    }).done(function(json){
      chatBox.append(
        '<div class="response-chat">Looks like it is ' + json.current_observation.temp_f + ' degrees in ' + city + ', ' + state + '</div>'
      )
      tempCount=0
      console.log(json);
  })
  }

  // $.ajax({
  //   dataType: 'json',
  //   url: "https://api.wunderground.com/api/35c9d364b4732721/conditions/q//IA/Cedar_Rapids.json",
  //   method: "GET",
  // }).done(function(json){
  //   console.log(json);
//})
}
