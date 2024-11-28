import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './service/customer.service';
import { CustomerRepository } from './repository/customer.repository';
import { CustomerController } from './controller/customer.controller';
import { CustomerModel, CustomerModelSchema } from './dataManegment/customer.model';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  imports: [
    MongooseModule.forFeature([
      { name: CustomerModel.name, schema: CustomerModelSchema },
    ]),
  ],
})
export class CustomerModule {}
