import { HasOne, Prop, Schema } from "nestjs-couchbase";
import { Role } from "./role";

@Schema({
  collection: "account",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
})
export class Account {
  @Prop({ required: false })
  user_id: string;

  @Prop({ required: false, default: "" })
  core_role: string;

  @Prop({ required: true })
  user_name: string;

  @Prop({ required: true })
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ default: "" })
  job_title: string;

  @Prop()
  job_level: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  birthdate: Date;

  @Prop()
  status: string;

  @Prop()
  line_id: string;

  @Prop({
    enum: ["merchant", "business"],
    default: "merchant",
    enumName: "AccountType",
  })
  type: string;

  @HasOne(() => Role)
  role: Role;

  @HasOne(() => Account)
  superior_local: Account;

  @HasOne(() => Account)
  superior_hq: Account;

  @HasOne(() => Account)
  manager_id: Account;

  @Prop()
  agent: string;

  @Prop({ required: false, default: null })
  legacy_user_id: string | null;

  @Prop()
  location: object | any;
}
