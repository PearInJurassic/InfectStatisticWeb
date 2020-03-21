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
            for (i = 0; i < json.results.length; i++) {
                dateList[i] = json.results[i].ds.split("\/")[2] + "-";
                if (json.results[i].ds.split("\/")[1].length == 1)
                    dateList[i] += "0" + json.results[i].ds.split("\/")[1] + "-";
                else
                    dateList[i] += json.results[i].ds.split("\/")[1] + "-";
                if (json.results[i].ds.split("\/")[0].length == 1)
                    dateList[i] += "0" + json.results[i].ds.split("\/")[0];
                else
                    dateList[i] += json.results[i].ds.split("\/")[0];
                ip_num[i] = json.results[i].confirm;
                ip_incrs[i] = json.results[i].confirm_add;
                sp_num[i] = json.results[i].suspect;
                sp_incrs[i] = json.results[i].suspect_add;
                cure_num[i] = json.results[i].heal;
                cure_incrs[i] = json.results[i].heal_add;
                dead_num[i] = json.results[i].dead;
                dead_incrs[i] = json.results[i].dead_add;
            }
            document.getElementById("ip_num").innerHTML = ip_num[ip_num.length-1];
            document.getElementById("sp_num").innerHTML = sp_num[sp_num.length-1];
            document.getElementById("cure_num").innerHTML = cure_num[cure_num.length-1];
            document.getElementById("dead_num").innerHTML = dead_num[dead_num.length-1];
            var ip_increase = ip_num[ip_num.length-1] - ip_num[ip_num.length-2];
            var sp_increase = sp_num[sp_num.length-1]- sp_num[sp_num.length-2];
            var cure_increase = cure_num[cure_num.length-1] - cure_num[cure_num.length-2];
            var dead_increase = dead_num[dead_num.length-1] - dead_num[dead_num.length-2];
            document.getElementById("ip_incrs").innerHTML = "较昨日" +
                (ip_increase > 0 ? "+" : "") + ip_increase;
            document.getElementById("sp_incrs").innerHTML = "较昨日" +
                (sp_increase > 0 ? "+" : "") + sp_increase;
            document.getElementById("cure_incrs").innerHTML = "较昨日" +
                (cure_increase > 0 ? "+" : "") + cure_increase;
            document.getElementById("dead_incrs").innerHTML = "较昨日" +
                (dead_increase > 0 ? "+" : "") + dead_increase;
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            document.getElementById("time").innerHTML = "更新于" + currentdate;
        }

    }
}


var dom = document.getElementById("map");
var myChart = echarts.init(dom);
var app = {};
var json;
var dataList = [];

function fuc() {
    var list
    $.ajax({
        url:"https://lab.ahusmart.com/nCoV/api/area",
        async:false,
        type:"get",
        data:{
            "latest":"1"
        },
        dataType:"json",
        success:function (data) {
            list = data["results"];
        },
        error:function () {
            alert("读取失败")
        }
    })
    return list
}

function f() {
    dataList = fuc().filter(r => {
        return r.country == "中国" && r.provinceName !="待明确地区"
    }).map(r => {
        return {
            name:r.provinceShortName,
            value:r.confirmedCount
        }
    })

}

f();
// console.log(dataList);

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
            data: dataList
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
myChart.on('click',function (param) {
    window.location.href="../html/province.html?" + param.name ;
})
