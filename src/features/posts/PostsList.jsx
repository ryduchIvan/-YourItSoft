//Actions
import { loadPosts, selectPosts } from "./posts-slice";
//Instruments
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//Components
import { PostItem } from "./PostItem";
function PostsList(props) {
	const dispatch = useDispatch();
	const { posts, currentPosts, amountPotsOnPage } = useSelector(store => store.posts);//беромо значення з обьекту posts
	useEffect(() => {
		dispatch(loadPosts())
	}, [currentPosts]);
	const lastPostsIndex = currentPosts * amountPotsOnPage;
	const firstPostsIndex = lastPostsIndex - amountPotsOnPage;
	const sortedPostsByUser = posts.slice(firstPostsIndex, lastPostsIndex);
	return (
		<>
			<div className="posts">
				{
					sortedPostsByUser.map(post => <PostItem key={post.id} {...post} />)
				}
			</div>
		</>
	)
}

export { PostsList }