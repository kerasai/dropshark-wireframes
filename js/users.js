(function ($) {

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        var data = google.visualization.arrayToDataTable([
            ['Date', 'Total', 'Editor', 'Admin'],
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

        var element = $('#roles-chart')[0];
        var chart = new google.visualization.LineChart(element);

        chart.draw(data, options);
    }

})(jQuery);
