import pino from 'pino';

export const logger = pino({
  name: 'activiteam',
  level: 'debug',
  prettyPrint: { colorize: true },
});
