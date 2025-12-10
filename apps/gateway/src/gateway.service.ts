import { Injectable } from "@nestjs/common";
import { CouchBaseModel, InjectModel } from "nestjs-couchbase";
import { Role } from "../../schemas/role";

@Injectable()
export class GatewayService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: CouchBaseModel<Role>
  ) {}
  async getHello() {
    return await this.roleModel.create({
      role_id: "Test",
      name: "Test_role",
      description: "-",
      authorizes: [],
      status: "Active",
    });
  }
}
