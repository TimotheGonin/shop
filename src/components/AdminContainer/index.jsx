import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePhoneColor } from "../../redux/admin/actionAdmin";

const AdminContainer = () => {
	const [color, setColor] = useState("");
	const { infos } = useSelector((state) => state.phone);
	const dispatch = useDispatch();

	return (
		<div className="container" style={{ margin: "9px auto" }}>
			<h2>Admin Actions</h2>
			<p>
				Couleur iPhone
				<span id="count">{infos.color}</span>
			</p>
			<div className="btnContainer">
				<button onClick={() => dispatch(changePhoneColor(color))}>
					Changer couleur
				</button>
				<input
					type="text"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default AdminContainer;
