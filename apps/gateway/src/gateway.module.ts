import { Inject, Module } from "@nestjs/common";
import { CouchBaseModule } from "nestjs-couchbase";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Role } from "../../schemas/role";
import { GatewayController } from "./gateway.controller";
import { GatewayService } from "./gateway.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    CouchBaseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        connectionString: configService.get("COUCHBASE_CONNECTION_STRING"),
        username: configService.get("COUCHBASE_USERNAME"),
        password: configService.get("COUCHBASE_PASSWORD"),
        bucketName: configService.get("COUCHBASE_BUCKET"),
      }),
      inject: [ConfigService],
    }),
    CouchBaseModule.forFeature([Role]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
