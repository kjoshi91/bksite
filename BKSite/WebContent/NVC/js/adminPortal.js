/*function submitChanges(){
	var headlineText=document.getElementById("headlineText").value;
	var headlineFlag=document.getElementById('headlineFlag').checked;
	console.log(headlineFlag);
	
}*/

function performAjaxSubmit() 
{
	sendText();
    var sampleFile1 = document.getElementById("file-1").files[0];
    var sampleFile2 = document.getElementById("file-2").files[0];
    var formdata = new FormData();
    formdata.append("sampleFile1", sampleFile1);
    formdata.append("sampleFile2", sampleFile2);
    var xhr = new XMLHttpRequest();       
    xhr.open("POST","../UploadFile", true);
    xhr.send(formdata);
    xhr.onload = function(e) {
        if (this.status == 200) {
           alert(this.responseText);
        }
    };
}

function sendText()
{
	var text=document.getElementById("headlineText").value;
	var isChecked=document.getElementById('headlineFlag').checked;
	jQuery.ajax({
        url: '../AdminServlet',
        type: 'POST',
        data: '{text:"'.concat(text).concat('",isVisible:"').concat(isChecked).concat('",action:"send"}'),
        dataType: 'json',
        beforeSend: function(x) {
          
        },
        success: function(jsonObj) {
        	
        }
  });
}

function getTextStatus()
{
	
}

function checkUserLoggedIn()
{
	
	var uname=localStorage.getItem("username");
	var isAdmin=localStorage.getItem("isAdmin");
	if(uname!=null)
	{
		if(isAdmin!=1)
		{
			alert("You are not administrator!");
			window.location.href="about:blank";
		}
	}
	else
	{
		alert("You are not logged in!");
		window.location.href="about:blank";
	}
}