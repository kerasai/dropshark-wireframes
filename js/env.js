(function ($) {

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawRamChart();
        drawDiskChart();
        drawLoadChart();
        drawOpcacheChart();
        drawMemcacheChart();
    }

    function drawRamChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 878],
            ['Free', 1123],
            ['Cached', 209],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
        };

        var element = $('#ram-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawDiskChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Free', 33.11],
            ['Used', 2.29],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
        };

        var element = $('#disk-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawLoadChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['1 min', .06],
            ['5 min', .11],
            ['15 min', .09],
        ]);

        var options = {
            legend: 'none',
        };

        var element = $('#load-chart')[0];
        var chart = new google.visualization.ColumnChart(element);

        chart.draw(data, options);
    }

    function drawOpcacheChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Free', 38.5],
            ['Used', 57.4],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
        };

        var element = $('#opcache-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawMemcacheChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Free', 2.38],
            ['Used', 5.62],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
        };

        var element = $('#memcache-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

})(jQuery);