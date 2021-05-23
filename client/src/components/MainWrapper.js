import "../scss/MainWrapper.scss";
import Sidebar from "./Sidebar";
import Content from "./Content";

function MainWrapper() {
  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default MainWrapper