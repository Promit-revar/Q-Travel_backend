import config from "config";

const configVariables = {
  SYS_APP_CNF: config.get("SYS_APP_CNF"),
  //PRIVATE_API_KEY: config.get("PRIVATE_API_KEY"),
  DATABASE_CONNECTION_URI_DEV: config.get("DATABASE_CONNECTION_URI_DEV"),
  AWS_ACCESS_KEY_ID: config.get("AWS_ACCESS_KEY_ID"),
  AWS_SECRET_ACCESS_KEY: config.get("AWS_SECRET_ACCESS_KEY"),
  // S3_BUCKET_NAME: config.get("S3_BUCKET_NAME"),
  // S3_BUCKET_NAME_PROFILE_PICS: config.get("S3_BUCKET_NAME_PROFILE_PICS"),
  TIMEZONE: config.get("TIMEZONE"),
  JWT_SECRET_KEY: config.get("JWT_SECRET_KEY"),
  EMAIL_HOST: config.get("EMAIL_HOST"),
  EMAIL_PORT: config.get("EMAIL_PORT"),
  EMAIL_USER: config.get("EMAIL_USER"),
  EMAIL_PASS: config.get("EMAIL_PASS"),
  EMAIL_FROM: config.get("EMAIL_FROM"),
  // FAST2SMS_API_KEY: config.get("FAST2SMS_API_KEY"),
  // FAST2SMS_API_ROUTE: config.get("FAST2SMS_API_ROUTE"),
  // FAST2SMS_API_SENDER_ID: config.get("FAST2SMS_API_SENDER_ID"),
  FRONT_END_URL: config.get("FRONT_END_URL"),
  EXPIRED_IN: config.get("EXPIRED_IN"),
  REFRESH_EXPIRED_IN: config.get("REFRESH_EXPIRED_IN"),
  // STRIPE_PUBLISHABLE_KEY: config.get("STRIPE_PUBLISHABLE_KEY"),
  // STRIPE_SECRET_KEY: config.get("STRIPE_SECRET_KEY"),
  // STRIPE_WEBHOOK_SECRET: config.get("STRIPE_WEBHOOK_SECRET"),
  // BASIC: config.get("BASIC"),
  // PREMIUM: config.get("PREMIUM"),
  // SSO_SERVER_JWT_URL: config.get("SSO_SERVER_JWT_URL"),
  GOOGLE_SERVICE_ACCOUNT_EMAIL:
    "quantum-travels@quantum-travels-391610.iam.gserviceaccount.com",
  GOOGLE_PRIVATE_KEY:
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvhCoJ9gILOjOG\nSc91uDPXpjgbcQ3DPR2KK0yukgGjUj9GhwDI4LxT082hzadyicMIQunKnqNI9qw8\nH/S+2v1U1SQZMXlvXUxvdactcs6ir4q/fvnDdID0RQrfDwYuGyxMbHLZ/Eo3SK5c\nU1yTc0sTv5qMbs2zm3JgS4+SRj6Ef0+8DBqYlC+u2VC4afj9XINpiBjHauxOqjhZ\nklPYQffFgx2gydgsM6ezhkLGG+7cP7F3UuncNz5WSHYAxO9togk9LDPG1/T8K1x6\nXy60fINgCwqKET4oOr0Y4icgVPtfSgDbu8XQaDXUTMT5JqRQz/JOOg1jiHBWJllA\nz8g0WffdAgMBAAECggEAOx5v4vAILp3ByIBw9uFN2Il0WV+lEj8ESs2nuoIa6eVb\n7WxWtv5ztaw2mhzBGz4iN+iOPN89tf1+40NO/YnflEAcziQeUWzhuDQ93LO1CcZS\n9LPiccpQpxpgldCnSZuW6lEtYx1I807bDLpdxB5l1lzJiKaz2sSAbYDREf2JIlox\nA+rg6q5Mkq7JAEUTglCnKYy9HmR/7S32YjDQ54Y3aBUqropYq/mjwPd6WhXXFiLC\nvaGVZJGtmYGTP1iSm15aHsB70qAEa3GJP5LZqNgF5e+qKRW/yGWRrlBrx5QeZOeo\n1CCvsFIIA+2m5NJKTCBt6OhFI238svnwshb0hNemIQKBgQD6reoafbN0chQwUFVn\nlUVROE5ZjhfGbMnVxdEyZuvEEQjoBG1WKrDZ7k8ZRmEZGJkSDPMmmXn1mqon9sqV\n9VEhT4RI901nIrx7hepe9NqM231PMTIvGin3TcCk8A3JS79CWVpbm4CEk1LL3Vvm\nHXCpHm2xdL5YoKhJsfEMZKLZfQKBgQD0mZghOihn4kTrgB9NIea04aTQGJFXfjNF\nYV3EhVeothgqSsqckG+BNULyeuFTBFQvTuVEiMNNmKsnvPcUCiyJ7BZpL1QhAEIV\nyIC9ib5NizYXeOtz0I60RLXCC5Bs5WGwTh+5tPFvidHCR+xChj1f9mJEXXzttlAq\n5X5RZxzl4QKBgEh1/TWrIDSIxU0x634FqAPSQtOgPz8cMzuX8uCe34fNZMWsge5m\naLiWKkckEO0wLw8Ir0B5HMfh7U2gCO9P+iOm2JY+5iDp6ZHLI/RO0t3klFRP5DG5\nXmgeEZGb0mBdhOuo6HWSfZPVAhnr4qSh3e8E3LBvDpaP2hVzWjo63NgBAoGBALZq\nxhYhtXikOxoXF0EDA3fqwGuhpuNFbx9TGgcyGsnr4+HGnYxd+4q1GhSUp+6tz8ro\nX/vYsy7vqNWeC/aaD9VciOoxLeDevGpaegjg7VgPdmvS9mYNKCAxDgyFa1SLTWub\nF/X7iAPTGOh3ky+ZxbQHoAm0XzM5QFh9htNWvyqBAoGBAIV+A4v7UEC8zSgbiFSe\nRebHze/TUqqQFwJUI7/uORGesNmtEBIv5ZPpr3L802+Errq3CWq0AwFigeIGtsrz\n5eovKWKuonbjJJ8X9+9JdiVcETQu/PG6MtnhxptP1HsLNezL1ATFSF8RUX13MxZb\nnBPD91/1feEZbx6J7Vavc2yu",
  GOOGLE_SHEET_ID: "1cWrS1Xamabj1xd1YKgsGhxAnldKaC06j3zIaH14SIw4",
  // RAPID_API_KEY: "5c442d981cmshc3a071ee98142aap13348fjsn92eff3fa3ba5",
};

export default configVariables;
