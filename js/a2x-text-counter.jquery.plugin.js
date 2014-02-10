$.fn.a2xCounter = function() {
  var max, counter;
  max= this.attr('maxlength');
  this.after('<div class="a2x-counter"></div>');
  counter = this.next();

  this.on('keyup', function(e) {
    if (max > 0) {
      counter.html(max - ($(this).val().length + ($(this).val().split("\n").length - 1)));
    } else {
      counter.html($(this).val().length + ($(this).val().split("\n").length - 1));
    }
  });

  if (max > 0) {
    counter.html(max);
  } else {
    counter.html(this.val().length);
  }
}