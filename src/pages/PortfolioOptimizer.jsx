import Collaborate from "../components/Collaborate";
import ProjectDetails from "../components/ProjectDetails";
import portfolio_optimizer from "../assets/images/projects/portfolio_optimizer.png"

function PortfolioOptimizer() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-[10px]">
      <ProjectDetails title="Portfolio Optimizer" 
      topics={["Python","finance","Modern Portfolio theory"]} 
      startDate={"June 2025"} endDate={"July 2025"}
      overview={"This project is a web-based portfolio optimization tool tailored for the Indian stock market,built using the Markowitz Mean-Variance framework. Users can input Indian stock tickers,select a historical time horizon, and optimize their portfolio using one of four objectives:target return, target volatility, maximum Sharpe ratio, or minimum volatility. The tool visualizes the ecient frontier and provides key performance metrics like expected return, risk, and Sharpe ratio. Developed in Python with Streamlit, the app uses scipy, numpy, pandas, and yfinance for optimization and data handling. It supports stock-level and sector-level weight limits, enabling users to control portfolio exposure. The dashboard features a bar chart for stockweight allocation and a pie chart for sector distribution, oering a clear and interactiveexperience."}
      image={portfolio_optimizer} team={[{name: "Tanish Verma"}]} 
      impact={"This tool empowers Indian investors with data-driven portfolio construction, enhancing decision-making through modern optimization techniques. By supporting real-time data and customizable constraints, it bridges the gap between theoretical finance and practical investing. The interactive visualizations simplify complex analytics, making portfolio insights accessible even to non-experts. Ultimately, it promotes more informed, risk-aware investing in the Indian stock market."}
      challenges={[{title: "Missing Adjusted Close Data", desc: "While using yfinance to fetch Indian stock data, I encountered issues where the \"Adjusted Close\" column was missing for all NSE stocks. This disrupted accurate return computation and required switching to \"Close\" prices, which reduces precision in portfolio analysis for stocks that underwent splits, dividends, etc."},
      {title: "Unified Multi-Constraint Frontier", desc: "Incorporating Multiple Portfolio Types into a Unified Efficient Frontier Combining portfolios with and without transaction costs, sector constraints, and different optimization goals into a single efficient frontier plot was complex. It required careful handling of optimization logic, consistent plotting mechanisms, and clear interpretation of diverse portfolio results."},
      {title: "Streamlit Backend Integration", desc: "Designing a clean and intuitive frontend using Streamlit while ensuring smooth integration with backend optimization functions was challenging. Managing interactivity, handling user inputs, and updating visuals dynamically demanded precise coordination between the interface and computational logic."}]}
      />
      <Collaborate />
    </div>
  );
}
export default PortfolioOptimizer;