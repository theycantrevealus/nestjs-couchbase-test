import { Schema } from "nestjs-couchbase";

@Schema({ collection: "channel" })
export class Channel {}
