const palette = [
  '#718676',
  '#A09983',
  '#C09E82',
  '#E5956F',
  '#DD8965',
  '#D17965',
  '#B56767',
  '#98626A',
];

const sideNavLinks = document.querySelector('#side-nav').children;
const subNavLinks = document.querySelector('#sub-nav').children;

const meContent = document.querySelector('#me');
const skillsContent = document.querySelector('#skills');
const projectsContent = document.querySelector('#projects');
const experienceContent = document.querySelector('#experience');

const frontendContent = document.querySelector('#frontend');
const backendContent = document.querySelector('#backend');
const uiContent = document.querySelector('#ui');
const designContent = document.querySelector('#design');
const gdContainer = document.querySelector('.gd-container');

const icons = document.querySelectorAll('i');

for (let i = 0; i < icons.length; i++) {
  const icon = icons[i];
  const iconName = icon.classList
    .toString()
    .replace('fa-brands ', '')
    .replace(' ', '');

  icon.addEventListener('mouseover', () => {
    switch (iconName) {
      case 'fa-react':
        icon.style.color = '#5ed3f3';
        icon.classList.add('spin');
        break;
      case 'fa-angular':
        icon.style.color = '#d61a15';
        icon.classList.add('beat');
        break;
      case 'fa-js':
        icon.style.color = '#f7d723';
        icon.classList.add('spin');
        break;
      case 'fa-html5':
        icon.style.color = '#ec7531';
        icon.classList.add('beat');
        break;
      case 'fa-css3':
        icon.style.color = '#1671b5';
        icon.classList.add('beat');
        break;
      case 'fa-sass':
        icon.style.color = '#c76395';
        icon.classList.add('beat');
        break;
      case 'fa-node-js':
        icon.style.color = '#6aa25a';
        icon.classList.add('spin');
        break;

      default:
        break;
    }
  });

  icon.addEventListener('mouseout', () => {
    if (iconName !== 'text-icon' && !icon.classList.contains('noanim')) {
      icon.style.color = '#313d53';
    }
    icon.classList.remove('spin');
    icon.classList.remove('beat');
  });
}

function navigate() {
  for (let i = 0; i < sideNavLinks.length; i++) {
    const link = sideNavLinks[i];
    link.classList.remove('active');
  }
  meContent.hidden = true;
  skillsContent.hidden = true;
  projectsContent.hidden = true;
  experienceContent.hidden = true;
}

function subNavigate() {
  for (let i = 0; i < subNavLinks.length; i++) {
    const link = subNavLinks[i];
    link.classList.remove('active');
  }
  frontendContent.hidden = true;
  backendContent.hidden = true;
  uiContent.hidden = true;
  designContent.hidden = true;
}

for (let i = 0; i < sideNavLinks.length; i++) {
  const link = sideNavLinks[i];
  link.style.borderRightColor = palette[i];

  link.addEventListener('click', () => {
    switch (link.innerHTML) {
      case 'ME':
        navigate();
        link.classList.add('active');
        meContent.hidden = false;
        break;
      case 'SKILLS':
        navigate();
        link.classList.add('active');
        skillsContent.hidden = false;
        break;
      case 'PROJECTS':
        navigate();
        link.classList.add('active');
        projectsContent.hidden = false;
        break;
      case 'EXPERIENCE':
        navigate();
        link.classList.add('active');
        experienceContent.hidden = false;
        break;

      default:
        break;
    }
  });
}

for (let i = 0; i < subNavLinks.length; i++) {
  const link = subNavLinks[i];
  link.style.borderBottomColor = palette[i];

  link.addEventListener('click', () => {
    switch (link.innerHTML) {
      case 'Frontend':
        subNavigate();
        link.classList.add('active');
        frontendContent.hidden = false;
        break;
      case 'Backend':
        subNavigate();
        link.classList.add('active');
        backendContent.hidden = false;
        break;
      case 'UI / UX':
        subNavigate();
        link.classList.add('active');
        uiContent.hidden = false;
        break;
      case 'Graphic Design':
        subNavigate();
        link.classList.add('active');
        designContent.hidden = false;
        break;

      default:
        break;
    }
  });
}

const request = new XMLHttpRequest();
request.open('GET', 'personal-website/images/gd/logos', true);
request.responseType = 'document';
request.onload = () => {
  const elements = request.response.querySelectorAll('a');
  for (let el of elements) {
    if (el.href.includes('/logos/')) {
      let div = document.createElement('div');
      div.classList.add('img-box');
      let img = document.createElement('img');
      img.src = el.href;
      div.appendChild(img);
      const newEl = gdContainer.appendChild(div);
      console.log(newEl);
    }
  }
};
request.send();
