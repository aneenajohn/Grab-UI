// Modal
var btn = document.getElementById("openBtn");
var modal = document.getElementById("modalid");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Toast
function showToast(){        
    const toast_btn = document.getElementById("toast");
    toast_btn.className = "show";
    setTimeout(function(){ toast_btn.className = toast_btn.className.replace("show", "toast"); }, 3000)
}
