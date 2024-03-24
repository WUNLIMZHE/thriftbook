function confirmDelete() {
  // Prompt the user for confirmation
  var confirmation = confirm("Are you sure you want to delete this blog post?");
  
  // If the user confirms, return true to submit the form
  // If the user cancels, return false to prevent the form submission
  return confirmation;
}