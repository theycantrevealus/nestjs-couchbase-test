import { Schema } from "nestjs-couchbase";

@Schema({
  collection: "program",
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
})
export class Program {}
