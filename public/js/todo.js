const todo = [
    //{ judul: 'Membuat website', status: 'design', tanggal: '2024.09.12'}
];

function template(judul, status, index){
    const elementHTML = `
        <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-dd")}
            <button onclick="baca(${index})">Baca</button>
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;
    return elementHTML;
};

function tampilData(){
    // update html
    document.getElementById('list').innerHTML ='';
    todo.map((list, index) => {
        console.log(list, 'ini index', index);
        document.getElementById('list').innerHTML += template(list.judul, list.status, index);
    });
};

function baca(index){
    alert(todo[`${index}`].judul);
};

function tambah(index){
    const judul = prompt('Masukan judul todo');
    const status = prompt('Masukan status todo');
    
    // console.log(judul, status);
    if(judul && status){
        const databaru = { judul: judul, status: status};
        todo.push(databaru);
    };

    tampilData();
    // // update html
    // document.getElementById('list').innerHTML ='';
    // todo.map((list, index) => {
    //     console.log(list, 'ini index', index);
    //     document.getElementById('list').innerHTML += template(list.judul, list.status, index);
    // });
};

function ubah(index){
    alert(`Ubah data dengan index ke ${index}`);

    const judul = prompt('Masukan judul todo', todo[index].judul);
    const status = prompt('Masukan status todo', todo[index].status);

    if(judul && status){
        todo[index].judul = judul;
        todo[index].status = status;
    };

    tampilData();
};

function hapus(index){
    //alert(`Hapus data dengan index ke ${index}`);
    console.log('delete ', todo[index].judul);
    var msg = 'hapus '+todo[index].judul+' ?';
    console.log(msg);

    //if(index !== undefined && index>=0){
    if (confirm(msg)){
        console.log('delete index ', index);
        todo.splice(index, 1);
    };

    tampilData();
};