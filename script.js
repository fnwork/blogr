const menuBtn = document.querySelector(".menu"),
  navList = document.querySelector(".nav__list"),
  lists = document.querySelectorAll(".nav__list ul li");


  menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    navList.classList.toggle("show");
  });
  

  lists.forEach(list =>{
    list.addEventListener("click", function(){
      lists.forEach((list) =>{
        list.classList.remove('show')
      })
      list.classList.add('show')
    });
  });
