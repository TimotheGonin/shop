import React, { useState } from "react";
import phone from "../../images/phone.png";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../../redux/phone/actionPhone";

const PhoneContainer = () => {
	const [totalPhone, setTotalPhone] = useState(1);
	const { infos, phones } = useSelector((state) => state.phone);
	const dispatch = useDispatch(totalPhone);

	return (
		<div className="container">
			<img src={phone} alt="phone" />
			<p>
				Disponibilité: {phones} | Couleur: {infos.color}
			</p>
			<div className="btnContainer">
				<button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
				<input
					type="number"
					value={totalPhone}
					onChange={(e) => setTotalPhone(e.target.value)}
				/>
			</div>
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
		buyPhone: (totalPhone) => dispatch(buyPhone(totalPhone)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);*/
