import React, { useState, useEffect } from "react";

const InfoBox = ({ props }) => {
  const [nutriData, setNutriData] = useState([]);

  useEffect(() => {
    setNutriData(props.nutriData);
  }, [props]);

  const genNutriData = () => {
    const allNutriData = [];
    nutriData.forEach((fItem) => {
      const foodNutri = [];
      Object.keys(fItem).forEach((nutri) => {
        foodNutri.push(
          <div key={crypto.randomUUID()} className="flex flex-row gap-2">
            <span className="nutriType">{nutri}:</span>
            <span className="nutriValue">{fItem[nutri]}</span>
          </div>
        );
      });
      allNutriData.push(<div key={crypto.randomUUID()}>{foodNutri}</div>);
    });
    return allNutriData;
  };

  return (
    <div>
      {nutriData.length > 0 ? (
        <div className="text-lg font-bold">{genNutriData()}</div>
      ) : (
        <div className=" font-bold">
          Could not find requested food item :{"("} Please try again soon!
        </div>
      )}
    </div>
  );
};
export default InfoBox;
