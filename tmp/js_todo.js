const todo=[];function template(judul,status,index){const elementHTML=`
        <li>
            ${judul} | ${status} | 2024-09-30
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;return elementHTML}function tambah(index){const judul=prompt('Masukan judul todo');const status=prompt('Masukan status todo');const databaru={judul:judul,status:status};todo.push(databaru);document.getElementById('list').innerHTML='';todo.map((list,index)=>{console.log(list,'ini index',index);document.getElementById('list').innerHTML+=template(list.judul,list.status,index)})};function ubah(index){alert(`Ubah | ini adalah data dengan index ke ${index}`)};function hapus(index){alert(`Hapus | ini adalah data dengan index ke ${index}`)};