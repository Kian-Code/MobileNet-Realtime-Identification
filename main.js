function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Classifier = ml5.imageClassifier('MobileNet' , ModelLoaded);
}

function draw()
{
  image(video , 0 , 0 , 300 , 300);
  Classifier.classify(video , GotResult);

}

function ModelLoaded()
{
  console.log("Model is loaded");
}

function GotResult(error , results)
  {
if (error) 
{
  console.error(error);
} 
else 
{
  console.log(results);
  document.getElementById("Result_Object_Name").innerHTML = results[0].label;
  document.getElementById("Result_Object_Accuracy").innerHTML = results[0].confidence.toFixed(2);

}
  }