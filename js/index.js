// JavaScript source code
<script>
	  var dom = document.getElementById("map");
	  var myChart = echarts.init(dom);
	  var app = {};
	  option = null;
	  option = {
			title: {
			  text: "�����ͼ",
			  subtext: "�����鹹",
			  x: "center"
			},
			tooltip: {
			  trigger: "item"
			},
			legend: {
			  orient: "vertical",
			  x: "left",
			  data: ["�ۼ�ȷ��"],
			  selectedMode: false
			},
			dataRange: {
			  min: 0,
			  max: 1200,
			  x: "left",
			  y: "bottom",
			  text: ["��", "��"],
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
				name: "�ۼ�ȷ��",
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
					name: "����"
				  },
				  {
					value: 1347,
					name: "�㶫"
				  },
				  {
					value: 1271,
					name: "����"
				  },
				  {
					value: 1205,
					name: "�㽭"
				  },
				  {
					value: 1016,
					name: "����"
				  },
				  {
					value: 989,
					name: "����"
				  },
				  {
					value: 934,
					name: "����"
				  },
				  {
					value: 754,
					name: "ɽ��"
				  },
				  {
					value: 631,
					name: "����"
				  },
				  {
					value: 576,
					name: "����"
				  },
				  {
					value: 529,
					name: "�Ĵ�"
				  },
				  {
					value: 480,
					name: "������"
				  },
				  {
					value: 400,
					name: "����"
				  },
				  {
					value: 336,
					name: "�Ϻ�"
				  },
				  {
					value: 311,
					name: "�ӱ�"
				  },
				  {
					value: 294,
					name: "����"
				  },
				  {
					value: 252,
					name: "����"
				  },
				  {
					value: 245,
					name: "����"
				  },
				  {
					value: 174,
					name: "����"
				  },
				  {
					value: 168,
					name: "����"
				  },
				  {
					value: 146,
					name: "����"
				  },
				  {
					value: 135,
					name: "���"
				  },
				  {
					value: 133,
					name: "ɽ��"
				  },
				  {
					value: 121,
					name: "����"
				  },
				  {
					value: 93,
					name: "����"
				  },
				  {
					value: 91,
					name: "����"
				  },
				  {
					value: 81,
					name: "���"
				  },
				  {
					value: 76,
					name: "�½�"
				  },
				  {
					value: 75,
					name: "���ɹ�"
				  },
				  {
					value: 71,
					name: "����"
				  },
				  {
					value: 30,
					name: "̨��"
				  },
				  {
					value: 18,
					name: "�ຣ"
				  },
				  {
					value: 10,
					name: "����"
				  },
				  {
					value: 1,
					name: "����"
				  }
				]
			  }
			]
		  };;
	  if (option && typeof option === "object") {
		myChart.setOption(option, true);
	  }
</script>