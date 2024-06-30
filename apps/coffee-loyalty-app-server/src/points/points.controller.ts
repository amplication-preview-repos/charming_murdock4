import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PointsService } from "./points.service";
import { PointsControllerBase } from "./base/points.controller.base";

@swagger.ApiTags("points")
@common.Controller("points")
export class PointsController extends PointsControllerBase {
  constructor(
    protected readonly service: PointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
