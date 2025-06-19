// List of days
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Referencias al DOM
const button = document.getElementById("showDays");
const list = document.getElementById("listDays");

// 
function listOfDays() {
      // Conditional to check if there are already items, and if there are, delete them to restart
      if (list.children.length > 0) {
        list.innerHTML = "";
        button.textContent = "Show days of the week";
        return;
      }

      // Show the days
      for (let i = 0; i < days.length; i++) {
        const li = document.createElement("li");
        li.textContent = days[i];
        list.appendChild(li);
      }
      
      // Show on the (Reset) button
      button.textContent = "Restart";
    }