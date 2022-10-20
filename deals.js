const table_deal = document.getElementById('table_deal');

const delete_deal = document.getElementById('delete_deal');
const delete_id_deal = document.getElementById('delete_id_deal');

const edit_deal = document.getElementById('edit_deal');
const edit_id_deal = document.getElementById('edit_id_deal');

const date_deal = document.getElementById('date_deal');
const type_deal = document.getElementById('type_deal');
const status_deal = document.getElementById('status_deal');
const buyer_deal = document.getElementById('buyer_deal');
const product_deal = document.getElementById('product_deal');

const add_deal = document.getElementById('add_deal');

const getTableClient = () => {
    axios.get('http://localhost:3000/deals/')
        .then(({ data }) => {
            data.forEach((rowValue, rowIndex) => {
                const row = table_deal.insertRow(rowIndex + 1);
                Object.values(rowValue).forEach((cellValue, cellIndex) => {
                    const cell = row.insertCell(cellIndex);
                    cell.innerHTML = cellValue;
                });
            });
        });
};

getTableClient();

const redrawTable = () => {
    const rowCount = table_deal.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table_deal.deleteRow(1);
    }

    getTableClient();
}

delete_deal.addEventListener('click', () => {
    axios.delete(`http://localhost:3000/deals/`, {
        data: {
            id: delete_id_deal.value,
        },
    }).then(() => redrawTable());
});

edit_deal.addEventListener('click', () => {
    axios.put(`http://localhost:3000/deals/`, {
        data: {
            id: edit_id_deal.value,
            name: date_deal.value,
            surname: type_deal.value,
            lastName: status_deal.value,
            date: buyer_deal.value,
            passport: product_deal.value,
        },
    }).then(() => redrawTable());
});

add_deal.addEventListener('click', () => {
    axios.post(`http://localhost:3000/deals/`, {
        data: {
            date: date_deal.value,
            type: type_deal.value,
            status: status_deal.value,
            buyer: buyer_deal.value,
            product: product_deal.value,
        },
    }).then(() => redrawTable());
});
