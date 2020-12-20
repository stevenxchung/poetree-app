import { Module } from '@nestjs/common';
import { ContentModule } from './content/content.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ContentModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://' +
        encodeURIComponent(process.env.DB_USER) +
        ':' +
        encodeURIComponent(process.env.DB_PASSWORD) +
        process.env.CLUSTER_NAME +
        encodeURIComponent(process.env.DB_NAME) +
        '?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
})
export class AppModule {}
