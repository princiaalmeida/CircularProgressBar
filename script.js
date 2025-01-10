
const progressValue = document.querySelector('.progress-value');
const progressCircle = document.querySelector('.progress');
const rangeInput = document.getElementById('progressRange');

const maxOffset = 879.6; 
function updateProgress(value) {
  const offset = maxOffset - (value / 100) * maxOffset;
  progressCircle.style.strokeDashoffset = offset;
  progressValue.textContent = `${value}%`;
}

// Update progress on range slider change
rangeInput.addEventListener('input', (e) => {
  updateProgress(e.target.value);
});


updateProgress(0);
