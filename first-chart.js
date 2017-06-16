google.charts.load('current', {'packages':['corechart', 'bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawBasic);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Toppings');
      data.addColumn('number', 'People Who Liked It');

      data.addRows([
        ['Tomato', 6],
        ['Pepperoni', 7],
        ['Shrimp', 1],
        ['Pineapple', 6],
        ['Peppers', 4]
      ]);

      var options = {
        title: 'Pizza Topping Popularity',
        hAxis: {
          title: 'Toppings',
        },
        vAxis: {
          title: 'People Who Like It'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }
