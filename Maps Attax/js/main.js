var Bases = new Array();

function AreaBase(User, Lat, Long) {
 this.User = User;
 this.Lat = Lat;
 this.Long = Long;
}

var Turrets = new Array();

function Turret(BaseID, Lat, Long) {
 this.BaseID= BaseID;
 this.Lat = Lat;
 this.Long = Long;
}

var map;

var canvas;
var ctx;
var pixelWidth;
var pixelHeight;

var OGS = 64;
var GS = OGS / 2;
var GD = GS / 2;

var OBS = 8;
var BS = OBS / 2;
var BD = BS / 2;

var baseCount = 0;
var turretCount = 0;
var stuffRefresh = self.setInterval("reloadBase();reloadTurrets();", 1000);

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(53.801532, -1.546851),
          zoom: 18,
          rotateControl: false,
          tilt: 0,
          minZoom: 12,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	google.maps.event.addListener(map, 'bounds_changed', function() {
		reloadBase()
		redraw();
	});

	canvas = document.getElementById("overlay");
	ctx = canvas.getContext("2d");

	redraw();

}

function reloadBase() {
	$.ajax({
	  url: "http://maps.darkflow.net/getbases.php",
	  type: 'POST',
	  data: 'longMin='+map.getBounds().ea.b+'&longMax='+map.getBounds().ea.j+'&latMin='+map.getBounds().ca.b+'&latMax='+map.getBounds().ca.j,
	  success: function ( data ) {
	   remakeBaseList(data);
	   redraw();
	  }
	});
}

function remakeBaseList(data) {
	baseCount = 0;
	Bases = new Array();
	var baseArray = data.split(';');
	for (bbase in baseArray) {
 		if (baseArray[bbase]!="") {
                      var coords = baseArray[bbase].split(',');
                      var Tlat = coords[0];
                      var Tlong = coords[1];
                      Bases[baseCount] = new Object();
                      Bases[baseCount] = new AreaBase(1, Tlat, Tlong);
		      baseCount += 1;
                }
	}

}

function reloadTurrets() {
	$.ajax({
	  url: "http://maps.darkflow.net/getturrets.php",
	  type: 'POST',
	  data: 'longMin='+map.getBounds().ea.b+'&longMax='+map.getBounds().ea.j+'&latMin='+map.getBounds().ca.b+'&latMax='+map.getBounds().ca.j,
	  success: function ( data ) {
	   remakeTurretList(data);
	   redraw();
	  }
	});
}

function remakeTurretList(data) {
	turretCount = 0;
	Turrets = new Array();
	var turretArray = data.split(';');
	for (tturret in turretArray) {
 		if (turretArray[tturret]!="") {
                      var coords = turretArray[tturret].split(',');
                      var Tlat = coords[0];
                      var Tlong = coords[1];
                      Turrets[turretCount] = new Object();
                      Turrets[turretCount] = new Turret(1, Tlat, Tlong);
		      turretCount += 1;
                }
	}

}


function DrawBase(ID) {

 var X = long2x(Bases[ID].Long);
 var Y = lat2y(Bases[ID].Lat);

 ctx.drawImage(Base, 0, 0, OGS, OGS, X - GD, Y - GD, GS, GS);

}

function DrawTurret(ID) {

 var X = long2x(Turrets[ID].Long);
 var Y = lat2y(Turrets[ID].Lat);

 ctx.drawImage(TurretBase, 0, 0, OGS, OGS, X - GD, Y - GD, GS, GS);
 ctx.drawImage(TurretTop, 0, 0, OGS, OGS, X - GD, Y - GD, GS, GS);

}

function redraw() {

	pixelWidth = document.defaultView.getComputedStyle(document.getElementById("map_canvas"), "").getPropertyValue("width");
	pixelHeight = document.defaultView.getComputedStyle(document.getElementById("map_canvas"), "").getPropertyValue("height");
	pixelWidth = pixelWidth.substr(0,pixelWidth.length-2);
	pixelHeight = pixelHeight.substr(0,pixelHeight.length-2);

	document.getElementById('overlay').width = pixelWidth;
	document.getElementById('overlay').height = pixelHeight;

	ctx.fillStyle = "rgba(0, 0, 200, 1)";

	for (i = 0; i<baseCount; i++) {
	       	DrawBase(i);
	}
	
	for (i = 0; i<turretCount; i++) {
	       	DrawTurret(i);
	}

	//ctx.drawImage(Jeep, 0, 0, OGS, OGS, 32 - GD, 32 - GD, GS, GS);
	//ctx.drawImage(Bullet, 0, 0, OBS, OBS, 32 - BD, 64 - BD, BS, BS);

}

function long2x(long) {
	var longwidth = map.getBounds().ea.j - map.getBounds().ea.b;
	var scalefactor = pixelWidth/longwidth;

        return (long - map.getBounds().ea.b) * scalefactor;
}

function lat2y(lat) {
	var latheight = map.getBounds().ca.j - map.getBounds().ca.b;
	var scalefactor = pixelHeight/latheight;

        return pixelHeight - ((lat - map.getBounds().ca.b) * scalefactor);
}