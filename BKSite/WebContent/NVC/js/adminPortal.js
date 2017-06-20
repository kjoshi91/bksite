function submitChanges(){
	var headlineText=document.getElementById("headlineText").value;
	var headlineFlag=document.getElementById('headlineFlag').checked;
	console.log(headlineFlag);
	
}

function performAjaxSubmit() {

    var sampleFile1 = document.getElementById("file-1").files[0];
    var sampleFile2 = document.getElementById("file-2").files[0];
    var formdata = new FormData();
    formdata.append("sampleFile1", sampleFile1);
    formdata.append("sampleFile2", sampleFile2);
    var xhr = new XMLHttpRequest();       
    xhr.open("POST","/UploadFile", true);
    xhr.send(formdata);
    xhr.onload = function(e) {
        if (this.status == 200) {
           alert(this.responseText);
        }
    };                    
}   