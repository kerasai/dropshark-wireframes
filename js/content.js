(function ($) {

    var colors = {
        general: ['#0cab41', '#0c76ab', '#ab0c76', '#ab410c'],
        status: ['#cc060c', '#f2930c', '#0cab41'],
        usage: ['#cc060c', '#0cab41'],
    };

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawPostedContentChart();
        drawContentTypeChart();
        drawContentRoleChart();
    }

    function drawPostedContentChart() {
        var data = google.visualization.arrayToDataTable([
            ['Date', 'Article', 'Event', 'Page'],
            ['10/9', 7, 2, 0],
            ['10/10', 7, 4, 0],
            ['10/11', 9, 1, 1],
            ['10/12', 13, 7, 0],
            ['10/13', 8, 6, 0],
            ['10/14', 10, 0, 0],
            ['10/15', 12, 0, 0],
        ]);

        var options = {
            legend: 'bottom',
            isStacked: true,
            colors: colors.general,
        };

        var element = $('#content-post-chart')[0];
        var chart = new google.visualization.LineChart(element);

        chart.draw(data, options);
    }

    function drawContentTypeChart() {
        var data = google.visualization.arrayToDataTable([
            ['Date', 'Article', 'Event', 'Page'],
            ['9/3', 422, 128, 3],
            ['9/10', 464, 139, 8],
            ['9/17', 498, 145, 10],
            ['9/24', 545, 154, 14],
            ['10/1', 607, 188, 14],
            ['10/8', 734, 222, 15],
            ['10/15', 812, 237, 17],
        ]);

        var options = {
            legend: 'bottom',
            isStacked: true,
            colors: colors.general,
        };

        var element = $('#content-type-chart')[0];
        var chart = new google.visualization.AreaChart(element);

        chart.draw(data, options);
    }


    function drawContentRoleChart() {
        var data = google.visualization.arrayToDataTable([
            ['Date', 'Anonymous', 'Authenticated', 'Administrator', 'Editor'],
            ['9/17', 50, 725, 55, 375],
            ['9/24', 55, 750, 60, 450],
            ['10/1', 60, 800, 65, 550],
            ['10/8', 82, 900, 70, 625],
            ['10/15', 84, 982, 76, 714],
        ]);

        var options = {
            legend: 'bottom',
            colors: colors.general,
        };

        var element = $('#content-role-chart')[0];
        var chart = new google.visualization.ColumnChart(element);

        chart.draw(data, options);
    }

})(jQuery);
