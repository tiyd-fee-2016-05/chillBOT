

function tempFunction(e) {
  $.ajax({
    dataType: 'json',
    url: "https://api.wunderground.com/api/35c9d364b4732721/conditions/q/",
    method: "GET",
  }).done(function(json){
})
}
