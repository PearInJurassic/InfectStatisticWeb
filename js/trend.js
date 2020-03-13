window.onload = function () {
	var url = "../json/history.json";
	var request = new XMLHttpRequest();
	request.open("get", url);
	request.send(null);
	request.onload = function () {
		if (request.status == 200) {
			var json = JSON.parse(request.responseText);
			var i;
			var dateList = new Array();
			var ip_num = new Array();
			var ip_incrs = new Array();
			var sp_num = new Array();
			var sp_incrs = new Array();
			var cure_num = new Array();
			var cure_incrs = new Array();
			var dead_num = new Array();
			var dead_incrs = new Array();
			for(i = 0; i < json.results.length; i++) {
				dateList[i] = json.results[i].ds.split("\/")[2] + "-";
				if(json.results[i].ds.split("\/")[1].length == 1)
					dateList[i]	+= "0"+ json.results[i].ds.split("\/")[1] + "-";
				else
					dateList[i]	+= json.results[i].ds.split("\/")[1] + "-";
				if(json.results[i].ds.split("\/")[0].length == 1)
					dateList[i]	+= "0"+ json.results[i].ds.split("\/")[0];
				else
					dateList[i]	+= json.results[i].ds.split("\/")[0];
				ip_num[i] = json.results[i].confirm;
				ip_incrs[i] = json.results[i].confirm_add;
				sp_num[i] = json.results[i].suspect;
				sp_incrs[i] = json.results[i].suspect_add;
				cure_num[i] = json.results[i].heal;
				cure_incrs[i] = json.results[i].heal_add;
				dead_num[i] = json.results[i].dead;
				dead_incrs[i] = json.results[i].dead_add;
			}
			var dom = document.getElementById("trend");
			var myChart = echarts.init(dom);

			option = {
				title: {
					text: "全国新增趋势",
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
					data: ip_incrs,
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
					data: sp_incrs,
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
					data: cure_incrs,
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
					data: dead_incrs,
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
		}
	}
}

$(document).ready(function(){
	$("#confirm").click(function () {

		var date_limit = document.getElementById("date").value;
		var url = "../json/history.json";
		var request = new XMLHttpRequest();
		request.open("get", url);
		request.send(null);
		request.onload = function () {
			if (request.status == 200) {
				var json = JSON.parse(request.responseText);
				var i;
				var dateList1 = new Array();
				var ip_num = new Array();
				var ip_incrs = new Array();
				var sp_num = new Array();
				var sp_incrs = new Array();
				var cure_num = new Array();
				var cure_incrs = new Array();
				var dead_num = new Array();
				var dead_incrs = new Array();


				for(i = 0; i < json.results.length; i++) {
					var temp = json.results[i].ds.split("\/")[2] + "-"
						+ json.results[i].ds.split("\/")[1] + "-"
						+ json.results[i].ds.split("\/")[0];
					if(data_limit < temp) {
						break;
					}
					dateList1[0] = temp;
					ip_num[i] = json.results[i].confirm;
					ip_incrs[i] = json.results[i].confirm_add;
					sp_num[i] = json.results[i].suspect;
					sp_incrs[i] = json.results[i].suspect_add;
					cure_num[i] = json.results[i].heal;
					cure_incrs[i] = json.results[i].heal_add;
					dead_num[i] = json.results[i].dead;
					dead_incrs[i] = json.results[i].dead_add;
				}
				var dom = document.getElementById("trend");
				var myChart = echarts.init(dom);

				option = {
					title: {
						text: "全国新增趋势",
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
						data: dateList1,
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
						data: ip_incrs,
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
						data: sp_incrs,
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
						data: cure_incrs,
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
						data: dead_incrs,
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
			}
		}
	})


})



