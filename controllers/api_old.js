// const { ROUTE } = require("@snipkode/server")

exports.install = function() {

    const buku = [
        {
            "id_buku" : 1,
            "judul" : "Buku 1",
            "pengarang_id" : 1,
            "kategori_id" : 2,
            "tahun_terbit" : 2023,
            "harga" : 10000
        },

        {
            "id_buku" : 2,
            "judul" : "Buku 2",
            "pengarang_id" : 1,
            "kategori_id" : 2,
            "tahun_terbit" : 2023,
            "harga" : 10000
        }
        
    ]

    ROUTE("GET /api", function(){
        this.json("Selamat datang di API Books");
    });

    ROUTE("GET /api/buku", function(){
        this.json(buku);
    });

    ROUTE("GET /api/buku/{id}", function(){
        buku.map((value, key)=> {
            if (value.id_buku == this.params.id) {
                this.json(value);
            }
        })
        // this.json(buku[this.params.id-1]);
    });

    // coba add pakai get
    // ROUTE("GET /api/buku/add", function(){
    //     const bukubaru = {
    //         "id_buku" : 3,
    //         "judul" : "Buku 3",
    //         "pengarang_id" : 1,
    //         "kategori_id" : 2,
    //         "tahun_terbit" : 2023,
    //         "harga" : 10000
    //     };
    //     buku.push(bukubaru);

    //     this.json(buku);
    // });

    ROUTE("POST /api/buku", function(){
        // const bukubaru = {
        //     "id_buku" : 3,
        //     "judul" : "Buku 3",
        //     "pengarang_id" : 1,
        //     "kategori_id" : 2,
        //     "tahun_terbit" : 2023,
        //     "harga" : 10000
        // };
        // buku.push(bukubaru);

        //console.log("tambah data", this.body);
        buku.push(this.body);

        this.json(buku);
    });
}