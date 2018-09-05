import React from 'react';

const NutritionList = props => {
  return (
    <React.Fragment>
      {
        props.nutritionData.map(meal => {
          return (
            <ul key={ meal.date }>
              <li>{ meal.name }</li>
              <li>{ meal.date }</li>
              <li>{ meal.type }</li>
              <li>{ meal.calories }</li>
              <li>{ meal.carbs }</li>
              <li>{ meal.protein }</li>
            </ul>
          );
        })
      }
    </React.Fragment>
  );
}
 
export default NutritionList;