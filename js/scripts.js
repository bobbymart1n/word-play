$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var wordplay = $("#sentence").val().split(" ");
    var word = [];
    var wordMaps = wordplay.map(function(wordMap) {
      if (wordMap.length >= 3) {
        return word.push(wordMap)
      }
    });
    word.reverse();
    var words = word.join(' ');
    $(".user-sentence").text(words);
    console.log(words);
  });
});
