const table_product = document.getElementById('table_product');

const delete_product = document.getElementById('delete_product');
const delete_id_product = document.getElementById('delete_id_product');

const edit_product = document.getElementById('edit_product');
const edit_id_product = document.getElementById('edit_id_product');

const name_product = document.getElementById('name_product');
const cost_product = document.getElementById('cost_product');
const count_product = document.getElementById('count_product');
const date_product = document.getElementById('date_product');
const weight_product = document.getElementById('weight_product');

const add_product = document.getElementById('add_product');

const getTableClient = () => {
    axios.get('http://localhost:3000/products/')
        .then(({ data }) => {
            data.forEach((rowValue, rowIndex) => {
                const row = table_product.insertRow(rowIndex + 1);
                Object.values(rowValue).forEach((cellValue, cellIndex) => {
                    const cell = row.insertCell(cellIndex);
                    cell.innerHTML = cellValue;
                });
            });
        });
};

getTableClient();

const redrawTable = () => {
    const rowCount = table_product.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table_product.deleteRow(1);
    }

    getTableClient();
}

delete_product.addEventListener('click', () => {
    axios.delete(`http://localhost:3000/products/`, {
        data: {
            id: delete_id_product.value,
        },
    }).then(() => redrawTable());
});

edit_product.addEventListener('click', () => {
    axios.put(`http://localhost:3000/products/`, {
        data: {
            id: edit_id_product.value,
            name: name_product.value,
            cost: cost_product.value,
            count: count_product.value,
            date: date_product.value,
            weight: weight_product.value,
        },
    }).then(() => redrawTable());
});

add_product.addEventListener('click', () => {
    axios.post(`http://localhost:3000/products/`, {
        data: {
            name: name_product.value,
            cost: cost_product.value,
            count: count_product.value,
            date: date_product.value,
            weight: weight_product.value,
        },
    }).then(() => redrawTable());
});
