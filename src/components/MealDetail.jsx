'use client'
import { useParams } from 'react-router-dom';
import useMealDetail from '../hooks/useMealDetail';

const MealDetail = () => {
  const { mealId } = useParams();
  const { meal, loading, error } = useMealDetail(mealId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!meal) return <div>No meal details found.</div>;

  return (
    <div className="bg-gray-900 text-white">
      <div className="pt-6">

        {/* Image */}
        <div className="flex justify-center mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <img
              alt={meal.strMeal}
              src={meal.strMealThumb}
              className="h-80 w-80 object-cover object-center rounded-lg"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">{meal.strMeal}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-100">{meal.strArea} Cuisine</p>

            <div className="mt-10">
              <h3 className="text-xl font-medium text-gray-100">Ingredients</h3>
              <ul className="list-disc pl-6">
                {Array.from({ length: 20 }).map((_, index) => {
                  const ingredient = meal[`strIngredient${index + 1}`];
                  const measure = meal[`strMeasure${index + 1}`];
                  return (
                    ingredient && (
                      <li key={index}>
                        {measure} {ingredient}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-100 whitespace-pre-line">{meal.strInstructions}</p>
              </div>
            </div>

            <div className="mt-10">
              {meal.strYoutube && (
                <div>
                  <h2 className="text-2xl font-semibold">Watch the Recipe</h2>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${new URL(meal.strYoutube).searchParams.get('v')}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
