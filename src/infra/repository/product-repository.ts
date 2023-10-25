import { IProduct, Product } from "../../domain";
import { ProductModel } from "../db";

export class ProductRepository implements IProduct {
  async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll()
    return productModels.map(
      (productModel) =>
        new Product(productModel.id, productModel.name, productModel.price)
    )
  }

  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { id } })
    return new Product(productModel.id, productModel.name, productModel.price)
  }

  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price
    });
  }

  async update(entity: Product): Promise<void> {
    await ProductModel.update({
      name: entity.name,
      price: entity.price
    }, {
      where: {
        id: entity.id
      }
    });
  }
}