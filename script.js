function displayBirthday() {
   const name = "Sharmila";
   const age = 22;
   const dob = "06/12/2002";
   const picture = "./sharmila.jpeg"; 

   // Set birthday details
   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;

   // Convert dob to a Date object and format it
   const dateObject = new Date(dob);
   document.getElementById('birthdayDate').textContent = dateObject.toLocaleDateString();

   // Set the picture directly
   document.getElementById('birthdayImage').src = picture;

   // Display the header
   document.getElementById('birthdayHeader').style.display = 'block';

   // Show all gift sections and footer
   const giftSections = document.querySelectorAll('.gift-section, .footer');
   giftSections.forEach((section) => (section.style.display = 'block'));

   // Hide the form container if it exists
   const formContainer = document.querySelector('.form-container');
   if (formContainer) {
      formContainer.style.display = 'none';
   }

   // Play the birthday audio
   const audio = document.getElementById('birthdayAudio');
   if (audio) {
      audio.play();
   }
}
