
window.addEventListener("load", ()=> {
  let long;
  let lat;
     
   if(navigator.geolocation) {
        navigation.geolocation.getCurrentPosition
        (position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;
         
        });
   }
});
