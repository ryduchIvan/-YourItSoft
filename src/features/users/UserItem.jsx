//CSS
//Instruments
import { useDispatch } from "react-redux";
//Action
import { setCurrentPosts } from "../posts/posts-slice";//беремо actions для співідношення постів та юзера
function UserItem(props) {
	const { name, email, id, phone } = props;
	const dispatch = useDispatch();
	return (
		<div className="user__item">
			<ul className="item__list">
				<li className="item__info">{name}</li>
				<li className="item__info">{email}</li>
				<li className="item__info">{phone}</li>
				<li className="item__info">{id}</li>
			</ul>
			<button className="user__btn" onClick={() => { dispatch(setCurrentPosts(id)) }}>Watch posts</button>
		</div>
	)
}

export { UserItem }