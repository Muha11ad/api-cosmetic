import { CustomerModelDocument } from '..';

export interface ICustomerRepository {
    update: (id: string) => Promise<CustomerModelDocument | null>;
    delete: (id: string) => Promise<CustomerModelDocument | null>;
    findById: (id: string) => Promise<CustomerModelDocument | null>;
    findByEmail: (email: string) => Promise<CustomerModelDocument | null>;
    create: (data: { name: string; email: string; password: string }) => Promise<CustomerModelDocument>;
}
