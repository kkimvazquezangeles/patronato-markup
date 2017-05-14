var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "theme": "light",
    "innerRadius": "40%",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
    "dataProvider": [{
        "country": "Pagado",
        "litres": 501.9
    }, {
        "country": "Pendiente",
        "litres": 301.9
    }],
    "balloonText": "[[value]]",
    "valueField": "litres",
    "titleField": "country",
    "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#FFFFFF",
        "fontSize": 16
    },
    "export": {
        "enabled": true
    }
});