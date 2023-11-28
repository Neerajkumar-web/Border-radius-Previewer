const previewBox = document.getElementById('previewBox');
const topLeftInput = document.getElementById('topLeft');
const topRightInput = document.getElementById('topRight');
const bottomRightInput = document.getElementById('bottomRight');
const bottomLeftInput = document.getElementById('bottomLeft');

const topLeftValue = document.getElementById('topLeftValue');
const topRightValue = document.getElementById('topRightValue');
const bottomRightValue = document.getElementById('bottomRightValue');
const bottomLeftValue = document.getElementById('bottomLeftValue');

function updatePreview() {
    const topLeft = topLeftInput.value;
    const topRight = topRightInput.value;
    const bottomRight = bottomRightInput.value;
    const bottomLeft = bottomLeftInput.value;

    const borderRadiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    previewBox.style.borderRadius = borderRadiusValue;

    // Update displayed values
    topLeftValue.textContent = topLeft;
    topRightValue.textContent = topRight;
    bottomRightValue.textContent = bottomRight;
    bottomLeftValue.textContent = bottomLeft;
}

topLeftInput.addEventListener('input', updatePreview);
topRightInput.addEventListener('input', updatePreview);
bottomRightInput.addEventListener('input', updatePreview);
bottomLeftInput.addEventListener('input', updatePreview);

// Initial preview update
updatePreview();
