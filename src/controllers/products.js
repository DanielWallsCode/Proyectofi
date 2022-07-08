const { Contenedor } = require('../utils/contenedor');
const { Producto } = require('../utils/product');

const productos = new Contenedor('./productos.txt');

const getProducts = async (req, res) => {
    try {
        res.json(await productos.getAll());
    } catch (e) { 
        res.status(500).json({ error: e });
    }
}

const getProductById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';
        res.status(200).json(producto);

    } catch (e) { 
        res.status(500).json({ error: e });
    }
}
const saveProduct = async (req, res) => {
    try {
        const { title, description, thumbnail, price, stock, code } = req.body;
        const producto = new Producto( title, description, thumbnail, Number(price), Number(stock), code );
        let id = await productos.save(producto);

        res.status(201).json(id);
    } catch (e) { 
        res.status(500).json({ error: e });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { title, description, thumbnail, price, stock, code } = req.body;
        const id = Number(req.params.id);
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';

        productoModif = new Producto( title, description, thumbnail, Number(price), Number(stock), code );
        await productos.updateById(id, productoModif);
        res.status(200).json('Producto modificado');

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const producto = await productos.getById(id);

        if (!producto) throw 'producto no encontrado';
        
        await productos.deleteById(id);
        res.status(200).json('Producto eliminado');

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

module.exports = { getProducts, getProductById, saveProduct, updateProduct, deleteProduct }