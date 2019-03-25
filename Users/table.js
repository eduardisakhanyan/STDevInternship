const button = document.getElementById('add');
button.addEventListener('click', addNewRow);
function addNewRow() {
    const form = document.getElementById('formAddNew');
    form.style.display = "block";
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let elements = form.elements;
        let obj = {};
        for (let i = 0; i < elements.length - 1; i++) {
            let item = elements.item(i);
            obj[item.name] = item.value;
        }
        console.log(obj);
        fetch('http://localhost:3004/users', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(obj)
        })
            .then(response => response.text())
            .then(text => console.log(text))
            .then(() => drawTable());
        form.style.display = "none";
    });

}
function createTable() {
    fetch('http://localhost:3004/users')
        .then(response => response.json())
        .then(data => createTable(data));

    function createTable(data) {
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < data.length; ++i) {
            let tr = document.createElement('tr');
            for (let key in data[i]) {
                if (data[i].hasOwnProperty(key)) {
                    if (key == "id") {
                        tr.setAttribute("id", data[i][key]);
                        continue;
                    }
                    let td = document.createElement('td');
                    td.innerText = data[i][key];
                    tr.appendChild(td);
                }
            }
            let buttonDelete = document.createElement('button');
            let buttonEdit = document.createElement('button');
            buttonDelete.addEventListener('click', deleteRow);
            buttonEdit.addEventListener('click', editRow);
            buttonDelete.innerText = "Delete";
            buttonEdit.innerText = "Edit";
            tr.appendChild(buttonEdit);
            tr.appendChild(buttonDelete);
            tbody.appendChild(tr);
        }
    }
}

function deleteRow(e) {
    let tr = e.target.parentElement;
    let id = tr.getAttribute("id");
    console.log(id);
    fetch('http://localhost:3004/users/' + id, {
        method: "DELETE"
    }).then(() => drawTable());
}

function editRow(e) {
    let tr = e.target.parentElement;
    let form = document.getElementById('formEdit');
    form.style.display = "block";
    let elements = form.elements;
    for (let i = 0; i < elements.length - 1; ++i) {
        elements.item(i).value = tr.cells[i].innerText;
    }
    let id = tr.getAttribute("id");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let obj = {};
        for (let i = 0; i < elements.length - 1; i++) {
            let item = elements.item(i);
            obj[item.name] = item.value;
        }
        fetch('http://localhost:3004/users/' + id, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(obj)
        })
            .then(response => response.text())
            .then(text => console.log(text))
            .then(()=>drawTable());
        form.style.display = "none";
    });
}

function drawTable() {
    let tbody = document.getElementById('tbody');
    for (let i = 0; i < tbody.rows.length; ++i) {
        console.log(tbody.rows[i]); 
    }
}

createTable();