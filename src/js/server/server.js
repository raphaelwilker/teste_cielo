var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var contentType = {
	'html':'text/html',
	'css':'text/css',
	'js':'text/javascript',
	'ttf':'application/x-font-ttf',
	'woff':'application/x-font-woff',
	'woff2':'application/font-woff2'
}

http.createServer(function(request,response){

	var _path_ = url.parse(request.url).pathname;

	if(_path_ == '/'){
		var file = path.join(__dirname, '../../../', _path_, 'index.html');
	}  else {
     	var file = path.join(__dirname, '../../../', _path_);
   	}

   	console.log('path = '+_path_);

	fs.readFile(file, function(error,data){
		if(error){
			response.writeHead(404);
			response.write('File not found!');
		}else{
			var ct = path.extname(file).slice(1);
    		response.setHeader('Content-Type', contentType[ct]);
			response.write(data);
		}
		response.end();
	});
	
}).listen(8080);