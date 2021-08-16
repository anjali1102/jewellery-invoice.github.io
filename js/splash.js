
/* Plug-in */
(function( $ ) {
    /* Plug-in Variables */
    var splashSVG  = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/MyName.svg"
    /* Functions */
    $.fn.mySplash = function(titleScreen) {
      var splashHolder = this
      function triggerFade(){ 
        if(titleScreen)     TweenMax.set(titleScreen,{autoAlpha:1})
        $(splashHolder).trigger('splashFade') 
      }
      function triggerDone(){ $(splashHolder).trigger('splashDone') }
      var animateSplash = function(){
         $('svg',this).css({
        'height'  : '50%',
        'width'   : '50%',
        'position': 'absolute',
        'margin'  : 'auto',
        'top'     : '0px',
        'bottom'  : '0px',
        'left'    : '0px',
        'right'   : '1px'
      })
         
         var tl = new TimelineMax()
         tl.to(splashHolder, .5, {autoAlpha:1})
         tl.staggerFromTo($('#text path',this),   0.5, {alpha:0}, {alpha:1}, 0.015)
         tl.staggerFromTo($('#script path',this), 0.5, {alpha:0}, {alpha:1}, 0.07)
         tl.add(triggerFade)
         tl.to(splashHolder, .5, {autoAlpha:0, delay:0.75})
         tl.add(triggerDone)
      }
      $(splashHolder).load(splashSVG, animateSplash)
    }  
  }( jQuery ));
  
  /* init IIFE*/

  (function(){
    console.clear()
    $('#splash').mySplash()
  })()