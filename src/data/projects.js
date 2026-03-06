export const projects = [
    {
    slug: "pawpartner",              // brukes i URL/routing og som unik id
    title: "Pawpartner - Web of Things høst 2025",

    thumbnail: "/project-images/pawpartner.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/pawpartner.webp"},
      { type: "video", src: "/project-images/video-prototype-WoT.mp4"}
    ],

    shortDescription: "Pawpartner, aktivitretstrackeren utviklet med fokus på rellasjon mellom hund og eier.",
    fullDescription: "Pawpartner er aktivitetstrackeren utviklet med fokus på relasjon mellom hun og eier. Utviklingen av Pawpartner var et tverrfaglig prosjekt mellom interaksjonsdesign (UX-design) og webutvikling i emnet IDG3006 Web of Things høsten 2025. Vi valgte å jobbe med problemområdet understimulerte hunder, som en konsekvens av lite erfaring og kunnskap hos hundeeiere. Pawpartner var prosjektet hvor vi som gruppe fikk utvikle våre ferdigheter innen UX-design og full-stack utvikling. Som blivende webutvikler tok jeg naturlig oppgavene som omhandlet koding, programmering og utvikling.", 

    technologies: ["JavaScript", "HTML", "CSS", "Micro:Bit"], // "used technologies"
    githubUrl: "https://github.com/emilirol/WoT-Dogtracker",
    liveUrl: null,

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
    thumbnail: "/project-images/chatbot.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/chatbot.webp"},
      { type: "image", src: "/project-images/internship-flytit-chatBoble.webp"},
      { type: "image", src: "/project-images/internship-flytit-chat.webp"},
    ],

    shortDescription: "Chat Bot widget er utviklet for å kunne brukes av norske nettbutikker som en automatisk kundeservice.",
    fullDescription: "Chatbot Widget er utviklet som et prosjekt under praksisperioden jeg hadde hos Flyt It i emnet IDG3542 Valgbar praksis høsten 2025. Chatbot er utviklet for å kunne brukes av, primært, norske nettsider som en automatisk kundeservice. Den ble laget som en high-fi prototype for en kunde. Chatbot skal kunne hente informasjon fra nettsidens/ nettbutikkens egne dokumenter (som for eksempel en bruksanvisning for et produkt) og svare på spørsmål som kunden måtte ha. I utviklingen av dette prosjektet fikk jeg øvd på mine ferdigheter innen full-stack utvikling med teknologier som C# (C sharp), rammeverket Svelte og Docker.",

    technologies: ["Svelte", "C#", "Docker"], 
    githubUrl: "https://github.com/emilirol/internship_flytit_fall25",
    liveUrl: null,

    collaborations: [], // eller tom []
  },
  {
    slug: "studyplatform",              // brukes i URL/routing og som unik id
    title: "Studyplatform - Webprosjekt vår 2025",
    thumbnail: "/project-images/studyplatform.webp", // kan være path eller importert bilde

    media: [
      { type: "image", src: "/project-images/studyplatform.webp"},
      { type: "image", src: "/project-images/studyplatform-login.webp"},
      { type: "image", src: "/project-images/studyplatform-create.webp"},
      { type: "image", src: "/project-images/studyplatform-dashboard.webp"},
      { type: "image", src: "/project-images/studyplatform-export.webp"},
      { type: "image", src: "/project-images/studyplatform-profile.webp"},
      { type: "image", src: "/project-images/studyplatform-share.webp"},
      { type: "image", src: "/project-images/studyplatform-study1.webp"},
      { type: "image", src: "/project-images/studyplatform-study2.webp"},
    ],

    shortDescription: "Studyplatform utviklet for å lage og administrere undersøkelser.",
    fullDescription: "Studyplatform er en full-stack web applikasjon utviklet for å lage og administrere undersøkelser. Dette prosjektet hadde som fokus å jobbe sammen med en prosjekteier og en smidig utviklingsprosess. Her fikk vi studenter øvd på å utvikle en applikasjon basert på en produkteiers visjon for et produkt, hvor vi jobbet tett på produkteiers ønsker for å sammen komme frem til et tilfredstillende resultat ved bruk av både front-end rammeverk og back-end teknologier. Samtidig jobbet vi i team og fikk prøvd oss på å ta imot og gi konstruktive tilbakemeldinger på vårt arbeid.",

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
    githubUrl: null,
    liveUrl: null,

    collaborations: [] // eller tom []
  },
];