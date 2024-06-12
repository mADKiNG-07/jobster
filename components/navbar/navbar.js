document.getElementById('nav').innerHTML =
  `
  <nav>
    <div class="navbar">
        <!-- controls (hamburger, title, user(action)) -->
        <div class="controls">
          <!-- hamburger button -->
          <div class="hamburger" id="hamburger-btn">
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <!-- title -->
          <div class="title">
            Dashboard
          </div>

          <!-- user(action) -->
          <div class="user-btn">
            <button class="btn" id="user-btn">
              <ion-icon name="person-circle-outline"></ion-icon>
              <span>
                Username
              </span>
              <div>
                <ion-icon name="caret-down-outline"></ion-icon> 
              </div>
            </button>
            <a href="./../../auth/register/register.html">
              <button id="logout-btn" class="logout-btn">Logout</button>
            </a>
          </div>
        </div>
      </div>
  </nav>
  `;

// Event listener to the user button
document.getElementById('user-btn').addEventListener('click', function () {
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.classList.toggle('show');
});

// Event listener to the logout button
document.getElementById('logout-btn').addEventListener('click', function () {
  console.log('Logout button clicked');
  // Implement logout functionality here
});

// Event listener to the hamburger button
// document.getElementById('hamburger-btn').addEventListener('click', function () {
//   const sidebar = document.getElementById('sidebar');
//   const navbar = document.querySelector('.navbar'); // Select the navbar
//   sidebar.classList.toggle('show-sidebar');

//   // Toggle the width of the navbar when sidebar is toggled
//   if (sidebar.classList.contains('show-sidebar')) {
//     navbar.style.width = 'calc(100% - 250px)'; // Reduce width by sidebar width
//   } else {
//     navbar.style.width = '100%'; // Restore original width
//   }
// });
