var dom = document.getElementById("map");
var myChart = echarts.init(dom);
var app = {};
var json;

function fuc() {
    var list
    $.ajax({
        url:"https://lab.isaaclin.cn/nCoV/api/area",
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
            alert(读取失败)
        }
    })
    return list
}
function getNum (province) {
    var l = fuc()
    for (var i in l) {
        if (l[i]["provinceName"] == province) {
            return l[i]["confirmedCount"]
        }
    }
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
                    value: getNum("河南省"),
                    name: "河南"
                },
                {
                    value: getNum("浙江省"),
                    name: "浙江"
                },
                {
                    value: getNum("湖南省"),
                    name: "湖南"
                },
                {
                    value: getNum("安徽省"),
                    name: "安徽"
                },
                {
                    value: getNum("江西省"),
                    name: "江西"
                },
                {
                    value: getNum("山东省"),
                    name: "山东"
                },
                {
                    value: getNum("江苏省"),
                    name: "江苏"
                },
                {
                    value: getNum("重庆市"),
                    name: "重庆"
                },
                {
                    value: getNum("四川省"),
                    name: "四川"
                },
                {
                    value: getNum("黑龙江省"),
                    name: "黑龙江"
                },
                {
                    value: getNum("北京市"),
                    name: "北京"
                },
                {
                    value: getNum("上海市"),
                    name: "上海"
                },
                {
                    value: getNum("河北省"),
                    name: "河北"
                },
                {
                    value: getNum("福建省"),
                    name: "福建"
                },
                {
                    value: getNum("广西壮族自治区"),
                    name: "广西"
                },
                {
                    value: getNum("陕西省"),
                    name: "陕西"
                },
                {
                    value: getNum("云南省"),
                    name: "云南"
                },
                {
                    value: getNum("海南省"),
                    name: "海南"
                },
                {
                    value: getNum("贵州省"),
                    name: "贵州"
                },
                {
                    value: getNum("天津市"),
                    name: "天津"
                },
                {
                    value: getNum("山西省"),
                    name: "山西"
                },
                {
                    value: getNum("辽宁省"),
                    name: "辽宁"
                },
                {
                    value: getNum("吉林省"),
                    name: "吉林"
                },
                {
                    value: getNum("甘肃省"),
                    name: "甘肃"
                },
                {
                    value: getNum("香港"),
                    name: "香港"
                },
                {
                    value: getNum("新疆维吾尔自治区"),
                    name: "新疆"
                },
                {
                    value: getNum("内蒙古自治区"),
                    name: "内蒙古"
                },
                {
                    value: getNum("宁夏回族自治区"),
                    name: "宁夏"
                },
                {
                    value: getNum("台湾"),
                    name: "台湾"
                },
                {
                    value: getNum("青海省"),
                    name: "青海"
                },
                {
                    value: getNum("澳门"),
                    name: "澳门"
                },
                {
                    value: getNum("西藏自治区"),
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
