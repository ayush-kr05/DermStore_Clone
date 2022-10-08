import connectDatabase from "./";

class products {
  constructor() {
    connectDatabase().catch(() => {
      console.log(err.message);
    });
  }
  async pageData(query) {
    console.log(query);
    let skip = Math.max(0, (query.pageno - 1) * query.limit);
    return productsModel.find().skip(skip).limit(query.limit);
  }
  async getSortedproducts(rating) {
    return productsModel.find().sort({ rating: rating });
  }
  
  async filterByQuery(query) {
    return productsModel.find(query);
  }
  async getproducts() {
    return productsModel.find();
  }
  async getproductsById(id) {
    return productsModel.findById(id);
  }
  async getproductsByQuery(query) {
    var regex = new RegExp(["^", query, "$"].join(""), "i");
    return productsModel.find({ title: regex });
  }

}
export default products;
