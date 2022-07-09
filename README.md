<div id="top"></div>

<div align="center">
  <h1 align="center">Canteena Site</h1>

  <h4 align="center">
    A website where you can buy and sell anything without worries
    <br />
    <br />
  </h4>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#deploy">Deploy on Vercel</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![product-screenshot]

<div id="#about-the-project"></div>
Canteena Site is a website I created for the purpose of submission of COMPFEST 2022. The purpose of this website is to simulate how honest store (or known as "kantin kejujuran") if it were digitalized. This website contains numerous features like Buying and selling items, adding and withdrawing balances, and so on.

Using Next.js and Firebase, this website is launched with Vercel and able to connect to the database effortlessly.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
<!-- GETTING STARTED -->

## Getting Started

<div id="#getting-started"></div>
### Prerequisites

<div id="#prerequisites"></div>
<ul>
<li>Next.js</li>
<li>Firebase</li>
<li>Node.js</li>
<li>Framer-motion</li>
<li>Next-SEO</li>
<li>Headless-ui</li>
<li>Tailwind CSS</li>
</ul>

### Installation

<div id="#installation"></div>
1. Clone the repo

```sh
git clone https://github.com/DiziASP/canteena.git
```

2. Run `npm install` or `yarn install` to install the necessary dependencies

3. Setting up Firebase server
   a. Create a new Firebase account
   ![create-firebase]
   b. Initialize Firebase Storage and Database
   ![create-storage]![create-database]
   c. Go to Project settings and Configure new Project to get necessary API KEY.
   ![firebase-conf]
   d. Add every values to a local environment variable
   ![env-var]
   e. create a file to store global firebase variables.
   ![firebase-js]
4. Run the server using

```sh
yarn run dev
```

or

```sh
npm run dev
```

### Deploy on Vercel

<div id="#deploy"></div>
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

<div id="#license"></div>
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<div id="#contact"></div>
My Instagram - [@radendzzi\_](https://instagram.com/radendzzi_)

My LinkedIn - [![LinkedIn][linkedin-shield]][linkedin-url]

My Email - dizi.assyafadi.p@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/radendiziap
[product-screenshot]: public/assets/demo/app_demo.gif
[create-database]: public/assets/demo/create-database.png
[create-firebase]: public/assets/demo/create-firebase.png
[create-storage]: public/assets/demo/create-firestore.png
[env-var]: public/assets/demo/env-var.png
[firebase-js]: public/assets/demo/firebase-js.png
[firebase-conf]: public/assets/demo/firebase-conf.png
