//CSS
import "./global.scss";
//Components
import { Header } from './features/header/Header';
import { UserList } from './features/users/UsersList';
import { Footer } from './features/footer/Footer';
function App() {
  return (
    <>
      <div className="wrapper container">
        <Header />
        <UserList />
        <Footer />
      </div>
    </>
  );
}

export default App;
