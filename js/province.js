window.onload = function () {
    var url = "../json/areaAnHui.json";
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            var i,j;
            var dateList = new Array();
            var ip_num = new Array();
            var sp_num = new Array();
            var cure_num = new Array();
            var dead_num = new Array();
            var date = new Date(json.results[0].updateTime);
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var temp;
            dateList[0] = date.getFullYear() + "-" + month + "-" + currentDate;
            for(i = 0,j = 1; i < json.results.length; i++) {
                date = new Date(json.results[i].updateTime);
                month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                temp = date.getFullYear() + "-" + month + "-" + currentDate;
                if(temp != dateList[j-1]){
                    dateList[j] = date.getFullYear() + "-" + month + "-" + currentDate;
                    ip_num[j] = json.results[i].confirmedCount;
                    sp_num[j] = json.results[i].suspectedCount;
                    cure_num[j] = json.results[i].curedCount;
                    dead_num[j] = json.results[i].deadCount;
                    j++;
                } else {
                    ip_num[j-1] = json.results[i].confirmedCount;
                    sp_num[j-1] = json.results[i].suspectedCount;
                    cure_num[j-1] = json.results[i].curedCount;
                    dead_num[j-1] = json.results[i].deadCount;
                }
            }
            var dom = document.getElementById("province");
            var myChart = echarts.init(dom);

            var ip_incrs = new Array();
            ip_incrs[0] = 0;
            for(var i = 1; i < ip_num.length; i++){
                ip_incrs[i] = ip_num[i] - ip_num[i-1];
            }

            var sp_incrs = new Array();
            sp_incrs[0] = 0;
            for(var i = 1; i < sp_num.length; i++){
                sp_incrs[i] = sp_num[i] - sp_num[i-1];
            }

            var cure_incrs = new Array();
            cure_incrs[0] = 0;
            for(var i = 1; i < cure_num.length; i++){
                cure_incrs[i] = cure_num[i] - cure_num[i-1];
            }

            var dead_incrs = new Array();
            dead_incrs[0] = 0;
            for(var i = 1; i < ip_num.length; i++){
                dead_incrs[i] = dead_num[i] - dead_num[i-1];
            }

            option = {
                title: {
                    text: "新增趋势",
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


