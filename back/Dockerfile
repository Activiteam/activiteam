FROM node:12.5.0
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json ./
COPY tsconfig.json ./
RUN yarn install
# Copy app source code
COPY src/ .
# Compile typescript files to js
RUN yarn build
#Expose port and start application
EXPOSE 4003
CMD [ "node", "build/index.js" ]