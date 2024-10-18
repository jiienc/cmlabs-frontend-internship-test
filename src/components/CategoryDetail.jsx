import { useParams, useNavigate } from 'react-router-dom';
import useMealsByCategory from '../hooks/useMealsByCategory';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const { meals, loading, error } = useMealsByCategory(categoryName);
  const navigate = useNavigate();

  const handleMealClick = (mealId) => {
    navigate(`/meal/${mealId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-bold my-10 text-center">{categoryName} Meals</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {meals && meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal} className="group cursor-pointer" onClick={() => handleMealClick(meal.idMeal)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    alt={meal.strMeal}
                    src={meal.strMealThumb}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <p className="mt-4 text-lg font-medium text-gray-100">{meal.strMeal}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">No meals found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
