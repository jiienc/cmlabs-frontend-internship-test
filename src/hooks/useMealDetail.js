import { useState, useEffect } from 'react';
import { fetchMealDetail } from '../api/api';

const useMealDetail = (mealId) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeal = async () => {
      try {
        const data = await fetchMealDetail(mealId);
        setMeal(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMeal();
  }, [mealId]);

  return { meal, loading, error };
};

export default useMealDetail;