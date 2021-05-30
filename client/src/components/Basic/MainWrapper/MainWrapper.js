import "./MainWrapper.scss";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

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
