export const HTTP_SERVER_PORT = '4003'

export const configuration = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  MONGO_DB: {
    // TODO: Put right MongoDB configuration with env variables
    MONGODB_USER: process.env.MONGODB_USER || 'test'
  }
};