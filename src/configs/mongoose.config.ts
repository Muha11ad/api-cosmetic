import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export async function getMongoConfigs(
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
}

function getMongoString(configService: ConfigService): string {
  return (
    'mongodb://' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_DATABASE')
  );
}

function getMongoOptions() {
  return {
    useCreateIndex: true,
    useNewUrlParses: true,
    useUnifiedTopology: true,
  };
}
