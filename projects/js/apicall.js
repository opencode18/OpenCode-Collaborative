(function($) {
  "use strict"; // Start of use strict
   
  var url="https://api.github.com/orgs/opencode18/repos?callback"; 
  $.getJSON(url,function(data)
  {
    var stars=data[3].watchers;
    var forks=data[3].forks;
    $('#star').text(stars);
    $('#fork').text(forks);
  });
})(jQuery);
