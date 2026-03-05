export const projects = [
    {
    slug: "pawpartner",              // brukes i URL/routing og som unik id
    title: "Pawpartner - Web of Things høst 2025",

    thumbnail: "/project-images/pawpartner-app-frontpage.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/pawpartner-logo.webp", caption:"Pawpartner-logoen "},
      { type: "image", src: "/project-images/pawpartner-app-frontpage.webp", caption:""},
      { type: "image", src: "/project-images/pawpartner-app-homepage.webp", caption:"Hjemmeskjerm med oversikt over dagens anbefalte aktivitet, forlag til aktiviteter og forholdssatus"},
      { type: "image", src: "/project-images/pawpartner-app-todaysgoal.webp", caption:""},
      { type: "image", src: "/project-images/pawpartner-poster-info.webp", caption:"Informasjonsplakat"},
      { type: "image", src: "/project-images/pawpartner-poster.webp", caption:"Konseptplakat"},
      { type: "video", src: "/project-images/video-prototype-WoT.mp4", caption:"Konseptvideo"}
    ],

    shortDescription: "Pawpartner, aktivitretstrackeren utviklet med fokus på rellasjon mellom hund og eier.",
    fullDescription: "", 

    technologies: ["JavaScript", "HTML", "CSS", "Micro:Bit"], // "used technologies"
    githubUrl: "https://github.com/emilirol/WoT-Dogtracker",
    liveUrl: "",

    collaborations: [
      { name:"Camilla Borgos",
        linkedin: "https://www.linkedin.com/in/camillaborgos/",
        github:""
      },
      { name:"Emma Mathea Simensen",
        linkedin: "https://www.linkedin.com/in/emma-mathea-simensen/",
        github:""
      },
      { name:"Mia Sanne-Larsen",
        linkedin: "https://www.linkedin.com/in/mia-sanne-larsen-528aa8387/",
        github:""
      },
      { name:"Madeleine Lyseggen Aas",
        linkedin: "https://www.linkedin.com/in/madeleine-lyseggen-aas/",
        github:""
      },
      ] // eller tom []
  },
  {
    slug: "chatwidget",              // brukes i URL/routing og som unik id
    title: "Chat widget - Praktikant høst 2025",
    thumbnail: "/project-images/internship-flytit-chat.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/internship-flytit-chatBoble.webp", caption:"Chatbobblen som legges på nettsiden"},
      { type: "image", src: "/project-images/internship-flytit-chat.webp", caption:"Åpnet chat \"kundeservice\""},
    ],

    shortDescription: "Chat Bot widget er utviklet for å kunne brukes av norske nettbutikker som en automatisk kundeservice.",
    fullDescription: "",

    technologies: ["Svelte", "C#", "Docker"], 
    githubUrl: "https://github.com/emilirol/internship_flytit_fall25",
    liveUrl: "",

    collaborations: [], // eller tom []
  },
  {
    slug: "studyplatform",              // brukes i URL/routing og som unik id
    title: "Studyplatform - Webprosjekt vår 2025",
    thumbnail: "/project-images/studyplatform-login.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/studyplatform-login.webp", caption:"Studyplatforms landingsside og loginside",},
      { type: "image", src: "/project-images/studyplatform-create.webp", caption:"På \"lag ny studie\" kan man laste opp flere typer media og ha en fleksibel spørsmålsbygger.",},
      { type: "image", src: "/project-images/studyplatform-dashboard.webp", caption:"Dashbord som viser alle lagde studier med filtrering",},
      { type: "image", src: "/project-images/studyplatform-export.webp", caption:"",},
      { type: "image", src: "/project-images/studyplatform-profile.webp", caption:"",},
      { type: "image", src: "/project-images/studyplatform-share.webp", caption:"",},
      { type: "image", src: "/project-images/studyplatform-study1.webp", caption:"",},
      { type: "image", src: "/project-images/studyplatform-study2.webp", caption:"",},
    ],

    shortDescription: "Studyplatform utviklet for å lage og administrere undersøkelser.",
    fullDescription: "",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "GitHub Actions"], // "used technologies"
    githubUrl: "https://github.com/sabria23/Idg2671-project",
    liveUrl: "https://group4.sustainability.it.ntnu.no/login",

    collaborations: [
      { name: "Modesta Trakselyte",
        linkedin: "https://www.linkedin.com/in/",
        github: "",
      },
      { name:"Sabrina Altahrawi",
        linkedin: "https://www.linkedin.com/in/",
        github: "",
      },
      { name: "Marius Sandvik Bjørnstad",
        linkedin: "https://www.linkedin.com/in/",
        github: "",
      },
      ] // eller tom []
  },
  {
    slug: "Prosjekt kommer",              // brukes i URL/routing og som unik id
    title: "",
    thumbnail: "/project-images/placeholder.webp", // kan være path eller importert bilde

    media: [
    ],

    shortDescription: "",
    fullDescription: "",

    technologies: ["Her kommer det ett nytt prosjekt senere"], // "used technologies"
    githubUrl: "",
    liveUrl: "",

    collaborations: [] // eller tom []
  },
];