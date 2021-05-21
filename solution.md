# Instructions

## To run the application locally:
```
npm install

npm run serve
```

The default port for dev mode is set to 3000. You can change this in the `package.json` by updating the `--port` argument.

```
"serve": "vue-cli-service serve --port 3000"
```

Navigation to localhost:3000 in the browser.

## To run the productionized version of the app in Docker:

Clone the project locally. CD to the root of project.

Build the container
```
docker build -t project-purple .
```
Run it

```
docker run -p 3000:80 project-purple
```

The `-p` argument for the port is customizable and will map to the NGINX port 80 internally.