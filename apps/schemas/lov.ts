import { BelongsTo, Prop, Schema } from "nestjs-couchbase";
import { Account } from "./account";

@Schema({
  collection: "lov",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
})
export class Lov {
  @Prop({ required: true })
  group_name: string;

  @Prop({ required: true, unique: true })
  set_value: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false, default: {} })
  additional: object | any;

  @BelongsTo(() => Account)
  created_by: Account;
}
