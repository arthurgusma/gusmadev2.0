document.querySelector('.tooltip').addEventListener('click', toggleTooltip);

function toggleTooltip() {
  const tooltip = document.querySelector('.tooltiptext');
  
  tooltip.classList.toggle('active');
}

const checkbox = document.getElementById('burger-menu');

document.body.addEventListener('click', function(event) {
    if (event.target !== checkbox) {
        checkbox.checked = false;
    }
});