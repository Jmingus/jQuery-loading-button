'use strict';

var $loadingButton = $('#loading-button');
var $background = $('#background');
var $text = $('.text')

$loadingButton.click(function(){
  $text.text('Loading...');
  $loadingButton.prop('disabled', true);
  progressBar();
})

function progressBar(){
    $background.animate({width: '100%'}, 4000, 'swing',function() {
      $text.html('Submit');
      $background.css('width', 0)
  });
      console.log('test')
}
