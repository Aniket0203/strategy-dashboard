// const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];

// export default function ViewToggle({ activeView, setActiveView }) {
//   return (
//     <div className="toggle-group">
//       {views.map(view => (
//         <button
//           key={view}
//           className={activeView === view ? "active" : ""}
//           onClick={() => setActiveView(view)}
//         >
//           {view}
//         </button>
//       ))}
//     </div>
//   );
// }


function viewToggle({ activeView, setActiveView }) {
  // console.log("activeView toggle", activeView);
  const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];
  return (
    <>
    <div className="toggle-group">
      {views.map((view) => (
        <button
       
          key={view}
          className={activeView == view ? "active" : ""}
          onClick={() => setActiveView(view)}
        >
          {view}
        </button>
      ))}
    </div>
    </>
  );
}

export default viewToggle;
