/**
 * Scrolls to the specified section. Scrolls to top if sectionId is null or not provided.
 * @param {string|null=} sectionId - The ID of the section to scroll to, nullable or optional.
 */
export function scrollToSection(sectionId) {
    if (!sectionId)
    {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offset = 3.5 * remSize;

      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  