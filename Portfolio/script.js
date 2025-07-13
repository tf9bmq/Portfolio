document.addEventListener("DOMContentLoaded", function () {
    let home = document.getElementById('home');
    let about = document.getElementById('about');
    let skills = document.getElementById('skills');
    let projects = document.getElementById('projects');
    let contact = document.getElementById('contact');
    let homemobile = document.getElementById('home-mobile');
    let aboutmobile = document.getElementById('about-mobile');
    let skillsmobile = document.getElementById('skills-mobile');
    let projectsmobile = document.getElementById('projects-mobile');
    let contactmobile = document.getElementById('contact-mobile');
    let getintouch = document.getElementById('getintouch');
    let viewmywork = document.getElementById('viewmywork');
    let download = document.getElementById('download');
    let cvoptions = document.getElementById('cvoptions');
    let homeFooter = document.getElementById('home-footer');
    let aboutFooter = document.getElementById('about-footer');
    let skillsFooter = document.getElementById('skills-footer');
    let projectsFooter = document.getElementById('projects-footer');
    let contactFooter = document.getElementById('contact-footer');

    if (home) {
        home.onclick = function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    if (about) {
        about.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-about').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (skills) {
        skills.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-skills').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (projects) {
        projects.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-projects').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (contact) {
        contact.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-contact').scrollIntoView({ behavior: 'smooth' });
        };
    }


    if (homemobile) {
        homemobile.onclick = function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    if (aboutmobile) {
        aboutmobile.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-about').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (skillsmobile) {
        skillsmobile.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-skills').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (projectsmobile) {
        projectsmobile.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-projects').scrollIntoView({ behavior: 'smooth' });
        };
    }
    if (contactmobile) {
        contactmobile.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-contact').scrollIntoView({ behavior: 'smooth' });
        };
    }


    if (getintouch) {
        getintouch.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-contact').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (viewmywork) {
        viewmywork.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-projects').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (homeFooter) {
        homeFooter.onclick = function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    if (aboutFooter) {
        aboutFooter.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-about').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (skillsFooter) {
        skillsFooter.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-skills').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (projectsFooter) {
        projectsFooter.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-projects').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (contactFooter) {
        contactFooter.onclick = function (e) {
            e.preventDefault();
            document.getElementById('section-contact').scrollIntoView({ behavior: 'smooth' });
        };
    }

    if (download && cvoptions) {
        download.addEventListener('click', function (e) {
            e.stopPropagation(); // prevent window click from hiding it immediately
            cvoptions.classList.toggle('hidden');
        });

        window.addEventListener('click', function (event) {
            if (!download.contains(event.target) && !cvoptions.contains(event.target)) {
                cvoptions.classList.add('hidden');
            }
        });
    }
    document.getElementById("mobile-menu-toggle").addEventListener("click", () => {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    });
    document.getElementById("mobile-menu").addEventListener("click", () => {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    });
    window.addEventListener('click', function (event) {
        const menu = document.getElementById("mobile-menu");
        if (!menu.contains(event.target) && !document.getElementById("mobile-menu-toggle").contains(event.target)) {
            menu.classList.add('hidden');
        }
    });


});
