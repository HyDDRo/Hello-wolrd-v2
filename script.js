
window.addEventListener("load", ()=> {
  let long;
  let lat;
     
   if(navigator.geolocation) {
        navigation.geolocation.getCurrentPosition
        (position => {
          console.log(position);
         
        });
   }
});
