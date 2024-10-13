require('@snipkode/server');
// console.log('ini global object', global);

 ROUTE('GET /', function(){
     // var self = this;
     this.view('pages/landingpage');
 });

ROUTE('GET /', function(){
    // var self = this;
    this.view('pages/todo');
});

 ROUTE('GET /', function(){
     // var self = this;
     this.view('pages/dashboard');
 });

HTTP('debug', {port:5000});