console.log("main.js loaded");
console.log("JavaScript Loaded");

/* ==========================================
   PROJECT DATA
========================================== */

const projects = {

    storyline: {

        title: "Interactive Storyline Experience",

        visualClass: "art-storyline",

        overview:
            "A scenario-based eLearning course designed using Articulate Storyline to improve learner engagement and decision making.",

        challenge:
            "Create an engaging learning experience that encouraged learners to actively participate rather than passively consume content.",

        approach:
            "Used branching scenarios, variables and learner feedback to create meaningful interactions aligned with learning objectives.",

        reflection:
            "Designing purposeful interactions reinforced my belief that effective learning is driven by clarity rather than complexity.",

        tools: [
            "Storyline",
            "Variables",
            "SCORM",
            "Canva"
        ],

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

        videosHeading: "Watch the animated videos",

        videos: [
            {
                src: "videos/animated-learning/ef-introduction.mp4",
                title: "EF Introduction"
            },
            {
                src: "videos/animated-learning/ef-channels.mp4",
                title: "EF Channels"
            }
        ],

        overview:
            "Animated learning videos designed using Vyond to simplify concepts through storytelling.",

        challenge:
            "Present complex concepts in an engaging and memorable way.",

        approach:
            "Used storytelling, animation and narration to improve learner attention.",

        reflection:
            "Animation is most effective when it supports learning rather than distracts from it.",

        tools: [
            "Vyond",
            "Animation",
            "Storytelling"
        ],

        button: "Watch the Video →",

        link: "#"

    },

    training: {

        title: "Training Videos",

        visualClass: "art-training",

        videos: [
            {
                src: "videos/training/training-video.mp4",
                title: "Training Video"
            }
        ],

        overview:
            "Professional training videos created for onboarding and learning.",

        challenge:
            "Communicate information clearly while keeping learners engaged.",

        approach:
            "Focused on pacing, visuals and concise narration.",

        reflection:
            "Good instructional videos are built on clarity, not complexity.",

        tools: [
            "Premiere Pro",
            "Canva",
            "Editing"
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
                caption: "Learning design"
            },
            {
                src: "images/design/coaching-framework.png",
                alt: "Thrive during peak one-to-one coaching infographic",
                caption: "Thrive during peak"
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

        overview:
            "A collection of visual communication work spanning newspaper design, posters and storyboards.",

        challenge:
            "Make information clear, engaging and easy to navigate while giving each piece a distinct visual voice.",

        approach:
            "Combine editorial hierarchy, thoughtful composition and visual storytelling to shape each format around its audience.",

        reflection:
            "Strong design makes a message easier to understand before a single word is read.",

        tools: [
            "Newspaper Design",
            "Poster Design",
            "Storyboarding"
        ],

        button: "",

        link: ""

    },

    promo: {

        title: "Videos",

        visualClass: "art-promo",

        videos: [
            {
                src: "videos/portfolio/asset-dashboard.mp4",
                title: "Asset Dashboard: Use Case-Based Video"
            },
            {
                src: "videos/portfolio/video-01.mp4",
                title: "Video 1"
            },
            {
                src: "videos/portfolio/smart-ai-agent-teams.mp4",
                title: "Your Smart AI Agent — Now Inside Microsoft Teams"
            },
            {
                src: "videos/portfolio/video-02.mp4",
                title: "Video 2"
            },
            {
                src: "videos/portfolio/seamless-integration.mp4",
                title: "Seamless Integration for Limitless Productivity"
            },
            {
                src: "videos/portfolio/automate-onboarding-offboarding.mp4",
                title: "Automate Onboarding & Offboarding with Zero Delays"
            }
        ],

        proofImage: {
            src: "images/videos/corporate-portal-marketing-videos.png",
            alt: "Screenshot showing selected marketing videos published on the corporate website",
            caption: "Selected videos featured on the SymphonyAI corporate website"
        },

        overview:
            "A collection of animated learning, training, product and marketing videos created to make services, processes and ideas clear and engaging. Selected work is featured on the SymphonyAI corporate website.",

        challenge:
            "Turn detailed product features, business processes and learning topics into concise stories that make sense to different audiences.",

        approach:
            "Combine audience-focused scripting, purposeful visuals, animation, narration and pacing to deliver each message in an accessible format.",

        reflection:
            "Clear video storytelling helps people understand a message quickly—and gives useful content a life beyond a single channel.",

        tools: [
            "Animated Learning",
            "Product Videos",
            "Training",
            "Marketing"
        ],

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

const panelOverview = document.getElementById("panel-overview");

const panelChallenge = document.getElementById("panel-challenge");

const panelApproach = document.getElementById("panel-approach");

const panelReflection = document.getElementById("panel-reflection");

const panelTools = document.getElementById("panel-tools");

const panelLinks = document.getElementById("panel-links");
/* ==========================================
   LOAD PROJECT DATA
========================================== */

function loadProject(project) {

    const hasPanelMedia = Boolean(project.gallery || project.videos || project.courseLinks);
    panel.classList.toggle("has-panel-media", hasPanelMedia);
    panelVisual.hidden = hasPanelMedia;
    panelVisual.className = "project-art panel-art " + project.visualClass;
    panelVisual.setAttribute("aria-label", project.title + " preview");

    panelVideos.querySelectorAll("video").forEach(video => {
        video.pause();
        video.removeAttribute("src");
        video.load();
    });
    panelVideos.replaceChildren();
    panelVideos.hidden = !project.videos;
    if (project.videos) {
        const heading = document.createElement("h3");
        heading.textContent = project.videosHeading || "Selected video work";
        panelVideos.appendChild(heading);

        project.videos.forEach(videoProject => {
            const figure = document.createElement("figure");
            const video = document.createElement("video");
            const errorMessage = document.createElement("p");
            const downloadLink = document.createElement("a");
            const caption = document.createElement("figcaption");
            video.controls = true;
            video.preload = "metadata";
            video.playsInline = true;
            video.src = videoProject.src;
            video.setAttribute("aria-label", videoProject.title);
            errorMessage.className = "project-video-error";
            errorMessage.hidden = true;
            errorMessage.textContent = "This video could not be played in this browser. ";
            downloadLink.href = videoProject.src;
            downloadLink.download = "";
            downloadLink.textContent = "Download the video";
            video.addEventListener("error", () => {
                errorMessage.hidden = false;
            });
            caption.textContent = videoProject.title;

            figure.appendChild(video);
            errorMessage.appendChild(downloadLink);
            figure.appendChild(errorMessage);
            figure.appendChild(caption);
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
    panelOverview.textContent = project.overview;
    panelChallenge.textContent = project.challenge;
    panelApproach.textContent = project.approach;
    panelReflection.textContent = project.reflection;

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

    // Remove old tool chips
    panelTools.innerHTML = "";

    // Create new tool chips
    project.tools.forEach(tool => {

        const chip = document.createElement("span");

        chip.textContent = tool;

        panelTools.appendChild(chip);

    });

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