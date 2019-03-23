(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45586344-1', 'xq99.me');
ga('send', 'pageview');


var display = function(color){


      var dis = document.getElementsByClassName(color);
      for (var i = 0; i < dis.length; i++) {
            if(!dis[i].style.border) {
                  dis[i].style.border = 'solid 1px white';
            }
            else {
                  dis[i].style.border = null;
            }
      }

}
      
