module.exports = {
  create: (req, res) => {
    let db = req.app.get('db');
    let {name, description, price, imageurl} = req.body;
    db.create_product([name, description, price, imageurl])
    .then(() => {
      res.sendStatus(200)
    })
    .catch(() => {
      res.status(500).send('something went wrong')
      });
  },

  getOne: (req, res) => {
    let db = req.app.get('db');
    let {product_id} = req.params;
    db.read_product(product_id)
    .then((product) => {
      res.status(200).send(product)
    })
    .catch(err => {
      res.status(500).send("Something went wrong...")
      console.log(err)
      });
  },
  
  getAll: (req, res) => {
    let db = req.app.get('db');
    db.read_products()
    .then((product) => {
      res.status(200).send(product);
    })
    .catch(() => {
      res.status(500).send("Something went wrong...")
      })
  },

  update: (req, res) => {
    let db = req.app.get('db');
    let {id} = req.params;
    let {desc} = req.params;
    db.update_product([desc, id])
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send("Something went wrong...")
      });
  },

  delete: (req, res) => {
    let db = req.app.get('db');
    let {product_id} = req.params;
    db.delete_product(product_id)
    .then((product) => {
      res.status(200).send(product)
    })
    .catch(err => {
      res.status(500).send("Something went wrong...")
      });
  },
}