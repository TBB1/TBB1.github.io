alert("Welcome my friend. I'm created only for making the back benchers united. I'm not developed properly but you can visit me. Hope you'll like it. Thank you.")

setInterval(function(){
      if(document.getElementsByClassName("slidepics")[0].classList.contains("active")){
   document.getElementsByClassName("slidepics")[1].classList.add("active");
   document.getElementsByClassName("slidepics")[0].classList.remove("active");
  }
  else if(document.getElementsByClassName("slidepics")[1].classList.contains("active")){
   document.getElementsByClassName("slidepics")[2].classList.add("active");
   document.getElementsByClassName("slidepics")[1].classList.remove("active");
  }
  else if(document.getElementsByClassName("slidepics")[2].classList.contains("active")){
   document.getElementsByClassName("slidepics")[3].classList.add("active");
   document.getElementsByClassName("slidepics")[2].classList.remove("active");
  }
  else if(document.getElementsByClassName("slidepics")[3].classList.contains("active")){
   document.getElementsByClassName("slidepics")[4].classList.add("active");
   document.getElementsByClassName("slidepics")[3].classList.remove("active");
  }
  else if(document.getElementsByClassName("slidepics")[4].classList.contains("active")){
   document.getElementsByClassName("slidepics")[0].classList.add("active");
   document.getElementsByClassName("slidepics")[4].classList.remove("active");
  }
    },4000);
  
  
  
  
  