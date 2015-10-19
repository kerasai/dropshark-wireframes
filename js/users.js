(function ($) {

    google.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawUsers();
        drawRoles();
        drawSessions();
    }

    function drawUsers() {
        var data = google.visualization.arrayToDataTable([
            ['Name', 'Value'],
            ['Total', 288],
            ['Active', 182],
            ['Disabled', 106],
            ['New', 38],
            ['Never Logged In', 16],
        ]);

        var options = {
            legend: { position: 'none' }
        };

        var element = $('#users-chart')[0];
        var chart = new google.visualization.BarChart(element);

        chart.draw(data, options);
    }

    function drawRoles() {
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

    function drawSessions() {
        var data = google.visualization.arrayToDataTable([
            ['Time', 'Sessions'],
            ['12:45p', 50],
            ['1:00p', 50],
            ['1:15p', 100],
            ['1:30p', 175],
            ['1:45p', 175],
            ['2:00p', 150],
            ['2:15p', 125],
            ['2:30p', 125],
            ['2:45p', 75],
            ['3:00p', 100],
            ['3:15p', 75],
            ['3:30p', 50],
            ['3:45p', 50],
        ]);

        var options = {
            title: 'Sessions',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var element = $('#sessions-chart')[0];
        var chart = new google.visualization.LineChart(element);

        chart.draw(data, options);
    }

})(jQuery);
