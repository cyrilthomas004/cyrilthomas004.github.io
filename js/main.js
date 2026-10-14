console.log("main.js loaded");
console.log("JavaScript Loaded");

/* ==========================================
   PROJECT DATA
========================================== */

const projects = {

    storyline: {

        title: "Interactive Storyline Experience",

        visualClass: "art-storyline",

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

        button: "",

        link: ""

    },

    promo: {

        title: "Videos",

        visualClass: "art-promo",

        videos: [
            {
                src: "https://drive.google.com/file/d/1KbbZFgJcuJSAodsRvY4aga3lKS7E_Vkr/preview",
                title: "Asset Dashboard: Use Case-Based Video"
            },
            {
                src: "https://drive.google.com/file/d/1aNSk1ztpb886b2AO5V6kGWALYuNu9jLa/preview",
                title: "Video 1"
            },
            {
                src: "https://drive.google.com/file/d/1P0GOIFQPfr2FJ-_fhOkXC9tI7RP_vE4M/preview",
                title: "Your Smart AI Agent — Now Inside Microsoft Teams"
            },
            {
                src: "https://drive.google.com/file/d/1TwU9oViGzcpP5oAtqgMMmCFdo4ptF5UR/preview",
                title: "Video 2"
            },
            {
                src: "https://drive.google.com/file/d/1ggBJMhxFAYj_iWPqJSeK1hl41yhZSW9M/preview",
                title: "Seamless Integration for Limitless Productivity"
            },
            {
                src: "https://drive.google.com/file/d/1R_ZA-jobUL2CRH36TESWZWJaGz-D4Z9D/preview",
                title: "Automate Onboarding & Offboarding with Zero Delays"
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

    panelVideos.replaceChildren();
    panelVideos.hidden = !project.videos;
    if (project.videos) {
        const heading = document.createElement("h3");
        heading.textContent = project.videosHeading || "Selected video work";
        panelVideos.appendChild(heading);

        project.videos.forEach(videoProject => {
            const figure = document.createElement("figure");
            const loadButton = document.createElement("button");
            const openLink = document.createElement("a");
            const caption = document.createElement("figcaption");
            loadButton.type = "button";
            loadButton.className = "project-video-load";
            loadButton.setAttribute("aria-label", "Load " + videoProject.title + " from Google Drive");
            loadButton.textContent = "▶";
            loadButton.addEventListener("click", () => {
                const video = document.createElement("iframe");
                video.src = videoProject.src;
                video.title = videoProject.title;
                video.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
                loadButton.replaceWith(video);
            }, { once: true });
            openLink.href = videoProject.src.replace(/\/preview$/, "/view");
            openLink.target = "_blank";
            openLink.rel = "noopener noreferrer";
            openLink.className = "project-video-link";
            caption.textContent = videoProject.title;

            figure.appendChild(loadButton);
            figure.appendChild(caption);
            figure.appendChild(openLink);
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
