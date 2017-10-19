function slideNav() {
  var sideNav = document.getElementById("side-nav")
  var wrapper = document.getElementById("wrapper")

  if (sideNav.style.visibility === "hidden") {
    return
  }
  else if (sideNav.style.width === "0px") {
    sideNav.style.width="150px"
    wrapper.style.marginLeft = "150px"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
  }
  else {
    sideNav.style.width="0px"
    wrapper.style.marginLeft = "0px"
    document.body.style.backgroundColor = "rgba(0,0,0,0)"
}

}
