var http = require('http');

var fib = function (N) {
	if(!isNaN(N)) N = parseInt(N);
		else
			return 0;
	if(N < 0)
	{
		ans = fib(-1*N);
		if(N%2 == 0)
			return -1*ans;
		else
			return ans;
	}

	if(N == 0) return 0;
	if(N == 1) return 1;
	return fib(N-1)+fib(N-2);
}
module.exports = fib;

var links = 5;
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Fibonachi ' + links + ' = ' + fib(links));
}).listen(3000);

console.log('Server running at http://localhost:3000/');
