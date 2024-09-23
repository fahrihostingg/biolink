// settings.js

// Profile settings
const profileSettings = {
    name: "FakrulDev",
    description: "Developer | Creator | Ai Engineer",
    profileImageUrl: "https://telegra.ph/file/b3472eb5c741baa6a9e56.jpg"
};

// Social media links
const socialLinks = {
    facebook: "https://facebook.com/muhammadfakrulafifshazly",
    whatsapp: "https://wa.me/601159754638?tesknya=assalamualaikum",
    instagram: "https://www.instagram.com/rulshz",
    telegram: "https://t.me/rulshz"
};

// Projects
const projects = [
    {
        imageUrl: "https://telegra.ph/file/b3472eb5c741baa6a9e56.jpg",
        link: "https://progress.safeserver.us.kg",
        title: "Project 1"
    },
    {
        imageUrl: "https://telegra.ph/file/b3472eb5c741baa6a9e56.jpg",
        link: "https://shop.safeserver.us.kg",
        title: "Project 2"
    }
];

// Skills
const skills = [
    {
        imageUrl: "https://widipe.com/file/kvPGZgSUck4j.png",
        title: "Node"
    },
    {
        imageUrl: "https://widipe.com/file/0hUhiU0P02CT.png",
        title: "JS"
    }
];

// Update profile
function updateProfile() {
    document.querySelector(".profile h1").textContent = profileSettings.name;
    document.querySelector(".profile p").textContent = profileSettings.description;
    document.querySelector(".profile img").src = profileSettings.profileImageUrl;
}

// Update social buttons
function updateSocialButtons() {
    const buttons = document.querySelectorAll(".social-button");
    buttons[0].href = socialLinks.facebook;
    buttons[1].href = socialLinks.whatsapp;
    buttons[2].href = socialLinks.instagram;
    buttons[3].href = socialLinks.telegram;
}

// Update projects
function updateProjects() {
    const projectContainer = document.querySelector(".projects");
    projectContainer.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <a href="${project.link}">${project.title}</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}

// Update skills
function updateSkills() {
    const skillsContainer = document.querySelector(".skills-list");
    skillsContainer.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <img src="${skill.imageUrl}" alt="${skill.title}">
            <p>${skill.title}</p>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Initialize settings
function initializeSettings() {
    updateProfile();
    updateSocialButtons();
    updateProjects();
    updateSkills();
}

// Run the initialization
initializeSettings();
