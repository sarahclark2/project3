$(document).ready(function(){
  console.log('scripts loaded');

  var url = '/js/carbon-levels.json';
  var data = []; //you have to initialize as an empty array
  var xCat = [];
  var levels = [];


  $(function () {
      var myChart = Highcharts.chart('container', {
          chart: {
              type: 'scatter'
          },
          title: {
              text: 'Change in Land Temperature 1993-2017'
          },
          xAxis: {
              title:{
                text: 'Year'
              },
              categories: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'
              , '2013', '2014', '2015', '2016', '2017'
            ]
          },
          yAxis: {
              title: {
                  text: 'Change in Temperature'
              },
              categories: ['1', '2', '3', '4', '5']
          },
          plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    },
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}, {point.y} celsius'
            }
        }
    },
          series: [{
              name: 'Temperature',
              color: 'rgba(223, 83, 83, .5)',
              data: [[1993, 0.24, 0.33], [1994, 0.31, 0.34], [1995, 0.44, 0.37], [1996, 0.33, 0.4], [1997, 0.47, 0.43], [1998, 0.62, 0.45], [1999, 0.4, 0.48] ,[2000, 0.4, 0.5], [2001, 0.54, 0.52], [2002, 0.62, 0.55], [2003, 0.61, 0.58], [2004, 0.53, 0.6], [2005, 0.67, 0.61], [2006, 0.62, 0.61], [2007, 0.64, 0.61], [2008, 0.52, 0.62], [2009, 0.63, 0.62], [2010, 0.7, 0.62], [2011, 0.57, 0.63], [2012, 0.61, 0.67], [2013, 0.64, 0.71], [2014, 0.73, 0.77], [2015, 0.86, 0.83], [2016, 0.99, 0.89], [2017, 0.9, 0.95]]
          }]
      });
  });//closing scatter plot chart

  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: data,
    url: url,
    async: true,
    success: function(data){
      console.log(data[0].Year);

        for(i=0; i < data.length; i++){
          //loop through the data and build an array
          xCat.push(data[i].Year);
          levels.push(data[i].ppm);
        }
        buildChart();

    }

  });

  function buildChart(){

  var myChart = Highcharts.chart('carbon-graph', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Carbon Levels in the Atmosphere, 1993-2017'
      },
      xAxis: {
          categories: xCat
      },
      yAxis: {
          title: {
              text: 'Parts Per Million'
          }
      },
      series: [{
            name: 'Carbon Levels',
            data: levels
}]
  }); //clsing carbon levels column chart
};//closing carbon chart total


    $('#table').DataTable({
      "ajax": "./js/annual_aqi_by_county_2017.txt",
      "columns": [
        {"data": "State"},
        {"data": "County"},
        {"data": "Year"},
        {"data": "Days with AQI"},
        {"data": "Good Days"},
        {"data": "Moderate Days"},
        {"data": "Unhealthy for Sensitive Groups Days"},
        {"data": "Unhealthy Days"},
        {"data": "Very Unhealthy Days"},
        {"data": "Hazardous Days"},
        {"data": "Max AQI"},
        {"data": "90th Percentile AQI"},
        {"data": "Median AQI"},
        {"data": "Days CO"},
        {"data": "Days NO2"},
        {"data": "Days Ozone"},
        {"data": "Days SO2"},
        {"data": "Days PM2.5"},
        {"data": "Days PM10"},
      ],

      "columnDefs": [{
        "targets": [0, 18],
        "createdCell": function(td, cellData, rowData, row, col){


        }
      }]
    });





});//closing document ready
