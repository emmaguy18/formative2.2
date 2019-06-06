$(document).ready(function(){
var days= [
  {
    id:1,
    day:'monday',
    taskName:[],
    category:['chores', 'appointments','important','social']
  }
]
for (var i = 0; i < days.length; i++) {
  var nameValue= $('#taskName')
}




























// hide and show new task popup//
$('#bttn-addTask').on('click', function () {
  $('#modalPlanner-form').show();
});

$('.close').on('click', function() {
  $('#modalPlanner-form').hide();
});




// hide and show planner//
  $('#bttn-planner').on('click', function () {
    $('#modalPlanner').show();
  });

  $('.close').on('click', function() {
    $('#modalPlanner').hide();
  });








});
