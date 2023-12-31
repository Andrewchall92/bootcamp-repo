// Select elements in the document programmatically

// Starting from the `<div id="top">` element, place a blue border around the title of the website, Develop Community Center
//From the empty <div>, we can select elements in the DOM tree:
//We can chain methods together to combine searches.
//We can nest selectors inside of jQuery methods:
//We can use .css() at each search to see which elements were returned.

// var top = $('#top');
// top.siblings().first().addClass('p-5').css('border', '#1bbc9b solid 2px');
$('#top').siblings().first().addClass('p-5').css('border', '#1bbc9b solid 2px');

// Starting from the `<div id="bottom">` element, get a list of its sibling elements and target the fifth one (the `<ul>` element), then change the text on the last item on the list to say "Meetups", not "GitHub"
$('#bottom').siblings().eq(5).children().last().text('Meetups');

// Starting from `<div id="top">`, get a list of its sibling elements and target the fourth one (the `<ul>` element), and append an `<li>` to add "Classmates" to bottom of the list as a new resource.
$('#top').siblings().eq(4).append($('<li>Classmates</li>'));

// Starting from the `<li id="inside">` element, find the closest parent `<ul>` element and add the classes to all of its child `<li>` elements
$('#inside')
  .closest('ul')
  .children('li')
  .addClass('bg-info text-dark mb-3 p-3');

  $("main > ul").append($('<li class= "bg-info text-dark mb-3 p-3">Farley</li>'));
  $("main  ul").append($('<li class= "bg-info text-dark mb-3 p-3">Bacon</li>'));
  $("ul").append($('<li class= "bg-info text-dark mb-3 p-3">Chicken</li>'));
