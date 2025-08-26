import pool from "../config/db.js";

const Product = {

    getAll : async () => {
        const [rows] = await pool.query("SELECT * FROM products");
        return rows;
    },

    getById : async (id) => {
        const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
        return rows[0];
    },

    create : async (name, price) => {
        const [result] = await pool.query(
            "INSERT INTO products (name, price) VALUES (?, ?)",
            [name, price]
        )
    },

    update : async (id, name , price) => {
        await pool.query("UPDATE products SET name=?, price=? WHERE id=?", [name, price, id]);
        return {id, name, price};
    },

    remove : async (id)=> {
        await pool.query("DELETE FROM products WHERE id=? ", [id]);
        return { message : "Product deleted"};
    }
};

export default Product;