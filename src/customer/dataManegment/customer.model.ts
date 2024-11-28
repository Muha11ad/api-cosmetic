import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CustomerModel {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export type CustomerModelDocument = HydratedDocument<CustomerModel>;
export const CustomerModelSchema = SchemaFactory.createForClass(CustomerModel);
