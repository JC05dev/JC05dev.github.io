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
      }
      // The rest of your code
    });
  });
  
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }