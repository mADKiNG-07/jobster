document.addEventListener('DOMContentLoaded', () => {
  const jobs = [
    { fl: 'S', title: 'Software Developer', company: 'Company A', location: 'New York', type: 'Full-time', date: 'Aug 9th, 2022' },
    { fl: 'D', title: 'Data Analyst', company: 'Company B', location: 'San Francisco', type: 'Part-time', date: 'Aug 9th, 2022' },
    { fl: 'P', title: 'Project Manager', company: 'Company C', location: 'Los Angeles', type: 'Contract', date: 'Aug 9th, 2022' },
    { fl: 'G', title: 'Graphic Designer', company: 'Company D', location: 'Chicago', type: 'Freelance', date: 'Aug 9th, 2022' },
    { fl: 'M', title: 'Marketing Specialist', company: 'Company E', location: 'Boston', type: 'Full-time', date: 'Aug 9th, 2022' }
  ];

  const resultsSection = document.querySelector('.results-sec .results');
  const resultsCount = document.querySelector('.results-sec .title');

  function displayJobs(jobs) {
    resultsCount.textContent = `${jobs.length} found`;
    resultsSection.innerHTML = jobs.map(job => `
      <div class="job-card">
       <!--top-->
       <div class="top-2">
          <!--first letter-->
          <div class="blue-ctn">
            ${job.fl}
          </div>
          <div>
            <h3 class="title big">${job.title}</h3>
            <p class="company"><strong>Company:</strong> ${job.company}</p>
          </div>
       </div>
       <div class="bottom-2">
          <div>
            <div class="icon">
              <ion-icon name="navigate"></ion-icon>
              <p>${job.location}</p>
            </div>
            <div class="icon">
              <ion-icon name="briefcase"></ion-icon>
              <p>${job.type}</p>
            </div>
            <div class="btn-flex">
                <button class="btn-success" type="submit" onclick="registerUser()">Edit</button>
                <button class="btn-danger" type="submit" onclick="registerUser()">Delete</button>
            </div>
          </div>

          <div>
            <div class="icon">
             <ion-icon name="calendar"></ion-icon>
              <p>${job.date}</p>
            </div>
             <div class="">
                <button class="btn-danger" type="submit" onclick="registerUser()">Declined</button>
            </div>
          </div>

          
       </div>
      </div>
    `).join('');
  }

  displayJobs(jobs);
});
