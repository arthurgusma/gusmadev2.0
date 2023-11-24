document.querySelector('.tooltip').addEventListener('click', toggleTooltip);

function toggleTooltip() {
  const tooltip = document.querySelector('.tooltiptext');
  
  tooltip.classList.toggle('active');
}