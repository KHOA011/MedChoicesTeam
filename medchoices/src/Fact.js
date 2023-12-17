import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import accessibilityInit from 'highcharts/modules/accessibility';
import exportDataInit from 'highcharts/modules/export-data';
import Sidebar from './Sidebar';

// Initialize required Highcharts modules
exportingInit(Highcharts);
exportDataInit(Highcharts);
accessibilityInit(Highcharts);

function Facts() {
  useEffect(() => {
    // Create the chart when the component mounts
    Highcharts.chart('container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Survey participants'
      },
      tooltip: {
        valueSuffix: '%'
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [
            {
              enabled: true,
              distance: 20
            },
            {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7
              },
              filter: {
                operator: '>',
                property: 'percentage',
                value: 10
              }
            }
          ]
        }
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: [
            {
              name: 'Depression',
              y: 27
            },
            {
              name: 'Anxiety',
              sliced: true,
              selected: true,
              y: 25
            },
            {
              name: 'Numbness',
              y: 11
            },
            {
              name: 'Bipolar',
              y: 16
            },
            {
              name: 'Headache',
              y: 16
            },
            {
              name: 'Dental',
              y: 5
            }
          ]
        }
      ]
    });
    Highcharts.chart('barChartContainer', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Rating of the survey'
      },
      xAxis: {
        categories: ['Depression', 'Anxiety', 'Bipolar', 'Numbness', 'Headache', 'Dental']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Goals'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          name: 'High',
          data: [7, 6, 3, 2, 2, 1],
          color: '#0CBABA'
        },
        {
          name: 'Medium',
          data: [2, 1, 1, 1, 1, 1],
          color: '#D6F8D6'
        },
        {
          name: 'Low',
          data: [1, 2, 1, 1, 2, 1],
          color: '#9684A1'
        }
      ]
    });
  }, []); 

  return (
    <div className="about-us-container">
      <Sidebar />
<div className= "about-us-content">
      <figure className="highcharts-figure">
        <div id="container"></div>
        <p className="highcharts-description">
          Chart showing the number of participants complete for each survey.
        </p>
      </figure>
      <figure className="highcharts-figure">
        <div id="barChartContainer"></div>
        <p className="highcharts-description">
          Chart showing the satisfaction grade that participants give once completed.
        </p>
      </figure>
    </div>
    </div>
  );
}

export default Facts;
