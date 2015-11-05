(function ($) {

    var colors = {
        general: ['#0cab41', '#0c76ab', '#ab0c76', '#ab410c'],
        status: ['#cc060c', '#f2930c', '#4b9609'],
        usage: ['#cc060c', '#4b9609'],
    };

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawSessionsChart();
        drawRamChart();
        drawDiskChart();
        drawLoadChart();
    }

    function drawSessionsChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Value'],
            ['Current', 26],
            ['Max', 178],
        ]);

        var options = {
            legend: 'none',
            colors: colors.general,
        };

        var element = $('#sessions-chart')[0];
        var chart = new google.visualization.ColumnChart(element);

        chart.draw(data, options);
    }

    function drawRamChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 868],
            ['Cached', 209],
            ['Free', 900],
        ]);

        var options = {
            pieHole: 0.6,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.status,
        };

        var element = $('#ram-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawDiskChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 2.29],
            ['Free', 33.11],
        ]);

        var options = {
            pieHole: 0.6,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.usage,
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
            colors: colors.general,
        };

        var element = $('#load-chart')[0];
        var chart = new google.visualization.ColumnChart(element);

        chart.draw(data, options);
    }

})(jQuery);
