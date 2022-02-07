var chartDirective = function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div style="width:925px; height:170px;"></div>',
        scope: {
            config: '=',
            xaxis: '=',
            yaxis1: '=',
            yaxis2:'='
        },
        link: function (scope, element, attrs) {
            var chart;

            var process = function () {
                var defaultOptions = {
                    chart: { renderTo: element[0] },
                };
                var config = angular.extend(defaultOptions, scope.config);
                chart = new Highcharts.Chart(config);
            };
            process();
            scope.$watch("config.series", function (loading) {
                process();
            });
            scope.$watch("config.loading", function (loading) {
                if (!chart) {
                    return;
                }
                if (loading) {
                    chart.showLoading();
                } else {
                    chart.hideLoading();
                }
            });
        }
    };
};