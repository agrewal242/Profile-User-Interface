[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/WwLezRPt)
# Profiler
In this project, you will create a simple application with React that shows profiles. Make sure to watch the demo on D2L before starting the project to see how the app is supposed to work.

:warning: 50% of the grade is demoing your work to the instructor!

## Notes
- Install the necessary packages with `npm install` first.
- Run the app using `npm start`.
- You must get the profiles from a Docker container based on the `masoudkf/data-generator:v2` image. Run the container using the `docker run --rm -p 3338:3338 --name YOURNAME_STUDENTID masoudkf/data-generator:v2` command. The data is available at this address: `http://localhost:3338/init`.
- The demo uses the [Bulma](https://bulma.io) framework for the CSS. Feel free to use Bulma or any other CSS framework.
- The demo uses [Font Awesome](https://fontawesome.com/) for the icons. Feel free to use other ways to show the icons.
- The demo uses a [Layout Component](https://masoudkarimif.github.io/posts/react-101/#the-layout-route). You don't have to use a Layout route.
- The demo uses the [React Router](https://masoudkarimif.github.io/posts/react-101/#react-router) library. You **must** have routing in your project, but you could use other libraries. Routing is **30%** of the project.
- The demo has a responsive layout (the number of columns changes based on the screen size). Responsiveness is **20%** of your project.
- For the social media links (Facebook and LinkedIn), use the following pattern: `https://facebook.com/<username>` and `https://linkedin.com/<username>`. For instance, if the user name is `amazing_hawking`, the links would be `https://facebook.com/amazing_hawking` and `https://linkedin.com/amazing_hawking`. These paths don't exist, but it's fine.
- Push your changes to the `main` branch before the deadline.