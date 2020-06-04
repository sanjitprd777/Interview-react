import './App.css'

function Delete() {
    const pageUrl = window.location.href
    const id = pageUrl.substring(35,38);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById("demo").innerHTML = "Interview successfully deleted.";
      }
    };
    xhttp.open("DELETE", "http://localhost:3000/interviews/" + id, true);
    xhttp.send();
    
    window.location.href = "/"
  
}
export default Delete; 
