import { Module } from '@nestjs/common';
import { ContentModule } from './content/content.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
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
    // Will allow application to serve the built web app
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
