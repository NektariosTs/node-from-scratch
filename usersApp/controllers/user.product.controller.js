const User = require("../models/user.model");
const Product = require("../models/user.model")

exports.findAll = async (req, res) => {
  console.log("find from all users products")

  try {
    const result = await User.find({}, { username: 1, products: 1, _id: 0 });
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("problem in finding all users products")
    res.status(400).json({ status: false, data: error });
  }
}

exports.findOne = async (req, res) => {
  console.log("find form a user the products");
  const username = req.params.username;

  try {
    const result = await User.findOne({ username }, { username: 1, products: 1, _id: 0 });
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("Problem in finding users products");
    res.status(400).json({ status: false, data: error });
  }
}

exports.create = async (req, res) => {
  console.log("insert products to user");
  const username = req.body.username;
  const products = req.body.products;

  try {
    const result = await User.updateOne(
      { username: username },
      {
        $push: {
          products: products
        }
      }
    );
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("problem in adding product");
    res.status(400).json({ status: false, data: error });
  }
}

exports.update = async (req, res) => {
  const username = req.body.username;
  const product_id = req.body.product._id;
  const product_quantity = req.body.product.quantity;

  console.log("Update product for username:", username);

  try {
    const result = await User.updateOne(
      { username: username, "products._id": product_id },
      {
        $set: {
          "products.$.quantity": product_quantity
        }
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("Problem in updating product", error);
    res.status(400).json({ status: false, data: error })
  }
}

exports.delete = async (req, res) => {
  const username = req.params.username;
  const product_id = req.params.id;

  console.log("delete product form user");

  try {
    const result = await User.updateOne(
      { username: username },
      {
        $pull: {
          products: { _id: product_id }
        }
      }
    );
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("problem in deleting product", error);
    res.status(400).json({ status: false, data: error });
  }
}

exports.stats1 = async (req, res) => {
  console.log("For each users return total amount and number of products");

  try {
    const result = await User.aggregate([       //einai ena array apo fitlra
      {
        $unwind: "$products"
      },
      {
        $project: {
          _id: 1,
          username: 1,
          products: 1
        }
      },
      {
        $group: {
          _id: { username: "$username", product: "$products.product" },
          totalAmount: {
            $sum: { $multiply: ["$products.cost", "$products.quantity"] }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.username": 1, "_id.product": 1 } }
    ]);
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.log("problem in stats1", error);
    res.status(400).json({ status: false, data: error })
  }
}