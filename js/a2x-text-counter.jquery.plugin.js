$.fn.a2xCounter = function() {
  var max, parent, counter;
  max= this.attr('maxlength');
  counterEl = '<div class="a2x-counter"></div>';
  this.after(counterEl);
  counter = this.next();

  this.on('keyup', function(e) {
    if (max > 0) {
      counter.html(max - $(this).val().length);
    } else {
      counter.html($(this).val().length);
    }

  });

  if (max > 0) {
    counter.html(max);
  } else {
    counter.html(this.val().length);
  }
}