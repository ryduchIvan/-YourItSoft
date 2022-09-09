import Arrow from "../../assets/img/Vector 1.svg";
//CSS
import "./footer.scss";
//Action
import { showNextUsers, showPreviousUsers } from "../../features/users/users-slice";//беремо actions для показу наступних юзерів
import { useDispatch } from "react-redux";
function Footer() {
	const dispatch = useDispatch();
	return (
		<footer className="footer">
			<div className="footer__row">
				<div className="row__item">
					<button className="item__btn" onClick={() => {
						dispatch(showPreviousUsers());
					}} >Previous</button>
					<img src={Arrow} alt="arrow" className="item__img"></img>
				</div>
				<div className="row__item" onClick={() => {
					dispatch(showNextUsers());
				}}>
					<button className="item__btn" >Next</button>
					<img src={Arrow} alt="arrow" className="item__img item__img_next"></img>
				</div>
			</div>
		</footer>
	)
}

export { Footer };