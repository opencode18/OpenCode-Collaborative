$(document).ready(function() {
    
  var getMax = function(){
    return $(document).height() - $(window).height();
  };
    
  var getValue = function(){
    return $(window).scrollTop();
  };
    
  if ("max" in document.createElement("progress")) {
    var progressBar = $("progress");
    progressBar.attr({ max: getMax() });

    $(document).on("scroll", function(){
      progressBar.attr({ value: getValue() });
    });
    
    $(window).resize(function(){
      progressBar.attr({ max: getMax(), value: getValue() });
    }); 
  
  } else {

    var progressBar1 = $(".progress-bar"), 
        max = getMax(), 
        value, width;
        
    var getWidth = function() {
      // Calculate width in percentage
      value = getValue();            
      width = (value/max) * 100;
      width = width + "%";
      return width;
    };
        
    var setWidth = function(){
      progressBar1.css({ width: getWidth() });
    };
        
    $(document).on("scroll", setWidth);
    $(window).on("resize", function(){
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
});