import {useEffect, useState} from 'react'

function Trend() {
    const [Trend, setTrend] = useState([]);
    useEffect(() => {
        // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false')
        // .then(res => res.json())
        // .then(data => setTrend(data))


        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4';
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'ADD YOUR API_KEY'} // ADD YOUR API_KEY
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setTrend(json))
        .catch(err => console.error(err));
    }, [])

  return (

    <>
        <section className="section trend">
            <div className="container">

            <div className="trend-tab">

                <ul className="tab-nav">

                    <li>
                        <button className="tab-btn ">Crypto</button>
                    </li>

                    <li>
                        <button className="tab-btn">DeFi</button>
                    </li>

                    <li>
                        <button className="tab-btn">BSC</button>
                    </li>

                    <li>
                        <button className="tab-btn">NFT</button>
                    </li>

                    <li>
                        <button className="tab-btn">Metaverse</button>
                    </li>

                    <li>
                        <button className="tab-btn">Polkadot</button>
                    </li>

                    <li>
                        <button className="tab-btn">Solana</button>
                    </li>

                    <li>
                        <button className="tab-btn">Opensea</button>
                    </li>

                    <li>
                        <button className="tab-btn">Makersplace</button>
                    </li>

                </ul>

                <ul className="tab-content">
                    {Trend.map(Trendcrypto =>         
                        <li key={Trendcrypto.id}>
                            <div className="trend-card">

                            <div className="card-title-wrapper">
                                <img src={Trendcrypto.image} width="24" height="24" alt={Trendcrypto.name + "Img"}/>

                                <a href="#" className="card-title">
                                {Trendcrypto.name} <span className="span">{Trendcrypto.symbol.toUpperCase()+"/USD"}</span>
                                </a>
                            </div>

                            <data className="card-value" value={Trendcrypto.current_price}>{"USD " + Trendcrypto.current_price}</data>

                            <div className="card-analytics">
                                <data className="current-price" value={Trendcrypto.low_24h}>{"USD "+Trendcrypto.low_24h}</data>
                                <div className={"badge " + (Trendcrypto.price_change_percentage_24h > 0 ? "green" : "red")}>{Trendcrypto.price_change_percentage_24h} %</div>
                            </div>

                            </div>
                        </li>
                    )}
                </ul>

            </div>

            </div>
         </section>
    </>
  )
}

export default Trend
