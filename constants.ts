import { Project, ResumeData } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'library',
    num: 'B.Arch_05TH B_Proj01',
    title: { zh: '新区图书馆', en: 'New District Library' },
    subtitle: { zh: '知识灯塔与生态白莲的共生', en: 'Symbiosis of Knowledge Lighthouse and Ecological Lotus' },
    location: { zh: '中国，雄安', en: 'Xiongan, China' },
    year: '2020',
    category: { zh: 'A_BLDG 建筑设计 / 公共建筑', en: 'A_BLDG Architectural Design / Public' },
    logic: {
      challenge: { zh: '在雄安白洋淀滨水敏感区，如何平衡巨构建筑的标志性与自然生态的融合。', en: 'How to balance the iconicity of mega-structures with ecological integration in waterfront areas.' },
      idea: { zh: '采用“花瓣”仿生形态，体量顺应湖岸线展开。以“灯塔”为精神核心，通过垂直光束构建城市尺度上的文化指引。', en: 'Adopting bionic "petal" forms, the volume follows the shoreline. Using the "Lighthouse" as a spiritual core.' }
    },
    indicators: { zh: '用地面积：22000㎡ | 总建筑面积：17685㎡ | 建筑高度：18.9m | 容积率：0.8 | 绿化率：33% | 停车位：112位', en: 'Site Area: 22000sqm | GFA: 17685sqm | Height: 18.9m | FAR: 0.8 | Parking: 112' },
    tag: { zh: '建筑设计', en: 'Architectural Design' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj01-5.jpg'
    ]
  },
  {
    id: 'residential',
    num: 'B.Arch_04TH B_Proj02',
    title: { zh: '高层居住综合体', en: 'High-rise Residential Complex' },
    subtitle: { zh: '高密度社区的垂直公共生活重构', en: 'Reconstruction of Vertical Public Life in High-density Communities' },
    location: { zh: '广东，佛山', en: 'Foshan, Guangdong' },
    year: '2019',
    category: { zh: 'A_BLDG 建筑设计 / 综合体', en: 'A_BLDG Architectural Design / Complex' },
    logic: {
      challenge: { zh: '佛山老城人口高度密集，缺乏大尺度的文体活动空间。', en: 'Foshan\'s old town is densely populated and lacks large-scale cultural/sports spaces.' },
      idea: { zh: '将商业、文化、居住垂直堆叠。利用体块错动在不同高度创造空中庭院，并将东南侧池塘景观引入建筑内部。', en: 'Vertically stacking commerce, culture, and living. Creating sky gardens via block shifting.' }
    },
    indicators: { zh: '用地面积：9130㎡ | 总建筑面积：21470㎡ | 建筑高度：45m | 层数：9层 | 容积率：2.12 | 停车位：64位', en: 'Site Area: 9130sqm | GFA: 21470sqm | Height: 45m | Floors: 9 | FAR: 2.12 | Parking: 64' },
    tag: { zh: '建筑设计', en: 'Architectural Design' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj02-5.jpg'
    ]
  },
  {
    id: 'museum',
    num: 'B.Arch_03TH B_Proj01',
    title: { zh: '语言博物馆', en: 'Language Museum' },
    subtitle: { zh: '跨越泰晤士河的文化桥梁', en: 'Cultural Bridge across the River Thames' },
    location: { zh: '英国，伦敦', en: 'London, UK' },
    year: '2018',
    category: { zh: 'A_BLDG 建筑设计 / 博物馆', en: 'A_BLDG Architectural Design / Museum' },
    logic: {
      challenge: { zh: '在泰晤士河口工业遗存背景下，将抽象的“语言”概念转化为具体的建筑叙事。', en: 'Translating abstract "language" concepts into architectural narrative amidst industrial heritage.' },
      idea: { zh: '以“桥”为原型。通过贯通南北的视线通廊连接城市与海洋，参观流线伴随着与灯塔、航道的视觉对话。', en: 'Using "Bridge" as a prototype. Connecting city and sea via visual corridors.' }
    },
    indicators: { zh: '用地面积：2560㎡ | 总建筑面积：8200㎡ | 建筑高度：20.5m | 层数：3层 | 容积率：1.28', en: 'Site Area: 2560sqm | GFA: 8200sqm | Height: 20.5m | Floors: 3 | FAR: 1.28' },
    tag: { zh: '建筑设计', en: 'Architectural Design' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj03-5.jpg'
    ]
  },
  {
    id: 'heritage',
    num: 'M.E_02TH A_PTA0202',
    title: { zh: '傅老榕故居修缮', en: 'Fu Laorong Residence' },
    subtitle: { zh: '西关遗产的数字化重生与精细化微改造', en: 'Digital Rebirth and Refined Transformation of Xiguan Heritage' },
    location: { zh: '广东，广州', en: 'Guangzhou, Guangdong' },
    year: '2024',
    category: { zh: 'B_HERITAGE 城市更新与遗产保护', en: 'B_HERITAGE Urban Renewal & Heritage' },
    logic: {
      challenge: { zh: '面对多次非理性改建后的残损近代豪宅，如何恢复中西合璧的历史风貌。', en: 'Restoring historical appearance to a damaged modern mansion after irrational modifications.' },
      idea: { zh: '剥离加建红砖墙，还原西关大屋三边过轴线与西式券廊。通过数字化普查，对传统工艺进行分类修复。', en: 'Restoring Xiguan mansion axes and Western porticos. Using digital survey for craft restoration.' },
      coreValue: { zh: '作为“二代赌王”故居，不仅是物质遗产的修缮，更是对近代西关社会生活变迁的实物存证。', en: 'A physical record of social changes in modern Xiguan.' }
    },
    indicators: { zh: '荔湾历史文化街区 | 中西合璧风格 | 数字化测绘', en: 'Liwan Historic District | Hybrid Style | Digital Survey' },
    tag: { zh: '城市更新', en: 'Urban Renewal' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj04-5.jpg'
    ]
  },
  {
    id: 'factory',
    num: 'B.Arch_03TH B_Proj02',
    title: { zh: '旧厂房改造', en: 'Old Factory Renovation' },
    subtitle: { zh: '工业外壳下的学术绿洲', en: 'Academic Oasis under Industrial Shell' },
    location: { zh: '河北，石家庄', en: 'Shijiazhuang, Hebei' },
    year: '2018',
    category: { zh: 'B_HERITAGE 城市更新与遗产保护 / 活化利用', en: 'B_HERITAGE Urban Renewal / Adaptive Reuse' },
    logic: {
      challenge: { zh: '校园内废弃工业空间的职能转换与记忆留存。', en: 'Function conversion and memory retention of abandoned industrial spaces on campus.' },
      idea: { zh: '“留皮换骨”。保留大跨度工业外壳与钢结构，内部通过轻质分隔建立教师工作室。', en: '"Keep skin, change bone". Preserving the industrial shell and establishing studios inside.' }
    },
    indicators: { zh: '基底面积：1170㎡ | 总建筑面积：2200㎡ | 建筑高度：13.5m | 层数：4层 | 容积率：1.76', en: 'Footprint: 1170sqm | GFA: 2200sqm | Height: 13.5m | Floors: 4 | FAR: 1.76' },
    tag: { zh: '城市更新', en: 'Urban Renewal' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj05-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj05-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj05-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj05-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj05-4.jpg'
    ]
  },
  {
    id: 'marine',
    num: 'M.E_01TH B_Proj01',
    title: { zh: '未来海上城市', en: 'Future Marine City' },
    subtitle: { zh: '大湾区地理中心的‘逐浪’实验场', en: 'Experimental Field in the GBA Center' },
    location: { zh: '广东，广州', en: 'Guangzhou, Guangdong' },
    year: '2023',
    category: { zh: 'C_PLANNING 规划设计 / 海上城市', en: 'C_PLANNING Urban Planning / Marine City' },
    logic: {
      challenge: { zh: '应对海平面上升与高密度土地匮乏。', en: 'Addressing sea-level rise and lack of high-density land.' },
      idea: { zh: '融合疍民“逐浪而居”的文化基因。提出“逐浪计划 4.0”，构建由智械制造驱动、可灵活更新的模块化漂浮城市系统。', en: 'Integrating Tanka culture. Proposing "Wave Plan 4.0", a modular floating city system.' }
    },
    indicators: { zh: '大湾区中心水域 | 产城海融合 | 模块化更新', en: 'GBA Central Waters | Multi-sector integration | Modular Update' },
    tag: { zh: '规划设计', en: 'Planning' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj06-5.jpg'
    ]
  },
  {
    id: 'xiguan',
    num: 'B.Arch_03TH B_Res01',
    title: { zh: '近代广州西关民居谱系研究', en: 'Xiguan Houses Genealogy' },
    subtitle: { zh: '岭南住宅的演变逻辑', en: 'Evolution Logic of Lingnan Residential Architecture' },
    location: { zh: '广东，广州', en: 'Guangzhou, Guangdong' },
    year: '2025',
    category: { zh: 'D_RESEARCH 历史研究', en: 'D_RESEARCH Historical Research' },
    logic: {
      challenge: { zh: '理清岭南居住空间如何应对湿热气候、高密度环境与家族秩序。', en: 'Understanding Lingnan space adaptation to humid climate and density.' },
      idea: { zh: '建立从竹筒屋、西关大屋到骑楼住宅的完整演变图谱。揭示了天井、廊道等要素的基因传承。', en: 'Establishing evolution maps from Bamboo Houses to Arcade Houses.' },
      contribution: { zh: '通过数字化测绘，为广州老城的微改造提供了基于类型学的理论支持。', en: 'Providing typological support for Guangzhou old town micro-renovation.' }
    },
    indicators: { zh: '西关地区 | 数字化测绘 | 演变图谱', en: 'Xiguan Region | Digital Mapping | Evolution Atlas' },
    tag: { zh: '历史研究', en: 'Research' },
    coverImage: 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-1.jpg',
    images: [
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-1.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-2.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-3.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-4.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-5.jpg',
      'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/proj07-6.jpg'
    ]
  }
];

export const RESUME: ResumeData = {
  education: [
    {
      period: '2022 – 2025',
      title: { zh: '华南理工大学', en: 'South China University of Technology' },
      subtitle: { zh: '建筑历史与理论 硕士', en: 'M.Arch in Architectural History and Theory' },
      details: [
        { zh: '级别：双一流 A类 / 985 工程院校', en: 'Status: Double First Class / 985 Project University' },
        { zh: '主修课程：城市与建筑遗产保护、数字遗产、当代⻄方建筑理论、⻄方城市规划理论与实践、英语口语；', en: 'Major Courses: Heritage Conservation, Digital Heritage, Contemporary Western Theory, Urban Planning Theory, Oral English' }
      ]
    },
    {
      period: '2015 – 2020',
      title: { zh: '石家庄铁道大学', en: 'Shijiazhuang Tiedao University' },
      subtitle: { zh: '建筑学 本科 (五年制)', en: 'B.Arch in Architecture (5-year)' }
    }
  ],
  employment: [
    {
      period: '2024 – 2025',
      title: { zh: '广州市城市规划设计有限公司 | 名城规划所', en: 'Guangzhou Urban Planning & Design Survey Research Institute' },
      subtitle: { zh: '实习建筑师', en: 'Intern Architect' },
      location: '广州 (Guangzhou)',
      tag: '城市更新与遗产保护'
    },
    {
      period: '2024 – 2025',
      title: { zh: '广东省城乡规划设计研究院 | 城乡建设发展与遗产保护研究所', en: 'Guangdong Urban & Rural Planning and Design Institute' },
      subtitle: { zh: '实习规划师', en: 'Intern Planner' },
      location: '广州 (Guangzhou)',
      tag: '历史街区活化'
    },
    {
      period: '2024',
      title: { zh: '广东省生产力促进中心', en: 'Guangdong Productivity Center' },
      subtitle: { zh: '项目助理 (实习)', en: 'Project Assistant (Intern)' },
      location: '广州 (Guangzhou)',
      tag: '会务组织与协调'
    },
    {
      period: '2023 – 2024',
      title: { zh: '象城建筑规划设计 (广州) 有限公司', en: 'Xiangcheng Architecture & Planning Design Co., Ltd.' },
      subtitle: { zh: '实习建筑师', en: 'Intern Architect' },
      location: '广州 (Guangzhou)',
      tag: '建筑设计与遗产保护'
    },
    {
      period: '2022',
      title: { zh: '佛山市住房和城乡建设局 | 历史文化名城保护科', en: 'Foshan Housing and Urban-Rural Development Bureau' },
      subtitle: { zh: '驻场专员', en: 'Resident Specialist' },
      location: '佛山 (Foshan)',
      tag: '历史建筑认定与管理'
    },
    {
      period: '2021',
      title: { zh: '中合元创建筑设计股份有限公司', en: 'Zhonghe Yuanchuang Architecture Design Co., Ltd.' },
      subtitle: { zh: '助理建筑师', en: 'Assistant Architect' },
      location: '武汉 (Wuhan)',
      tag: '公共建筑设计'
    },
    {
      period: '2020 – 2021',
      title: { zh: '中国建筑土木建设有限公司 (中建八局)', en: 'China Construction Civil Engineering Co., Ltd. (CSCEC)' },
      subtitle: { zh: '助理工程师', en: 'Assistant Engineer' },
      location: '北京/佛山 (Beijing/Foshan)',
      tag: '工程现场管理'
    }
  ],
  projects: [
    {
      period: '2025',
      title: { zh: '肇庆端州区城中村改造项目', en: 'Duanzhou Urban Village Renewal, Zhaoqing' },
      subtitle: { zh: '核心成员', en: 'Core Member' },
      details: [
        { zh: '政府对接与统筹：负责与政府部门进行多轮对接，推进项目申报审批流程。', en: 'Coordination: Handled government relations and approval processes.' },
        { zh: '经济测算：主导地块征拆补偿核算工作，制定详细的资金平衡方案。', en: 'Finance: Led compensation accounting and financial balance plans.' }
      ]
    },
    {
      period: '2025',
      title: { zh: '金华市历史资源普查与评估', en: 'Jinhua Historical Resource Survey' },
      subtitle: { zh: '项目负责人', en: 'Project Leader' },
      details: [
        { zh: '资源普查：统筹对十余处古村落及历史街区的深度普查，建立历史建筑信息数据库。', en: 'Survey: Coordinated village surveys and built databases.' },
        { zh: '价值评估：构建历史建筑评分体系，编制评分表与评估报告。', en: 'Evaluation: Built scoring systems and compiled reports.' }
      ]
    },
    {
      period: '2024',
      title: { zh: '德庆县惠积街-横街历史文化街区保护活化', en: 'Deqing Historic District Revitalization' },
      subtitle: { zh: '设计主创', en: 'Lead Designer' },
      details: [
        { zh: '方案策划：基于现场调研完成节点建筑的改造方案设计，强化街区历史风貌。', en: 'Planning: Designed building renovation schemes.' },
        { zh: '商务编制：编写项目策划书、实施方案及工程报价书。', en: 'Business: Authored project proposals and implementation plans.' }
      ]
    },
    {
      period: '2024',
      title: { zh: '华南理工大学历史建筑（小黄楼）修缮工程', en: 'SCUT Historic Building Restoration' },
      subtitle: { zh: '建筑设计', en: 'Architectural Design' },
      details: [
        { zh: '方案深化：负责修缮施工图的平面深化设计。', en: 'Deepening: Responsible for restoration construction drawings.' },
        { zh: '历史研究：梳理建筑历史演变脉络，为修缮策略提供理论与考据支持。', en: 'Research: Traced building evolution for theoretical support.' }
      ]
    },
    {
      period: '2024',
      title: { zh: '中建四局“建造博物馆”展陈设计', en: 'CSCEC 4th Bureau Construction Museum' },
      subtitle: { zh: '策展与设计', en: 'Curator & Designer' },
      details: [
        { zh: '展陈规划：参与展陈空间流线与布局设计，负责视觉设计。', en: 'Planning: Designed space circulation and visual assets.' },
        { zh: '大纲编制：撰写详细展陈大纲，梳理企业建造技术发展史。', en: 'Content: Authored exhibition outlines and technology history.' }
      ]
    },
    {
      period: '2023',
      title: { zh: '宝华十六甫东四巷16号（傅老榕故居）修缮', en: 'Fu Laorong Residence Restoration' },
      subtitle: { zh: '核心设计骨干', en: 'Core Design Specialist' },
      details: [
        { zh: '全过程参与：10余次现场勘察，整理分析影像资料，编制现状报告。', en: 'Process: 10+ site surveys, compiled status reports.' },
        { zh: '图纸绘制：完成测绘图、修缮施工图绘制及SU精细建模。', en: 'Drafting: Completed surveying/construction drawings and SU modeling.' },
        { zh: '历史考证：通过查阅文献完成历史研究报告，还原建筑原真性。', en: 'History: Completed research report through literature review.' }
      ]
    },
    {
      period: '2023',
      title: { zh: '侨城消防中队建筑方案设计', en: 'Qiaocheng Fire Station Design' },
      subtitle: { zh: '助理建筑师', en: 'Assistant Architect' },
      details: [
        { zh: '方案深化：协助主创深化建筑平面功能布局，优化流线组织。', en: 'Deepening: Assisted lead architect in deepening floor plans and optimizing circulation.' },
        { zh: '成果制作：负责关键节点汇报的分析图绘制与PPT制作。', en: 'Production: Responsible for analytical diagrams and PPT for key presentations.' }
      ]
    },
    {
      period: '2023',
      title: { zh: '南沙“未来海上城市”七校联合设计工作坊', en: 'Nansha Future Marine City Workshop' },
      subtitle: { zh: '设计组长', en: 'Design Group Leader' },
      details: [
        { zh: '调研汇报：深入龙穴岛进行实地调研与场地分析，主导汇报。', en: 'Survey: Led site analysis on Longxue Island and final reporting.' },
        { zh: '概念设计：提出适应海平面上升的策略，产出设计图纸。', en: 'Concept: Proposed sea-level rise adaptation strategies.' }
      ]
    },
    {
      period: '2022',
      title: { zh: '佛山市第二批历史建筑认定与保护', en: 'Foshan 2nd Batch Historic Building Identification' },
      subtitle: { zh: '项目骨干', en: 'Project Member' },
      details: [
        { zh: '全案推进：全程跟进73处历史建筑的认定、公示及公布。', en: 'Full Process: Tracked identification and announcement of 73 buildings.' },
        { zh: '评审组织：组织专家评审，编制200多页汇报资料并完成汇报。', en: 'Organization: Organized expert reviews and compiled 200+ pages of reports.' }
      ]
    },
    {
      period: '2022',
      title: { zh: '广州市荔湾区历史建筑普查', en: 'Liwan District Historic Building Survey' },
      subtitle: { zh: '普查员', en: 'Surveyor' },
      details: [
        { zh: '田野调查：对历史建筑进行摸查，编制完成100多份档案表。', en: 'Fieldwork: Conducted on-site surveys and compiled 100+ files.' }
      ]
    },
    {
      period: '2022',
      title: { zh: '佛山市古村落活化利用评估', en: 'Foshan Ancient Village Revitalization Assessment' },
      subtitle: { zh: '研究员', en: 'Researcher' },
      details: [
        { zh: '名录整理：系统梳理佛山300多处遗产名录，建立数字化台账。', en: 'Inventory: Systematically organized 300+ heritage lists.' },
        { zh: '成效评估：实地调研30余处古村落，编写研究报告。', en: 'Assessment: Field-surveyed 30+ villages and authored reports.' }
      ]
    },
    {
      period: '2021',
      title: { zh: '吴川市图书馆、文化馆改扩建工程', en: 'Wuchuan Library & Cultural Center Expansion' },
      subtitle: { zh: '建筑设计', en: 'Architectural Design' },
      details: [
        { zh: '适应性改造：基于仿古建筑群进行功能置换（10,945㎡）。', en: 'Renovation: Functional replacement of traditional building groups (10,945 sqm).' },
        { zh: '方案设计：重构空间满足现代公共文化服务需求。', en: 'Design: Reconstructed space for modern cultural service needs.' }
      ]
    },
    {
      period: '2020',
      title: { zh: '佛山市塘西大道三期南延线工程', en: 'Foshan Tangxi Avenue Phase III Extension' },
      subtitle: { zh: '现场管理', en: 'On-site Management' },
      details: [
        { zh: '施工管理：负责巡查、内业资料管理及组织安全教育。', en: 'Management: Responsible for inspections, documentation, and safety education.' }
      ]
    },
    {
      period: '2019',
      title: { zh: '宏村古村落物质空间形态研究', en: 'Hongcun Ancient Village Spatial Form Research' },
      subtitle: { zh: '课题研究', en: 'Subject Research' },
      details: [
        { zh: '形态分析：从空间句法角度分析古村落形态特征，形成报告。', en: 'Analysis: Analyzed village form using space syntax and produced report.' }
      ]
    }
  ],
  activities: [
    {
      period: '2024',
      title: { zh: '数字支教 (组长)', en: 'Digital Teaching (Leader)' },
      details: [{ zh: '参与乡村教育创新项目，服务云南爱华小学，累计19课时。', en: 'Volunteered for rural education in Yunnan, 19 hours.' }]
    },
    {
      period: '2017',
      title: { zh: '青年志愿者协会 (部长)', en: 'Youth Volunteer Association (Head)' },
      details: [{ zh: '组织环保设计大赛、爱心衣物捐赠等活动。获优秀志愿者称号。', en: 'Organized environmental design contests and charity events.' }]
    }
  ],
  awardsAndSkills: {
    honors: [
      { zh: '2021 | 米兰设计周 · 中国高校设计学科师生优秀作品展 三等奖', en: '2021 | 3rd Prize, Milan Design Week Excellence Exhibition' },
      { zh: '2017 | 建筑学院 优秀志愿者/优秀个人', en: '2017 | Outstanding Volunteer, School of Architecture' },
      { zh: '2016 | “蔚蓝而生”环保公益海报设计大赛 三等奖', en: '2016 | 3rd Prize, "Born for Blue" Poster Contest' }
    ],
    certs: [
      { zh: '全国 BIM 技能等级考试一级证书 (2020)', en: 'National BIM Level 1 Certificate (2020)' },
      { zh: '大学英语六级 CET-6 (492分)', en: 'College English Test Level 6 (492)' }
    ],
    software: [
      { category: { zh: 'BIM 与参数化建模', en: 'BIM & Parametric' }, tools: 'Revit, Rhino, SketchUp' },
      { category: { zh: '二维绘图与地理分析', en: 'Drafting & GIS' }, tools: 'AutoCAD, GIS (ArcGIS)' },
      { category: { zh: '平面视觉与排版设计', en: 'Graphic & Layout' }, tools: 'Photoshop, Illustrator, InDesign' },
      { category: { zh: '办公协作', en: 'Office' }, tools: 'Microsoft Office Suite' }
    ]
  },
  press: [
    { zh: '李翔，近代广州西关民居 “厅”的演变研究［D］.华南理工大学，2025.', en: 'Li Xiang, Study on the Evolution of Halls in Modern Xiguan Houses [D]. SCUT, 2025.' },
    { zh: '徐好好，李翔.阿那亚北岸社区体育中心未实施方案评析［J］.时代建筑，2025，（4）：87-92.', en: 'Xu Haohao, Li Xiang. Analysis of Unimplemented Schemes for Aranya North Shore Sports Center [J]. Time+Architecture, 2025.' }
  ]
};