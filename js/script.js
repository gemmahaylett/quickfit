var btnNames = [];
$( document ).ready(function() {
  $('.btn-complete').each(function() {
    btnNames.push($( this ).attr('href'));
  });
  console.log(btnNames);
});

$( ".btn-complete" ).click(function() {
  var selectedExercise = $( this ).attr('href');
  $(selectedExercise).css('display', 'none');

  var noneCount = 0;
  $.each(btnNames, function(index, value){
    console.log($(value).css('display'));
    if($(value).css('display') === 'none'){
      noneCount += 1;
    }
  });

  if(noneCount === 3){
    $('#workout-complete').css('display', 'block');
    $('#workout-details').css('display', 'none');
  }
});