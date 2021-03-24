function result() {
  
  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  
  if (name === "") {
    alert('Please enter your name');
  }else if (name.length <= 2) {
    alert('Only three or more than three characters are allowed');
  }else if (!isNaN(name)) {
    alert('Only letters are allowed');
  }
  
  else if (name === "") {
    alert('Please enter your name');
  }else if (name.length <= 2) {
    alert('Three or more than three characters are allowed');
  }else if (!isNaN(name)) {
    alert('Only letters are allowed');
  }
  
  else{
  let data = Math.random() * 100;
  data = Math.floor(data);
  document.getElementById("value").value = data + "%";

  }
  
  
}
