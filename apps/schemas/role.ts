import { Prop, Schema } from "nestjs-couchbase";

@Schema({
  collection: "role",
  scope: "_default",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
})
export class Role {
  /** Core data */
  @Prop()
  role_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  /** Core data */
  @Prop()
  authorizes: any[];

  /** Core data */
  @Prop()
  status: string;
}

@Schema({
  collection: "role_2",
  timestamps: true,
})
export class RoleSecond {
  /** Core data */
  @Prop()
  role_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  /** Core data */
  @Prop()
  authorizes: any[];

  /** Core data */
  @Prop()
  status: string;
}
