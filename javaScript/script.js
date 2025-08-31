 function toggleDropdown() {
    var content = document.getElementById("dropdown-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }

  // Optional: Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
      }
    }
  }

  function openInfo1(){
    const contant_1 = document.getElementById("contant-1");
    if(contant_1.style.display==="none" || contant_1.style.display===""){
      contant_1.style.display="block";
    } 
    else{
       contant_1.style.display="none";
    }
  }

 
function openInfo2(){
    const contant_2 = document.getElementById("contant-2");
    if(contant_2.style.display==="none" || contant_2.style.display===""){
      contant_2.style.display="block";
    } 
    else{
       contant_2.style.display="none";
    }
  }
  function openInfo3(){
    const contant_3 = document.getElementById("contant-3");
    if(contant_3.style.display==="none" || contant_3.style.display===""){
      contant_3.style.display="block";
    } 
    else{
       contant_3.style.display="none";
    }
  }
  function openInfo4(){
    const contant_4 = document.getElementById("contant-4");
    if(contant_4.style.display==="none" || contant_4.style.display===""){
      contant_4.style.display="block";
    } 
    else{
       contant_4.style.display="none";
    }
  }
  function openInfo5(){
    const contant_5 = document.getElementById("contant-5");
    if(contant_5.style.display==="none" || contant_5.style.display===""){
      contant_5.style.display="block";
    } 
    else{
       contant_5.style.display="none";
    }
  }

 function openInfo6(){
    const contant_6 = document.getElementById("contant-6");
    if(contant_6.style.display==="none" || contant_6.style.display===""){
      contant_6.style.display="block";
    } 
    else{
       contant_6.style.display="none";
    }
  }

  const buttons = document.querySelectorAll(".info-container-dropdown-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("active3");
    });
  });

  const mainMenu = document.getElementById('mainMenu');
  const mainMenuBtn = document.getElementById('mainMenuBtn');
  
  mainMenuBtn.addEventListener('click', () =>{
     mainMenu.classList.toggle('w-0');
     mainMenu.classList.add('w-110');
  });

  window.addEventListener('click',(e)=>{
   if(!mainMenuBtn.contains(e.target) && !mainMenu.contains(e.target)){
    mainMenu.classList.add('w-0');
   }
  });