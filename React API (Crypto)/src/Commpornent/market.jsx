import { useEffect, useState } from "react";
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Markets() {

  const [MarketData, setMarketData] = useState([]);

  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=true';
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'ADD YOUR API_KEY'} // ADD YOUR API_KEY
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMarketData(json))
      .catch(err => console.error(err));
  });



  return (
    <>
      <section className="section market">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Market Update</h2>

            <a href="#" className="btn-link">See All Coins</a>
          </div>

          <div className="market-tab">

            <ul className="tab-nav">

              <li>
                <button className="tab-btn active">View All</button>
              </li>

              <li>
                <button className="tab-btn">Metaverse</button>
              </li>

              <li>
                <button className="tab-btn">Entertainment</button>
              </li>

              <li>
                <button className="tab-btn">Energy</button>
              </li>

              <li>
                <button className="tab-btn">NFT</button>
              </li>

              <li>
                <button className="tab-btn">Gaming</button>
              </li>

              <li>
                <button className="tab-btn">Music</button>
              </li>

            </ul>

            <table className="market-table">

              <thead className="table-head">

                <tr className="table-row table-title">

                  <th className="table-heading"></th>

                  <th className="table-heading" scope="col">#</th>

                  <th className="table-heading" scope="col">Name</th>

                  <th className="table-heading" scope="col">Last Price</th>

                  <th className="table-heading" scope="col">24h %</th>

                  <th className="table-heading" scope="col">Market Cap</th>

                  <th className="table-heading" scope="col">Last 7 Days</th>

                  <th className="table-heading"></th>

                </tr>

              </thead>

              <tbody className="table-body">

                {MarketData.map(MarketData => 
                <tr className="table-row" key={MarketData.id}>

                  <td className="table-data">
                    <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
                    </button>
                  </td>

                  <th className="table-data rank" scope="row">{MarketData.market_cap_rank}</th>

                  <td className="table-data">
                    <div className="wrapper">
                      <img src={MarketData.image} width="20" height="20" alt={MarketData.name + " Image"} className="img"/>

                      <h3>
                        <a href="#" className="coin-name">{MarketData.name} <span className="span">{MarketData.symbol.toUpperCase()}</span></a>
                      </h3>
                    </div>
                  </td>

                  <td className="table-data last-price">$ {MarketData.current_price}</td>

                  <td className={"table-data last-update " + (MarketData.price_change_percentage_24h > 0 ? "green" : "red")} >
                    {MarketData.price_change_percentage_24h}%
                  </td>

                  <td className="table-data market-cap">$ {MarketData.market_cap}</td>

                  {/* This chart will show the last seven day price market in each every cryptocurrency */}
                  {/* <td className="table-data">
                    <ResponsiveContainer width="60%" height={50}>
                      <AreaChart
                        data={MarketData.sparkline_in_7d.price.map((price) => ({ price }))}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 5,
                        }}
                      >
                        <Area type="monotone" dataKey="price" stroke={(MarketData.price_change_percentage_24h > 0 ? "#00a83e" : "red") } fill={(MarketData.price_change_percentage_24h > 0 ? "#00a83e" : "red") } strokeWidth={2}/>
                      </AreaChart>
                    </ResponsiveContainer>
                  </td> */}

                  <td className={"table-data last-update " + (MarketData.ath_change_percentage > 0 ? "green" : "red")} >
                    {MarketData.ath_change_percentage}%
                  </td>

                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>

                </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>
      </section>

    </>
  )
}



export default Markets
