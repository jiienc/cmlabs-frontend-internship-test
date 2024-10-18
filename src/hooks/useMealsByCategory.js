import { useState, useEffect } from 'react';
import { fetchMealsByCategory } from '../api/api';

const useMealsByCategory = (categoryName) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const data = await fetchMealsByCategory(categoryName);
        setMeals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMeals();
  }, [categoryName]);

  return { meals, loading, error };
};

export default useMealsByCategory;
