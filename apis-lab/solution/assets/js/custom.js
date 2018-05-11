
try {
    let x = localStorage.getItem('position');
    if(x) {
        x = JSON.parse(x);
        alert('Your previous position was: latitude '  + x.latitude + ' longitude ' + x.longitude);    
    }
 }
catch(e) {
    console.log(e);
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (pos) {
        // alert(pos.coords.latitude);
        // alert(pos.coords.longitude);
        localStorage.setItem('position',JSON.stringify({latitude: pos.coords.latitude, longitude: pos.coords.longitude}));
    }, function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Request denied.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Data unavailable.");
                break;
            case error.TIMEOUT:
                alert("Request timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Unknown error.");
                break;
        }
    },
    {timeout:5000});

} else {
    alert('your browser does not support geolocation');
}