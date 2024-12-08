// Open the popup when the user clicks on "View Details"
function openPopup(projectId) {
    document.getElementById(projectId + '-popup').style.display = 'flex';
  }
  
  // Close the popup when the user clicks on the close button
  function closePopup(projectId) {
    document.getElementById(projectId + '-popup').style.display = 'none';
  }