alert("this script works!");
window.addEventListner("load", ()=> {
  let long;
  let lat;
     
   if(navigator.geolocation){
        navigation.geolocation.getCurrentPosition
        (position => {
          console.log(position);
         
        });
   }else{
     h1.textContent = "hey this dosnt work"
     
     
   });
