Webcam.set({
    width:350,
    height:300,
    image_format:'png',
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src= "'+data_uri+'"/>';
    })
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bx3OCv5-e/model.json',modelloaded)
function modelloaded(){
    console.log("model is loaded")
}
function identify(){
    img=document.getElementById("captured_img");
    classifier.classify(img,getResult)
}
function getResult(error,result){
  if (error) {
      console.log(error)
  }  
 else {
     console.log(result)
     document.getElementById(object_name).innerHTML=result[0].label
     document.getElementById(accuracy_number).innerHTML=result[0].confidence
 }
}