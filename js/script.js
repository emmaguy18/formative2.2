$(document).ready(function(){
var days= [
  {
    id:1,
    day:'monday',
    taskName:[''],
    category:['chores', 'appointments','important','social']
  }
];
  console.log(days[i]);
// for (var i = 0; i < days.length; i++) {
//   document.getElementById('taskName').innerHTML + '<input>' + days[i].taskName;
//   console.log('taskName');
//
//   function nameValue() {
//     document.getElementById('taskName').innerHTML + '<input>' + days[i].taskName;
//     console.log('taskName');
//   };
//   // nameValue(days[i].taskName).push;
//   console.log('nameValue');
// };




























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
