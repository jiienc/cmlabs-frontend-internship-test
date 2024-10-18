import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchMealsByCategory = async (categoryName) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${categoryName}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};

export const fetchMealDetail = async (mealId) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal details:', error);
    throw error;
  }
};