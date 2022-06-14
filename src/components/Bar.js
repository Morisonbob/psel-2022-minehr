import React, { Component } from "react";
import Chart from "react-apexcharts";
import { FaFilter } from 'react-icons/fa'


class Bar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    width: "100%",
                    height: 350,
                    toolbar: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        tools: {
                            download: true,
                            selection: false,
                            zoom: false,
                            zoomin: false,
                            zoomout: false,
                            pan: false,
                            reset: false | '<img src="/static/icons/reset.png" width="20">',
                            customIcons: [
                                {
                                    icon: '<img src="https://img.icons8.com/external-others-inmotus-design/344/external-info-buttons-others-inmotus-design.png" width="20">',
                                    index: -1,
                                    title: 'Mais informações',
                                    class: 'custom-icon',
                                    click: function (e) {
                                        alert("Informações não disponíveis nesta versão!")
                                    }
                                }
                            ]
                        }
                    },
                },
                title: {
                    text: `Barras`,
                    align: 'left',
                    style: {
                        fontSize: '20px',
                        color: '#588'

                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                },
            },
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="100%"
                            height="350px"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;