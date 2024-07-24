import { CarProps } from "@/types";

export const fetchCars = async () => {
  const headers = {
    "x-rapidapi-key": "62c5d8df0fmshc15a435fb67dba4p10d192jsnddb856dd5ad5",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    { headers: headers }
  );

  const result = await response.json();

  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  // Base rental price
  let basePrice = 50; // Assuming a base price of $50

  // Adjust the price based on city_mpg and year
  if (city_mpg < 15) {
    basePrice += 20; // $20 surcharge for low city mpg
  } else if (city_mpg > 35) {
    basePrice -= 10; // $10 discount for high city mpg
  }

  if (year < 2010) {
    basePrice -= 30; // $30 discount for older cars
  } else if (year > 2020) {
    basePrice += 50; // $50 surcharge for newer cars
  }

  // Ensure price is not negative
  if (basePrice < 0) {
    basePrice = 0;
  }

  return basePrice;
};

export const generateCarImageURL = (car: CarProps, angle?: string) => {
  
};
