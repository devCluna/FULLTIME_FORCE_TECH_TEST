



<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://fulltime-force-test-client.netlify.app">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FULLTIME FORCE TECH TEST</h3>

  <p align="center">
    A github profile commit viewer 
    <br />
    <a href="https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fulltime-force-test-client.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/issues">Report Bug</a>
    ·
    <a href="https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/issues">Request Feature</a>
  </p>
   
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
            <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="run-on-localhost">Run on Localhost</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![FULLTIME_FORCE_TECH_TEST][product-screenshot]](https://fulltime-force-test-client.netlify.app/)

A github profile commit viewer 

<!-- Features -->
## Features
The current stills in development, so the next updates will come with following features:

- [x] User search
- [x] User selector
- [x] List repos
- [x] Select repo
- [x] Select branch 
- [x] Commits display
- [ ] User info modal
- [ ] Repo contributors display

See the [open issues](https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/issues) for a list of proposed features (and known issues).

### Built With

* [CSS3](https://developer.mozilla.org/es/docs/Web/CSSre)
* [React.js](https://es.reactjs.org/)
* [React-icons](https://react-icons.github.io/react-icons/)
* [React-Redux](https://react-redux.js.org/)
* [redux](https://es.redux.js.org/)
* [axios](https://github.com/axios/axios)
* [Node.js](https://nodejs.org/es/)
* [Express](https://expressjs.com/es/)
* [cors](https://www.npmjs.com/package/cors)
* [Github API](https://docs.github.com/es/rest)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run this project on your local machine or deploy it to a server we need to use or have the following tools:
* ***yarn***
  ```sh
  npm install yarn -g
  ```
* ***Node.js > 16.10***

  https://nodejs.org/es/download/

* ***git*** 

  https://git-scm.com/

* ***Github ACCESS_TOKEN***

  To get an access token you must first have a personal account on [Github](https://github.com)
  and request an api token [(step by step guide)](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  
  Make sure to choose at least the following scopes:`repo:status`, ``public_repo``, ``repo_deployment``, ``read:user``, ``user:email``, ``user:follow``

### Run on Localhost 

1. Clone the repo
   ```sh
   git clone https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST
   ```
#### 2 Run api/

  2.1 Open a terminal of your choice, enter the root directory and change to `api/` directory
   ```sh
   cd api/
   ```

  2.2 create a .env file and inside it include the following info
  ```sh
  //.env file
  GITHUB_TOKEN = <YOUR_ACCESS_TOKEN>
  ```

  2.3 Install the dependencies
  ```sh
  yarn install
  ```
  2.4 Run the scripts
  ```sh
  yarn start
  ```
#### 3 Run client/
  3.1 Open a terminal of your choice, enter the root directory and change to `client/` directory

  ```
  cd client/
  ```
 3.2 Create an .env file in the root directory of `client/` inside this include the following info:
 ```sh
 //.env file
 VITE_APP_URI = http://localhost:4000
 ```
 3.3 Install the dependencies
 ```
 yarn 
 ````
 3.3 finally run the scripts
 ```
 yarn run dev
 ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- Author -->
## Author

***Cristhian Luna***

* Website: [devCluna.com](https://devcluna.com)
*	Github: [@devCluna](https://github.com/devCluna)
*	Twitter: [@devCluna](https://twitter.com/DevCLuna)
*	LinkedIn: [Cristhian A. Luna](https://www.linkedin.com/in/devcluna/)
*	Codepen: [@DevCluna](https://codepen.io/DevCluna)

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/blob/master/License) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/devcluna/FULLTIME_FORCE_TECH_TEST.svg?style=for-the-badge
[contributors-url]: https://github.com/devcluna/FULLTIME_FORCE_TECH_TEST/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/devcluna/FULLTIME_FORCE_TECH_TEST.svg?style=for-the-badge
[forks-url]: https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/network/members

[stars-shield]: https://img.shields.io/github/stars/devCluna/FULLTIME_FORCE_TECH_TEST.svg?style=for-the-badge
[stars-url]: https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/stargazers

[issues-shield]: https://img.shields.io/github/issues/devCluna/FULLTIME_FORCE_TECH_TEST.svg?style=for-the-badge
[issues-url]: https://github.com/devCluna/FULLTIME_FORCE_TECH_TEST/issues

[license-shield]: https://img.shields.io/github/license/TribilinYT/dolla-react-responsive-frontpage-devcluna.svg?style=for-the-badge
[license-url]: https://github.com/TribilinYT/dolla-react-responsive-frontpage-devcluna/blob/master/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cluna1997/

[product-screenshot]: assets/homepage.png
