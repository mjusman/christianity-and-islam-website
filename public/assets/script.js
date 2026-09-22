(function(){
  // mobile nav
  var t=document.querySelector('.nav-toggle');
  var n=document.querySelector('.site-nav');
  if(t&&n){t.addEventListener('click',function(){
    var open=n.classList.toggle('open');
    t.setAttribute('aria-expanded',open?'true':'false');
  });}
  // cookie banner
  try{
    var key='sjtp_cookie_ok';
    var b=document.getElementById('cookie-banner');
    var a=document.getElementById('cookie-accept');
    if(b&&!localStorage.getItem(key)){b.hidden=false;}
    if(a){a.addEventListener('click',function(){
      try{localStorage.setItem(key,'1');}catch(e){}
      if(b){b.hidden=true;}
    });}
  }catch(e){}
})();
