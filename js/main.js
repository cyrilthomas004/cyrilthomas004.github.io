console.log("main.js loaded");
console.log("JavaScript Loaded");

/* ==========================================
   PROJECT DATA
========================================== */

const projects = {

    storyline: {

        title: "Interactive Storyline Experience",

        visualClass: "art-storyline",

        details: {
            facts: [
                { label: "Tools", value: "Articulate Storyline 360" },
                { label: "Delivery", value: "Multilingual digital learning" },
                { label: "Audience", value: "7,000 frontline associates across India" }
            ],
            overview: "Developed interactive digital learning experiences for young frontline associates aged 18-21, many with limited formal education. The focus was on making workplace learning simple, accessible, engaging, and easy to follow.",
            approach: [
                "Designed learner-centred experiences suited to diverse educational backgrounds and learning needs",
                "Used simple language, clear visuals, and intuitive interactions to support comprehension",
                "Combined game-based learning with structured, interactive lessons to suit different learning objectives",
                "Prioritized accessibility and consistency across multiple language versions"
            ],
            scaleReach: "Developed for 7,000 frontline associates across India, with multilingual adaptations to support learning across diverse linguistic backgrounds."
        },

        courseLinks: [
            {
                label: "Interactive Storyline Course 1",
                href: "https://360.articulate.com/review/content/bd23751e-d3fb-4689-945e-cb5de1deca22/review"
            },
            {
                label: "Interactive Storyline Course 2",
                href: "https://360.articulate.com/review/content/e830632f-865b-407c-8edd-60827cf6c2e3/review"
            }
        ]

    },

    vyond: {

        title: "Animated Learning",

        visualClass: "art-vyond",

        details: {
            subtitle: "Corporate Communication",
            facts: [
                { label: "Tools", value: "Vyond" },
                { label: "Audience", value: "Mid-level and senior-level corporate employees" }
            ],
            overview: "Developed animated infographic videos designed to communicate key concepts to corporate employees across different organizational levels. The videos combined professional visuals with character-led conversations to make information engaging, relatable, and easy to understand.",
            approach: [
                "Used character-based storytelling and conversational animation to explain concepts naturally",
                "Combined infographic elements, shapes, icons, and visual assets to simplify information",
                "Applied a polished, professional visual style suited to corporate audiences",
                "Used animation and visual storytelling to maintain engagement and improve information clarity"
            ]
        },

        videosHeading: "Watch the animated videos",

        videos: [
            {
                src: "https://drive.google.com/file/d/1YjEWGgdA4wGtY4SnJoH67W3Pai4Fzns2/preview",
                title: "EF Introduction"
            },
            {
                src: "https://drive.google.com/file/d/1YVZKU2yJshDP1fvb-7evfEvLzd03G3yv/preview",
                title: "EF Channels"
            }
        ],

        button: "Watch the Video →",

        link: "#"

    },

    training: {

        title: "Training Videos",

        visualClass: "art-training",

        details: {
            subtitle: "Product Training Videos | Tool Demonstrations",
            facts: [
                { label: "Tools", value: "PowerPoint, Screen Recording, Camtasia, Snagit" },
                { label: "Format", value: "Narrated product demonstration videos" },
                { label: "Duration", value: "4-8 minutes per video" }
            ],
            overview: "Developed product training videos that simplify technical concepts and demonstrate product workflows through a combination of concise visual explanations and guided, on-screen demonstrations. The approach helped learners understand both the underlying concepts and their practical application.",
            approach: [
                "Researched and understood assigned topics before developing structured narration scripts",
                "Created concise PowerPoint slides using simple visuals, icons, and shapes to introduce key concepts",
                "Recorded voice overs for both conceptual explanations and step-by-step product demonstrations",
                "Used screen recordings to demonstrate workflows, connecting conceptual knowledge with practical application",
                "Edited videos in Camtasia, adding visual highlights and callouts to draw attention to important interface elements and actions",
                "Managed the complete production workflow, from research and scripting to recording, editing, rendering, and final delivery"
            ],
            scaleHeading: "Delivery & Scale",
            scaleReach: "Delivered 3-4 videos per week, each approximately 4-8 minutes long, as part of a planned 100-video series under tight deadlines. Streamlined the development process to balance production speed with instructional clarity, visual consistency, and effective demonstrations."
        },

        videos: [
            {
                src: "https://drive.google.com/file/d/1Y-0codYSj9YDXuKF12bVBCOJCAR-yM75/preview",
                title: "Training Video"
            }
        ],

        button: "",

        link: ""

    },

    design: {

        title: "Editorial & Visual Design",

        visualClass: "art-design",

        gallery: [
            {
                src: "images/design/learning-design-01.jpg",
                alt: "Learning design sample",
                caption: "Learning design",
                details: {
                    subtitle: "Visual Learning Design | Frontline Learning",
                    facts: [
                        { label: "Tools", value: "PowerPoint, Visual Design Tools" },
                        { label: "Audience", value: "Amazon frontline associates aged 18-21" },
                        { label: "Deliverables", value: "100+ visual learning assets" }
                    ],
                    overview: "Created hundreds of visual learning designs to make workplace training more engaging, accessible, and easy to understand for young frontline associates. The designs translated operational guidelines and safety practices into clear, relatable visual communication.",
                    approach: [
                        "Transformed process instructions into visual narratives using real-world photographs, illustrations, speech bubbles, and concise text",
                        "Used simple language and relatable visual elements to support learners with diverse educational backgrounds",
                        "Designed bilingual visual assets to improve accessibility across different language groups",
                        "Applied visual storytelling to reinforce correct workplace practices and make learning more memorable"
                    ]
                }
            },
            {
                src: "images/design/coaching-framework.png",
                alt: "Thrive during peak one-to-one coaching infographic",
                caption: "Thrive during peak",
                details: {
                    subtitle: "Manager Enablement | Visual Learning Resources",
                    facts: [
                        { label: "Tools", value: "PowerPoint, Visual Design Tools" },
                        { label: "Audience", value: "Amazon managers across India" },
                        { label: "Deliverable", value: "Visual job aids for one-on-one review conversations" }
                    ],
                    overview: "Designed visual learning resources to help managers conduct effective one-on-one review conversations with employees. The resources translated key guidance into practical, easy-to-use reference materials that managers could apply during employee development discussions.",
                    approach: [
                        "Structured information into clear, actionable steps to support managers in preparing for and conducting one-on-one conversations",
                        "Used visual frameworks, infographics, and concise text to communicate key principles and practical guidance",
                        "Incorporated suggested phrases and guiding questions to help managers facilitate meaningful discussions",
                        "Designed the resources as quick-reference job aids to support real-world application rather than relying solely on formal training"
                    ],
                    scaleHeading: "Scale & Reach",
                    scaleReach: "Created and distributed resources to Amazon managers across India, supporting consistent guidance for employee review and development conversations."
                }
            },
            {
                src: "images/design/behind-the-scenes.png",
                alt: "Behind the Scenes operations team infographic",
                caption: "Behind the Scenes"
            },
            {
                src: "images/design/prathama-newspaper.png",
                alt: "Prathama newspaper design",
                caption: "Prathama newspaper"
            }
        ],

        document: "documents/design/storyboard.pdf",

        button: "",

        link: ""

    },

    promo: {

        title: "Videos",

        visualClass: "art-promo",

        videos: [
            {
                src: "https://drive.google.com/file/d/1KbbZFgJcuJSAodsRvY4aga3lKS7E_Vkr/preview",
                title: "Asset Dashboard: Use Case-Based Video",
                description: "Developed a product marketing and sales video for the corporate portal and social media using Canva and AI-assisted visuals. Transformed product screenshots into 3D-style images and animated them with dynamic transitions and pop-up effects, creating a polished, motion-rich video within a five-working-day deadline."
            },
            {
                src: "https://drive.google.com/file/d/1aNSk1ztpb886b2AO5V6kGWALYuNu9jLa/preview",
                orientation: "portrait",
                title: "Frontline Microlearning | Visual Process Demonstrations",
                description: "Developed a microlearning video series for Amazon frontline associates, replacing text-heavy posters with short, visual demonstrations of correct practices and common mistakes. Visited fulfillment centers, collaborated with site managers to identify frequent errors, and filmed real-world demonstrations using a mobile device, enhanced with visual annotations and designed in a vertical, Reels-style format. Published videos under one minute through the learning app, with one daily release to encourage continuous learning. The initiative received the highest learner ratings and significant recognition."
            },
            {
                src: "https://drive.google.com/file/d/1P0GOIFQPfr2FJ-_fhOkXC9tI7RP_vE4M/preview",
                title: "Your Smart AI Agent — Now Inside Microsoft Teams",
                description: "Developed a product marketing video highlighting the integration of SummitAI's Smart AI Agent within Microsoft Teams. Designed to communicate the product's value through clear messaging, engaging visuals, and a concise narrative, making the solution's capabilities easy to understand for customers and prospects."
            },
            {
                src: "https://drive.google.com/file/d/1TwU9oViGzcpP5oAtqgMMmCFdo4ptF5UR/preview",
                title: "Learn English Series | Animated Learning Series",
                description: "Developed a weekly animated Learn English video series using PowerPoint, published through the learning app over a year. Owned the ideation, visual storytelling, animation, and development process, delivering each video in just three hours. The series made language learning engaging and accessible through short, visually driven content and received strong learner appreciation."
            },
            {
                src: "https://drive.google.com/file/d/1ggBJMhxFAYj_iWPqJSeK1hl41yhZSW9M/preview",
                title: "Seamless Integration for Limitless Productivity",
                description: "Developed a product marketing and sales video explaining the low-code/no-code app ecosystem within SummitAI. Used animated graphics, visual storytelling, and progressive on-screen reveals to simplify the concept and communicate product value clearly to customers and prospects across digital channels."
            },
            {
                src: "https://drive.google.com/file/d/1R_ZA-jobUL2CRH36TESWZWJaGz-D4Z9D/preview",
                title: "Automate Onboarding & Offboarding with Zero Delays",
                description: "Developed a product marketing video showcasing SummitAI's employee onboarding and offboarding automation capabilities. Used concise messaging and engaging visuals to communicate how automated workflows can streamline employee transitions, reduce manual effort, and minimize delays for enterprise customers."
            }
        ],

        proofImage: {
            src: "images/videos/corporate-portal-marketing-videos.png",
            alt: "Screenshot showing selected marketing videos published on the corporate website",
            caption: "Selected videos featured on the SymphonyAI corporate website"
        },

        button: "",

        link: ""

    }

};


/* ==========================================
   HTML ELEMENTS
========================================== */

const panel = document.querySelector(".project-panel");

const overlay = document.querySelector(".overlay");

const openButtons = document.querySelectorAll(".open-panel");

const closeButton = document.querySelector(".close-panel");

const panelVisual = document.getElementById("panel-visual");

const panelVideos = document.getElementById("panel-videos");

const panelGallery = document.getElementById("panel-gallery");

const panelDocument = document.getElementById("panel-document");

const designLightbox = document.getElementById("design-lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const lightboxCaption = document.getElementById("lightbox-caption");

const lightboxClose = document.querySelector(".lightbox-close");

const panelTitle = document.getElementById("panel-title");

const panelDetails = document.getElementById("panel-details");

const panelLinks = document.getElementById("panel-links");

function appendProjectDetails(container, details) {
    if (details.subtitle) {
        const subtitle = document.createElement("p");
        subtitle.className = "project-detail-subtitle";
        subtitle.textContent = details.subtitle;
        container.appendChild(subtitle);
    }

    const facts = document.createElement("dl");
    facts.className = "project-detail-facts";

    details.facts.forEach(fact => {
        const item = document.createElement("div");
        const label = document.createElement("dt");
        const value = document.createElement("dd");
        item.className = "project-detail-fact";
        label.textContent = fact.label;
        value.textContent = fact.value;
        item.append(label, value);
        facts.appendChild(item);
    });

    container.appendChild(facts);

    const appendDetailSection = (headingText, content) => {
        const section = document.createElement("section");
        const heading = document.createElement("h3");
        section.className = "project-detail-section";
        heading.textContent = headingText;
        section.appendChild(heading);

        if (Array.isArray(content)) {
            const list = document.createElement("ul");
            content.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                list.appendChild(listItem);
            });
            section.appendChild(list);
        } else {
            const paragraph = document.createElement("p");
            paragraph.textContent = content;
            section.appendChild(paragraph);
        }

        container.appendChild(section);
    };

    appendDetailSection("Project Overview", details.overview);
    appendDetailSection("Instructional Design Approach", details.approach);
    if (details.scaleReach) {
        appendDetailSection(details.scaleHeading || "Scale & Reach", details.scaleReach);
    }
}

/* ==========================================
   LOAD PROJECT DATA
========================================== */

function loadProject(project) {

    const hasPanelMedia = Boolean(project.gallery || project.videos || project.courseLinks);
    panel.classList.toggle("has-panel-media", hasPanelMedia);
    panelVisual.hidden = hasPanelMedia;
    panelVisual.className = "project-art panel-art " + project.visualClass;
    panelVisual.setAttribute("aria-label", project.title + " preview");

    panelVideos.replaceChildren();
    panelVideos.hidden = !project.videos;
    if (project.videos) {
        const heading = document.createElement("h3");
        heading.textContent = project.videosHeading || "Selected video work";
        panelVideos.appendChild(heading);

        project.videos.forEach(videoProject => {
            const figure = document.createElement("figure");
            const loadButton = document.createElement("button");
            const caption = document.createElement("figcaption");
            loadButton.type = "button";
            loadButton.className = "project-video-load";
            loadButton.setAttribute("aria-label", "Play video: " + videoProject.title);
            loadButton.textContent = "▶";
            loadButton.addEventListener("click", () => {
                const player = document.createElement("div");
                player.className = "project-video-player";
                player.dataset.orientation = videoProject.orientation || "landscape";
                const video = document.createElement("iframe");
                video.src = videoProject.src;
                video.title = videoProject.title;
                video.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
                video.allowFullscreen = true;
                video.setAttribute("webkitallowfullscreen", "");
                player.appendChild(video);
                loadButton.replaceWith(player);

                const fullscreenButton = document.createElement("button");
                const exitButton = document.createElement("button");
                const supportsFullscreen = Boolean(document.fullscreenEnabled && player.requestFullscreen);
                fullscreenButton.type = "button";
                fullscreenButton.className = "project-video-fullscreen";
                fullscreenButton.textContent = supportsFullscreen ? "\u26f6 Full screen" : "\u26f6 Expand video";
                fullscreenButton.setAttribute("aria-label", "Expand " + videoProject.title);
                fullscreenButton.setAttribute("aria-expanded", "false");
                exitButton.type = "button";
                exitButton.className = "project-video-exit";
                exitButton.textContent = "Close expanded video";
                exitButton.hidden = true;

                const expandInPage = () => {
                    panel.querySelectorAll(".project-video-player.is-expanded").forEach(expandedPlayer => {
                        expandedPlayer.querySelector(".project-video-exit").click();
                    });
                    player.classList.add("is-expanded");
                    panel.classList.add("has-expanded-video");
                    fullscreenButton.setAttribute("aria-expanded", "true");
                    exitButton.hidden = false;
                    exitButton.focus();
                };

                fullscreenButton.addEventListener("click", () => {
                    if (supportsFullscreen) {
                        player.requestFullscreen().catch(expandInPage);
                    } else {
                        expandInPage();
                    }
                });
                exitButton.addEventListener("click", () => {
                    player.classList.remove("is-expanded");
                    panel.classList.remove("has-expanded-video");
                    fullscreenButton.setAttribute("aria-expanded", "false");
                    exitButton.hidden = true;
                    fullscreenButton.focus();
                });
                player.appendChild(exitButton);
                player.after(fullscreenButton);
            }, { once: true });
            caption.textContent = videoProject.title;

            figure.appendChild(loadButton);
            figure.appendChild(caption);
            if (videoProject.description) {
                const description = document.createElement("p");
                description.className = "project-video-description";
                description.textContent = videoProject.description;
                figure.appendChild(description);
            }
            panelVideos.appendChild(figure);
        });
    }
    if (project.proofImage) {
        const proof = document.createElement("figure");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");
        proof.className = "video-portal-proof";
        image.src = project.proofImage.src;
        image.alt = project.proofImage.alt;
        image.loading = "lazy";
        caption.textContent = project.proofImage.caption;
        proof.appendChild(image);
        proof.appendChild(caption);
        panelVideos.appendChild(proof);
    }

    panelGallery.replaceChildren();
    panelGallery.hidden = !project.gallery;
    if (project.gallery) {
        const heading = document.createElement("h3");
        heading.textContent = "Selected design samples";
        panelGallery.appendChild(heading);

        project.gallery.forEach((sample, index) => {
            const figure = document.createElement("figure");
            const button = document.createElement("button");
            const image = document.createElement("img");
            button.className = "gallery-image-button";
            button.type = "button";
            button.setAttribute("aria-label", "Expand " + sample.caption);
            button.dataset.galleryIndex = String(index);
            image.src = sample.src;
            image.alt = sample.alt;
            image.loading = "lazy";

            button.appendChild(image);
            figure.appendChild(button);
            const caption = document.createElement("figcaption");
            caption.textContent = sample.caption;
            figure.appendChild(caption);

            if (sample.details) {
                const description = document.createElement("div");
                figure.classList.add("has-description");
                description.className = "gallery-description";
                appendProjectDetails(description, sample.details);
                figure.appendChild(description);
            }

            panelGallery.appendChild(figure);
        });
    }

    panelDocument.hidden = !project.document;
    if (project.document) {
        panelDocument.href = project.document;
    } else {
        panelDocument.removeAttribute("href");
    }

    panelTitle.textContent = project.title;

    panelDetails.replaceChildren();
    panelDetails.hidden = !project.details;
    if (project.details) {
        appendProjectDetails(panelDetails, project.details);
    }

    panelLinks.replaceChildren();
    panelLinks.hidden = !project.courseLinks;
    if (project.courseLinks) {
        project.courseLinks.forEach(course => {
            const link = document.createElement("a");
            link.className = "launch-button";
            link.href = course.href;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = course.label + " →";
            panelLinks.appendChild(link);
        });
    }

}

if (panelGallery && designLightbox && lightboxImage && lightboxCaption) {
    panelGallery.addEventListener("click", event => {
        const button = event.target.closest(".gallery-image-button");
        if (!button) {
            return;
        }

        const image = button.querySelector("img");
        if (!image) {
            return;
        }

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = button.parentElement.querySelector("figcaption").textContent;
        designLightbox.showModal();
    });

    lightboxClose.addEventListener("click", () => designLightbox.close());

    designLightbox.addEventListener("click", event => {
        if (event.target === designLightbox) {
            designLightbox.close();
        }
    });

    designLightbox.addEventListener("close", () => {
        lightboxImage.removeAttribute("src");
    });
}


/* ==========================================
   OPEN PROJECT PANEL
========================================== */

openButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const projectName = this.dataset.project;

        const selectedProject = projects[projectName];

        loadProject(selectedProject);

        if(panel && overlay){

    panel.classList.add("active");

    overlay.classList.add("active");

}

        document.body.style.overflow = "hidden";

    });

});


/* ==========================================
   CLOSE PANEL FUNCTION
========================================== */

function closePanel() {

    if (panel) {
        panel.querySelectorAll(".project-video-player.is-expanded .project-video-exit").forEach(button => button.click());
    }

    if(panel){

        panel.classList.remove("active");

    }

    if(overlay){

        overlay.classList.remove("active");

    }

    document.body.style.overflow = "auto";

}


/* ==========================================
   CLOSE BUTTON
========================================== */

if (closeButton) {

    closeButton.addEventListener("click", function () {

        closePanel();

    });

}

if (overlay) {

    overlay.addEventListener("click", function () {

        closePanel();

    });

}


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        const expandedVideoClose = panel && panel.querySelector(".project-video-player.is-expanded .project-video-exit");
        if (expandedVideoClose) {
            expandedVideoClose.click();
            return;
        }

        closePanel();

    }

});
/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

revealSections();

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const trigger = window.innerHeight - 120;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}   
