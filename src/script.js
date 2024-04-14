import { SECRET_KEY } from './secret.js';

fetch('https://api.github.com/users/robstani/starred', {
    headers: {
        'Authorization': 'token' + SECRET_KEY
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('GitHub API request failed');
    }
})
.then(data => {
    const projectList = document.getElementById('project-list');

data.forEach(repo => {
    const projectDiv = document.createElement('div');
    let link = `https://robstani.github.io/${repo.name}`;  
    projectDiv.innerHTML = `<h3><a href="${link}" target="_blank">${repo.name}</a></h3><p>${repo.description}</p>`;
    projectList.appendChild(projectDiv);
});
})
.catch(error => {
    console.error(error);
});