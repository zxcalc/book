// Add toggle button at the end of each div with class 'proof'
document.querySelectorAll('.proof').forEach(function(proofDiv) {
    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Show proof';
    toggleButton.classList.add('toggle-btn');
    
    // Wrap the proof content in a div
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('proof-content');
    
    // Move all children of proofDiv into contentWrapper
    while (proofDiv.firstChild) {
        contentWrapper.appendChild(proofDiv.firstChild);
    }
    
    // Append contentWrapper and button to proofDiv
    proofDiv.appendChild(contentWrapper);
    proofDiv.appendChild(toggleButton);

    // Initially collapse the content and hide the border
    contentWrapper.style.display = 'none';
    proofDiv.style.border = 'none';  // Remove the border initially
    proofDiv.classList.add('collapsed');  // Add class for collapsed state
    
    // Add event listener to toggle button to show/hide content and toggle border
    toggleButton.addEventListener('click', function() {
        if (contentWrapper.style.display === 'none') {
            contentWrapper.style.display = 'block';  // Show the content
            proofDiv.classList.remove('collapsed');  // Remove the collapsed class
            proofDiv.style.border = '';  // Show the border (reset to default)
            toggleButton.textContent = 'Collapse proof';  // Change button text to "Close"
        } else {
            contentWrapper.style.display = 'none';  // Hide the content
            proofDiv.classList.add('collapsed');  // Add the collapsed class back
            proofDiv.style.border = 'none';  // Hide the border
            toggleButton.textContent = 'Show proof';  // Change button text to "Expand"
        }
    });
});

// Create a global button and add it to the body
const globalToggleButton = document.createElement('button');
globalToggleButton.textContent = 'Expand All Proofs';
globalToggleButton.classList.add('global-toggle-btn');
document.body.appendChild(globalToggleButton);

// Add event listener for the global button
globalToggleButton.addEventListener('click', function() {
    const proofSections = document.querySelectorAll('.proof');
    let allCollapsed = true;

    // Check if all proof sections are collapsed
    proofSections.forEach(function(proofDiv) {
        const contentWrapper = proofDiv.querySelector('.proof-content');
        if (contentWrapper.style.display !== 'none') {
            allCollapsed = false; // If any proof section is expanded, set to false
        }
    });

    // Trigger the click on individual toggle buttons based on their current state
    proofSections.forEach(function(proofDiv) {
        const contentWrapper = proofDiv.querySelector('.proof-content');
        const toggleButton = proofDiv.querySelector('.toggle-btn');
        
        if (allCollapsed && contentWrapper.style.display === 'none') {
            toggleButton.click(); // Trigger expand only if it's collapsed
        } else if (!allCollapsed && contentWrapper.style.display !== 'none') {
            toggleButton.click(); // Trigger collapse only if it's expanded
        }
    });

    // Update the global button text
    globalToggleButton.textContent = allCollapsed ? 'Collapse All Proofs' : 'Expand All Proofs';
});