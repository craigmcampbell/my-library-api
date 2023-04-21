import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
  FLAG_ENABLE_ELASTIC_SEARCH: String,
  NODE_ENV: String,
  PORT: Number,
  READWISE_TOKEN: String,
  READWISE_URL: String,
  SEARCHLY_URL: String,
};

export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
