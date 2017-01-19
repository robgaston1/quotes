$(document).ready(function() {

    var newquote = "test";

    function genQuote() {
            $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?", function(data) {
            newquote = data.quote;
            $("#phrase").text(newquote);
            $("#auth").text(data.author);
            var tweet= newquote + "," + data.author;
            $("#quotebox").append("<a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text="+tweet+"\"><button class=\"btn btn-primary\" id=\"tweet\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</button></a>");
        });
      }
  $("#refresh").on("click", function() {
    genQuote();
  });

  $("#tweet").on("click", function() {
    window.open("https://www.twitter.com/share?text=" + newquote + "&url=https://goo.gl/n2xwuo");
  });
    genQuote();
});