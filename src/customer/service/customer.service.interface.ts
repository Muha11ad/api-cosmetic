import { CustomerModelDocument } from '../dataManegment/customer.model';
import { CustomerUpdateDto } from '../dataManegment/dto/update-customer.dto';

export class ICustomerService {
  deleteCustomer: (id: string) => Promise<CustomerModelDocument>;
  updateCustomer: (id: string, data: CustomerUpdateDto) => Promise<CustomerModelDocument>;
}
