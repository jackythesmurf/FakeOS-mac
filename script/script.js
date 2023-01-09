const menuToggle = (menuId, listId, close) => {
  const menu = document.getElementById(menuId);
  const list = document.getElementById(listId);
  if (close) {
    return (list.style.display = "none");
  } else {
    if (list.style.display == "none") {
      list.style.display = "block";
    } else if (list.style.display == "block") {
      list.style.display = "none";
    }
  }
};

const menuForceClose = (event, menuId, listId) => {
  if (event.target.getAttribute("id") == menuId) {
    menuToggle(menuId, listId, false);
  }
  if (
    event.target.getAttribute("id") != menuId &&
    event.target.getAttribute("class") != "navbar-contents-menu-icon-list-items"
  ) {
    menuToggle(menuId, listId, true);
  }
};

const appMove = (dragOffsetX, dragOffsetY, dragging)=>{
  document.addEventListener("mousemove", (event) => {
      
      if (dragging) {
        dragging.style.left = event.clientX - dragOffsetX + "px";
    
        dragging.style.top = event.clientY - dragOffsetY + "px";
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (dragging) {
        dragging.classList.remove("dragging");
        dragging = null;
      }
    });
}


const applicationToggle = (appId) => {
  const app = document.getElementById(appId)
  if (app.style.display =="none"){
    app.style.display = "block";
  } else if (app.style.display == "block") {
    app.style.display = "none";
  }

}

const bringToFront = (id) => {
  // Get the element with the specified id
  var element = document.getElementById(id);
  


  // Set the z-index to a higher value than the other divs
  let dockAppList = ["finder-app", "safari-app"]
  for (let i = 0; i < dockAppList.length; i++){
    if(dockAppList[i] != id){
      
      document.getElementById(dockAppList[i]).style.zIndex = 0;
    }
  }
  element.style.zIndex = 1;
  
}



window.onload = function () {
  // hide initial apps and menu
  const apple = document.getElementById("apple-logo-list");
  apple.style.display = "none";
  const file = document.getElementById("file-menu-list");
  file.style.display = "none";
  const view = document.getElementById("view-menu-list");
  view.style.display = "none";
  const help = document.getElementById("help-menu-list");
  help.style.display = "none";
  const finder = document.getElementById("finder-app");
  finder.style.display = "none";

  const safari = document.getElementById("safari-app");
  safari.style.display = "none";

  const contacts = document.getElementById("contacts-app");
  contacts.style.display = "none";

  // menu bar toggle
  const monitor = document.getElementById("monitor");

  monitor.addEventListener("click", (event) => {
    console.log(event.target)
   
    menuForceClose(event, "apple-logo", "apple-logo-list");
    menuForceClose(event, "file-menu", "file-menu-list");
    menuForceClose(event, "view-menu", "view-menu-list");
    menuForceClose(event, "help-menu", "help-menu-list");
    
    if(event.target.getAttribute("id") == "finder-app"){
      bringToFront("finder-app")
    }
    if(event.target.getAttribute("id") == "safari-app"){
      bringToFront("safari-app")
    }
    if(event.target.getAttribute("id") == "contacts-app"){
      bringToFront("contacts-app")
    }
    
    if (event.target.getAttribute("id") == 'finder-app-icon' ||event.target.getAttribute("id") == "finder-app-close" ) {
      bringToFront("finder-app")
      applicationToggle("finder-app");
    }
    if (event.target.getAttribute("id") == 'safari-app-icon' ||event.target.getAttribute("id") == "safari-app-close" ) {
      bringToFront("safari-app")
      applicationToggle("safari-app");
    }

    if (event.target.getAttribute("id") == 'contacts-app-icon' ||event.target.getAttribute("id") == "contacts-app-close" ) {
      bringToFront("contacts-app")
      applicationToggle("contacts-app");
    }
    
  });

  // application toggle


  //application dragging

  // create a variable that references the element we want to drag - initialize to null

  let dragging = null;
    
    let finderApp = document.getElementsByClassName("dockapps-finder")[0]

    finderApp.addEventListener("mousedown", (event) => {
      dragging = finderApp;
      
      if (event.target == document.getElementsByClassName("dockapps-finder-right-header")[0]){
        let dragOffsetX = event.offsetX + 160;
        let dragOffsetY = event.offsetY -1;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("finder-app")
      } else if (event.target == document.getElementsByClassName("dockapps-finder-left-buttons")[0]) {
        let dragOffsetX = event.offsetX;
        let dragOffsetY = event.offsetY;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("finder-app")
      } 
      
      
    });

    let safariApp = document.getElementsByClassName("dockapps-safari")[0]

    safariApp.addEventListener("mousedown", (event) => {
      dragging = safariApp;
      
      if (event.target == document.getElementsByClassName("dockapps-safari-header")[0]){
        let dragOffsetX = event.offsetX ;
        let dragOffsetY = event.offsetY;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("safari-app")
      }
    
      
    });

    let contactsApp = document.getElementsByClassName("dockapps-contacts")[0]

    contactsApp.addEventListener("mousedown", (event) => {
      dragging = contactsApp;
      
      
      if (event.target == document.getElementsByClassName("dockapps-contacts-left-buttons")[0]){
        let dragOffsetX = event.offsetX ;
        let dragOffsetY = event.offsetY;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("contacts-app")
      }
      if (event.target == document.getElementsByClassName("dockapps-contacts-right")[0]){
        let dragOffsetX = event.offsetX + 248;
        let dragOffsetY = event.offsetY;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("contacts-app")
      }
      if (event.target == document.getElementsByClassName("dockapps-contacts-right-profile")[0]){
        let dragOffsetX = event.offsetX + 307;
        let dragOffsetY = event.offsetY + 22;
        dragging.classList.add("dragging");
        appMove(dragOffsetX, dragOffsetY, dragging)
        bringToFront("contacts-app")
      }
    
      
    });
};
