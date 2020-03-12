// JavaScript source code
<script>
	  var dom = document.getElementById("map");
	  var myChart = echarts.init(dom);
	  var app = {};
	  option = null;
	  option = {
			title: {
			  text: "疫情地图",
			  subtext: "纯属虚构",
			  x: "center"
			},
			tooltip: {
			  trigger: "item"
			},
			legend: {
			  orient: "vertical",
			  x: "left",
			  data: ["累计确诊"],
			  selectedMode: false
			},
			dataRange: {
			  min: 0,
			  max: 1200,
			  x: "left",
			  y: "bottom",
			  text: ["高", "低"],
			  calculable: true,
			  color: ["rgb(188, 56, 89)", "rgb(221, 186, 197)"],
			  splitNumber: 24
			},
			toolbox: {
			  show: true,
			  orient: "vertical",
			  x: "right",
			  y: "bottom",
			  feature: {
				mark: {
				  show: true
				},
				dataView: {
				  show: true,
				  readOnly: false
				},
				restore: {
				  show: true
				},
				saveAsImage: {
				  show: true
				}
			  }
			},
			roamController: {
			  show: true,
			  x: "right",
			  mapTypeControl: {
				china: true
			  }
			},
			series: [
			  {
				name: "累计确诊",
				type: "map",
				mapType: "china",
				roam: false,
				mapValueCalculation: "sum",
				itemStyle: {
				  normal: {
					label: {
					  show: true
					}
				  },
				  emphasis: {
					label: {
					  show: true
					}
				  }
				},
				data: [
				  {
					value: 64786,
					name: "湖北"
				  },
				  {
					value: 1347,
					name: "广东"
				  },
				  {
					value: 1271,
					name: "河南"
				  },
				  {
					value: 1205,
					name: "浙江"
				  },
				  {
					value: 1016,
					name: "湖南"
				  },
				  {
					value: 989,
					name: "安徽"
				  },
				  {
					value: 934,
					name: "江西"
				  },
				  {
					value: 754,
					name: "山东"
				  },
				  {
					value: 631,
					name: "江苏"
				  },
				  {
					value: 576,
					name: "重庆"
				  },
				  {
					value: 529,
					name: "四川"
				  },
				  {
					value: 480,
					name: "黑龙江"
				  },
				  {
					value: 400,
					name: "北京"
				  },
				  {
					value: 336,
					name: "上海"
				  },
				  {
					value: 311,
					name: "河北"
				  },
				  {
					value: 294,
					name: "福建"
				  },
				  {
					value: 252,
					name: "广西"
				  },
				  {
					value: 245,
					name: "陕西"
				  },
				  {
					value: 174,
					name: "云南"
				  },
				  {
					value: 168,
					name: "海南"
				  },
				  {
					value: 146,
					name: "贵州"
				  },
				  {
					value: 135,
					name: "天津"
				  },
				  {
					value: 133,
					name: "山西"
				  },
				  {
					value: 121,
					name: "辽宁"
				  },
				  {
					value: 93,
					name: "吉林"
				  },
				  {
					value: 91,
					name: "甘肃"
				  },
				  {
					value: 81,
					name: "香港"
				  },
				  {
					value: 76,
					name: "新疆"
				  },
				  {
					value: 75,
					name: "内蒙古"
				  },
				  {
					value: 71,
					name: "宁夏"
				  },
				  {
					value: 30,
					name: "台湾"
				  },
				  {
					value: 18,
					name: "青海"
				  },
				  {
					value: 10,
					name: "澳门"
				  },
				  {
					value: 1,
					name: "西藏"
				  }
				]
			  }
			]
		  };;
	  if (option && typeof option === "object") {
		myChart.setOption(option, true);
	  }
</script>