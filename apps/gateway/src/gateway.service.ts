import { Injectable } from "@nestjs/common";
import { CouchBaseModel, InjectModel } from "nestjs-couchbase";
import { Role, RoleSecond } from "../../schemas/role";

@Injectable()
export class GatewayService {
  constructor(
    @InjectModel(Role.name) private readonly roleModel: CouchBaseModel<Role>,
    @InjectModel(RoleSecond.name)
    private readonly role2Model: CouchBaseModel<RoleSecond>
  ) {}
  async getHello() {
    const first = await this.roleModel.create({
      role_id: "Test",
      name: "Test_role",
      description: "-",
      authorizes: [],
      status: "Active",
    });

    const second = await this.role2Model.create({
      role_id: "Test",
      name: "Test_role",
      description: "-",
      authorizes: [],
      status: "Active",
    });

    return { first, second };
  }
}
