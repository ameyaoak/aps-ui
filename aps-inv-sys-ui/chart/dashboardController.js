function initChartConfig(data) {
    if(data!=undefined) {
        return {
            xAxis: {

                categories: data.mm,
                gridLineWidth:1,
                title: {text: 'mm'}
            }, title: {
                text: null
            }, subtitle: {
                text: null
            },
 
            yAxis: {title: {text: 'HV'}},
            tooltip: {valueSuffix: ' '},

            legend: {enabled:false, align: 'right', layout: 'vertical', verticalAlign: 'middle', borderWidth: 0},
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]]

                    },
                    marker: {
                        radius: 2

                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                },
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }

            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'HV',
                    type: 'line',
                    yaxis: 1,
                    data: data.hv,
                    lineWidth: 1

                },
                {
                    name: 'Cut Off',
                    yaxis: 2,
                    type: 'line',
                    data: data.cut,
                    lineWidth: 1

                }]
        };
    }
}