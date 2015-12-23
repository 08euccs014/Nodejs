module.exports = {


displayRoot : function(url, req, res) {
	var fs		= require('fs');

	res.writeHead(200, {'Content-Type': 'text/html'});
	 
	fs.readFile('./index.html', function(error, data) {
		if(error) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
	    var html = data.toString();
	    res.end(html);
	});
	return true;
},

display404	: function(url, req, res) {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.write("<h1>404 Not Found</h1>");
	res.end("The page you were looking for: "+url+" can not be found");
	return true;
},

publicRoot : function(url, req, res) {
	if(/\.(css)$/.test(url)) {
		var fs		= require('fs');
		res.writeHead(200, {'Content-Type': 'text/css'});
		var file = url.match(/\/([^\/])+\.css$/);
		console.log(file[0]);
		res.write(fs.readFileSync(__dirname + '/public/assets/css' + file[0], 'utf8'));
		res.end();
		return true;
	}
	else if(/\.(js)$/.test(url)) {
		var fs		= require('fs');
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		var file = url.match(/\/([^\/])+\.js$/);
		console.log(file[0]);
		res.write(fs.readFileSync(__dirname + '/public/assets/js' + file[0], 'utf8'));
		res.end();
		return true;
	}
	else if(/\.(woff)$/.test(url)) {
		var fs		= require('fs');
		res.writeHead(200, {'Content-Type': 'application/font-woff'});
		var file = url.match(/\/([^\/])+\.woff$/);
		console.log(file[0]);
		res.write(fs.readFileSync(__dirname + '/public/assets/font' + file[0]));
		res.end();
		return true;
	}
	else if(/\.(woff2)$/.test(url)) {
		var fs		= require('fs');
		res.writeHead(200, {'Content-Type': 'application/font-woff2'});
		var file = url.match(/\/([^\/])+\.woff2$/);
		console.log(file[0]);
		res.write(fs.readFileSync(__dirname + '/public/assets/font' + file[0]));
		res.end();
		return true;
	}
	else if(/\.(ttf)$/.test(url)) {
		var fs		= require('fs');
		res.writeHead(200, {'Content-Type': 'application/font-ttf'});
		var file = url.match(/\/([^\/])+\.ttf$/);
		console.log(file[0]);
		res.write(fs.readFileSync(__dirname + '/public/assets/font' + file[0]));
		res.end();
		return true;
	}
	else{
		return this.display404(url, req, res);
	}
}

}
