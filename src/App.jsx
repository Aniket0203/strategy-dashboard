// import { useState } from "react";
// import { dateArray, strategyArray } from "./components/Data/data";
// import ViewToggle from "./components/viewToggle";
// import DateDropdown from "./components/dateDropdown";
// import StrategyCards from "./components/strategyCards";
// import EmptyState from "./components/emptyState";

// function App() {
//   const [activeView, setActiveView] = useState("Bullish");
//   const [selectedDate, setSelectedDate] = useState(dateArray[0]);

//    const selectedView = strategyArray.find(
//     item => item.View === activeView
//   );
//   console.log("selectedView",selectedView)
//    const strategies = selectedView?.Value[selectedDate] || [];

//   return (
//     <div className="container">
//       <h2>Strategy Dashboard</h2>

//       <ViewToggle
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />

//       <DateDropdown
//         dates={dateArray}
//         selectedDate={selectedDate}
//         setSelectedDate={setSelectedDate}
//       />

//       {strategies.length === 0 ? (
//         <EmptyState date={selectedDate} />
//       ) : (
//         <StrategyCards strategies={strategies} />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { dateArray, strategyArray } from "./components/Data/data";
import ViewToggle from "./components/viewToggle";
import DateDropdown from "./components/dateDropdown";
import StrategyCards from "./components/strategyCards";

function App() {
  const [activeView, setActiveView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  console.log("dateArray", dateArray);
  console.log("strategyArray", strategyArray);

  const selectedView = strategyArray.find((item) => item.View === activeView);
  console.log("selectedView", selectedView);

  const strategies = selectedView?.Value[selectedDate] || [];
  console.log("strategies", strategies);

  return (
    <div className="container">
      <ViewToggle 
      activeView={activeView}
       setActiveView={setActiveView} 
       />
      <DateDropdown
        dates={dateArray}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
}

export default App;
