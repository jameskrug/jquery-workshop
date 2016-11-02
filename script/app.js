var mq = window.matchMedia( "(min-width: 641px)" );

function WidthChange(mq) {
  if (mq.matches) {
    $(document).ready(function(){
        $(".divform").sticky({topSpacing:0});
    });
  } 
  else{
      $(document).ready(function(){
        $(".divform").unstick();
    });
  }
}




if (matchMedia) {
  window.matchMedia("(min-width: 641px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}


if (mq.matches){
    $(document).ready(function(){
        $(".divform").sticky({topSpacing:0});
    });
}