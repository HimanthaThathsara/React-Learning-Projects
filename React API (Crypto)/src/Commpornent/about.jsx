
function About() {

  return (
    <>
      <section className="section about">
        <div className="container">

          <figure className="about-banner">
            <img src="/images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner"
              className="w-100"/>
          </figure>

          <div className="about-content">

            <h2 className="h2 section-title">What Is Crypto</h2>

            <p className="section-text">
              Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
              Trade, Futures
              Trade, P2P, Staking, Mining, and margin.
            </p>

            <ul className="section-list">

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 list-title">View real-time cryptocurrency prices</h3>
                </div>

                <p className="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                  <h3 className="h3 list-title">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                </div>

                <p className="item-text">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
              </li>

            </ul>

            <a href="#" className="btn btn-primary">Explore More</a>

          </div>

        </div>
      </section>
    </>
  )
}

export default About
