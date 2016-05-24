$(document).ready(function() {
  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>Meow.</li>");

    $('li').css('background-color', 'green');
  });

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>Meow</li>");
    $("ul#cat").prepend("<li>WOOF!</li>");

    $('li').css('background-color', 'green');
  });
});
