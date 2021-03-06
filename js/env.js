(function ($) {

    var colors = {
        general: ['#0cab41', '#0c76ab', '#ab0c76', '#ab410c'],
        status: ['#cc060c', '#f2930c', '#0cab41'],
        usage: ['#cc060c', '#0cab41'],
    };

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawRamChart();
        drawLoadChart();
        drawDiskChart();
        drawSwapChart();
        drawSwapActivityChart();
        drawOpcacheChart();
        drawMemcacheChart();
    }

    function drawRamChart() {
        var data = google.visualization.arrayToDataTable([
            ['Time', 'Used', 'Cached', 'Used'],
            ['8:00a', 850, 250, 1100],
            ['8:15a', 900, 275, 1025],
            ['8:30a', 1800, 275, 125],
            ['8:45a', 1850, 300, 50],
            ['9:00a', 1750, 300, 150],
            ['9:15a', 1750, 350, 100],
            ['9:30a', 1400, 400, 400],
            ['9:45a', 1200, 450, 550],
            ['10:00a', 1100, 500, 600],
        ]);

        var options = {
            legend: 'none',
            isStacked: true,
            hAxis: { slantedText: true },
            colors: colors.status
        };

        var element = $('#ram-chart')[0];
        var chart = new google.visualization.AreaChart(element);

        chart.draw(data, options);
    }

    function drawDiskChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 2.29],
            ['Free', 33.11],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.usage
        };

        var element = $('#disk-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawLoadChart() {
        var data = google.visualization.arrayToDataTable([
            ['Time', '1 min', '5 min', '15 min'],
            ['8:00a', .06, .08, .09],
            ['8:15a', .12, .11, .09],
            ['8:30a', .2, .15, .12],
            ['8:45a', .15, .13, .11],
            ['9:00a', .1, .11, .10],
            ['9:15a', .06, .08, .09],
            ['9:30a', .07, .08, .10],
            ['9:45a', .08, .09, .09],
            ['10:00a', .06, .07, .08],
        ]);

        var options = {
            legend: 'none',
            hAxis: { slantedText: true },
            colors: colors.general
        };

        var element = $('#load-chart')[0];
        var chart = new google.visualization.LineChart(element);

        chart.draw(data, options);
    }

    function drawSwapChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 133],
            ['Free', 1914],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.usage
        };

        var element = $('#swap-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawSwapActivityChart() {
        var data = google.visualization.arrayToDataTable([
            ['Time', 'In', 'Out'],
            ['9:00a', 4, 1],
            ['9:15a', 17, 14],
            ['9:30a', 6, 8],
            ['9:45a', 3, 5],
            ['10:00a', 5, 8]
        ]);

        var options = {
            legend: 'none',
            hAxis: { slantedText: true },
            colors: colors.general,
        };

        var element = $('#swap-activity-chart')[0];
        var chart = new google.visualization.LineChart(element);

        chart.draw(data, options);
    }

    function drawOpcacheChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 57.4],
            ['Free', 38.5],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.usage
        };

        var element = $('#opcache-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

    function drawMemcacheChart() {
        var data = google.visualization.arrayToDataTable([
            ['Type', 'Allocation'],
            ['Used', 5.62],
            ['Free', 2.38],
        ]);

        var options = {
            pieHole: 0.4,
            legend: 'none',
            pieSliceText: 'none',
            colors: colors.usage
        };

        var element = $('#memcache-chart')[0];
        var chart = new google.visualization.PieChart(element);

        chart.draw(data, options);
    }

})(jQuery);
