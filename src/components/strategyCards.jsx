// export default function StrategyCards({ strategies }) {
//   console.log("strategies",strategies)
//   const countMap = {};

//   strategies.forEach(item => {
//     countMap[item] = (countMap[item] || 0) + 1;
//   });

//   return (
//     <div className="card-container">
//       {Object.entries(countMap).map(([name, count]) => (

//         <div className="card" key={name}>

//           <h4>{name}</h4>
//           <p>
//             {count} {count === 1 ? "Strategy" : "Strategies"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }


function strategyCards({ strategies,selectedDate }) {
  // console.log("stratgies", strategies);
  if (strategies.length === 0) {
    return <p className="empty   ">No strategies available for<br/><span className="empty-date">{selectedDate}</span> </p>
  }

  const strategiesCount = strategies.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
    <div className="card-container">
      {Object.entries(strategiesCount).map(([name, count]) => (
        <div className="card" key={name}>
            <h4>{name}</h4>

            <p >{count}  {count == 1 ? "Strategy" : "Strategies"}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default strategyCards;
