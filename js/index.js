if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
let lon = position.coords.longitude;
let lat = position.coords.latitude;
  
  let api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" +lon+ "&appid=758bf582115d96b0f230e74ed1295081" ;

  
  

$.getJSON(api, function(data){
    
    let tempSwap = true;
    let swi = document.getElementById("switch");
    let tempData = document.getElementById("temp");
    let weatherIcon = document.getElementById("weaIcon");
    let weaCode = data.weather[0].icon;;  
    let city = data.name;
    let temp = data.main.temp;
    let cond = data.weather[0].description;
    let tempFar = (temp * 9/5 - 459.67).toFixed(2) +  "&#8457; ";//
    let tempCel = (temp - 273.15).toFixed(2) + "&#8451";
  
    $("#city").html(city);
    $("#temp").html(tempCel);
    $("#cond").html(cond);
    weatherIcon.src = "http://openweathermap.org/img/w/"+ weaCode +".png";
 
   swi.onclick = function(){
      if (tempSwap === true){
         $("#temp").html(tempFar) ;
         tempSwap = false;
        console.log("set to false");
      }else{         
         $("#temp").html(tempCel) ;
         tempSwap = true;
        console.log("set to true");
      };      
    }; //func call
  
  
});
});
};



/////