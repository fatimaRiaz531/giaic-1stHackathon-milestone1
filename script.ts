const skills = document.getElementById('skills') as HTMLDivElement;
const button = document.getElementById('btn') as HTMLButtonElement;

const toggleSkills = () => {
    if (skills.style.display === 'none') {
      skills.style.display = 'block';
      button.textContent = 'Hide Skills';
    } else {
      skills.style.display = 'none';
      button.textContent = 'Show Skills';
    }
  };

button.addEventListener('click', toggleSkills);