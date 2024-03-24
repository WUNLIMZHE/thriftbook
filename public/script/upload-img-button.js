$(document).ready(function() {
  // When the file input changes (i.e., a file is selected)
  $("input[name='profilePic']").change(function() {
      // Get the name of the uploaded file
      var fileName = $(this).val().split('\\').pop(); // Splitting by '\\' because browsers may include the full path
      // Update the text of the container to show the uploaded file name
      $(".uploaded-file-name").text(fileName);
  });

  // When the button is clicked, trigger the file input
  $(".image-upload-btn").click(function() {
      $("input[name='profilePic']").click();
  });
});