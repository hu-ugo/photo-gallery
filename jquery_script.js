/*** JQUERY ***/

//lightbox2
lightbox.option({
  'maxWidth': 1200,
  'positionFromTop': 100,
  'showImageNumberLabel': false
});

//HideSeek PLugin
$(document).ready(function() {
	$('#search').hideseek({
    attribute : 'data-title'
  });
});

// $(document).ready(function() {
//   $("#search").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $(".flex-container a").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });
