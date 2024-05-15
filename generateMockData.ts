import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

// interface Ingredient {
//   id: string;
//   name: string;
//   recordId: number;
//   baseItemId: number;
// }

// interface Product {
//   id: string;
//   name: string;
//   imageUrl: string;
//   recordId: number;
//   baseItemId: number;
// }

interface BaseItem {
  id: string;
  name: string;
  productTaxonomy: string;
  isForRecipes: boolean;
  mappedRecipeCount: number;
  mappedProductCount: number;
  // ingredients: Ingredient[];
  // products: Product[];
  recordId: number;
}

// const generateIngredient = (): Ingredient => ({
//   id: uuidv4(),
//   name: faker.commerce.productMaterial(),
//   recordId: faker.datatype.number(),
// });

// const generateProduct = (): Product => ({
//   id: uuidv4(),
//   name: faker.commerce.product(),
//   imageUrl: faker.image.url(),
//   recordId: faker.datatype.number(),
// });

const generateBaseItem = (): BaseItem => ({
  id: uuidv4(),
  name: faker.commerce.productName(),
  productTaxonomy: `${faker.commerce.department()} > ${faker.commerce.department()} > ${faker.commerce.department()}`,
  isForRecipes: (faker.datatype.boolean() || faker.datatype.boolean(0.9)),
  mappedRecipeCount: faker.number.int({ max: 99 }),
  mappedProductCount: faker.number.int({ max: 99 }),
  // ingredients: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, generateIngredient),
  // products: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, generateProduct),
  recordId: faker.number.int({ max: 9999 }),
});

const generateMockData = (count: number): BaseItem[] => {
  return Array.from({ length: count }, generateBaseItem);
};

const mockData = generateMockData(100);
writeFileSync('mockData.json', JSON.stringify(mockData, null, 2));

console.log('Mock data generated and saved to mockData.json');
