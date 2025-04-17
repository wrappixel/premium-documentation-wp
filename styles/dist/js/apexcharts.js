document.addEventListener("DOMContentLoaded", function () {

  // lineChart
  var options_line = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      fontFamily: "inherit",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["var(--bs-primary)"],
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      borderColor: "transparent",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#chart-line-basic"),
    options_line
  );
  chart_line_basic.render();


  // lineAreaChart
  var options_area = {
    series: [
      {
        name: "STOCK ABC",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 31.85],
          [1328482800000, 31.86],
          [1328569200000, 32.28],
          [1328655600000, 32.1],
          [1328742000000, 32.65],
          [1328828400000, 32.21],
          [1329087600000, 32.35],
          [1329174000000, 32.44],
          [1329260400000, 32.46],
          [1329346800000, 32.86],
          [1329433200000, 32.75],
          [1329778800000, 32.54],
          [1329865200000, 32.33],
          [1329951600000, 32.97],
          [1330038000000, 33.41],
          [1330297200000, 33.27],
          [1330383600000, 33.27],
          [1330470000000, 32.89],
          [1330556400000, 33.1],
          [1330642800000, 33.73],
          [1330902000000, 33.22],
          [1330988400000, 31.99],
          [1331074800000, 32.41],
          [1331161200000, 33.05],
          [1331247600000, 33.64],
          [1331506800000, 33.56],
          [1331593200000, 34.22],
          [1331679600000, 33.77],
          [1331766000000, 34.17],
          [1331852400000, 33.82],
          [1332111600000, 34.51],
          [1332198000000, 33.16],
          [1332284400000, 33.56],
          [1332370800000, 33.71],
          [1332457200000, 33.81],
          [1332712800000, 34.4],
          [1332799200000, 34.63],
          [1332885600000, 34.46],
          [1332972000000, 34.48],
          [1333058400000, 34.31],
          [1333317600000, 34.7],
          [1333404000000, 34.31],
          [1333490400000, 33.46],
          [1333576800000, 33.59],
          [1333922400000, 33.22],
          [1334008800000, 32.61],
          [1334095200000, 33.01],
          [1334181600000, 33.55],
          [1334268000000, 33.18],
          [1334527200000, 32.84],
          [1334613600000, 33.84],
          [1334700000000, 33.39],
          [1334786400000, 32.91],
          [1334872800000, 33.06],
          [1335132000000, 32.62],
          [1335218400000, 32.4],
          [1335304800000, 33.13],
          [1335391200000, 33.26],
          [1335477600000, 33.58],
          [1335736800000, 33.55],
          [1335823200000, 33.77],
          [1335909600000, 33.76],
          [1335996000000, 33.32],
          [1336082400000, 32.61],
          [1336341600000, 32.52],
          [1336428000000, 32.67],
          [1336514400000, 32.52],
          [1336600800000, 31.92],
          [1336687200000, 32.2],
          [1336946400000, 32.23],
          [1337032800000, 32.33],
          [1337119200000, 32.36],
          [1337205600000, 32.01],
          [1337292000000, 31.31],
          [1337551200000, 32.01],
          [1337637600000, 32.01],
          [1337724000000, 32.18],
          [1337810400000, 31.54],
          [1337896800000, 31.6],
          [1338242400000, 32.05],
          [1338328800000, 31.29],
          [1338415200000, 31.05],
          [1338501600000, 29.82],
          [1338760800000, 30.31],
          [1338847200000, 30.7],
          [1338933600000, 31.69],
          [1339020000000, 31.32],
          [1339106400000, 31.65],
          [1339365600000, 31.13],
          [1339452000000, 31.77],
          [1339538400000, 31.79],
          [1339624800000, 31.67],
          [1339711200000, 32.39],
          [1339970400000, 32.63],
          [1340056800000, 32.89],
          [1340143200000, 31.99],
          [1340229600000, 31.23],
          [1340316000000, 31.57],
          [1340575200000, 30.84],
          [1340661600000, 31.07],
          [1340748000000, 31.41],
          [1340834400000, 31.17],
          [1340920800000, 32.37],
          [1341180000000, 32.19],
          [1341266400000, 32.51],
          [1341439200000, 32.53],
          [1341525600000, 31.37],
          [1341784800000, 30.43],
          [1341871200000, 30.44],
          [1341957600000, 30.2],
          [1342044000000, 30.14],
          [1342130400000, 30.65],
          [1342389600000, 30.4],
          [1342476000000, 30.65],
          [1342562400000, 31.43],
          [1342648800000, 31.89],
          [1342735200000, 31.38],
          [1342994400000, 30.64],
          [1343080800000, 30.02],
          [1343167200000, 30.33],
          [1343253600000, 30.95],
          [1343340000000, 31.89],
          [1343599200000, 31.01],
          [1343685600000, 30.88],
          [1343772000000, 30.69],
          [1343858400000, 30.58],
          [1343944800000, 32.02],
          [1344204000000, 32.14],
          [1344290400000, 32.37],
          [1344376800000, 32.51],
          [1344463200000, 32.65],
          [1344549600000, 32.64],
          [1344808800000, 32.27],
          [1344895200000, 32.1],
          [1344981600000, 32.91],
          [1345068000000, 33.65],
          [1345154400000, 33.8],
          [1345413600000, 33.92],
          [1345500000000, 33.75],
          [1345586400000, 33.84],
          [1345672800000, 33.5],
          [1345759200000, 32.26],
          [1346018400000, 32.32],
          [1346104800000, 32.06],
        ],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#615dff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  var chart_area_basic = new ApexCharts(
    document.querySelector("#chart-area-basic"),
    options_area
  );
  chart_area_basic.render();



  // barChart
  var options_basic = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "transparent",
    },
    colors: ["var(--bs-primary)"],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_bar_basic = new ApexCharts(
    document.querySelector("#chart-bar-basic"),
    options_basic
  );
  chart_bar_basic.render();


  // bar 2
  var options_basic = {
    series: [
      {
        name: "",
        data: [25, 10, 15, 20, 15, 30, 25, 10, 15, 20, 15, 25],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 260,
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    colors: [
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
      "var(--bs-primary-bg-subtle)",
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [["Jan"], ["Feb"], ["Mar"], ["Apr"], ["May"], ["Jun"], ["Jul"], ["Aug"], ["Sep"], ["Oct"], ["Nov"], ["Dec"]],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart-bar-basic2"), options_basic);
  chart.render();



  // pie
  var options_simple = {
    series: [44, 55, 13, 43, 22],
    chart: {
      fontFamily: "inherit",
      width: 380,
      type: "pie",
    },
    colors: [
      "var(--bs-primary)",
      "var(--bs-secondary)",
      "#ffae1f",
      "#fa896b",
      "#39b69a",
    ],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      labels: {
        colors: ["#a1aab2"],
      },
    },
  };

  var chart_pie_simple = new ApexCharts(
    document.querySelector("#chart-pie-simple"),
    options_simple
  );
  chart_pie_simple.render();




  // radialBar
  var options_basic = {
    series: [70],
    chart: {
      fontFamily: "inherit",
      height: 350,
      type: "radialBar",
    },
    colors: ["#615dff"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          value: {
            color: "#a1aab2",
            show: true,
          },
        },
      },
    },
    labels: ["Cricket"],
  };

  var chart_radial_basic = new ApexCharts(
    document.querySelector("#chart-radial-basic"),
    options_basic
  );
  chart_radial_basic.render();



  // radar
  var options_basic = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    chart: {
      fontFamily: "inherit",
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#615dff"],
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_radar_basic = new ApexCharts(
    document.querySelector("#chart-radar-basic"),
    options_basic
  );
  chart_radar_basic.render();


});
