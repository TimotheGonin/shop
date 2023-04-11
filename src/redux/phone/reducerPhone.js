import { BUY_PHONE } from "./type";
import { CHANGE_PHONE_COLOR } from "../admin/type";

const initialStatePhone = {
	brand: "Apple iPhone",
	infos: {
		version: 11,
		capacity: 64,
		screen: "Retina HD",
		color: "red",
	},
	phones: 5,
};

const phoneReducer = (state = initialStatePhone, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return {
				...state,
				phones: state.phones - action.payload,
			};

		case CHANGE_PHONE_COLOR:
			return {
				...state,
				infos: {
					...state.infos,
					color: action.payload,
				},
			};

		default:
			return state;
	}
};

export default phoneReducer;
