UPDATE products
SET description = $1
WHERE product_id = $2;

SELECT * FROM products;