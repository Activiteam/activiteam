import express from 'express';
import {emoji} from 'node-emoji';
import {configuration, HTTP_SERVER_PORT} from './configuration';
import {logger} from './utils/logger';

/*
 ** Handle exceptions and rejections
*/
process.on('uncaughtException', (error: any) => {
	logger.error(error);
	process.exit(1);
});

process.on('unhandledRejection', (error: any) => {
	logger.error(error);
	process.exit(1);
});

// Create a new express application instance
const app: express.Application = express();

const emojiToShow = configuration.ENVIRONMENT === 'prod' ? emoji['coffee'] : emoji['gear'];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(HTTP_SERVER_PORT, () => {
  logger.info(`${emojiToShow} - Activiteam backend is listening on port ${HTTP_SERVER_PORT}!`);
});
