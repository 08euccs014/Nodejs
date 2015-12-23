var http	= require('http');
var fs		= require('fs');
var url 	= require('url');

var server 		= http.createServer(function (req, res) {

//allow cross origin request
res.setHeader("Access-Control-Allow-Origin", "http://localhost");
res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

var controller = require('./controller.js');

//add any new route here
var routes =  {
	'/'  : 'displayRoot',
	'public'  : 'publicRoot'
}

var pathname 	= url.parse(decodeURI(req.url)).pathname;

var queryLiterals = pathname.split('/');

var lastFunction = null;

console.log(queryLiterals);
//redirect to root
queryLiterals.forEach(function(literal){

	if(literal == '') {
		literal = "/";
	}

	console.log(routes[literal]);

	if(typeof routes[literal] != 'undefined') {
		lastFunction = routes[literal];
	}
});
console.log(lastFunction);
if(lastFunction != null) {
	return controller[lastFunction](pathname, req, res);
}else {
	return controller['display404'](pathname, req, res);
}



// if(queryLiterals[0] == '') {

// 	foreach
// 	checkRoute();
// }

// switch(url_parts.pathname) {
// 	case '/'	: displayRoot(url_parts.pathname, req, res); break;

// 	case '/public'	: publicRoot(url_parts.pathname, req, res); break;

// 	default		: display404(url_parts.pathname, req, res); 
// }

// return;




});

server.listen(3000);
