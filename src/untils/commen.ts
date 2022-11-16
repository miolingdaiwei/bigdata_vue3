const colorList = [
  "#CF4645",
  "#B580B2",
  "#29008A",
  "#146A90",
  "#8956FF",
  "#70C9A8",
  "#bfbfbf",
  "#595959",
  "#40a9ff",
  "#1890ff",
  "#ffd666",
  "#ffc53d",
  "#ffc53d",
  "#ffc069",
  "#ffa940",
  "#fa8c16",
  "#eccbd9",
  "#ffadad",
  "#ff6392",
  "#ffc09f",
  "#ffcb77",
  "#ffe066",
  "#ffd53e",
  "#ffda3d",
  "#adf7b6",
  "#a0e8af",
  "#80ed99",
  "#07beb8",
  "#17c3b2",
  "#48cae4",
  "#97d2fb",
  "#83bcff",
  "#91e5f6",
  "#9381ff",
];
const colorListLen = colorList.length;
const fontSizeList = [
  12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
  19.5, 20, 20.5, 21, 22, 23, 24,
];
const fontSizeListLen = fontSizeList.length;
const customLabel = {
  color: colorList[Math.floor(Math.random() * colorListLen)],
  fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
};
const bgColor = "#fffcf9";
const canDraggable = false;
export const option = {
  backgroundColor: "#fffcf9",
  color: ["#37A2DA", "#32C5E9", "#67E0E3"],
  title: {
    show: false,
    text: "一天的时间流逝",
    x: "center",
    y: "bottom",
    // 文字的颜色,默认 #333。
    color: "#666",
    fontSize: 24,
  },
  toolbox: {
    show: true,
    feature: {
      // dataView: {readOnly: false},
      // magicType: {type: ['line', 'bar']},
      restore: {},
      // saveAsImage: {}
    },
  },
  itemStyle: {
    color: bgColor,
  },
  series: [
    {
      type: "graph",
      layout: "force",
      force: {
        repulsion: 80,
        edgeLength: 10,
      },
      roam: "scale",
      // symbol: '',
      // symbolSize: 0,
      label: {
        show: true,
        color: "auto",
        fontSize: 14,
      },
      data: [
        {
          name: "听音乐",
          value: 2,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "看电影",
          value: 12,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "跑步",
          value: 22,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "瑜伽",
          value: 42,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "发呆",
          value: 52,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "阅读",
          value: 62,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "唱歌",
          value: 72,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "跳舞",
          value: 72,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "追星",
          value: 72,
          draggable: canDraggable,
          itemStyle: {
            color: bgColor,
          },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "看星星",
          value: 72,
          draggable: canDraggable,
          // itemStyle: {
          //     color: bgColor
          // },
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "看月亮",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "吃汉堡",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "做早餐",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "爬山",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "旅行",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "喝奶茶",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "买衣服",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "理财",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "洗衣服",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "收纳",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "早起",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "熬夜",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "追剧",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "逛街",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "敲代码",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "创作",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "做梦",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "悲伤",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
        {
          name: "开心",
          value: 72,
          draggable: canDraggable,
          label: {
            color: colorList[Math.floor(Math.random() * colorListLen)],
            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
          },
        },
      ],
    },
  ],
};
