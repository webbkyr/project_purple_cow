# Overview & Instructions

## To run the application locally:
```
npm install

npm run serve
```

The default port for dev mode is set to 3000. You can change this in the `package.json` by updating the `--port` argument.

```
"serve": "vue-cli-service serve --port 3000"
```

Navigate to localhost:3000 in the browser.

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

## Outstanding Code

* There need to be more tests around the logic of the button and API/component lifecycle.
* A counter should have a way to be reset or decremented. By design, the `button` component is fully customizable. It would be straightforward to add two additional buttons to reset and decrement the counter.
* I would recommend adding an `About` page to describe the application and its goals and motivations.
* The app is currently bare bones. It would be great to add some more design (candidly not one of my strengths) or pull in some additional data to search or filter by (perhaps a list of social justice/advocacy nonprofits).


## Future Updates/Recommendations
* I'd want to know more details about the specific types of apps that client was interested in building to support their public health and social justice initiatives. For example, are write operations needed (do we need an API and database to support their app) or would the apps simply be consumers of publicly available data? Are we building tools for them to manage their workflow? Are we building tools to *help them* help *their* clients (think voter registration tools, etc.)?


## Assumptions/Implementation Considerations
Basic assumptions were made about the general structure/architecture of the application. This is a single client that has a public health and social justice portfolio. Therefore, if this application were to grow to different types of applications, I would likely add the [Vue router](https://router.vuejs.org/]), create a `views` folder, and separate the `App.vue` components into subfolders by app. For example:
```
routes.ts
/views
  /counter_app
    App.vue
    /components
    /api
  /some_other_app
    App.vue
    /components
    /api
  /yet_another_app
    App.vue
    /components
    /api
```

Ideally, these applications would be related in some way. If not, it may not make sense to house them in a single app. But it's something to think about.