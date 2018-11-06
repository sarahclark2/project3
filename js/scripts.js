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
              data: [[1993, 0.24], [1994, 0.31], [1995, 0.44], [1996, 0.33], [1997, 0.47], [1998, 0.62], [1999, 0.4] ,[2000, 0.4], [2001, 0.54], [2002, 0.62], [2003, 0.61], [2004, 0.53], [2005, 0.67], [2006, 0.62], [2007, 0.64], [2008, 0.52], [2009, 0.63], [2010, 0.7], [2011, 0.57], [2012, 0.61], [2013, 0.64], [2014, 0.73], [2015, 0.86], [2016, 0.99], [2017, 0.9]]
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


};

});//closing document ready
