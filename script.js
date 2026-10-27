'use strict';

// Progressive enhancement: links, project details and all experience text work without JS.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
window.matchMedia('(min-width: 721px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const projects = [...document.querySelectorAll('.project')];
const filters = [...document.querySelectorAll('[data-filter]')];
function filterProjects(category) {
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
  });
  const count = projects.filter(project => !project.hidden).length;
  document.querySelector('#project-count').textContent = `${count} projet${count > 1 ? 's' : ''} à explorer`;
}
filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
function revealProjectFromHash() {
  const project = projects.find(item => `#${item.id}` === window.location.hash);
  if (project) { filterProjects('all'); project.open = true; }
}
window.addEventListener('hashchange', revealProjectFromHash);
revealProjectFromHash();

// Actual confusion matrices from the committed BAAC 2023 evaluation, n = 125671.
const comparisons = {
  baseline: { tp: 0, fn: 22669, fp: 0, tn: 103002, name: 'TOUJOURS « NON GRAVE » / TEST 2023',
    explanation: '81,96 % d’accuracy, mais aucun cas positif détecté. La classe majoritaire suffit à produire un chiffre flatteur.' },
  forest: { tp: 17476, fn: 5193, fp: 23230, tn: 79772, name: 'RANDOM FOREST / TEST 2023',
    explanation: 'Le modèle détecte 77,09 % des cas positifs. En contrepartie, 42,93 % de ses alertes sont correctes.' }
};
const number = new Intl.NumberFormat('fr-FR');
const percent = new Intl.NumberFormat('fr-FR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.querySelectorAll('[data-model]').forEach(button => {
  button.addEventListener('click', () => {
    const values = comparisons[button.dataset.model];
    const total = values.tp + values.fn + values.fp + values.tn;
    const accuracy = (values.tp + values.tn) / total;
    const recall = values.tp / (values.tp + values.fn);
    document.querySelectorAll('[data-model]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    for (const key of ['tp', 'fn', 'fp', 'tn']) document.querySelector(`#lab-${key}`).textContent = number.format(values[key]);
    document.querySelector('#lab-accuracy').textContent = percent.format(accuracy);
    document.querySelector('#lab-recall').textContent = percent.format(recall);
    document.querySelector('#accuracy-bar').style.width = `${accuracy * 100}%`;
    document.querySelector('#recall-bar').style.width = `${recall * 100}%`;
    document.querySelector('#model-label').textContent = values.name;
    document.querySelector('#lab-explanation').textContent = values.explanation;
  });
});

const experienceButtons = [...document.querySelectorAll('[data-experience]')];
function selectExperience(id) {
  experienceButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.experience === id));
    button.setAttribute('aria-controls', `experience-${button.dataset.experience}`);
  });
  document.querySelectorAll('.experience-panel').forEach(panel => {
    panel.classList.toggle('is-active', panel.id === `experience-${id}`);
  });
}
experienceButtons.forEach(button => button.addEventListener('click', () => selectExperience(button.dataset.experience)));
selectExperience('bpi');

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('naoufalberquecha@hotmail.com');
    status.textContent = 'Adresse copiée.';
  } catch {
    status.textContent = 'Vous pouvez sélectionner l’adresse ci-dessus, ou cliquer dessus pour écrire un e-mail.';
  }
});

if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('#accueil, #projets, #parcours, #approche, #contact').forEach(section => observer.observe(section));
}
