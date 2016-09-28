var app = angular.module("ridesApp", ["angularSoap"])

app.factory("ridesService", ['$soap',
	function($soap){
		var base_url = "https://dimzdev01.mainz.de.ibm.com:443/user/kharuzhko/carshare.nsf/GetRide?WSDL";

		$soap.setCredentials("username","password");
    return {
        GetRides: function(){
            return $soap.post(base_url,"GetRidesByDate", {sdate: 28.09.2016});
        }
    }
}])

app.controller('CtrlRides', function($scope, ridesService) {

  ridesService.GetRides().then(function(rides){
    for(i=0;i<rides.length;i++){
        console.log(rides[i].ride);
    }
  });
})