const table_client = document.getElementById('table_client');

const delete_client = document.getElementById('delete_client');
const delete_id_client = document.getElementById('delete_id_client');

const edit_client = document.getElementById('edit_client');
const edit_id_client = document.getElementById('edit_id_client');

const name_client = document.getElementById('name_client');
const surname_client = document.getElementById('surname_client');
const lastname_client = document.getElementById('lastname_client');
const birthday_client = document.getElementById('birthday_client');
const passport_client = document.getElementById('passport_client');

const add_client = document.getElementById('add_client');

const getTableClient = () => {
    axios.get('http://localhost:3000/clients/')
        .then(({ data }) => {
            data.forEach((rowValue, rowIndex) => {
                const row = table_client.insertRow(rowIndex + 1);
                Object.values(rowValue).forEach((cellValue, cellIndex) => {
                    const cell = row.insertCell(cellIndex);
                    cell.innerHTML = cellValue;
                });
            });
        });
};

getTableClient();

const redrawTable = () => {
    const rowCount = table_client.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table_client.deleteRow(1);
    }

    getTableClient();
}

delete_client.addEventListener('click', () => {
    axios.delete(`http://localhost:3000/clients/`, {
        data: {
            id: delete_id_client.value,
        },
    }).then(() => redrawTable());
});

edit_client.addEventListener('click', () => {
    axios.put(`http://localhost:3000/clients/`, {
        data: {
            id: edit_id_client.value,
            name: name_client.value,
            surname: surname_client.value,
            lastName: lastname_client.value,
            date: birthday_client.value,
            passport: passport_client.value,
        },
    }).then(() => redrawTable());
});

add_client.addEventListener('click', () => {
    axios.post(`http://localhost:3000/clients/`, {
        data: {
            name: name_client.value,
            surname: surname_client.value,
            lastName: lastname_client.value,
            date: birthday_client.value,
            passport: passport_client.value,
        },
    }).then(() => redrawTable());
});
