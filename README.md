# About

a2x-text-counter is simple jQuery plugin which counts the number of symbols you intered in textarea or input[text] element.

There are two common strategies. If your textarea has `maxlength` attribute the plugin behaves as countdown counter. Elsewhere it counts the number of entered symbols.

# Installing

You can install it via bower by executing `bower install a2x-text-counter`.

# Usage
```html
<html>
<head>
  <link rel="stylesheet" href="bower_components/a2x-text-counter/css/a2x-text-counter.jquery.plugin.css"/>
</head>
<body>
  <input type="text" id="element"/>
  <script src="http://code.jquery.com/jquery.js"></script>
  <script src="bower_components/a2x-text-counter/js/a2x-text-counter.jquery.plugin.js"></script>
  <script>
    $(document).ready(function() {
      $('#element').a2xCounter();
    });
  </script>
</body>
</html>
```
# Home page with demo

http://a2xchip.github.io/a2x-text-counter/

# Thanks for assistance and contributions

[@Frederick-S](https://github.com/Frederick-S)
