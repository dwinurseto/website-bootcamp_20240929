const todo = [
    //{ judul: 'Membuat website', status: 'design', tanggal: '2024.09.12'}
];

function template(judul, status, index){
    const elementHTML = `
        <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-dd")}
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;
    return elementHTML;
}

function tambah(index){
    const judul = prompt('Masukan judul todo');
    const status = prompt('Masukan status todo');
    
    // console.log(judul, status);

    const databaru = { judul: judul, status: status};
    todo.push(databaru);

    // update html
    document.getElementById('list').innerHTML ='';
    todo.map((list, index) => {
        console.log(list, 'ini index', index);
        document.getElementById('list').innerHTML += template(list.judul, list.status, index);
    });
};

function ubah(index){
    alert(`Ubah | ini adalah data dengan index ke ${index}`);
};

function hapus(index){
    alert(`Hapus | ini adalah data dengan index ke ${index}`);
};