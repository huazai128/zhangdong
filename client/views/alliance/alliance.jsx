import React from 'react';
import './alliance.scss';
import { Link, hashHistory } from 'react-router';
import Commontop from '../common/commonTop.jsx';
import Footer from '../common/lastFooter.jsx';

class NewDetail extends React.Component {
	render() {
		return (
			<div className='alliance'>
				<Commontop />
				<div className="topPage">
					<div className="topPageContet">
						<div className="pageContent">
							首页&nbsp;&nbsp;>&nbsp;&nbsp;新闻动态&nbsp;&nbsp;>&nbsp;&nbsp;市科创委智能硬件联盟之《打造公共平台，助力创新创业》论坛活动圆满落幕！
						</div>
					</div>
				</div>
				<div className="alliPage">
					<div className="alliContent flex">
						<div className="allLeft flex-g-1">
							<div className="alliTop">
								<div className="alliTopContent">
									<div className="shiContent">
										市科创委智能硬件联盟之《打造公共平台，助力创新创业》论坛活动圆满落幕！
									</div>
									<div className="timeConten">
										掌动.发表于：2017年9月20日
									</div>
								</div>
							</div>
							<div className="alliDetail">
								<div className='getalliDetail'>
									<div className='suiji '>2017年9月20日，在广州市科创委的指导下，由广州智能硬件与移动互联网融合技术创新联盟主办，掌动智能、机智云、芳禾数据、群志科技承办的广州智能硬件与移动互联网融合技术创新联盟系列主题活动 《打造公共平台，助力创新创业》拉开了帷幕！</div>
									<div className='imgContent'>
										<img src={require('img/dazao1.jpg')} alt="" />
									</div>
									<div className='suiji suiOne'>来自广州市科技创新委员会产学研结合处罗铮副处长、华南理工大学计算机应用工程研究所副所长徐浩博士、机智云创始人兼CEO黄灼先生、掌动智能CEO赵研先生、芳禾数据创始人兼CEO童瑶女士、广州群志科技股份有限公司董事长水群强先生、中国电子科技集团公司第七研究所凯尔实验室孙继恒主任、广东省外语艺术职业学院国际经贸学院寻明院长、顺联集团事业部总经理钟焕琳先生、上格通讯科技有限公司总经理赵啓杰先生、群志科技副总裁陈岗先生、广州广大通电子科技有限公司总经理邱然先生、机智云副总裁邢雁女士，以及一众知名企业代表，院校专家出席论坛活动。</div>
									<div className='suiji suiTwo'>会上，广州市科创委罗处表示鼓励、支持、推动广州智能硬件与移动互联网融合技术创新联盟打造公共平台，加强科技创新发展，突破产业发展的核心技术，通过产业联盟形成重要的产业技术标准，提升产业整体竞争力，助力创新创业。为广州乃至全省的产业发展贡献更大的力量，同时对广州智能硬件与移动互联网融合技术创新联盟未来的发展给予殷切的期望。</div>
									<div className='imgContent'>
										<img src={require('img/shi1.jpg')} alt="" />
										<div className='shiOne'>市科创委副处长 罗铮先生 致辞</div>
									</div>
									{/* <div className='suiji suiTwo'>除此之外，根据用户研究调查的结果，对APP加入了社交基因。使用户可以在挑战场中与世界各国的用户进行健身心得交流，健身达人们的数值PK。同时，还可以把自身数据发表在社交软件上，让朋友了解你的健身情况。</div> */}
									<div className="shike">
										{/* <di className="shiTop">市科创委副处长 罗铮先生 致辞</di> */}
										<div className="shiContent">广州智能硬件与移动互联网融合技术创新联盟名誉主席徐浩代表联盟致辞，表示联盟在“开放共享，聚合重构”的理念下致力于打造六大平台：技术创新平台、公共服务平台、标准对接平台、产业孵化平台、人才培训平台和产业智库平台。目前以软硬开发服务、测试认证服务、数据运营服务、集成制造服务为代表的系列公共服务已经全面以云平台形式对接全国的中小企业，助力创新创业。</div>
										<div className='imgTop'>
											<img src={require('img/xu1.jpg')} alt="" />
											<div className="xuOne">
												智能硬件联盟名誉主席 徐浩先生 致辞
											</div>
										</div>

									</div>
									<div className="shike">
										<div className='imgTop'>
											<img src={require('img/luo1.jpg')} alt="" />
											<div className="xuOne">
												六大平台
											</div>
										</div>

									</div>
									<div className="shike">
										{/* <di className="shiTop">六大平台</di> */}
										<div className="shiContent">广州智能硬件与移动互联网融合技术创新联盟将努力打造物联网开发公共服务平台、质量公共服务平台、数据公共服务平台、集成公共服务平台，助力创新创业。</div>
										<di className="shiTop">物联网开发公共服务</di>
										<div className='imgTop'>
											<img src={require('img/huang1.jpg')} alt="" />
											<div className="xuOne">
												机智云创始人 黄灼先生 发表演讲
											</div>
										</div>
									</div>
									<div className="shike">
										<di className="shiTop">质量公共服务</di>

										<div className='imgTop'>
											<img src={require('img/zu1.jpg')} alt="" />
											<div className="xuOne">
												掌动智能CEO 赵研先生 发表演讲
											</div>
										</div>
									</div>
									<div className="shike">
										<di className="shiTop">数据公共服务</di>
										<div className='imgTop'>
											<img src={require('img/fang1.jpg')} alt="" />
											<div className="xuOne">
												芳禾数据CEO 童瑶女士 发表演讲
											</div>
										</div>
									</div>
									<div className="shike">
										<di className="shiTop">集成公共服务</di>
										<div className='imgTop'>
											<img src={require('img/ji1.jpg')} alt="" />
											<div className="xuOne">
												群志科技副总裁 陈岗先生 发表演讲
											</div>
										</div>
									</div>
									<div className="shike">
										{/* <di className="shiTop">六大平台</di> */}
										<div className="shiContent">互联、物联技术与产业融合，实质性推动产业升级与发展，深度融合需要各领域专家领路。在活动现场，还举行了联盟产业智库 Mcross研究院的授牌仪式，研究院将承担这一重任，努力成为中国最专业的跨界领域专家智库。</div>
										{/* <di className="shiTop">物联网开发公共服务</di> */}
										<div className="shiContent">Mcross专家社区成立于2014年2月10日，聚集100+位各领域专家，已经成功举办了30+各领域专业活动，发布了90+篇各类型学术研讨文章。</div>
										<div className='imgTop'>
											<img src={require('img/hang1.jpg')} alt="" />
											<div className="xuOne">
												Mcross专家社区过往行业论坛
											</div>
											<div className="xuTwo">
												祝贺！2017年9月20日 Mcross专家社区正式蜕变为广州智能硬件与移动互联网融合技术创新联盟产业专家智库【Mcross研究院】，祝贺童瑶女士荣获Mcross研究院“执行院长”称号，钟焕琳先生荣获Mcross研究院“首席专家”称号。
											</div>
										</div>
									</div>
									<div className="shike">
										{/* <di className="shiTop">集成公共服务</di> */}
										<div className='imgTop'>
											<img src={require('img/shouPai1.jpg')} alt="" />
											<div className="xuOne">
												童瑶女士荣获Mcross研究院“执行院长”称号
											</div>
										</div>
										<div className='imgTop'>
											<img src={require('img/zhongnv1.jpg')} alt="" />
											<div className="xuOne">
												钟焕琳先生荣获Mcross研究院“首席专家”称号
											</div>
											<div className="xuTwo">
												未来，在市创委、融合创新联盟的带领下，Mcross研究院将努力吸纳更多各领域专家，积极服务于联盟各企业。
											</div>
											<div className="xuTwo">
												为了积极响应广州智能硬件与移动互联网融合技术创新联盟的产业孵化平台以及人才培训平台，本次活动还举办了机智云&广东省外语艺术职业学院“产学研合作基地”、广州智能硬件与移动互联网融合技术创新联盟&广东省外语艺术职业学院“实训基地” 授牌仪式。
											</div>
										</div>
										<div className='imgTop'>
											<img src={require('img/chanye3.jpg')} alt="" />
											<div className="xuOne">
												产学研合作基地授牌仪式
											</div>
										</div>
										<div className='imgTop'>
											<img src={require('img/chanye2.jpg')} alt="" />
											<div className="xuOne">
												实训基地授牌仪式
											</div>
										</div>
										<div className='imgTop'>
											<img src={require('img/chanye2.jpg')} alt="" />
											<div className="xuOne">
												实训基地授牌仪式
											</div>
										</div>
										<div className='imgTop'>
											<img src={require('img/zhici1.jpg')} alt="" />
											<div className="xuOne">
												广东省外语艺术职业学院国际经贸学院 寻明院长 致辞
											</div>
										</div>

									</div>
									<div className="shike">
										<div className="shiContent">互联、物联技术与产业融合，实质性推动产业升级与发展，深度融合需要各领域专家领路。在活动现场，还举行了联盟产业智库 Mcross研究院的授牌仪式，研究院将承担这一重任，努力成为中国最专业的跨界领域专家智库。</div>
										<div className='imgTop'>
											<img src={require('img/hezhao1.jpg')} alt="" />
											{/* <div className="xuOne">
												群志科技副总裁 陈岗先生 发表演讲
											</div> */}
										</div>
									</div>
									<div className="shike">
										<div className="shiContentTop">嘉宾合照</div>
										<div className='imgTop'>
											<img src={require('img/jiabin1.jpg')} alt="" />
											<div className="xuOne">
												工作人员合照
											</div>
										</div>
										<div className="shiContent">本次“打造公共平台，助力创新创业”论坛活动到此圆满落幕！未来广州智能硬件与移动互联网融合技术创新联盟将积极与产业研，Mcross研究院，高校科研院所，企业等组建公共服务平台，为创新创业提供源动力。</div>
									</div>
								</div>
							</div>
						</div>
						<div className="alliRight">
							< div className="dianTop">
								<div className="retian">热点</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
									<div className="reLeft">
										<img src={require('img/19990.jpg')} alt="" />
									</div>
									<div className="reRight">
										【获奖名单】广州互联网企业风云榜获奖名单公布
									</div>
								</div>
							</div>
							<div className="dianContent">
								<div className="dianContentTop flex">
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
			</div>
		);
	}
}
export default NewDetail;
