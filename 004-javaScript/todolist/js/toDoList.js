
// Bir "x(çarpı)" butonu oluşturulup her liste öğesine eklendi
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Liste öğesini gizlemek için 'x' butonuna tıklayın
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//// Listedeki bir ögeye tıklandığında yapıldı olarak('checked') işaretler
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// "Ekle" butonuna tıklandığında yeni bir liste öğesi oluşturur
function newElement() 
{
    var li= document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length===0)
    {
        $(".error").toast("show");

       }else
    {
       
        $(".success").toast("show");
         document.getElementById("list").appendChild(li);
        localStorage.setItem('list', JSON.stringify(myList));
      
    }
    document.getElementById("task").value = ""; 
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span);
   

    for (var i=0; i<close.length;i++)
    {
        close[i].onclick = function () 
        {
            var div= this.parentElement;
            div.style.display="none";
        };
    }

}