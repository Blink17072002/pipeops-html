document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('calorieChart').getContext('2d');
    var calorieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Carbohydrates', 'Proteins', 'Fats', 'Others'],
            datasets: [{
                label: 'Nutrient Distribution',
                data: [50, 20, 20, 10], // Example data, replace with actual values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Set to false to use the fixed size
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Calorie and Nutrient Distribution'
                }
            }
        }
    });
});
