const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mar 2022',
      'Apr 2022',
      ' May 2022',
      ' Jun 2022',
      'Jul 2022',
      'Aug 2022'],
    datasets: [{
      label: 'Applications',
      data: [8, 6, 4, 5, 6, 5],
      backgroundColor: [
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',

      ],

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});