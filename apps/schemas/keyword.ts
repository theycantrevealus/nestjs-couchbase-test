import { IsBoolean, IsNumber, Matches } from "class-validator";
import { HasMany, HasOne, Prop, Schema } from "nestjs-couchbase";
import { Lov } from "./lov";
import { Transform } from "class-transformer";
import { Channel } from "./channel";

export class KeywordEligibility {
  @Prop({ required: true })
  @Matches(/^[\w-]*$/)
  name: string;

  @Prop({ required: true })
  start_period: Date;

  @Prop({ required: true })
  end_period: Date;

  @HasOne(() => Lov)
  point_type: Lov;

  @Prop({ enum: [] })
  poin_value: string;

  @Prop({
    validate: (value: number) => value >= 0,
    validateMessage:
      "Invalid value for poin_redeemed. Must be a non-negative number.",
  })
  @Transform((data) => parseInt(data.value))
  @IsNumber()
  poin_redeemed: number;

  @Prop({ default: false })
  @Transform((data) => {
    const value = data.value;
    return value === "true" || value === true || value === 1 || value === "1";
  })
  @IsBoolean()
  channel_validation: boolean;

  @HasMany(() => Channel)
  channel_validation_list: Channel[];

  @HasMany(() => Channel)
  channel_validation_list_info: Channel[];
}

@Schema({
  collection: "keyword",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
})
export class Keyword {
  @Prop({ type: () => KeywordEligibility })
  eligibility: KeywordEligibility;
}
