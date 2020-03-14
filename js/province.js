window.onload = function () {
    var string = location.search; //获取url中"?"符后的字串
    var province = decodeURI(string).replace("?","");
    var url;

    switch (province) { //根据得到的字符串，选择对应的json文件
        case "安徽":
            url = "../json/areaAnHui.json";
            break;
        case "澳门":
            url = "../json/areaAoMen.json";
            break;
        case "北京":
            url = "../json/areaBeiJing.json";
            break;
        case "重庆":
            url = "../json/areaChongQing.json";
            break;
        case "福建":
            url = "../json/areaFuJian.json";
            break;
        case "甘肃":
            url = "../json/areaGanSu.json";
            break;
        case "广东":
            url = "../json/areaGuangDong.json";
            break;
        case "广西":
            url = "../json/areaGuangXi.json";
            break;
        case "贵州":
            url = "../json/areaGuiZhou.json";
            break;
        case "海南":
            url = "../json/areaHaiNan.json";
            break;
        case "河北":
            url = "../json/areaHeBei.json";
            break;
        case "黑龙江":
            url = "../json/areaHeiLongJiang.json";
            break;
        case "河南":
            url = "../json/areaHeNan.json";
            break;
        case "湖北":
            url = "../json/areaHuBei.json";
            break;
        case "湖南":
            url = "../json/areaHuNan.json";
            break;
        case "江苏":
            url = "../json/areaJiangSu.json";
            break;
        case "江西":
            url = "../json/areaJiangXi.json";
            break;
        case "吉林":
            url = "../json/areaJiLin.json";
            break;
        case "辽宁":
            url = "../json/areaLiaoNing.json";
            break;
        case "内蒙古":
            url = "../json/areaNeiMengGu.json";
            break;
        case "宁夏":
            url = "../json/areaNingXia.json";
            break;
        case "青海":
            url = "../json/areaQingHai.json";
            break;
        case "陕西":
            url = "../json/areaShan3Xi.json";
            break;
        case "山东":
            url = "../json/areaShanDong.json";
            break;
        case "山西":
            url = "../json/areaShanXi.json";
            break;
        case "四川":
            url = "../json/areaSiChuan.json";
            break;
        case "台湾":
            url = "../json/areaTaiWan.json";
            break;
        case "天津":
            url = "../json/areaTianJin.json";
            break;
        case "香港":
            url = "../json/areaXiangGang.json";
            break;
        case "新疆":
            url = "../json/areaXinJiang.json";
            break;
        case "西藏":
            url = "../json/areaQingHai.json";
            break;
        case "云南":
            url = "../json/areaYunNan.json";
            break;
        case "浙江":
            url = "../json/areaZheJiang.json";
            break;
    }

    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            var i,j;
            var dateList = new Array(); //时间
            var ip_num = new Array();   //累计确诊
            var sp_num = new Array();   //现有疑似
            var cure_num = new Array(); //累计治愈
            var dead_num = new Array(); //累计死亡
            /*
            将此类1545299299910时间格式转化为yyyy-mm-dd时间格式
             */
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
                if(temp != dateList[j-1]){ //如果该时间已经记录过
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

            var ip_incrs = new Array(); //（较昨日）新增确诊
            ip_incrs[0] = 0;
            for(var i = 1; i < ip_num.length; i++){
                ip_incrs[i] = ip_num[i] - ip_num[i-1]; //今日-昨日
            }

            var sp_incrs = new Array(); //（较昨日）新增疑似
            sp_incrs[0] = 0;
            for(var i = 1; i < sp_num.length; i++){
                sp_incrs[i] = sp_num[i] - sp_num[i-1]; //今日-昨日
            }

            var cure_incrs = new Array(); //（较昨日）新增治愈
            cure_incrs[0] = 0;
            for(var i = 1; i < cure_num.length; i++){
                cure_incrs[i] = cure_num[i] - cure_num[i-1]; //今日-昨日
            }

            var dead_incrs = new Array(); //（较昨日）新增死亡
            dead_incrs[0] = 0;
            for(var i = 1; i < ip_num.length; i++){
                dead_incrs[i] = dead_num[i] - dead_num[i-1]; //今日-昨日
            }

            option = {
                title: {
                    text: "新增趋势",
                    left: 'center',
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: { //图例
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
            //设置页面上各类型人数和新增人数的显示
            document.getElementById("ip_num").innerHTML = ip_num[ip_num.length-1];
            document.getElementById("sp_num").innerHTML = sp_num[sp_num.length-1];
            document.getElementById("cure_num").innerHTML = cure_num[cure_num.length-1];
            document.getElementById("dead_num").innerHTML = dead_num[dead_num.length-1];
            //使用新增数据的最后一项，即较昨日新增
            var ip_increase = ip_incrs[ip_incrs.length-1];
            var sp_increase = sp_incrs[sp_incrs.length-1];
            var cure_increase = cure_incrs[cure_incrs.length-1];
            var dead_increase = dead_incrs[dead_incrs.length-1];
            document.getElementById("ip_incrs").innerHTML = "较昨日" +
                (ip_increase > 0 ? "+" : "") + ip_increase;
            document.getElementById("sp_incrs").innerHTML = "较昨日" +
                (sp_increase > 0 ? "+" : "") + sp_increase;
            document.getElementById("cure_incrs").innerHTML = "较昨日" +
                (cure_increase > 0 ? "+" : "") + cure_increase;
            document.getElementById("dead_incrs").innerHTML = "较昨日" +
                (dead_increase > 0 ? "+" : "") + dead_increase;
            document.getElementById("province_name").innerHTML = province;

        }
    }
}

$(document).ready(function(){
    $("#confirm").click(function () {
        var date_limit = document.getElementById("date").value;
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
                /*
                将此类1545299299910时间格式转化为yyyy-mm-dd时间格式
                */
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
                    if(temp != dateList[j-1]){ //如果该时间已经记录过
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
                var dateList1 = new Array();
                for(i = 0; i < dateList.length; i++){
                    if(date_limit < dateList[i]) ////如果该日期超过选择日期
                        break;
                    dateList1[i] = dateList[i];
                }

                var dom = document.getElementById("province");
                var myChart = echarts.init(dom);

                var ip_incrs = new Array(); //（较昨日）新增确诊
                ip_incrs[0] = 0;
                for(var i = 1; i < dateList1.length; i++){ //使用限制时间下的时间数组长度
                    ip_incrs[i] = ip_num[i] - ip_num[i-1];
                }

                var sp_incrs = new Array(); //（较昨日）新增疑似
                sp_incrs[0] = 0;
                for(var i = 1; i < dateList1.length; i++){ //使用限制时间下的时间数组长度
                    sp_incrs[i] = sp_num[i] - sp_num[i-1];
                }

                var cure_incrs = new Array(); //（较昨日）新增治愈
                cure_incrs[0] = 0;
                for(var i = 1; i < dateList1.length; i++){ //使用限制时间下的时间数组长度
                    cure_incrs[i] = cure_num[i] - cure_num[i-1];
                }

                var dead_incrs = new Array(); //（较昨日）新增死亡
                dead_incrs[0] = 0;
                for(var i = 1; i < dateList1.length; i++){ //使用限制时间下的时间数组长度
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
                //设置页面上各类型人数和新增人数的显示
                document.getElementById("ip_num").innerHTML = ip_num[dateList1.length-1];
                document.getElementById("sp_num").innerHTML = sp_num[dateList1.length-1];
                document.getElementById("cure_num").innerHTML = cure_num[dateList1.length-1];
                document.getElementById("dead_num").innerHTML = dead_num[dateList1.length-1];
                //使用新增数据的最后一项，即较昨日新增
                var ip_increase = ip_incrs[ip_incrs.length-1];
                var sp_increase = sp_incrs[sp_incrs.length-1];
                var cure_increase = cure_incrs[cure_incrs.length-1];
                var dead_increase = dead_incrs[dead_incrs.length-1];
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


