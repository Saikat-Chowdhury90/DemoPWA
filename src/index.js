if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registeres!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Regitration Failed");
        console.log(error);
    })
}