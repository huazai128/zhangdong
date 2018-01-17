import React from 'react';
import './watch.scss';
import { Link, hashHistory } from 'react-router';
import Commontop from '../common/commonTop.jsx';
import Footer from '../common/lastFooter.jsx';
export default class Provides extends React.Component {
	componentDidMount() {
		this.node.scrollIntoView();
	}

	render() {
		return (<div className='watch' ref={node => this.node = node}>
			<Commontop />
			<div className="topPage">
				<div className="topPageContet">
					<div className="pageContent flex">
					<div onClick={()=>hashHistory.push('/')} className='pageContentOne'>首页</div>&nbsp;&nbsp;>&nbsp;&nbsp;<div onClick={()=>hashHistory.push('/new')} className='pageContentOne'>新闻动态</div>&nbsp;&nbsp;>&nbsp;&nbsp;2016-2017年中国儿童智能手环市场研究报告
					</div>
				</div>
			</div>
			<div className="watPage">
				<div className="watContent flex">
					<div className="watLeft flex-g-1">
						<div className="watTop">
							<div className="watTopContent">
								<div className="chilContent">
									2016-2017年中国儿童智能手环市场研究报告
								</div>
								<div className="timeConten">
									掌动.发表于：2017年9月20日
								</div>
							</div>
						</div>
						<div className="watDetail">
							<div className="getwatDetail">
								<div className='zizhu '>2017年5月4日，根据权威大数据显示，2016年中国儿童手环用户规模达0.29亿人，较2015年增长107.1%；预计2019年整体市场用户规模将达到1.35亿人。随着儿童手环技术进一步成熟，80后、90后群体逐渐晋升为家长，市场持续受利好因素刺激，预计未来三年中国儿童手环市场仍将保持高速增长。 </div>
								<div className="chengSe">
									以下为报告的详细内容：
								</div>
								<div className="market">
									<div className="marTop">2016年中国儿童手环市场概况</div>
									<div className="marOne">
										<div className="marCheng">国家政策支持可穿戴硬件发展</div>
										<div className="marContent">
											国务院在2015年12月发布指导意见明确表示重点支持包括可穿戴设备在内的新兴消费品后，于2016年先后发布《关于促进和规范健康医疗大数据应用发展的指导意见》和《关于加快发展健身休闲产业的指导意见》，鼓励发展医疗智能可穿戴设备和可穿戴式运动设备。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">人口国情与二孩政策利好</div>
										<div className="marContent">
											国家统计局2017年2月数据公报显示，截至2016年末我国0-15岁人口约2.4亿，国家教育部2016年10月公布数据显示2015年普通小学及学前教育在校人数约1.4亿。同时，随着二孩政策的逐步推进， 考虑二孩政策带来的潜在适龄用户增长的时间滞后性，中国儿童手环潜在消费者数量可观。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">国民生活水平提高及消费观念转变</div>
										<div className="marContent">
											根据国家统计局国民经济和社会发展统计公报，2016年全国居民人均可支配收入较上年实际增长6.3%，教育文化娱乐方面人均支出较上年增长11.1%;随着智能手机在中国的普及，销售及出货量增速放缓，智能可穿戴设备有望成为新的消费热点;同时，90后逐步成为主要生育和消费群体，其追求新颖和更加关注教育等消费观念会对儿童手环市场产生积极影响。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">非智能：金属饰品及低价玩具类饰品</div>
										<div className="marContent">
											中国普遍有给新生儿或幼龄儿童佩戴金属饰品的习俗，如纯银手环等，传统国产品牌如老凤祥，高端珠宝品牌如周大福、周生生均有丰富多样的产品，鉴于金银贵金属属于高端耐用品，且各大品牌竞争格局已明朗，该类市场规模波动会较小;
玩具手环包括儿童动画周边产品和以塑料、矿石、竹木制作的低端饰品，加上国内山寨竞争激烈，导致产品盈利空间小。

										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">非智能：儿童安全、健康类产品</div>
										<div className="marContent">
											为防止婴幼儿走失、跌倒，目前市面上售有将幼童与成人相连的亲子手环，成本及技术要求低，因为市场门槛低且已充斥大量竞品，而产品实用性一般，此类产品的利润空间较小;
儿童驱蚊手环通过将驱蚊药物以芯片等形式附着于手环上实现驱蚊效果，目前国内外均有较成熟的品牌，市面上相关产品价格差异大，质量参差不齐，产品效果有时不及传统驱蚊产品如花露水，传统日用品品牌发布此类产品可能更受消费者青睐。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">智能：儿童安全问题催生特殊功能需求</div>
										<div className="marContent">
											由于国内儿童安全事件频发引发家长忧虑，儿童实时定位和即时通讯成为低龄儿童家庭的消费痛点，从而在2016年成人高端智能手环市场遇冷的情况下，儿童手环市场仍有不俗表现，且产品相对成人智能手环而言功能基础，技术要求低，价格区间低。目前市场主要品牌有小天才、360巴迪龙、荣耀小K、阿巴町、糖猫等，参与企业既包括传统硬件商如步步高、华为等，也包括互联网公司如小米、搜狗、腾讯、乐视等，同时市场还充斥着不少低价山寨品牌。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">智能：竞品同质化程度高，媒体曝光安全隐患</div>
										<div className="marContent">
											目前儿童智能手环产品质量参差不齐，性能同质化较严重，影响消费体验;2016年媒体陆续报道了儿童智能手表定位不准、信息泄露、有害材质等产品隐患，引发消费者隐忧;在2015年大火之后，2016年市场渐趋冷静，已出现部分中小玩家洗牌迹象;虽然主要品牌占据大部分市场份额，目前尚没有绝对领先的产品，各大品牌竞争激烈。
										</div>
									</div>
								</div>
								<div className="market">
									<div className="marTop">儿童智能手环主要产品分析</div>
									<div className="marOne">
										{/* <div className="marCheng">国家政策支持可穿戴硬件发展</div> */}
										{/* <div className="marContent">
											国务院在2015年12月发布指导意见明确表示重点支持包括可穿戴设备在内的新兴消费品后，于2016年先后发布《关于促进和规范健康医疗大数据应用发展的指导意见》和《关于加快发展健身休闲产业的指导意见》，鼓励发展医疗智能可穿戴设备和可穿戴式运动设备。
										</div> */}
									</div>
									<div className="marOne">
										<div className="marCheng">1. 小米&米兔</div>
										<div className="marContent">
											小米手环在智能手环领域占据绝对的领先地位，同时已推出针对儿童的米兔智能手表，延续其高性价比的产品特性，凭借品牌积累的粉丝基础获得良好的产品表现。 随着智能产品的普及和使用者年轻化，以及运动、健康观念的发展，小米手环以其时尚性和偏低的价位也可能受到儿童家长青睐，且小米系列产品众多，随着小米生态的完善和渗透，小米手环和小米智能手表在儿童智能手环市场的竞争力会加强;小米也有可能利用已有技术优势拓展其儿童智能手表性能以树立产品差异化优势。但是，2016年以小米手机为代表的小米业绩惨淡，对小米手环和米兔智能手表将不可避免产生影响，增大其经营压力。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">2. 华为&荣耀</div>
										<div className="marContent">
											华为最先推出的手环及智能手表主要面向商务人士的高端智能手环，以精美设计和简约风格设计为主要特点，可实现蓝牙通话，产品维持高价路线。荣耀出品有更偏向年轻群体的中低价智能手环，主打运动健康和手机互连等功能，并率先推出儿童智能手表荣耀小K，与迪士尼合作推出同人款，但市场评价不佳，目前天猫荣耀官方旗舰店已不再销售。值得注意的是，2016年华为发布了华为儿童智能手表，其外观、性能及定价与荣耀小K均相似，此举反映了华为有意开拓儿童手环市场的战略安排，其产品在中高端家庭子女中将更有竞争力。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">3. 小天才</div>
										<div className="marContent">
											小天才为步步高旗下品牌，主要生产儿童教育产品，2015年推出小天才电话手表Y01，2016年推出Y02和Y03升级版，IPX7防水等技术性能在市场同类产品中领先，通过邀请黄磊父女等明星代言、冠名儿童综艺节目《神奇的孩子》等获得较高品牌认知度。小天才为除儿童智能手表外只发布有儿童平板电脑且市场反响一般，如无后续产品推出将较难维持其竞争优势。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">4. 360巴迪龙</div>
										<div className="marContent">
											儿童智能手表系列产品众多，覆盖199-1000元价格区间，手表款式和娱乐功能较市场竞品多，360本身安全、可靠的消费形象无形中为其儿童智能手表加分。360于2017年1月10日发布国内首份“儿童成长状况大数据”，有望发掘新的市场领域，着重在儿童数据分析方面确立权威，提升品牌关注度，形成产品的独特竞争优势;但大数据分析可能引起消费者对于信息泄露的警惕和担忧。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">5. 阿巴町</div>
										<div className="marContent">
											深圳五洲无线技术有限公司旗下品牌，公司有较强的技术背景，2016年登陆新三板。2014年至今共推出共4款产品，覆盖298-800元价格区间，与高人气亲子节目《爸爸去哪儿》的合作为产品奠定了较稳定的消费者基础。阿巴町有意凭借其技术优势深入开发体温检测、交换机器人等儿童智能产品和应用，但因为相对缺乏互联网品牌如小米、360的流量优势，新产品与其智能手表关联性不大，该战略存在一定风险。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">6. Fitbit</div>
										<div className="marContent">
											Fitbit是全球智能手环领域的领头羊之一，但在2016年第四季度表现却不尽人意，引发了其地位将被苹果、小米取代的猜测。旗下系列产品主打年轻时尚的运动群体，款式简约，色彩活泼，价格定位较国内品牌偏高。在现有市场出货量下降的情况下，由于产品设计时尚活泼，可塑性较强，Fitbit有可能推出面向低龄群体的产品，开辟新的销售点，但此举也会加大公司的营运压力和风险，同时其价格偏高，可能在中国面临“水土不服”。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">7. 乐心</div>
										<div className="marContent">
											乐心手环在智能手环市场占据领先优势，其产品瞄准健康定位，提供心率监测等功能，公司还提供智能血压计、蓝牙健康秤和儿童身高测量仪等系列智能健康产品。目前乐心的定位是专业医疗智能产品，相比儿童用户，更加关注健康问题的中老年用户可能更为关键，乐心也可以通过亲子产品等形式开拓儿童市场，但要考虑此举削弱其专业性形象的风险。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">8. bong</div>
										<div className="marContent">
											bong是2013年成立的国内可穿戴设备品牌，产品定位瞄准运动爱好者与年轻群体，目前已发布4款智能手环和2款智能手表，在表带等周边产品上样式丰富，与冈本、丸美等品牌开展营销活动。品牌在2016年宣布进军VR领域。bong品牌定位非常鲜明，但在90后父母追求时尚和生活质量的消费观念和智能产品使用者年轻化情况下，加之产品外表美观，对偏大龄儿童(10-12岁)将有较强吸引力。
										</div>
									</div>
								</div>
								<div className="user">
									<div className="userTop">2016中国儿童手环用户规模达0.29亿</div>
									<div className="userContent">
										大数据数据显示，2016年中国儿童手环用户规模达0.29亿人，较2015年增长107.1%;预计2019年整体市场用户规模将达到1.35亿人。随着儿童手环技术进一步成熟，80后、90后群体逐渐晋升为家长，市场持续受利好因素刺激，预计未来三年中国儿童手环市场仍将保持高速增长。
								</div>
									<div className="userImg">
										<img src={require('img/user1.jpg')} alt="" />
									</div>
								</div>
								<div className="user">
									<div className="userTop">中国儿童手环手机网民品牌知名度</div>
									<div className="userContent">
									大数据显示，2016年中国网民对儿童手环品牌的认知中，小天才以42.3%的占比排名首位，互联网公司小米和360分居第二和第三。一方面，通过亲子类综艺节目实现目标市场精准营销，借助综艺节目搭建的亲子场景，对儿童智能手表的品牌宣传更为有效;另一方面，互联网公司通过品牌生态搭建在产品知名度方面也有一定优势。
								</div>
									<div className="userImg">
										<img src={require('img/user2.jpg')} alt="" />
									</div>
								</div>
								<div className="market marketFour">
									<div className="marTop">2017年中国儿童智能手环市场预测</div>
									<div className="marOne">
										{/* <div className="marCheng">国家政策支持可穿戴硬件发展</div> */}
										{/* <div className="marContent">
											国务院在2015年12月发布指导意见明确表示重点支持包括可穿戴设备在内的新兴消费品后，于2016年先后发布《关于促进和规范健康医疗大数据应用发展的指导意见》和《关于加快发展健身休闲产业的指导意见》，鼓励发展医疗智能可穿戴设备和可穿戴式运动设备。
										</div> */}
									</div>
									<div className="marOne">
										<div className="marCheng">1. 90后父母群体激发产品需求，婴儿智能产品短期发展缓慢</div>
										<div className="marContent">
										90后人群本身作为智能可穿戴设备的主要消费群体，追求时尚、智能生活的消费观念，为子女购置智能手环等发展较为成熟的可穿戴产品的可能性大。已在智能手环领域布局的品牌，产品定位相对灵活，将有更大优势。但对于面向婴儿的智能手环产品，如现有的少量婴儿体温监测手环，出于婴儿过于娇弱和设备辐射的考虑，相关技术和市场仍待培育。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">2. 定位和通话功能仍是刚需，做好做精是关键</div>
										<div className="marContent">
										目前占据国内儿童智能手表市场领先地位的产品的主要抓住家长担心子女人身安全的痛点，以定位和实时通话为核心功能，各品牌为竞争开发有社交交友等偏娱乐性功能，但已出现父母和学校担心影响学业和妨碍教学管理的问题;事实上，在定位和通话的功能设计，信息安全保障和产品材质或辐射安全方面并未做到至臻至善，刚需并未得到完全满足，因此市场竞争重点会落在定位和通话核心功能以及安全性能的提升。
										</div>
									</div>
									<div className="marOne">
										<div className="marCheng">3. 产品包装、宣传投入的重要性进一步提升</div>
										<div className="marContent">
										作为儿童智能手表的核心功能，实时定位和即时通讯的实际技术含量并不足够“智能”，导致竞品众多，同质化明显，儿童智能手表产品会着力在产品包装和宣传上：产品样式或外包装上，华为荣耀使用热门动漫元素的做法可能被效仿;而在原有的大量明星代言、儿童综艺冠名的宣传形式上，可能会出现新的突破，如动漫人物代言、微电影、网络综艺、联合营销等。
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="watRight">
						<div className="zhangTop">
							<div className="zhangdian">热点</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>
						<div className="zhnagContent">
							<div className="zhangContentTop flex">
								<div className="reLeft">
									<img src={require('img/19990.jpg')} alt="" />
								</div>
								<div className="reRight">
									【获奖名单】广州互联网企业风云榜获奖名单公布
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>);
	}
}
