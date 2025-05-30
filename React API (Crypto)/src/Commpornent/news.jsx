function News() {

  return (
    <>
      <section className="section instruction">
        <div className="container">

          <h2 className="h2 section-title">Crypto News</h2>

          <p className="section-text">
            Stay updated on new cryptocurrency news. content blocks built in React Native.
          </p>
          
            <div className="trend-tab news">
              <ul className="tab-content">

                <li>
                  <div className="trend-card">

                    <div className="card-title-wrapper">
                      <img src="/images/coin-1.svg" width="24" height="24" alt="bitcoin logo"/>

                      <a href="#" className="card-title">
                                  Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>

                    <data className="card-value" value="46168.95">USD 46,168.95</data>

                    <div className="card-analytics">
                                <data className="current-price" value="36641.20">36,641.20</data>

                                <div className="badge red">-0.79%</div>
                    </div>

                  </div>
                </li>

                <li>
                  <div className="trend-card">

                    <div className="card-title-wrapper">
                      <img src="/images/coin-1.svg" width="24" height="24" alt="bitcoin logo"/>

                      <a href="#" className="card-title">
                                  Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>

                    <data className="card-value" value="46168.95">USD 46,168.95</data>

                    <div className="card-analytics">
                                <data className="current-price" value="36641.20">36,641.20</data>

                                <div className="badge red">-0.79%</div>
                    </div>

                  </div>
                </li>

                <li>
                  <div className="trend-card">

                    <div className="card-title-wrapper">
                      <img src="/images/coin-1.svg" width="24" height="24" alt="bitcoin logo"/>

                      <a href="#" className="card-title">
                                  Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>

                    <data className="card-value" value="46168.95">USD 46,168.95</data>

                    <div className="card-analytics">
                                <data className="current-price" value="36641.20">36,641.20</data>

                                <div className="badge red">-0.79%</div>
                    </div>

                  </div>
                </li>

                <li>
                  <div className="trend-card">

                    <div className="card-title-wrapper">
                      <img src="/images/coin-1.svg" width="24" height="24" alt="bitcoin logo"/>

                      <a href="#" className="card-title">
                                  Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>

                    <data className="card-value" value="46168.95">USD 46,168.95</data>

                    <div className="card-analytics">
                                <data className="current-price" value="36641.20">36,641.20</data>

                                <div className="badge red">-0.79%</div>
                    </div>

                  </div>
                </li>                                             

              </ul>
            </div>

        </div>
      </section>
    </>
  )
}

export default News
