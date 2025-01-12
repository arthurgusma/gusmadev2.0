function createProjectCard({ image, altText, title, description, link }) {
  const project = document.createElement('div');
  project.className = 'project';

  project.innerHTML = `
      <img src="${image}" alt="${altText}">
      <div class="project-description">
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="${link}" target="_blank" class="view-site">Acessar o site</a>
      </div>
  `;

  return project;
}

const container = document.getElementById('projectContainer');
    
const projects = [
  {
    image: './public/image/crushlabmockup.png',
    altText: 'Crush Lab Poker page image',
    title: 'Crush Lab Poker',
    description: 'Crush Lab Poker é um SAAS que facilita e auxilia a decição de jogadores de poker.',
    link: 'https://crushlabpoker.com/'
  },
  {
    image: './public/image/magbankmockup.png',
    altText: 'Mag Bank page image',
    title: 'Mag Bank (DESAFIO)',
    description: 'Mag Bank é um sistema que permite a realização de pagamentos por Pix e Ted.',
    link: 'https://mag-bak.vercel.app/'
  },
  {
    image: './public/image/smartmockup.jpeg',
    altText: 'Smart fit Locations page image',
    title: 'Smart Fit Locations (DESAFIO)',
    description: 'Smart Fit Locations é um sistema que permite a consulta de unidades da Smart Fit.',
    link: 'https://challenge-smartsite.vercel.app/'
  }
];

projects.forEach(projectData => {
  const projectCard = createProjectCard(projectData);
  container.appendChild(projectCard); 
});