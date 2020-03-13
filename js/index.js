var dom = document.getElementById("map");
var myChart = echarts.init(dom);
var app = {};
var json;

function getNum(Province) {
    var num
    $.ajax({
        url:"https://lab.isaaclin.cn/nCoV/api/area",
        async:false,
        type:"get",
        data:{
            "latest":"1",
            "province":Province,
        },
        dataType:"json",
        success:function (data) {
            num = data["results"][0]["confirmedCount"];
            /*console.log(data["results"][0]["confirmedCount"])*/
        },
        error:function () {
            alert(22)
        }
    })
    return num
}


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
                    value: getNum("湖北省"),
                    name: "湖北"
                },
                {
                    value: getNum("广东省"),
                    name: "广东"
                },
                {
                    value: 1,
                    name: "河南"
                },
                {
                    value: 1,
                    name: "浙江"
                },
                {
                    value: 1,
                    name: "湖南"
                },
                {
                    value: 1,
                    name: "安徽"
                },
                {
                    value: 1,
                    name: "江西"
                },
                {
                    value: 1,
                    name: "山东"
                },
                {
                    value: 1,
                    name: "江苏"
                },
                {
                    value: 1,
                    name: "重庆"
                },
                {
                    value: 1,
                    name: "四川"
                },
                {
                    value: 1,
                    name: "黑龙江"
                },
                {
                    value: 1,
                    name: "北京"
                },
                {
                    value: 1,
                    name: "上海"
                },
                {
                    value: 1,
                    name: "河北"
                },
                {
                    value: 1,
                    name: "福建"
                },
                {
                    value: 1,
                    name: "广西"
                },
                {
                    value: 1,
                    name: "陕西"
                },
                {
                    value: 1,
                    name: "云南"
                },
                {
                    value: 1,
                    name: "海南"
                },
                {
                    value: 1,
                    name: "贵州"
                },
                {
                    value: 1,
                    name: "天津"
                },
                {
                    value:1,
                    name: "山西"
                },
                {
                    value: 1,
                    name: "辽宁"
                },
                {
                    value: 1,
                    name: "吉林"
                },
                {
                    value: 1,
                    name: "甘肃"
                },
                {
                    value: 1,
                    name: "香港"
                },
                {
                    value: 1,
                    name: "新疆"
                },
                {
                    value: 1,
                    name: "内蒙古"
                },
                {
                    value: 1,
                    name: "宁夏"
                },
                {
                    value: 1,
                    name: "台湾"
                },
                {
                    value: 1,
                    name: "青海"
                },
                {
                    value: 1,
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
myChart.on('click',function (param) {
    window.location.href="../html/trend.html";
})
