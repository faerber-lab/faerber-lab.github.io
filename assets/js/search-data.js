// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "team",
          description: "Current group members of Michael Färber’s research group, including postdocs and PhD students.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "dropdown-research-overview",
              title: "research overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/";
              },
            },{id: "dropdown-research-areas",
              title: "research areas",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/themes/";
              },
            },{id: "dropdown-selected-publications",
              title: "selected publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/selected_publications/";
              },
            },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-datasets",
              title: "datasets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/datasets/";
              },
            },{id: "dropdown-demos",
              title: "demos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/demos/";
              },
            },{id: "dropdown-press-amp-interviews",
              title: "press &amp; interviews",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/media/";
              },
            },{id: "dropdown-media-mentions",
              title: "media mentions",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/media-mentions/";
              },
            },{id: "dropdown-talks",
              title: "talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/talks/";
              },
            },{id: "dropdown-press-kit",
              title: "press kit",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/press-kit/";
              },
            },{id: "dropdown-students-overview",
              title: "students overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/students/";
              },
            },{id: "dropdown-thesis-topics",
              title: "thesis topics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/student_thesis/";
              },
            },{id: "dropdown-how-we-work",
              title: "how we work",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/how-we-work/";
              },
            },{id: "dropdown-student-outcomes",
              title: "student outcomes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/student-outcomes/";
              },
            },{id: "dropdown-faq",
              title: "faq",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/faq/";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-student-assistants",
              title: "student assistants",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/student-assistants/";
              },
            },{id: "nav-join",
          title: "join!",
          description: "Latest openings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/vacancies/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "Contact information and ways to get in touch.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-stock-market-predictions-through-deep-learning",
      
        title: "Stock Market Predictions through Deep Learning",
      
      description: "open thesis supervision topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-stock-market/";
        
      },
    },{id: "post-designing-and-executing-a-large-scale-user-study-on-scientific-text-simplification",
      
        title: "Designing and Executing a Large-Scale User Study on Scientific Text Simplification",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-simplification/";
        
      },
    },{id: "post-extending-the-rdf-knowledge-graph-semopenalex-org",
      
        title: "Extending the RDF Knowledge Graph SemOpenAlex.org",
      
      description: "open thesis supervision topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-semopenalex-extend/";
        
      },
    },{id: "post-using-quantum-computing-in-natural-language-processing",
      
        title: "Using Quantum Computing in Natural Language Processing",
      
      description: "open thesis supervision topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-quantum-nlp/";
        
      },
    },{id: "post-advanced-multi-modality-learning-in-electronic-health-records-for-personalized-medical-recommendations",
      
        title: "Advanced Multi-Modality Learning in Electronic Health Records for Personalized Medical Recommendations",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-mmodal-medical/";
        
      },
    },{id: "post-large-language-model-enhanced-graph-message-passing-network-for-link-prediction",
      
        title: "Large Language Model-enhanced Graph Message Passing Network for Link Prediction",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-link-prediction/";
        
      },
    },{id: "post-fusing-rdf-knowledge-graphs-with-deep-learning-for-advanced-recommender-systems",
      
        title: "Fusing RDF Knowledge Graphs with Deep Learning for Advanced Recommender Systems",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-kg-recsys/";
        
      },
    },{id: "post-creating-a-dataset-of-complex-temporal-questions-for-testing-large-language-models-llms",
      
        title: "Creating a Dataset of Complex Temporal Questions for Testing Large Language Models (LLMs)...",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-dataset-temporal/";
        
      },
    },{id: "post-creating-a-multimodal-dataset-of-actions-labeled-with-their-expected-durations",
      
        title: "Creating a Multimodal Dataset of Actions Labeled with their Expected Durations",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-dataset-mmodal/";
        
      },
    },{id: "post-creating-a-dataset-of-textual-descriptions-of-planned-actions-and-expectations-of-entities",
      
        title: "Creating a Dataset of Textual Descriptions of Planned Actions and Expectations of Entities...",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-dataset-actions/";
        
      },
    },{id: "post-alles-nur-show-ein-automatischer-vergleich-von-nachrichten-vor-der-bundestagswahl-mit-dem-koalitionsvertrag-mittels-natural-language-processing",
      
        title: "Alles nur Show? Ein automatischer Vergleich von Nachrichten vor der Bundestagswahl mit dem...",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-alles/";
        
      },
    },{id: "post-gpt-3-bert-amp-co-when-to-use-which-language-model",
      
        title: "GPT-3, BERT &amp; Co. - When to Use Which Language Model?",
      
      description: "open thesis topic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/thesis-which-llm/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/testnews/";
            },},{id: "news-starting-as-full-professor-w3-at-scads-ai-tu-dresden",
          title: 'Starting as full professor (W3) at ScaDS.AI / TU Dresden.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/0_start/";
            },},{id: "news-we-ll-be-opening-a-postdoc-position-soon-see-the-details-on-our-vacancies-page",
          title: 'We’ll be opening a PostDoc position soon—see the details on our vacancies page....',
          description: "",
          section: "News",},{id: "news-our-paper-gnnavi-has-been-accepted-at-findings-of-acl-24-and-grasame-at-findings-of-naacl-24-see-you-in-bangkok-and-mexico-city",
          title: 'Our paper GNNavi has been accepted at Findings of ACL’24, and GraSAME at...',
          description: "",
          section: "News",},{id: "news-ember-has-been-accepted-to-emnlp-2024-as-a-main-conference-paper-additionally-two-papers-autordf2gml-and-kgprompt-have-been-accepted-at-iswc-2024-see-you-in-baltimore",
          title: 'Ember has been accepted to EMNLP 2024 as a main conference paper! Additionally,...',
          description: "",
          section: "News",},{id: "news-our-klartext-related-project-simplifymytext-has-been-accepted-at-ecir-25-see-you-in-lucca-italy",
          title: 'Our Klartext-related project SimplifyMyText has been accepted at ECIR’25. See you in Lucca,...',
          description: "",
          section: "News",},{id: "news-can-hallucinations-in-llms-be-beneficial-check-out-our-new-arxiv-paper-hallucinations-can-improve-large-language-models-in-drug-discovery",
          title: 'Can hallucinations in LLMs be beneficial? Check out our new Arxiv paper, “Hallucinations...',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-at-kdd-25-one-paper-at-icml-25-see-you-in-toronto",
          title: 'Two papers have been accepted at KDD’25; one paper at ICML’25! See you...',
          description: "",
          section: "News",},{id: "news-i-gave-a-keynote-on-llms-and-knowledge-graphs-for-science-at-semantics-2025",
          title: 'I gave a keynote on “LLMs and Knowledge Graphs for Science” at Semantics...',
          description: "",
          section: "News",},{id: "news-three-papers-have-been-accepted-at-emnlp-2025-see-you-in-suzhou-china",
          title: 'Three papers have been accepted at EMNLP 2025 ! See you in Suzhou,...',
          description: "",
          section: "News",},{id: "news-senior-postdoc-position-available-apply-now-to-join-our-team",
          title: 'Senior PostDoc position available; apply now to join our team!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/7_postdocE14_2025/";
            },},{id: "news-junior-postdoc-position-available-apply-now-to-join-our-team",
          title: 'Junior PostDoc position available; apply now to join our team!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/8_postdocE13_2025/";
            },},{id: "news-the-bmftr-funded-software-campus-project-evidenz-started-today",
          title: 'The BMFTR-funded Software Campus project EVIDENZ started today!',
          description: "",
          section: "News",},{id: "projects-aicom",
          title: 'AICOM',
          description: "Corporate Knowledge Graph Assistant for evidence-grounded enterprise communication",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aicom/";
            },},{id: "projects-evidenz",
          title: 'EVIDENZ',
          description: "Evidence-based Text Generation with LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evidenz/";
            },},{id: "projects-klartext",
          title: 'Klartext',
          description: "AI-based Translation of Websites Into Plain / Easy Language",
          section: "Projects",handler: () => {
              window.location.href = "/projects/klartext/";
            },},{id: "projects-llm4edu",
          title: 'LLM4Edu',
          description: "Learning Large Language Models on Graphs for Education",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm4edu/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%63%68%61%65%6C.%66%61%65%72%62%65%72@%74%75-%64%72%65%73%64%65%6E.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michael-faerber", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Jb7JUOsAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://scads.ai/about-us/ai-professorships/scalable-software-architectures-for-data-analytics/# work page URL", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
