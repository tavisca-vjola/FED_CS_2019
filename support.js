function myFunction() {
            
  window.alert("welcome to Home");
          }
          function myfunction2() {
              document.getElementById("File");
  window.alert("welcome to help");
 
          }
          function myfunction3() {
             
  window.alert("welcome to contact");
 
          }
          var tags = [
            "Avengers",
            "Captain Marvel",
            "Captain America",
            "Steve",
            "Hello",
            "Flash",
            "Shazam",
            "Superman",
            "Iron man",
            "Mountain man",
            "Indian Railways",
            "Jai hind",
            "Sleeping Tutorial"
            ];

function AddElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    tags.push(t);
  }
  document.getElementById("myInput").value = "";
  
}


 function suggest(value) {
  var n= tags.length;
    document.getElementById('datalist').innerHTML = '';
     
 for (var i = 0; i<n; i++) {
     if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
     {
       
       var node = document.createElement("option");
       var val = document.createTextNode(tags[i]);
       node.appendChild(val);
       document.getElementById("datalist").appendChild(node);
       
         }
     }
 }