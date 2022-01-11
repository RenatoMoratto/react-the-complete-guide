import { useState, useEffect } from 'react';

import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import style from './AvailableMeals.module.css';

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMeals = async () => {
    const response = await fetch(
      'https://react-the-complete-guide-http-default-rtdb.firebaseio.com/meals.json'
    );
    const responseData = await response.json();

    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);

  if (isLoading) {
    return <section className={style.mealsLoading}>Loading</section>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
}

export default AvailableMeals;
