export default {
  name: "Riccardo Sacco",
  avatar: "img/avatar.png",
  bio:
    "Hi, my name is Riccardo Sacco and I'm a full stack developer. Welcome to my website!",
  job: "Full Stack Developer",
  description: [
    "I’ve been passionate about programming since I was 13 and I love to learn. I believe in the learn-by-doing approach because I’ve always learned from mistakes.",
    "I love my job so much that it doesn’t feel like I'm working. Sometimes I make decisions, sometimes I change my mind, but everytime I get to the best solution."
  ],
  social: [
    {
      name: "facebook",
      link: "https://www.facebook.com/riccardo.sacco.90"
    },
    {
      name: "github",
      link: "https://github.com/rickybag/"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/riccardo-sacco"
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/rickysacco99/"
    }
  ],
  navigation: [
    {
      path: "/",
      icon: "fa fa-user",
      label: "About Me",
      component: "About"
    },
    {
      path: "/portfolio",
      icon: "fa fa-laptop-code",
      label: "Portfolio",
      component: "Portfolio"
    },
    {
      path: "/resume",
      icon: "fa fa-file-alt",
      label: "Resume",
      component: "Resume"
    },
    {
      path: "/blog",
      icon: "fa fa-blog",
      label: "Blog",
      component: "Blog"
    },
    {
      path: "/contact",
      icon: "fa fa-envelope-open-text",
      label: "Contact",
      component: "Contact"
    }
  ],
  skills: {
    title: "What I do",
    intro:
      "I have more than 5 years of experience developing frontend & backend applications for my clients. Below is a quick overview of my main technical skill sets and technologies I use.",
    list: [
      {
        name: "HTML5 & CSS3",
        icons: [
          { icon: "fab fa-html5 mr-1", color: "#DE6E3C" },
          { icon: "fab fa-css3-alt ml-1", color: "#53A7DC" }
        ]
      },
      {
        name: "JavaScript",
        icons: [{ icon: "fab fa-js-square", color: "#F1DE4F" }]
      },
      {
        name: "React & React Native",
        icons: [{ icon: "fab fa-react", color: "#62D4FA" }]
      },
      {
        name: "iOS & Android",
        icons: [
          { icon: "fab fa-app-store-ios mr-2", color: "#5fbef1" },
          { icon: "fab fa-google-play ml-2", color: "#75d58e" }
        ]
      },
      {
        name: "Node.js & npm",
        icons: [
          { icon: "fab fa-node-js mr-2", color: "#3B7EEB" },
          { icon: "fab fa-npm ml-2", color: "#b9261a" }
        ]
      },
      {
        name: "Python",
        icons: [{ icon: "fab fa-python", color: "#5769b8" }]
      },
      {
        name: "PHP & Laravel",
        icons: [
          { icon: "fab fa-php mr-2", color: "#787caf" },
          { icon: "fab fa-laravel ml-2", color: "#e65d47" }
        ]
      },
      {
        name: "Sass & Boostrap",
        icons: [
          { icon: "fab fa-sass mr-1", color: "#BF6B97" },
          { icon: "fab fa-bootstrap ml-1", color: "#524078" }
        ]
      },
      {
        name: "Git & Github",
        icons: [
          { icon: "fab fa-git mr-2", color: "#dc5c40" },
          { icon: "fab fa-github-square ml-2", color: "#eee" }
        ]
      },
      {
        name: "Trello & Confluence",
        icons: [
          { icon: "fab fa-trello mr-2", color: "#387ac2" },
          { icon: "fab fa-confluence ml-2", color: "#427ced" }
        ]
      },
      {
        name: "Figma & Sketch",
        icons: [
          { icon: "fab fa-figma mr-2", color: "#9761f7" },
          { icon: "fab fa-sketch ml-2", color: "#f0b13e" }
        ]
      },
      {
        name: "DigitalOcean & AWS",
        icons: [
          { icon: "fab fa-digital-ocean mr-2", color: "#3b81f7" },
          { icon: "fab fa-aws ml-2", color: "#ef9d38" }
        ]
      }
    ]
  }
};
