option = {
    "tooltip": {
        "trigger": "axis"
    },
    "grid": [],
    "toolbox": {
        "show": false
    },
    "xAxis": [],
    "yAxis": [
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 5,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 20,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 20,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "gridIndex": 0,
            "min": 0,
            "max": 35,
            "axisLabel": {
                "formatter": "{value} U/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 13,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 219,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 3,
            "axisLabel": {
                "formatter": "{value} IU/L"
            }
        },
        {
            "type": "value",
            "min": 0,
            "max": 7.5,
            "axisLabel": {
                "formatter": "{value} ng/ml"
            }
        }
    ],
    "series": [
        {
            "name": "CA19-9(糖链抗原19-9)",
            "type": "line",
            "data": [
                13.65,
                14.69,
                12.86,
                14.13,
                18.79,
                13.67,
                16.80
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CEA(癌胚抗原)",
            "type": "line",
            "data": [
                1.05,
                1.7,
                1.96,
                2.23,
                2.26,
                1.68,
                1.78
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 5,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA242(糖链抗原242)",
            "type": "line",
            "data": [
                5.22,
                6.48,
                6.01,
                5.98,
                6.75,
                6.99,
                7.07
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 20,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "AFP(甲胎蛋白)",
            "type": "line",
            "data": [
                0.79,
                0.47,
                1.06,
                1.95,
                2.80,
                2.64,
                2.29
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 20,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA125(糖链抗原125)",
            "type": "line",
            "data": [
                5.75,
                2.61,
                5.06,
                5.06,
                5.63,
                4.61,
                5.92
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "CA15-3(糖链抗原15-3)",
            "type": "line",
            "data": [
                17.46,
                10.36,
                11.14,
                16.45,
                18.61,
                20.68,
                12.41
            ],
            "yAxisIndex": [5],
            "markLine": {
                "data": [
                    {
                        "yAxis": 35,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "NSE(神经元烯醇化酶)",
            "type": "line",
            "data": [
                2.71,
                2.2,
                2.83,
                2.3,
                3.49,
                2.39,
                3.02
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 13,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "ferritin(铁蛋白)",
            "type": "line",
            "data": [
                36.02,
                8.86,
                34.55,
                46.08,
                35.63,
                50.81,
                57.17
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 219,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "beta-hCG(人绒毛膜促性腺激素)",
            "type": "line",
            "data": [
                0.18,
                0.1,
                0.07,
                0.36,
                0.47,
                0.48,
                0.44
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 3,
                        "name": "max"
                    }
                ]
            }
        },
        {
            "name": "hGH(生长激素)",
            "type": "line",
            "data": [
                0.11,
                0.18,
                0.94,
                0.52,
                1.11,
                2.72,
                0.57
            ],
            "markLine": {
                "data": [
                    {
                        "yAxis": 7.5,
                        "name": "max"
                    }
                ]
            }
        }
    ]
}

for (var i = 0; i < option.yAxis.length; i++) {
    option.yAxis[i].gridIndex = i;
    option.yAxis[i].splitNumber = 2;
    option.grid.push({
        left: i % 2 ? '55%' : '5%',
        top: (i - i % 2) / option.yAxis.length * 100 + 2 + '%',
        width: '40%',
        height: '18%'
    })
    option.xAxis.push({
        "type": "category",
        "boundaryGap": false,
        "gridIndex": i,
        show: i === option.yAxis.length - 1,
        "data": [
            "2016-2-4",
            "2016-3-30",
            "2016-6-7",
            "2016-8-4",
            "2016-10-13",
            "2016-12-13",
            "2017-02-13"
        ]
    })
    option.series[i].xAxisIndex = i;
    option.series[i].yAxisIndex = i;
}
