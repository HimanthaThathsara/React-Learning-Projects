import "./App.css";
function App() {
  document.addEventListener("DOMContentLoaded", () => {
    const revealerNav = window.revealer({
      revealElementSelector: ".nav-js",
      options: {
        anchorSelector: ".nav-btn-js",
      },
    });

    const actionBtn = document.querySelector(".nav-btn-js");
    actionBtn.addEventListener("click", () => {
      if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        actionBtn.setAttribute("data-open", true);
      } else {
        revealerNav.hide();
        actionBtn.setAttribute("data-open", false);
      }
    });
  });

  return (
    <>
      <header>
        <div>
          <button className="header__button nav-btn-js" type="button"></button>
          <nav className="header__nav nav-js" data-active="false">
            <ul className="header__menu">
              <li className="header__menu-item">
                <a href="#">Home</a>
              </li>
              <li className="header__menu-item">
                <a href="#">Projects</a>
              </li>
              <li className="header__menu-item">
                <a href="#">About</a>
              </li>
              <li className="header__menu-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <h1>
        Now
        <br />
        Is Time
      </h1>
    </>
  );
}

export default App;
