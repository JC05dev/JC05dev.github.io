document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
      const gmailLogo = event.target.closest('.GMail-Logo');
      if (gmailLogo) {
        const gmailContact = event.target.closest('.GMail-Contact');
        if (gmailContact) {
          const gmailForm = gmailContact.querySelector('.GMail-Form');
          if (gmailForm) {
            // Toggle the visibility of the form
            if (gmailForm.style.zIndex === '2') {
              // If the form is visible, hide it
              gmailForm.style.zIndex = '-1';
              gmailForm.style.display = 'none';
            } else {
              // If the form is hidden, show it
              gmailForm.style.zIndex = '2';
              gmailForm.style.display = 'block';
            }
          } else {
            console.error('GMail-Form not found');
          }
        } else {
          console.error('GMail-Contact not found');
        }
      } else if (event.target.classList.contains('button-cancel')) {
        // Handle the click event for the cancel button
        const gmailForm = event.target.closest('.GMail-Form');
        if (gmailForm) {
            // Hide the form
            gmailForm.style.zIndex = '-1';
            gmailForm.style.display = 'none';
        } else {
            console.error('GMail-Form not found');
        } 
      } else if (event.target.classList.contains('button-clear')) {
        // Handle the click event for the clear button
        const gmailForm = event.target.closest('.GMail-Form');
        if (gmailForm) {
            // Reset the form
            gmailForm.reset();
        } else {
            console.error('GMail-Form not found');
        }
      }
      // The rest of your code
    });
  });
  
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }