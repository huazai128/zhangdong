import React ,{ Component } from 'react';
import NavLink from '../component/navLink';
import { Link, hashHistory } from 'react-router';
import './nav.scss';

export default class NavBox extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
	}
	render() {
		const { data,title,classStyle } = this.props;
		return (
			<div className={ `navs-box ${classStyle}` } onMouseLeave={(e) => {
				this.props.change(e);
			}}>
				<div className="navs-content">
					<h4>{title}</h4>
					<ul className="flex flex-vcenter">
						{ data.map((item,index) => {
							return(
								<li key={ index }><Link to={ item.path }><img src={ item.icon }/>{ item.title }</Link></li>
							)
						}) }
					</ul>
				</div>
			</div>
		);
	}
}
