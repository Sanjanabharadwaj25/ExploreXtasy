document.addEventListener("DOMContentLoaded", function() {
    const activityButtons = document.querySelectorAll(".activity-button");
    const activityContainer = document.getElementById("activity-container");
  
    activityButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        const activity = button.dataset.activity;
  
        // Update the activity container with the appropriate GIF and related activities
        updateActivityContainer(activity);
      });
    });
  
    function updateActivityContainer(activity) {
      // Clear the activity container
      document.addEventListener("DOMContentLoaded", function() {
        const activityButtons = document.querySelectorAll(".activity-button");
        const activityContainer = document.getElementById("activity-container");
  
        activityButtons.forEach(function(button) {
          button.addEventListener("click", function(event) {
            const activity = button.dataset.activity;
  
            // Redirect to another page with the selected activity
            window.location.href = "activity_options.html?activity=" + activity;
          });
        });
      });
  
      // Add draggable functionality to the list items
      interact(".draggable")
        .draggable({
          inertia: true,
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent',
              endOnly: true
            })
          ],
          autoScroll: true,
          onmove: dragMoveListener
        });
    }
  
    function getGifUrl(activity) {
      // Define the GIF URLs based on the chosen activity
      if (activity === "Hiking") {
        return "hiking.gif";
      } else if (activity === "Rafting") {
        return "rafting.gif";
      } else if (activity === "Parasailing") {
        return "parasailing.gif";
      }
  
      // Return a default GIF URL if no specific activity is matched
      return "default.gif";
    }
  
    function getRelatedActivities(activity) {
      // Define the related activities based on the chosen activity
      if (activity === "Hiking") {
        return "<li class='draggable'>Trail 1</li><li class='draggable'>Trail 2</li><li class='draggable'>Trail 3</li>";
      } else if (activity === "Rafting") {
        return "<li class='draggable'>River 1</li><li class='draggable'>River 2</li><li class='draggable'>River 3</li>";
      } else if (activity === "Parasailing") {
        return "<li class='draggable'>Location 1</li><li class='draggable'>Location 2</li><li class='draggable'>Location 3</li>";
      }
  
      // Return a default message if no specific activity is matched
      return "<li>No related activities found.</li>";
    }
  
    // Drag move listener
    function dragMoveListener(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
      // Translate the element's position
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  
      // Update the element's position attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  
    // Enable dropzones
    interact('.dropzone').dropzone({
      accept: '.draggable',
      overlap: 0.5,
  
      // On drop, add the item to the dropzone
      ondrop: function(event) {
        const draggableElement = event.relatedTarget;
        const dropzoneElement = event.target;
  
        dropzoneElement.classList.add('occupied');
        draggableElement.classList.add('dropped');
  
        draggableElement.style.pointerEvents = 'none'; // Disable further dragging of the item
      }
    });
  });
  