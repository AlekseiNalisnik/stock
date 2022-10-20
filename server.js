const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const DATA = {
    clients: [
        { id: '1', name: 'Иван', surname: 'Иванов', lastName: 'Иванович', date: '25.06.2000', passport: '1111 222222' },
        { id: '2', name: 'Иван_1', surname: 'Иванов_1', lastName: 'Иванович_1', date: '28.06.2000', passport: '3333 222222' },
        { id: '3', name: 'Иван_2', surname: 'Иванов_2', lastName: 'Иванович_2', date: '26.06.2000', passport: '4444 222222' },
        { id: '4', name: 'Иван_3', surname: 'Иванов_3', lastName: 'Иванович_3', date: '27.06.2000', passport: '5555 222222' },
    ],
    products: [
        { id: '1', name: 'Зонд', cost: '250000', count: '12', date: '25.06.2000', weight: '2500' },
        { id: '2', name: 'Вешалка', cost: '149', count: '230', date: '02.06.2022', weight: '100' },
    ],
    deals: [
        { id: '1', date: '25.06.2000', type: 'Диллерская', status: 'Готово', buyer: 'ООО ГПБ', product: 'Вентилятор' },
        { id: '2', date: '26.06.2002', type: 'Бизнес', status: 'В процессе', buyer: 'ООО Каштанка', product: 'Глобус' },
    ],
};

app.get('/clients/', (req, res) => {
    res.json(DATA.clients);
});
app.delete('/clients/', (req, res) => {
    const deleteId = req.body.id;
    DATA.clients = DATA.clients.filter(({ id }) => id !== deleteId);
    res.json();
});
app.put('/clients/', (req, res) => {
    const clientRow = req.body.data;
    DATA.clients = DATA.clients.map(client => {
        if (client.id === clientRow.id)
            return clientRow;
        return client;
    });
    res.json();
});
app.post('/clients/',  (req, res) => {
    const clientRow = req.body.data;
    const lastClientId = +DATA.clients.at(-1).id;
    DATA.clients.push({ id: lastClientId + 1, ...clientRow });
    res.json();
});


app.get('/products/', (req, res) => {
    res.json(DATA.products);
});
app.delete('/products/', (req, res) => {
    const deleteId = req.body.id;
    DATA.products = DATA.products.filter(({ id }) => id !== deleteId);
    res.json();
});
app.put('/products/', (req, res) => {
    const productRow = req.body.data;
    DATA.products = DATA.products.map(product => {
        if (product.id === productRow.id)
            return productRow;
        return product;
    });
    res.json();
});
app.post('/products/',  (req, res) => {
    const productRow = req.body.data;
    const lastProductId = +DATA.products.at(-1).id;
    DATA.products.push({ id: lastProductId + 1, ...productRow });
    res.json();
});


app.get('/deals/', (req, res) => {
    res.json(DATA.deals);
});
app.delete('/deals/', (req, res) => {
    const deleteId = req.body.id;
    DATA.deals = DATA.deals.filter(({ id }) => id !== deleteId);
    res.json();
});
app.put('/deals/', (req, res) => {
    const dealRow = req.body.data;
    DATA.deals = DATA.deals.map(deal => {
        if (deal.id === dealRow.id)
            return dealRow;
        return deal;
    });
    res.json();
});
app.post('/deals/',  (req, res) => {
    const dealRow = req.body.data;
    const lastDealId = +DATA.deals.at(-1).id;
    DATA.deals.push({ id: lastDealId + 1, ...dealRow });
    res.json();
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});


// const getServerApi = (type) => {
//     app.get(`/${type}/`, (req, res) => {
//         res.json(DATA[type]);
//     });
//     app.delete(`/${type}/`, (req, res) => {
//         const deleteId = req.body.id;
//         DATA[type] = DATA[type].filter(({ id }) => id !== deleteId);
//         res.json();
//     });
//     app.put(`/${type}/`, (req, res) => {
//         const currentRow = req.body.data;
//         DATA[type] = DATA[type].map(item => {
//             if (item.id === currentRow.id)
//                 return currentRow;
//             return item;
//         });
//         res.json();
//     });
//     app.post(`/${type}/`,  (req, res) => {
//         const currentRow = req.body.data;
//         const lastId = +DATA[type].at(-1).id;
//         DATA[type].push({ id: lastId + 1, ...currentRow });
//         res.json();
//     });
// };
// getServerApi('clients');
// getServerApi('products');
// getServerApi('deals');
