$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/GPFrontend.json',
    dataType: 'jsonp',
    success: function(res) {
      console.log(res);
      addCourses(res.courses.completed);
    }
  });

  function addCourses(courses) {
    var $badges = $('#badges');

    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        target: '_blank',
        text: 'See Course',
        'class': 'btn btn-primary'
      }).appendTo($course);

    })
  }

});
