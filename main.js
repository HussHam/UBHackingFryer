var works = "works";
var test = "test";

function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //same\ as here
    var reader  = new FileReader();
    txt.CreateTextFile("/Users/dan/Desktop/x.txt");

   
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    preview
    if (file) {
       // var dataurl = file.toDataURL('image/png');
      var x =  reader.readAsDataURL(file); //reads the data as a URL
      reader.readAsDataURL(file);
      y = x.toDataURL('image/png');
      var s = txt.CreateTextFile("/Users/dan/Desktop/x.txt", true);
                s.WriteLine(y);
                s.WriteLine("HGAGDS");
                s.Close();
    } else {
        preview.src = "";
    }



    
}

previewFile(); 

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}