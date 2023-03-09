const firebaseConfig = {
    /*apiKey: "AIzaSyBYwa7ifHMP_z1MsZ7CBRTGY_aqnSp4XeE",
    authDomain: "image-upload-39545.firebaseapp.com",
    projectId: "image-upload-39545",
    storageBucket: "image-upload-39545.appspot.com",
    messagingSenderId: "284565950625",
    appId: "1:284565950625:web:975404091286cbebcf60e0"*/
	
	apiKey: "AIzaSyChettIA_eN1Z7LRDAbGxcvWD4kpJhhBMI",
	authDomain: "imageuploads-ec685.firebaseapp.com",
	projectId: "imageuploads-ec685",
	storageBucket: "imageuploads-ec685.appspot.com",
	messagingSenderId: "769792792284",
	appId: "1:769792792284:web:a8426e31838d11fdf68619"
	};
  
	firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var storageRef = storage.ref();
var i = 0;

	storageRef.child('/').listAll().then(function(result){
		
		result.items.forEach(function(imageRef){
		console.log("image ref" + imageRef.toString());

		i++;
			displayImage(i, imageRef);
		});
	});

function displayImage(row, images){
			
	images.getDownloadURL().then(function(url){
	//document.querySelector(".image").src = ""+ url +"";
	console.log(url);
	
	const img = document.createElement("img");
	img.src = ""+ url +"";
	document.body.appendChild(img);
			
	});
}




