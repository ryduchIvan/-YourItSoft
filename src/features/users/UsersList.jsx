//CSS
import "./users.scss";
//Components
import { UserItem } from "./UserItem";
import { Preload } from "./Preload";
//Instruments
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//Action
import { loadUsers, sortedUsers, selectUsers } from "./users-slice";
import { selectSearch } from "../header/header-slice";
import { selectPosts } from "../posts/posts-slice";
import { PostsList } from "../posts/PostsList";
function UserList() {
	const { status, currentPage, amountUsersOnPage } = useSelector(selectUsers);
	const { currentPosts } = useSelector(selectPosts);
	const { search } = useSelector(selectSearch);//беремо пошук
	const noSortedUsers = useSelector(store => store.users);//беремо не відсортирований массив 
	const listOfSortedUsers = useSelector(store => sortedUsers(noSortedUsers.list, search));//сортируємо
	const dispatch = useDispatch();
	useEffect(() => { //робимо запит на сервер
		dispatch(loadUsers());
	}, [])
	//Робимо пагінацію , отримуємо перший и останій индекс для методу slice()
	const lastUsersIndex = currentPage * amountUsersOnPage;
	const firstUsersIndex = lastUsersIndex - amountUsersOnPage;
	const users = listOfSortedUsers?.slice(firstUsersIndex, lastUsersIndex);
	return ( //Якщо заявилися пости , тоді змінюємо блок users
		<main className={`${currentPosts ? "users users__flex" : "users"}`}>
			{
				status === "loading" && <h1><Preload /></h1>//в процесі загрузки инициализуємо preload 
			}
			{
				!users && <h1 className="error">Error 404</h1>//якщо в запиті буду помилка , виводимо її
			}
			{
				status === "received" && users && <div className="users__row">
					{
						users.map(user => <UserItem key={user.id} {...user} />)
					}
				</div>//якщо все гуд , передаэмо в пропс інфо о юзерах
			}
			<PostsList />
		</main >
	)
}

export { UserList }