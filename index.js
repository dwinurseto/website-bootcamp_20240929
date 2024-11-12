require("@snipkode/server");

ROUTE("GET /", function(){
    this.view("pages/dashboard")
});

ROUTE("GET /dashboard", function(){
    this.view("pages/dashboard");
});

ROUTE("GET /buku", function(){
    this.view("pages/books");
});

ROUTE("GET /penerbit", function(){
    this.view("pages/publisher");
});

ROUTE("GET /pengguna", function(){
    this.view("pages/users");
});

 ROUTE("GET /todo", function(){
     this.view("pages/todo");
 });

 ROUTE("GET /todolat", function(){
    this.view("pages/todo_lat");
});



HTTP("debug", { port: 5000 });