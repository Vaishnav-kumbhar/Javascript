// Function to apply bold formatting
document.getElementById('bold-btn').addEventListener('click', function() {
  document.execCommand('bold', false, null);
});

// Handle post submission and show preview
document.getElementById('submit-post').addEventListener('click', function() {
  const editorContent = document.getElementById('editor').innerHTML;
  document.getElementById('post-preview').innerHTML = editorContent;
});
