import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerModule } from '@/customer';
import { getMongoConfigs } from '@/configs';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomerModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfigs,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
