import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerModel, CustomerModelDocument } from '..';
import { ICustomerRepository } from './customer.interface';

export class CustomerRepository implements ICustomerRepository {
  constructor(@InjectModel(CustomerModel.name) private readonly customerModel: Model<CustomerModelDocument>) {}

  async create(data: { name: string; email: string; password: string }): Promise<CustomerModelDocument> {
    const customer = new this.customerModel(data);
    return await customer.save();
  }

  async update(id: string): Promise<CustomerModelDocument | null> {
    return await this.customerModel.findByIdAndUpdate(id, { new: true }).exec();
  }

  async delete(id: string): Promise<CustomerModelDocument | null> {
    return await this.customerModel.findByIdAndDelete(id).exec();
  }

  async findById(id: string): Promise<CustomerModelDocument | null> {
    return await this.customerModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<CustomerModelDocument | null> {
    return await this.customerModel.findOne({ email }).exec();
  }
}
