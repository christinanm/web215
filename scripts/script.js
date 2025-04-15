document.addEventListener("DOMContentLoaded", () => {
    
    const h2Element = document.querySelector("h2");

    
    const titleElement = document.querySelector("title");

    if (h2Element && titleElement) {
        
        const newTitle = `${titleElement.textContent} ${h2Element.textContent}`;
        titleElement.textContent = newTitle;
    }
});