import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

interface Ingredient {
  id: string;
  name: string;
  recordId: number;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  recordId: number;
}

interface BaseItem {
  id: string;
  name: string;
  productTaxonomy: string;
  ingredients: Ingredient[];
  products: Product[];
  recordId: number;
}

const generateIngredient = (): Ingredient => ({
  id: uuidv4(),
  name: faker.commerce.productMaterial(),
  recordId: Math.floor(Math.random() * 900) + 100,
});

const generateProduct = (): Product => ({
  id: uuidv4(),
  name: faker.commerce.product(),
  imageUrl: faker.image.url(),
  recordId: Math.floor(Math.random() * 900) + 100,
});

const generateBaseItem = (): BaseItem => ({
  id: uuidv4(),
  name: faker.commerce.productName(),
  productTaxonomy: faker.commerce.department(),
  ingredients: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, generateIngredient),
  products: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, generateProduct),
  recordId: Math.floor(Math.random() * 900) + 100,
});

const generateMockData = (count: number): BaseItem[] => {
  return Array.from({ length: count }, generateBaseItem);
};

const mockData = generateMockData(100);
writeFileSync('mockData.json', JSON.stringify(mockData, null, 2));

console.log('Mock data generated and saved to mockData.json');
