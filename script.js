document.addEventListener("DOMContentLoaded", () => {
  const roleElement = document.querySelector(".typewriter-role");
  const roles = ["eLearning Developer", "Digital Learning Specialist", "Front-End Enthusiast"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex++);
      if (charIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
      }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
});
