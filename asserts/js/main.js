(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45586344-1', 'xq99.me');
ga('send', 'pageview');


const display = function(color){


      let dis = document.getElementsByTagName('a');

      // console.log(dis)

      for(let i = 0; i < dis.length; i++) {

            if(color === 'all') {
                  dis[i].style.removeProperty('display');
                  continue;
            }
            

            if(!dis[i].classList.contains(color) && !dis[i].classList.contains('no')) {
                  // console.log(dis[i], dis[i].style)
                  dis[i].style.display = 'none';
            } 
            else {
                  dis[i].style.removeProperty('display');
            }
      }
      // console.log(dis)


}
      
