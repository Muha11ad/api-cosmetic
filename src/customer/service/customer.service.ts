import { Injectable } from '@nestjs/common';
import { ICustomerService } from './customer.service.interface';
import { ICustomerRepository } from '../repository/customer.interface';
import { CustomerUpdateDto } from '../dataManegment/dto/update-customer.dto';

@Injectable()
export class CustomerService implements ICustomerService {
  constructor(private readonly repository: ICustomerRepository) {}
  async updateCustomer(id: string, data: CustomerUpdateDto): Promise<CustomerModelDocument> {
    const updatedCustomer = await this.repository.update(id, data);
  }
}
