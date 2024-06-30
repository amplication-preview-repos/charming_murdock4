import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PointsModuleBase } from "./base/points.module.base";
import { PointsService } from "./points.service";
import { PointsController } from "./points.controller";
import { PointsResolver } from "./points.resolver";

@Module({
  imports: [PointsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PointsController],
  providers: [PointsService, PointsResolver],
  exports: [PointsService],
})
export class PointsModule {}
