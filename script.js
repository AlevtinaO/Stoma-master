let isOpen = false

function addMenu() {
    const container = document.getElementById("containermenu")
    const iconMobile = document.getElementById("iconmobile")
    const iconClose =document.getElementById("iconclose")

    if (isOpen) {
       container.style.display = "none" 
       iconClose.style.display = "none"
       iconMobile.style.display = "flex"
       isOpen = false
    }
    else {
       container.style.display = "flex" 
       iconMobile.style.display = "none"
       iconClose.style.display = "flex"
       isOpen = true
    }
    
}


