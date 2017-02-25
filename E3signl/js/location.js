
var option={
        enableHighAccuracy:true,
	timeout:10000,
	maximumAge:60000
};
function displayLocation(position){		
	 mui.toast('正在定位');
     var latitude=position.coords.latitude;
	 var longitude=position.coords.longitude;
	//	 document.getElementById('local').innerHTML='当前距离:'+getDisance(31.022031,121.442132,latitude,longitude)+'米';
	 //获取具体位置
	 mui.later(function(){
	 	if(position.address)
	 	{
	 		$(".mui-icon-location").text(position.addresses);
			mui.confirm(position.addresses,'定位',['确认','重新定位']);
	 	}
//	 	document.getElementById('local').innerHTML='当前距离:'+getDisance(31.022031,121.442132,latitude,longitude)+'米'+'<br/>'+position.addresses;
	 },3000);
	var shopPosition = position.addresses+':'+latitude+':'+longitude;	 
	 localStorage.setItem('shopPosition',shopPosition);	 
}

function displayError(error){     
     var errorTypes={
	0: "Unkown error",
	1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
	 };
     var errorMessage=errorTypes[error.code];
        if(error.code==0 || error.code==2){
	 errorMessage=errorMessage+" "+error.message;		  
        }
     myDiv.innerHTML=errorMessage; 
 
     option.timeout += 10000;
     navigator.geolocation.getCurrentPosition(displayLocation,displayError,option);
   }
// loading  go Location
//mui.plusReady(function(){
//	//获取位置
//	document.getElementById('loationbt').addEventListener('tap',function(){	
//		plus.geolocation.getCurrentPosition(displayLocation,displayError,option);	
//	});		
//});

//demo length

function toRad(d) { return d * Math.PI / 180; }
function getDisance(lat1, lng1, lat2, lng2) { 
var dis = 0;
var radLat1 = toRad(lat1);
var radLat2 = toRad(lat2);
var deltaLat = radLat1 - radLat2;
var deltaLng = toRad(lng1) - toRad(lng2);
var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
return dis * 6378137;
}
