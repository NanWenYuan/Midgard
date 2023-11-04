import type {GameItem} from "~/types";

export const MATERIAL_TABLE: Array<GameItem> = [
  {
    id: 3000001,
    name: "印着龙爪的信",
    pile: true,
    num: 1,
    dsc: [
      "信的内容：",
      "· 我是龙，世界上坠帅的龙。",
      "· 我把南文渊的简历撕碎了，把碎片扔到了世界各地。",
      "· 我还揍了他一顿，现在他失忆了，所以不能重新写一份简历出来。",
      "· 我真强，哈哈哈哈哈哈哈哈哈。",
      "· 想看简历吗，那就去找那些简历碎片吧，南文渊说集齐所有碎片就能让他想起来他是谁。",
      "· 但我觉得他永远都想不起来了，毕竟他看上去好傻。",
      "—— 世界上坠帅的龙"
    ]
  },
  {
    id: 3000002,
    name: "想作弊吗朋友",
    pile: true,
    num: 1,
    dsc: ["点击头像作弊可获得所有简历碎片", "提示：某个天梯游戏的作弊码"],
    img: ["/images/Something for nothing.png"]
  },
  {
    id: 3000003,
    name: "关于",
    pile: true,
    num: 1,
    dsc: [
      "· 技术栈：Vue 3 + Vite + Pinia + Typescript + UnoCSS",
      "· 代码托管地址：github.com/Renovamen/midgard"
    ],
    link: {
      text: "点击物品查看源码",
      url: "https://github.com/Renovamen/midgard"
    }
  }
];

const BASE_RESUME_ITEMS_TABLE: Array<GameItem> = [
  {
    id: 3000004,
    name: "基本个人信息",
    equipType: 0,
    equip: {
      changeHp: -60
    },
    dsc: [
      "姓名：南文渊",
      "邮箱：work.nan@outlook.com",
      "Github：Nan-WenYuan",
    ]
  },
  {
    id: 3000005,
    name: "教育经历",
    equipType: 1,
    equip: {
      changeHp: -85
    },
    dsc: [
      "· 天津电子信息，软件工程 （2018.09 - 2021.07）"
    ]
  },
  {
    id: 3000006,
    name: "工作",
    equipType: 2,
    equip: {
      changeHp: -180
    },
    dsc: [
      "展厅类Unity项目开发",
      "· 2022.02 - 2023.11：Unity软件开发，山西天行创意科技有限公司",
    ]
  },
  {
    id: 3000007,
    name: "智能车",
    equipType: 3,
    equip: {
      changeHp: 50
    },
    dsc: [
      "使用技术：C++，Python，Raspberry PI，Arduino\n" +
      "项目功能：遥控运动，循迹，智能避障\n" +
      "负责部分：运动模块开发和架构设计\n" +
      "项目地址：github.com/Hilbertnan/AICar_ING_2019"
    ]
  },
  {
    id: 3000008,
    name: "传感器测速",
    equipType: 4,
    equip: {
      changeHp: -60
    },
    dsc: [
      "Flint - 使用 Numpy 手写深度学习框架：",
      "\xa0· 使用纯 Numpy 实现了自动微分引擎（支持 19 种操作）",
      "\xa0· 实现了线性、卷积、池化、Unfold、Flatten、Dropout 和 BatchNorm 层，6 种优化器，4 种损失函数，5 种激活函数，5 种初始化器和数据加载模块",
      "\xa0· 编写了详细的文档和全面的单元测试用例"
    ],
    link: {
      text: "点击物品查看代码",
      url: "https://github.com/Renovamen/flint"
    }
  },
  {
    id: 3000009,
    name: "核心课程",
    equipType: 5,
    equip: {
      changeHp: -75
    },
    dsc: [
      "机器学习",
      "图像与视频计算",
      "密码学",
      "概率论",
      "线性代数",
      "高等数学",
      "数据结构",
      "算法设计与分析",
      "数据库原理与应用",
      "操作系统",
      "编译原理",
      "分布式计算",
      "... 等"
    ]
  },
  {
    id: 3000010,
    name: "技能树",
    equipType: 6,
    equip: {
      changeHp: -90
    },
    dsc: [
      "· 编程语言：Python、JavaScript/TypeScript、HTML/CSS、Java、C/C++、C#",
      "· 语言：中文（母语）",
      "· 软件工具与框架： Git、PyTorch、Keras、Linux、Vue、React、Django、LaTeX",
      ". 硬件开发板与模块：Raspberry Pi，Arduino"
    ]
  },
  {
    id: 3000011,
    name: "兴趣",
    equipType: 7,
    equip: {
      changeHp: 60
    },
    dsc: [
      "· 研究兴趣：游戏开发、机器学习",
      "· 其他兴趣：游戏、吃、睡、猫、狗"
    ]
  },
  {
    id: 3000012,
    name: "其他经历",
    equipType: 8,
    equip: {
      changeHp: 40
    },
    dsc: [
      "1. 2018.09 - 2021.07：天津电子信息，校级科技类社团人工智能学社，社长",
    ]
  }
];

const generateResumeItems = (items: Array<GameItem>) => {
  const allItems = [] as Array<GameItem>;

  for (let grade = 0; grade <= 3; grade++) {
    items.forEach((item) => {
      const changeHp = item.equip?.changeHp || 0;

      allItems.push({
        id: item.id + 14 * grade,
        name: item.name,
        grade,
        equipType: item.equipType,
        equip: {
          changeHp:
            changeHp > 0
              ? changeHp + 10 * grade
              : Math.round(changeHp - grade * 0.2 * changeHp)
        },
        dsc: item.dsc,
        link: item.link
      });
    });
  }

  return allItems;
};

export const RESUME_ITEMS_TABLE = generateResumeItems(BASE_RESUME_ITEMS_TABLE);

export const ITEM_TABLE = MATERIAL_TABLE.concat(RESUME_ITEMS_TABLE);
