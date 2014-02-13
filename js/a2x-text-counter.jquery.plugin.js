$.fn.a2xCounter = function() {
  var max, counter;
  max = this.attr('maxlength');
  this.after('<div class="a2x-counter"></div>');
  counter = this.next();

  this.on('keyup', function(e) {
    if (max > 0) {
      var textLength = $(this).val().length + ($(this).val().split("\n").length - 1);
      if (max - textLength >= 0) {
        counter.html(max - textLength);
      } else {
        counter.html(0);
      }
    } else {
      counter.html(textLength);
    }
  });

  if (max > 0) {
    counter.html(max);
  } else {
    counter.html(this.val().length);
  }
}
