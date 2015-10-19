(function ($) {

    google.setOnLoadCallbacks(drawChart);

    function drawCharts() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Total', 'Editor', 'Admin'],
            ['9/17', 100, 10, 3],
            ['9/24', 150, 35, 3],
            ['10/1', 260, 45, 4],
            ['10/8', 275, 40, 4],
            ['10/15', 288, 48, 6],
        ]);

        var options = {
            title: 'Users by Role',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        console.log(document.getElementById('roles-chart'));
        var chart = new google.visualization.LineChart(document.getElementById('roles-chart'));

        chart.draw(data, options);
    }

})(jQuery);
