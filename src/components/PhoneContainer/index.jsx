import React from "react";
import phone from "../../images/phone.png";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../../redux/phone/actionPhone";

const PhoneContainer = () => {
	const phones = useSelector((state) => state.phone.phones);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<img src={phone} alt="phone" />
			<p>
				Disponibilité:
				<span id="count">{phones}</span>
			</p>
			<button onClick={() => dispatch(buyPhone())}>Acheter</button>
		</div>
	);
};

export default PhoneContainer;

//WITHOUT HOOKS
/*import React from "react";
import phone from "../../images/phone.png";
import { connect } from "react-redux";
import { buyPhone } from "../../redux/phone/actionPhone";

const PhoneComponent = (props) => {
	console.log(props);
	return (
		<div className="container">
			<img src={phone} alt="phone" />
			<p>
				Disponibilité:
				<span id="count"> {props.phones}</span>
			</p>
			<button onClick={() => props.buyPhone()}>Acheter</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		phones: state.phone.phones,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyPhone: () => dispatch(buyPhone()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);*/
