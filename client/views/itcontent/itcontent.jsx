import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import './itcontent.scss';
export default class Tab extends React.Component {
	render() {
		return (
			<div className='itcontent'>
				<div className="nav flex">
					<div className="navText flex"><Link to="/creative">首页</Link>&nbsp;>&nbsp;<Link to="/creative/itcontent">优质帖子</Link></div>
				</div>
				<div className="boxIt">
					<div className='boxItTop'>Move it智能穿戴设备测试</div>
					<div className="itTop">
						<div className='hangContent'>行业背景</div>
						<div className="textContentOne">
							<div>智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备总称。例如：手表、手环、服饰等。穿戴式技术在国际计算机学术界和工业界一直被受关注，随着现代互联网的发展、技术的进步和高性能低功耗处理芯片的推出，部分穿戴式设备已经从概念化走向商用化，新式穿戴式设备不断传出，通过这些设备，人们可以更好的感知外部与自身的信息，能够在计算机、网络甚至其他人的辅助下更为高效率的处理信息。</div>
							<div>目前智能穿戴设备代表产品有：iwatch苹果智能手表、FashionCommA1智能手表、智能手环、谷歌眼镜、BrainLink智能头箍、鼓点T恤ElectronicDrumMachineT-shirt、社交牛仔裤SocialDenim、卫星导航鞋、可佩戴式多点触控投影机。这类可穿戴式智能设备能够协助用户实现信息感知与处理能力的提升，其应用领域极为广阔，从休闲娱乐、信息交流到行业应用，用户均能通过拥有多样化的传感、处理、连接、显示功能的可穿戴式设备来实现自身技能的增强或创新。主要的参与者为高科技厂商中的创新者以及学术机构，产品形态以全功能的智能手表、眼镜等形态为主，不用依赖于智能手机或其它外部设备即可实现与用户的交互。代表者如Google、Apple以及麻省理工学院等。</div>
							<div>智能穿戴设备的设计意图主要是探索人和科技全新的交互方式，为人们提供一些专属的和个性化的服务。穿戴式设备现如今已各式各样、五花八门，它们的出现已在很大程度上改变着人们的生活。</div>
						</div>
					</div>
					<div className="itTop itMargin">
						<div className='hangContent'>智能穿戴设备行业面临的挑战</div>
						<div className="textContentOne">
							<div className='sanContent itMarginOne'>硬件品质隐藏质量问题</div>
							<div>从三星Note7爆炸事件，到iPhone6的电池门，消费者对智能硬件的质量问题越来越重视，然而据有关数据统计，发生质量问题，99%以上的企业都是尽量隐瞒消息，花大量精力封锁消息。 智能硬件厂商需要用产品质量来提振消费者的信心，而不是搬起石头砸自己的脚，让消费者失去购买的兴趣，并对智能硬件产生太多负面的情绪。虽然产品中有质量问题是常有的事儿，但是如果概率太高的话就很说明品控问题了。这对国内的智能硬件而言，也敲响了警钟。在功能还不能打动下消费者的情况下，请用产品质量、做工、外观设计给消费者留下一个好印象，这对未来的品牌影响力不是一件坏事儿。</div>
							<div className='sanContent'>用户体验差</div>
							<div>智能硬件备市场的成功将在很大程度上取决于用户的积极体验。目前而言，健康和运动设备制造商以及医疗专家普遍的担忧就是，消费者对新硬件和软件的最初兴奋状态将会随着时间的流驶而逐步淡化，特别是用户发现他们的健康和运动目标未能达到的情况之下。由于缺乏进展，用户可能会感到失望、疏远、甚至是愤怒——人的情感可能会因此让设备制造商失去用户的支持和未来的创收机遇。如果用户无法像他们预期的那样取得进展，那么这种状况将会对设备制造商承诺的高质量服务形成打击，而且还会影响设备制造商稳定创收。</div>
							<div className='sanContent'>设备及硬件结合使用问题多</div>
							<div>对原始设备制造商而言，一款设计精良的产品仍不足以创建庞大的规模和培养大量的忠诚用户。特别是，运动与健康型的可穿戴智能设备面临着所有同类设备的普通问。对这些设备而言，只有在用户关注他们的健康状况时，这些设备才能被广泛地使用。消费者使用这些设备主要就是想看看相应的健康结果，然而这些功能和任务无法通过硬件本身来完成，还需要足够的软件和服务的支持。</div>
						</div>
					</div>
				</div>
				<div className="anContent">
					<div className="anTop">典型案例</div>
					<div className='anTopContent'>
						<div>Move it 是一款私人健身设备，集成四种不同的健身器材于一身。让用户可以随心随意在家里进行健身锻炼。它还可以与手机进行连接，让用户可以在app上查看自己的锻炼情况，四种健身器材与带有传感器的手柄配合使用，收集用户的运动数据并进行分析。智能手柄收集到的内容通过蓝牙4.0传输至用户的Android设备或iOS设备上，用户的设备同步显示当前的运动数据。</div>
						<div>Move it APP端中，用户可以制定合适自己的健身计划；可以选择上百种健身方式进行健身锻炼；在挑战场中，你可以跟世界各地用户进行pk，还可以挑战好友，相互激励锻炼；在热门动态中发表动态炫耀数据，让朋友了解你的健身情况，相对也可以了解其他用户的动态。</div>
						<div className="anImg flex">
							<img src={require('img/tie1.png')} />
							<img src={require('img/tie2.png')} />
							<img src={require('img/tie3.png')} />
							<img className='lastImg' src={require('img/tie4.png')} />
						</div>
						<div className="yunImg">
							<div className='flex jc-between'>
								<img src={require('img/yun1.jpg')} />
								<img src={require('img/yun2.jpg')} />
							</div>
							<div className='flex jc-between yunLast'>
								<img src={require('img/yun3.jpg')} />
								<img src={require('img/yun4.jpg')} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
