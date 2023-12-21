document.addEventListener('DOMContentLoaded', function () {
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the <span> element that closes the modal
      var closeModalBtn = document.getElementById('closeModalBtn');

      // When the user clicks on <span> (x), close the modal
      closeModalBtn.onclick = function () {
        modal.style.display = 'none';
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };

      // Automatically open the modal when the page is loaded
      modal.style.display = 'block';
});