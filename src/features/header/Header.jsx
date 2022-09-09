//CSS
import "./header.scss";
//Action 
import { addToSearch } from "./header-slice";
//Instruments
import { useDispatch } from "react-redux";
function Header(params) {
	const dispatch = useDispatch();


	const handleInput = (event) => {
		let value = event.target.input.value;
		dispatch(addToSearch(value));
		event.preventDefault();
		event.target.reset();
	}
	return (
		<header className="header">
			<div className="header__logo">
				Lorem ispum
			</div>
			<form className="header__search" onSubmit={handleInput}>
				<input type="text" className="search__input" placeholder="Search" name="input" />
				<button className="search__btn" type="sumbit" >Find</button>
			</form>
		</header>
	)
}

export { Header };