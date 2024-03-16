const {
  Lunar
} = require('../utils/Lunar.js')
var current = Lunar.fromDate(new Date());
exports.yijiList = [
    {
      title:'婚姻',
      url:'../../images/svg/xin.svg',
      item:[{
        value: '男婚女嫁，举行结婚大典的吉日。',
        name: '嫁娶'
      },{
        value: '指男方入赘女方为婿之意。',
        name: '纳婿'
      },{
        value: '古时指缔结婚姻的仪式、收受聘礼，现在可用于合婚订婚。',
        name: '纳采'
      },{
        value: '指安置睡床卧铺的意思，也指新婚安放的床及重新安置旧床。安床后，要请生肖属龙的孩童在床上翻转，俗称翻床翻铺，为早生贵子的象征。',
        name: '安床'
      },{
        value: '缝制新郎新娘要用的蚊帐，安床与设帐通常合二为一，有时也并称安床设帐。',
        name: '合帐'
      },{
        value: '男方遣媒人到女家询问女方姓名，生辰八字。',
        name: '问名'
      },{
        value: '新婚后，新娘与新郎第一次回娘家的意思，也叫回门。',
        name: '归宁'
      },{
        value: '指的是定亲，结拜结盟兄弟之事，也是表示签下了一份协议一样，指订婚的意思',
        name: '订盟'
      },{
        value: '中国传统习俗中主要指婚前裁制新娘嫁衣，临近婚期前一个月，男方还要备酒、蓝布和金银钗环交给媒人送到女方家，谓之"裁衣"，另外还指剪裁丧事的寿衣。现代应用于买衣服。',
        name: '裁衣'
      }
    ]
    },
    {
      title: '工商',
      url:'../../images/svg/gongshang.svg',
      item: [{
        value: '公司、行号、商店开张营业，新春开工，节庆活动开幕仪式。',
        name: '开市'
      },{
        value: '指打开粮仓货仓，取粮，出货。',
        name: '开仓'
      },{
        value: '官吏去到某地担任职务。',
        name: '赴任'
      },{
        value: '指购置产业、进货、收账、收租、讨债、五谷入仓等。',
        name: '纳财'
      },{
        value: '商家之发货、出货、销货的意思。',
        name: '出货财'
      },{
        value: '签订合同，订立契约、签约同等商业、法律行为。',
        name: '立券'
      },{
        value: '是投资 买卖等交易之事,即订立各种契约互相买卖之事。',
        name: '交易'
      },{
        value: '购置产业，即购买一切私有物品和与其相应的实物，如田地、宅院、商铺、家具等。',
        name: '置产'
      },{
        value: '悬挂招牌或各种匾额的意思,包括公司的,也指古时府上的牌匾。',
        name: '挂匾'
      }
      ],
    },
    {
      title:'生活',
      url:'../../images/svg/shenghuo.svg',
      item:[{
        value: '与亲朋好友聚会交往',
        name: '会亲友'
      },{
        value: '出发去异地旅游、考察、公差等。',
        name: '出行'
      },{
        value: '指打扫屋内外清洁，消除厄运。',
        name: '扫舍'
      },{
        value: '古时指入学堂，现代可用于应聘中的报名，开学典礼。',
        name: '入学'
      },{
        value: '指初生婴儿第一次剃胎发或出家之落。现代可用于日常的理发、做发型。',
        name: '理发'
      },{
        value: '学艺，学新技术或新技能',
        name: '习艺'
      },{
        value: '指砍伐树木，修剪花木花枝。',
        name: '伐木'
      },{
        value: '指种植植物、接枝等农事。',
        name: '栽种'
      },{
        value: '就医，请大夫看病。',
        name: '求医'
      },{
        value: '看望病人的意思。',
        name: '探病'
      },{
        value: '指搬家，搬迁入二手房、租房。',
        name: '移徒'
      }
      ]
    },
    {
      title:'建筑',
      url:'../../images/svg/jianzhu.svg',
      item: [{
        value: '黄历中的入宅是迁入新宅的意思,所谓“新居落成典礼”也,特指搬入新房子而非二手房。入宅一般会举行庆祝活动,宴请亲朋好友祝贺新居落成。',
        name: '入宅'
      },{
        value: '指装盖房屋的屋顶等工作的意思。',
        name: '盖屋'
      },{
        value: '黄历中的开渠是指开通河道或水沟的意思,开沟、挖渠之事。',
        name: '开渠'
      },{
        value: '黄历中的动土一般指适合拆房子重建的日子。多用于建筑、安葬等。',
        name: '动土'
      },{
        value: '安修厨灶、厨炉移位。',
        name: '作灶'
      },{
        value: '指建造或者修理仓库。',
        name: '造仓'
      },{
        value: '砍伐树木作屋梁。',
        name: '作梁'
      },{
        value: '装上建筑物屋顶的梁木，同架马。',
        name: '上梁'
      },{
        value: '开凿水井，安装取水设备。',
        name: '掘井'
      }

      ]
    },
    {
      title:'祭祀',
      url:'../../images/svg/jisi.svg',
      item: [{
        value: '黄历中的祭祀是使用供品和礼仪,在祠堂进行祭祀,祭拜祖先,或是在寺庙中祭拜神明等事的意思,表示崇敬并求保佑。',
        name: '祭祀'
      },{
        value: '指的是中国传统习俗中祈求神明保佑,许愿、还愿等。',
        name: '祈福'
      },{
        value: '中国传统习俗中向神明祈求后嗣子孙之事。意思就是求兒子或者女兒,形容是結婚求後代的意思。',
        name: '求嗣'
      },{
        value: '指神佛像塑成后、供奉上位之事,佛像、神像塑成后,择吉日举行仪式等。也指为新的刀、剑等锋利的兵器祝福。 ',
        name: '开光'
      },{
        value: '指是雕刻寺庙绘画雕刻神像或人像等。',
        name: '塑绘'
      },{
        value: '指还愿,答谢神恩的意思,是一种感谢神的仪式。',
        name: '酬神'
      },{
        value: '指的是建造寺、庙、宫、观、堂。',
        name: '造庙'
      },{
        value: '指将尸体移入棺木之意。',
        name: '入殓'
      },{
        value: '安葬是指处理埋葬事宜的仪式。',
        name: '安葬'
      },{
        value: '指安放神位及香火,一般称为供香或上香。安置神位及香火要看日子的,适合安放神位及香火的日子称为安香日。',
        name: '安香'
      },{
        value: '指旧墓修理及添葬之日。',
        name: '修坟'
      },{
        value: '指办理丧事,就比如出殡等。',
        name: '行丧'
      }

      ]
    }
  ]

exports.jishenList = [{
  label: '喜',
  name: '喜神',
  desc: '喜神趋吉避凶，追求喜乐，恋爱结婚必看。',
  position: current.getDayPositionXi(),
  direct: current.getPositionXiDesc()
},
{
  label: '福',
  name: '福神',
  desc: '福神能让幸福降临，福运绵长，吉星高照。',
  position: current.getDayPositionFu(),
  direct: current.getPositionFuDesc()

},
{
  label: '财',
  name: '财神',
  desc: '主管财源的神，打牌、游戏增强财运。',
  position: current.getDayPositionCai(),
  direct: current.getPositionCaiDesc()

},
{
  label: '阳',
  name: '阳贵',
  desc: '在白天，在此方位容易求得贵人相助。',
  position: current.getDayPositionYangGui(),
  direct: current.getPositionYangGuiDesc()

},
{
  label: '阴',
  name: '阴贵',
  desc: '在晚上，在此方位容易求得贵人相助',
  position: current.getDayPositionYinGui(),
  direct: current.getPositionYinGuiDesc()

},
]