import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="menu-container">
          <div className="menu">
            <div className="menu-shrink">
              <div className="menu-left">
                ✦<div className="menu-brand">Unlock</div>
              </div>
              <div className="menu-center">
                <a href="#">Music</a>
                <a href="#">Places</a>
                <a href="#">People</a>
                <a href="#">Concerts</a>
              </div>
              <div className="menu-right">
                <a href="#">Join </a>
              </div>
            </div>

            <div className="menu-expand">
              <span className="divider"></span>
              <div className="expand row-1">
                <span>Unlock</span>
                <p>Professional and exclusive</p>
              </div>
              <div className="expand row-2">
                <p>
                  sound identity for your
                  <span className="img"></span> &nbsp;brand
                </p>
              </div>
              <div className="expand row-3">
                <p>Sound is our life</p>
                <p className="arrows">
                  <span>&#8592;</span>&nbsp;<span>&#8594;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
