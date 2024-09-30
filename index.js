require('@snipkode/server');
// console.log('ini global object', global);
ROUTE('GET /', function(){
    // var self = this;
    this.view('home');
});
HTTP('debug', {port:5000});