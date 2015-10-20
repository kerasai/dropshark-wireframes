(function ($) {

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawOpcacheMemory();
    }

    function drawOpcacheMemory() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 57],
            ['Free', 39],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
        };

        var element = $('#opcache-memory-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

})(jQuery);
