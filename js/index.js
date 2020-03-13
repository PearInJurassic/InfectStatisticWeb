var dom = document.getElementById("map");
var myChart = echarts.init(dom);
var app = {};
option = null;


data = [["2020-01-20",77,27,0,0],["2020-01-21",149,53,0,3],["2020-01-22",131,257,0,8],
		["2020-01-23",259,680,6,8],["2020-01-24",444,1118,3,16],["2020-01-25",688,1309,11,15],
		["2020-01-26",769,3806,2,24],["2020-01-27",1771,2077,9,26],["2020-01-28",1459,3248,43,26]/*,
		["2020-01-29",1737],["2020-01-30",1982],["2020-01-31",2102],
		["2020-02-01",2590],["2020-02-01",2590],["2020-02-02",2829],
		["2020-02-03",3235],["2020-02-04",3893],["2020-02-05",3697],
		["2020-02-06",3143],["2020-02-07",3401],["2020-02-08",2656],
		["2020-02-09",3062],["2020-02-10",2484],["2020-02-11",2022],
		["2020-02-12",15153],["2020-02-13",5093],["2020-02-14",2644],
		["2020-02-15",2009],["2020-02-16",2051],["2020-02-17",1891],
		["2020-02-18",1751],["2020-02-19",820],["2020-02-20",892],
		["2020-02-21",399],["2020-02-22",649],["2020-02-23",416],
		["2020-02-24",517],["2020-02-25",411],["2020-02-26",440],
		["2020-02-27",329],["2020-02-28",430],["2020-02-29",579],
		["2020-03-01",206],["2020-03-02",128],["2020-03-03",120],
		["2020-03-04",143],["2020-03-05",145],["2020-03-06",103],
		["2020-03-07",46],["2020-03-08",45],["2020-03-09",20],
		["2020-03-10",31],["2020-03-11",25],["2020-03-12",11]*/];

var dateList = data.map(function (item) {
    return item[0];
});
var ipValueList = data.map(function (item) {
    return item[1];
});
var spValueList = data.map(function (item) {
    return item[2];
});
var cureValueList = data.map(function (item) {
    return item[3];
});
var deadValueList = data.map(function (item) {
    return item[4];
});

option = {
	title: {
		text: "全国趋势",
		left: 'center',
	},
    tooltip: {
        trigger: 'axis',
    },
	legend: {
		name: ['新增感染','新增疑似','新增治愈','新增死亡'],
		right: 'right',
	},
    xAxis: {
        data: dateList,
        gridIndex: 1
    },
    yAxis: {
        splitLine: {show: false},
        gridIndex: 1
    },
    grid: [{
        bottom: '60%'
    }, {
        top: '20%'
    }],
    series: [{
		name: '新增感染',
        type: 'line',
        showSymbol: false,
        data: ipValueList,
		itemStyle: {  
				normal: {  
					color:'#ff0000',
					lineStyle:{  
						color:'#ff0000'  
					}  
				}  
		},  
		smooth: true
    }, {
		name: '新增疑似',
        type: 'line',
        showSymbol: false,
        data: spValueList,
		itemStyle: {  
				normal: {  
					color:'#0094ff',
					lineStyle:{  
						color:'#0094ff'  
					}  
				}  
			},  
		smooth: true
	}, {
		name: '新增治愈',
        type: 'line',
        showSymbol: false,
        data: cureValueList,
		itemStyle: {  
				normal: {  
					color:'#00ff21',
					lineStyle:{  
						color:'#00ff21'  
					}  
				}  
		},  
		smooth: true
	}, {
		name: '新增死亡',
        type: 'line',
        showSymbol: false,
        data: deadValueList,
		itemStyle: {  
				normal: {  
					color:'#808080',
					lineStyle:{  
						color:'#808080'  
					}  
				}  
		},  
		smooth:true
	}]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}