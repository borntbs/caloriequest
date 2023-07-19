export const nutriAPIGateway =
  "https://j8sa414f2f.execute-api.ap-southeast-2.amazonaws.com/Retrieve_Nutrition_Data";

export const getNutriInfo = async (e) => {
  const sizeSuffix = e.currentTarget.querySelector("#selectedSize").innerHTML;
  const size = e.currentTarget.querySelector("#servingSize").value + sizeSuffix;
  let food = e.currentTarget.querySelector("#foodItem").value;
  food = food.split(" ").join("%20");

  e.preventDefault();
  const response = await fetch(nutriAPIGateway + `?size=${size}&food=${food}`, {
    method: "GET",
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
};
