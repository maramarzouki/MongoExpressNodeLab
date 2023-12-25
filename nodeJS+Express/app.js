const express = require('express')
const app = express()
const products = require('./data.js')
const fs = require('fs')
const products_routes = require('./routes/products.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


app.use(express.json()) // parse json body content
app.use('/api/products', products_routes)


/*
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct);

        // Write the updated products array back to the file
        fs.writeFile('./data.js', `module.exports = ${JSON.stringify(products, null, 2)}`, (err) => {
            if (err) {
                res.status(500).send('Error writing to file');
                return;
            }
            res.status(201).json(newProduct);
        });
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
    //http://localhost:5000/api/products/4
    //{"id":4,"name":"New Product","price":"product price"}
})

app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = updatedProduct
    
    // Write the updated products array back to the file
    fs.writeFile('./data.js', `module.exports = ${JSON.stringify(products, null, 2)}`, (err) => {
        if (err) {
            res.status(500).send('Error writing to file');
            return;
        }
        res.status(200).json('Product updated');
    });
})

app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
        if (index === -1) {
        return res.status(404).send('Product not found')
    }
    products.splice(index,1)
    res.status(200).json('Product deleted')
})
        */




// const auth  = (req, res, next) => {
//     const user = req.query.user
//     if (user === 'admin') {
//         req.user = { name: 'admin', id: 1 }
//         next()
//     } else {
//         res.status(401).send('Unauthorized')
//     }
// }

// app.use(auth)

// app.get('/about', (req, res) => {
//     console.log(req.user)
//     return res.send('About Page')
// })

// const logger  = (req, res, next) => {
//     console.log(req.url)
//     console.log(req.params)
//     console.log(req.query)
//     next()
//     // res.send('Custom About page')
// }

// // app.use(logger)

// app.get('/about', logger, (req, res) => {
//     // console.log(req.url)
//     // console.log(req.params)
//     // console.log(req.query)
//     return res.send('About Page')
// })

// app.get('/api/query', (req, res) => {
//     const name = req.query.name.toLowerCase()
//     const products_result = products.filter(product => product.name.toLowerCase().includes(name))

//     if (products_result.length < 1) {
//         return res.status(200).send('No products matched your search')
//     }
//     res.json(products_result)
// })

// //http://localhost:5000/api/query/?name=iphone
// /*
//     [{"id":1,"name":"iPhone","price":800}]
// */

// app.get('/api/products/:productID', (req, res) => {
//     const id = Number(req.params.productID)
//     const product = products.find(product => product.id === id)

//         if (!product) {
//         return res.status(404).send('Product not found')
//     }
//     res.json(product)
// })

// // app.get('/api/products/:productID', (req, res) => {
// //     const id = Number(req.params.productID)
// //     const product = products.find(product => product.id === id)
// //     res.json(product)
// // })

// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// app.get('/api/products', (req, res) => {
//     const partial_products = products.map(product => {
//         return { id: product.id, name: product.name }
//     })
//     res.json(partial_products)
// })

// app.get('/api/products', (req, res) => {
//     res.json([
//         { name: 'iPhone', price: 800 },
//         { name: 'iPad', price: 650 },
//         { name: 'iWatch', price: 750 }
//     ])
// })




