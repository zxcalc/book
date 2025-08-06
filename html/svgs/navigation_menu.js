document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.sectionHead');
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    const menuList = document.createElement('ul');

    // Iterate through all the sections and add them to the menu
    sections.forEach(section => {
        const sectionItem = document.createElement('li');
        const sectionLink = document.createElement('a');
        sectionLink.href = `#${section.id}`;
        sectionLink.textContent = section.textContent.trim();
        sectionItem.appendChild(sectionLink);
        menuList.appendChild(sectionItem);

        // Now, find only the subsections that belong to this specific section
        let nextElement = section.nextElementSibling;

        while (nextElement && !nextElement.matches('.sectionHead')) {
            if (nextElement.matches('.subsectionHead')) {
                const subsectionItem = document.createElement('li');
                subsectionItem.classList.add('subsection');
                const subsectionLink = document.createElement('a');
                subsectionLink.href = `#${nextElement.id}`;
                subsectionLink.textContent = nextElement.textContent.trim();
                subsectionItem.appendChild(subsectionLink);
                menuList.appendChild(subsectionItem);
            }
            nextElement = nextElement.nextElementSibling;
        }
    });

    menuContainer.appendChild(menuList);
    document.body.appendChild(menuContainer);

    // Create the hamburger menu button
    const hamburgerButton = document.createElement('div');
    hamburgerButton.className = 'hamburger-menu';
    hamburgerButton.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;
    document.body.appendChild(hamburgerButton);

    // Add event listeners to show/hide the menu
    hamburgerButton.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Close the menu if the overlay is clicked
    overlay.addEventListener('click', () => {
        menuContainer.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Smooth scrolling functionality when clicking a link
    document.querySelectorAll('.menu-container a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default anchor link behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smoothly scroll to the section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close the menu after clicking a link
            menuContainer.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});