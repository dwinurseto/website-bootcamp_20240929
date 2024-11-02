require('@snipkode/server');
// console.log('ini global object', global);

 ROUTE('GET /landingpage', function(){
     // var self = this;
     this.view('pages/landingpage');
 });

 ROUTE('GET /todo', function(){
     // var self = this;
     this.view('pages/todo');
 });

 ROUTE('GET /', function(){
     // var self = this;
     this.view('pages/dashboard');
 });
 
 ROUTE('GET /buku', function(){
    // var self = this;
    this.view('pages/books');
});

ROUTE('GET /penerbit', function(){
    // var self = this;
    this.view('pages/publisher');
});

ROUTE('GET /pengguna', function(){
    // var self = this;
    this.view('pages/users');
});

HTTP('debug', {port:5000});