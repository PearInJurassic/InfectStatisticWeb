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
			document.getElementById("ip_num").innerHTML = ip_num[ip_num.length-1];
			document.getElementById("sp_num").innerHTML = sp_num[sp_num.length-1];
			document.getElementById("cure_num").innerHTML = cure_num[cure_num.length-1];
			document.getElementById("dead_num").innerHTML = dead_num[dead_num.length-1];
			var ip_increase = ip_incrs[ip_incrs.length-1] - ip_incrs[ip_incrs.length-2];
			var sp_increase = sp_incrs[sp_incrs.length-1]- sp_incrs[sp_incrs.length-2];
			var cure_increase = cure_incrs[cure_incrs.length-1] - cure_incrs[cure_incrs.length-2];
			var dead_increase = dead_incrs[dead_incrs.length-1] - dead_incrs[dead_incrs.length-2];
			document.getElementById("ip_incrs").innerHTML = "较昨日" +
				(ip_increase > 0 ? "+" : "") + ip_increase;
			document.getElementById("sp_incrs").innerHTML = "较昨日" +
				(sp_increase > 0 ? "+" : "") + sp_increase;
			document.getElementById("cure_incrs").innerHTML = "较昨日" +
				(cure_increase > 0 ? "+" : "") + cure_increase;
			document.getElementById("dead_incrs").innerHTML = "较昨日" +
				(dead_increase > 0 ? "+" : "") + dead_increase;
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
					var temp = json.results[i].ds.split("\/")[2] + "-";
					if(json.results[i].ds.split("\/")[1].length == 1)
						temp += "0"+ json.results[i].ds.split("\/")[1] + "-";
					else
						temp += json.results[i].ds.split("\/")[1] + "-";
					if(json.results[i].ds.split("\/")[0].length == 1)
						temp += "0"+ json.results[i].ds.split("\/")[0];
					else
						temp += json.results[i].ds.split("\/")[0];
					if(date_limit < temp) {
						break;
					}
					dateList1[i] = temp;
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
				var length = dateList1.length; //使用刚才记录时间的长度
				document.getElementById("ip_num").innerHTML = ip_num[dateList1.length-1];
				document.getElementById("sp_num").innerHTML = sp_num[dateList1.length-1];
				document.getElementById("cure_num").innerHTML = cure_num[dateList1.length-1];
				document.getElementById("dead_num").innerHTML = dead_num[dateList1.length-1];
				var ip_increase = ip_incrs[dateList1.length-1] - ip_incrs[dateList1.length-2];
				var sp_increase = sp_incrs[dateList1.length-1]- sp_incrs[dateList1.length-2];
				var cure_increase = cure_incrs[dateList1.length-1] - cure_incrs[dateList1.length-2];
				var dead_increase = dead_incrs[dateList1.length-1] - dead_incrs[dateList1.length-2];
				document.getElementById("ip_incrs").innerHTML = "较昨日" +
					(ip_increase > 0 ? "+" : "") + ip_increase;
				document.getElementById("sp_incrs").innerHTML = "较昨日" +
					(sp_increase > 0 ? "+" : "") + sp_increase;
				document.getElementById("cure_incrs").innerHTML = "较昨日" +
					(cure_increase > 0 ? "+" : "") + cure_increase;
				document.getElementById("dead_incrs").innerHTML = "较昨日" +
					(dead_increase > 0 ? "+" : "") + dead_increase;
			}
		}
	})


})



