import { VictoryPie } from "victory";
import './graphic.css';

const resolverProfitData = [
  { resolver: 'Resolver1', profit: 0.0033 },
  { resolver: 'Resolver2', profit: 0.0053 },
  { resolver: 'Resolver3', profit: 0.0023 },
  { resolver: 'Resolver4', profit: -0.0031 },
  { resolver: 'Resolver1', profit: 0.0087 },
  { resolver: 'Resolver2', profit: 0.0032 },
  { resolver: 'Resolver3', profit: 0.0012 },
  { resolver: 'Resolver4', profit: -0.0001 },
  { resolver: 'Resolver1', profit: 0.0031 },
  { resolver: 'Resolver2', profit: 0.0021 },
  { resolver: 'Resolver3', profit: 0.0037 },
  { resolver: 'Resolver4', profit: 0.0024 }
];

const calculateTotalProfit = (data) => {
  const totalProfit = {};
    
  data.forEach(({ resolver, profit }) => {
    totalProfit[resolver] = (totalProfit[resolver] || 0) + profit;
  });

  return totalProfit;
};

const convertInDollars = (profitInEth) => profitInEth * 2950;
    
const resolverTotalProfit = calculateTotalProfit(resolverProfitData);

const dataPie = Object.entries(resolverTotalProfit).map(([resolver, profit]) => {
  const profitDollars = convertInDollars(profit);
  return {
    x: `${resolver} (${profitDollars.toFixed(2)}$)`,
    y: profitDollars
  }
});


const PieGraphic = () => {
  return (
    <div>
    <h1 className="graphics-title">Итог по резолверам</h1>
      <div className="graphics">
        <VictoryPie 
          data={dataPie}
        colorScale={['#FF8267', '#FFC300', '#DAF7A6']}
        />
      </div>
    </div>
  )
};
export default PieGraphic;