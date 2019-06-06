$(document).ready(function(){
  $('#modalPlanner').on('shown.bs.modal', function () {
    $('#bttn-planner').trigger('focus')
  });
});
