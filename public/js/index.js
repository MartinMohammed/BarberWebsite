var menuBtn = document.getElementById("menuBtn");
      var sideNav = document.getElementById("sideNav");
      var menu = document.getElementById("menu");

      // initial inline style
      sideNav.style.right = "-250px";

      // add to menuBtn an eventListener
      menuBtn.onclick = () => {
        if (sideNav.style.right == "-250px") {
          // make it appear
          sideNav.style.right = "0";
          // swap open to close image
          menu.src = "public/Barber_Shop_img/close.png";
        } else {
          // make it dissappear
          sideNav.style.right = "-250px";
          menu.src = "public/Barber_Shop_img/menu.png";
        }
      };