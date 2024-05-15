import { v4 as uuidv4 } from 'uuid';
import {
    BaseItem,
    QueryGetBaseItemByIdArgs,
    MutationAddBaseItemArgs,
    MutationUpdateBaseItemArgs,
    MutationDeleteBaseItemArgs
  } from './interfaces';

let baseItems: BaseItem[] = [
    {
      "id": "48e160ce-9139-4006-a296-aa6b2abe5a01",
      "name": "Elegant Wooden Pizza",
      "productTaxonomy": "Garden > Jewelery > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 67,
      "mappedProductCount": 38,
      "recordId": 3982
    },
    {
      "id": "91534770-1fc9-4faa-8598-bbd3e4fab07b",
      "name": "Rustic Concrete Chips",
      "productTaxonomy": "Movies > Kids > Jewelery",
      "isForRecipes": true,
      "mappedRecipeCount": 33,
      "mappedProductCount": 84,
      "recordId": 8510
    },
    {
      "id": "6f1fc5c6-458c-4732-b2cf-6dc6477e80d7",
      "name": "Rustic Fresh Sausages",
      "productTaxonomy": "Electronics > Jewelery > Sports",
      "isForRecipes": true,
      "mappedRecipeCount": 49,
      "mappedProductCount": 49,
      "recordId": 3883
    },
    {
      "id": "e5f129c8-c5ac-4328-976f-77f0b3c4bd68",
      "name": "Intelligent Fresh Bike",
      "productTaxonomy": "Baby > Beauty > Sports",
      "isForRecipes": true,
      "mappedRecipeCount": 26,
      "mappedProductCount": 66,
      "recordId": 4980
    },
    {
      "id": "ba9c7021-a203-4894-a202-ec83f61b3b43",
      "name": "Oriental Wooden Bacon",
      "productTaxonomy": "Movies > Sports > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 82,
      "mappedProductCount": 57,
      "recordId": 6351
    },
    {
      "id": "b633c5a2-02d4-4ba1-b3e3-6f448fc3479c",
      "name": "Tasty Cotton Ball",
      "productTaxonomy": "Health > Electronics > Music",
      "isForRecipes": true,
      "mappedRecipeCount": 68,
      "mappedProductCount": 18,
      "recordId": 2436
    },
    {
      "id": "6800bb1f-f4eb-43a6-9f4b-5acb32b3a623",
      "name": "Bespoke Concrete Pants",
      "productTaxonomy": "Tools > Books > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 95,
      "mappedProductCount": 17,
      "recordId": 2020
    },
    {
      "id": "079c99ca-2f4e-41d5-8358-3fed19f7067a",
      "name": "Unbranded Soft Shoes",
      "productTaxonomy": "Home > Sports > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 70,
      "mappedProductCount": 83,
      "recordId": 5379
    },
    {
      "id": "2d78b038-5766-4e13-b28c-178c1862cea9",
      "name": "Recycled Frozen Table",
      "productTaxonomy": "Beauty > Beauty > Kids",
      "isForRecipes": true,
      "mappedRecipeCount": 25,
      "mappedProductCount": 52,
      "recordId": 6799
    },
    {
      "id": "d9e4f481-6673-4f15-9ad7-ae7ab011dccc",
      "name": "Refined Granite Chicken",
      "productTaxonomy": "Clothing > Sports > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 52,
      "mappedProductCount": 90,
      "recordId": 3810
    },
    {
      "id": "09ae18ce-f2fc-4d2a-a5f3-55a002bfefe8",
      "name": "Gorgeous Cotton Chicken",
      "productTaxonomy": "Toys > Movies > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 75,
      "mappedProductCount": 10,
      "recordId": 1283
    },
    {
      "id": "9c16250c-26ce-4adf-8f38-9e42f97100f7",
      "name": "Oriental Bronze Gloves",
      "productTaxonomy": "Jewelery > Home > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 73,
      "mappedProductCount": 41,
      "recordId": 9255
    },
    {
      "id": "8946bed0-b2f5-4b35-a34f-20e742b2b512",
      "name": "Handmade Frozen Mouse",
      "productTaxonomy": "Games > Music > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 71,
      "mappedProductCount": 53,
      "recordId": 3401
    },
    {
      "id": "5b68cc24-c60d-47f1-a86a-b1fb4156f199",
      "name": "Ergonomic Soft Soap",
      "productTaxonomy": "Baby > Games > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 25,
      "mappedProductCount": 34,
      "recordId": 2446
    },
    {
      "id": "64de6ce7-a3af-4ff0-bea4-bfbf8e938f1f",
      "name": "Handmade Wooden Sausages",
      "productTaxonomy": "Automotive > Outdoors > Books",
      "isForRecipes": true,
      "mappedRecipeCount": 28,
      "mappedProductCount": 13,
      "recordId": 6321
    },
    {
      "id": "2a0def71-25fb-4615-a043-9e688c4fe771",
      "name": "Awesome Soft Shirt",
      "productTaxonomy": "Tools > Sports > Toys",
      "isForRecipes": false,
      "mappedRecipeCount": 5,
      "mappedProductCount": 50,
      "recordId": 9588
    },
    {
      "id": "08c15264-0409-4fdb-9df9-bcddcd2671c3",
      "name": "Gorgeous Plastic Chips",
      "productTaxonomy": "Clothing > Electronics > Industrial",
      "isForRecipes": true,
      "mappedRecipeCount": 95,
      "mappedProductCount": 63,
      "recordId": 3965
    },
    {
      "id": "9748a6cf-d7d6-4ee0-9a75-c4d6451c6278",
      "name": "Elegant Cotton Bacon",
      "productTaxonomy": "Electronics > Baby > Shoes",
      "isForRecipes": true,
      "mappedRecipeCount": 60,
      "mappedProductCount": 4,
      "recordId": 463
    },
    {
      "id": "0593d0c2-4db2-4204-a5f2-f5aab02b4ad2",
      "name": "Practical Fresh Bike",
      "productTaxonomy": "Toys > Movies > Electronics",
      "isForRecipes": true,
      "mappedRecipeCount": 8,
      "mappedProductCount": 77,
      "recordId": 1695
    },
    {
      "id": "67e3172c-9c51-4fa9-a13e-3e48cd925cd9",
      "name": "Elegant Frozen Soap",
      "productTaxonomy": "Baby > Toys > Baby",
      "isForRecipes": true,
      "mappedRecipeCount": 58,
      "mappedProductCount": 53,
      "recordId": 4995
    },
    {
      "id": "791f2d1b-cd0e-4997-9fad-618c78190e9f",
      "name": "Modern Granite Bike",
      "productTaxonomy": "Movies > Industrial > Baby",
      "isForRecipes": true,
      "mappedRecipeCount": 74,
      "mappedProductCount": 60,
      "recordId": 5015
    },
    {
      "id": "2ea04696-1df0-4466-9a9a-0122c4db13f5",
      "name": "Practical Soft Mouse",
      "productTaxonomy": "Automotive > Kids > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 5,
      "mappedProductCount": 41,
      "recordId": 2606
    },
    {
      "id": "57f75515-fd5d-4c9c-97b1-e93ae0790cfe",
      "name": "Rustic Rubber Mouse",
      "productTaxonomy": "Grocery > Movies > Toys",
      "isForRecipes": true,
      "mappedRecipeCount": 62,
      "mappedProductCount": 6,
      "recordId": 8441
    },
    {
      "id": "885eedc4-d4e2-46b8-a1d3-1be01c1aab59",
      "name": "Practical Cotton Computer",
      "productTaxonomy": "Industrial > Kids > Sports",
      "isForRecipes": false,
      "mappedRecipeCount": 91,
      "mappedProductCount": 66,
      "recordId": 8217
    },
    {
      "id": "19849881-9595-4a5b-bef6-4687467103a8",
      "name": "Elegant Metal Shirt",
      "productTaxonomy": "Sports > Toys > Tools",
      "isForRecipes": true,
      "mappedRecipeCount": 12,
      "mappedProductCount": 77,
      "recordId": 3950
    },
    {
      "id": "e9b2e501-e475-48c4-ae03-ad10c6846817",
      "name": "Elegant Frozen Mouse",
      "productTaxonomy": "Industrial > Movies > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 26,
      "mappedProductCount": 93,
      "recordId": 185
    },
    {
      "id": "b781dc1f-2439-489c-9cb9-df03d45877fb",
      "name": "Oriental Metal Towels",
      "productTaxonomy": "Outdoors > Baby > Games",
      "isForRecipes": true,
      "mappedRecipeCount": 53,
      "mappedProductCount": 70,
      "recordId": 6923
    },
    {
      "id": "ee12855f-87e2-4d66-8f49-41efc195dfc6",
      "name": "Handcrafted Granite Bike",
      "productTaxonomy": "Kids > Beauty > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 72,
      "mappedProductCount": 89,
      "recordId": 3179
    },
    {
      "id": "b7bb7b87-87a7-4942-a4f5-ec20fb692bde",
      "name": "Ergonomic Bronze Hat",
      "productTaxonomy": "Toys > Outdoors > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 20,
      "mappedProductCount": 46,
      "recordId": 4299
    },
    {
      "id": "cc358649-f771-4eec-99d6-9288d78334b7",
      "name": "Rustic Rubber Tuna",
      "productTaxonomy": "Baby > Garden > Games",
      "isForRecipes": true,
      "mappedRecipeCount": 35,
      "mappedProductCount": 49,
      "recordId": 4091
    },
    {
      "id": "1e0174f7-e9ed-4658-bede-d29c489edbfe",
      "name": "Handmade Fresh Soap",
      "productTaxonomy": "Shoes > Sports > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 94,
      "mappedProductCount": 90,
      "recordId": 9089
    },
    {
      "id": "b1cf4ebc-e0a9-4050-9929-39149a1e394f",
      "name": "Small Rubber Pizza",
      "productTaxonomy": "Tools > Home > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 1,
      "mappedProductCount": 61,
      "recordId": 6604
    },
    {
      "id": "1c9f6b1b-fc6e-4c0d-83e5-0e632bef13a9",
      "name": "Handcrafted Bronze Cheese",
      "productTaxonomy": "Kids > Shoes > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 12,
      "mappedProductCount": 1,
      "recordId": 569
    },
    {
      "id": "7a251d74-da54-401f-b382-669a9342bbf5",
      "name": "Luxurious Wooden Car",
      "productTaxonomy": "Health > Baby > Grocery",
      "isForRecipes": false,
      "mappedRecipeCount": 74,
      "mappedProductCount": 39,
      "recordId": 8291
    },
    {
      "id": "941a6bfa-380f-4acd-b42a-11805262f113",
      "name": "Incredible Soft Cheese",
      "productTaxonomy": "Music > Automotive > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 78,
      "mappedProductCount": 51,
      "recordId": 1671
    },
    {
      "id": "58772e5f-f4e0-4e5f-b361-da8807475603",
      "name": "Ergonomic Cotton Bike",
      "productTaxonomy": "Outdoors > Tools > Computers",
      "isForRecipes": true,
      "mappedRecipeCount": 33,
      "mappedProductCount": 21,
      "recordId": 5907
    },
    {
      "id": "6564beef-e481-40f1-80e0-b8b4ef248ee7",
      "name": "Handcrafted Plastic Salad",
      "productTaxonomy": "Books > Industrial > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 38,
      "mappedProductCount": 85,
      "recordId": 794
    },
    {
      "id": "2181f8fb-3bba-4028-8fcf-db5a7f757f0d",
      "name": "Bespoke Fresh Ball",
      "productTaxonomy": "Jewelery > Home > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 79,
      "mappedProductCount": 77,
      "recordId": 5426
    },
    {
      "id": "43a1db34-f173-4bb7-ab80-c1408e31f03d",
      "name": "Awesome Rubber Computer",
      "productTaxonomy": "Clothing > Sports > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 93,
      "mappedProductCount": 45,
      "recordId": 7439
    },
    {
      "id": "cfb81bf8-12bb-4959-9d3b-df900929ddb8",
      "name": "Refined Frozen Cheese",
      "productTaxonomy": "Garden > Grocery > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 99,
      "mappedProductCount": 81,
      "recordId": 3628
    },
    {
      "id": "83fb17e2-3a49-4b96-aca9-1ca3d58d6696",
      "name": "Unbranded Cotton Bike",
      "productTaxonomy": "Books > Baby > Books",
      "isForRecipes": true,
      "mappedRecipeCount": 13,
      "mappedProductCount": 47,
      "recordId": 8022
    },
    {
      "id": "a1d6d09f-1f35-43bc-8481-684964038310",
      "name": "Fantastic Granite Cheese",
      "productTaxonomy": "Shoes > Toys > Movies",
      "isForRecipes": false,
      "mappedRecipeCount": 5,
      "mappedProductCount": 23,
      "recordId": 8325
    },
    {
      "id": "c52c07c8-a5c2-43ae-b86e-a2c57050a7d9",
      "name": "Unbranded Bronze Hat",
      "productTaxonomy": "Music > Electronics > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 27,
      "mappedProductCount": 73,
      "recordId": 4029
    },
    {
      "id": "610f55ef-f31e-4095-be18-f8ead158deba",
      "name": "Handcrafted Bronze Gloves",
      "productTaxonomy": "Toys > Baby > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 17,
      "mappedProductCount": 10,
      "recordId": 7292
    },
    {
      "id": "98d18dd7-34a4-4526-9986-beeae77d7829",
      "name": "Oriental Granite Bike",
      "productTaxonomy": "Electronics > Outdoors > Grocery",
      "isForRecipes": true,
      "mappedRecipeCount": 5,
      "mappedProductCount": 56,
      "recordId": 1547
    },
    {
      "id": "3160ac7e-3d6c-4ef5-9638-27d636da85fa",
      "name": "Licensed Soft Fish",
      "productTaxonomy": "Garden > Garden > Books",
      "isForRecipes": true,
      "mappedRecipeCount": 53,
      "mappedProductCount": 24,
      "recordId": 5132
    },
    {
      "id": "c475c928-9e79-4c8c-b596-f61666d8b5fe",
      "name": "Handcrafted Cotton Keyboard",
      "productTaxonomy": "Baby > Garden > Outdoors",
      "isForRecipes": true,
      "mappedRecipeCount": 81,
      "mappedProductCount": 64,
      "recordId": 2120
    },
    {
      "id": "f8202c7f-47a6-459a-8c4f-edbeae689455",
      "name": "Handcrafted Cotton Fish",
      "productTaxonomy": "Toys > Toys > Grocery",
      "isForRecipes": true,
      "mappedRecipeCount": 61,
      "mappedProductCount": 24,
      "recordId": 6800
    },
    {
      "id": "4a206138-8ab5-4f58-821a-6e263ca4fef4",
      "name": "Sleek Plastic Pizza",
      "productTaxonomy": "Kids > Clothing > Outdoors",
      "isForRecipes": true,
      "mappedRecipeCount": 42,
      "mappedProductCount": 89,
      "recordId": 2552
    },
    {
      "id": "c00aa73c-929e-4386-9be7-e7d9191c5009",
      "name": "Practical Plastic Cheese",
      "productTaxonomy": "Automotive > Health > Industrial",
      "isForRecipes": true,
      "mappedRecipeCount": 3,
      "mappedProductCount": 95,
      "recordId": 943
    },
    {
      "id": "e8f75454-0e63-4d92-a0ef-192c414bd5cb",
      "name": "Fantastic Rubber Shoes",
      "productTaxonomy": "Jewelery > Beauty > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 90,
      "mappedProductCount": 0,
      "recordId": 2029
    },
    {
      "id": "d1b02e5c-d023-47d5-957d-8f5076de3b1e",
      "name": "Fantastic Frozen Gloves",
      "productTaxonomy": "Shoes > Health > Automotive",
      "isForRecipes": false,
      "mappedRecipeCount": 14,
      "mappedProductCount": 44,
      "recordId": 1449
    },
    {
      "id": "1b7e9923-bfeb-4153-b953-430c720deb51",
      "name": "Intelligent Frozen Cheese",
      "productTaxonomy": "Sports > Industrial > Jewelery",
      "isForRecipes": true,
      "mappedRecipeCount": 93,
      "mappedProductCount": 41,
      "recordId": 8005
    },
    {
      "id": "241a1afd-1066-4eaa-90b6-223747ea13cc",
      "name": "Gorgeous Frozen Keyboard",
      "productTaxonomy": "Music > Industrial > Toys",
      "isForRecipes": false,
      "mappedRecipeCount": 84,
      "mappedProductCount": 98,
      "recordId": 9948
    },
    {
      "id": "8ef17d96-e25d-4ec9-9995-04aff45fbd82",
      "name": "Incredible Soft Car",
      "productTaxonomy": "Industrial > Clothing > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 60,
      "mappedProductCount": 13,
      "recordId": 3203
    },
    {
      "id": "197be31b-f858-4fef-896c-8a421ffa21f3",
      "name": "Practical Metal Bacon",
      "productTaxonomy": "Music > Shoes > Toys",
      "isForRecipes": true,
      "mappedRecipeCount": 54,
      "mappedProductCount": 53,
      "recordId": 4779
    },
    {
      "id": "02134607-8feb-434d-8638-ea93841f4b8e",
      "name": "Bespoke Metal Chicken",
      "productTaxonomy": "Home > Beauty > Outdoors",
      "isForRecipes": true,
      "mappedRecipeCount": 56,
      "mappedProductCount": 55,
      "recordId": 6067
    },
    {
      "id": "b50d43b5-3594-48a4-ab8b-c20aab8bb876",
      "name": "Recycled Steel Pants",
      "productTaxonomy": "Electronics > Music > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 31,
      "mappedProductCount": 67,
      "recordId": 9750
    },
    {
      "id": "6e349b04-63a7-4048-a634-ab8efa9e16f1",
      "name": "Gorgeous Steel Towels",
      "productTaxonomy": "Jewelery > Industrial > Tools",
      "isForRecipes": true,
      "mappedRecipeCount": 63,
      "mappedProductCount": 64,
      "recordId": 6465
    },
    {
      "id": "3aaf0b49-574a-4f4f-92c6-344f063b509c",
      "name": "Licensed Bronze Salad",
      "productTaxonomy": "Grocery > Tools > Books",
      "isForRecipes": true,
      "mappedRecipeCount": 50,
      "mappedProductCount": 95,
      "recordId": 3120
    },
    {
      "id": "8450dc31-4125-4617-af24-3c60d6f15eee",
      "name": "Handcrafted Plastic Keyboard",
      "productTaxonomy": "Books > Electronics > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 57,
      "mappedProductCount": 5,
      "recordId": 8206
    },
    {
      "id": "be6c0cbd-11b6-4a2b-80dc-46eff75e624c",
      "name": "Practical Cotton Shoes",
      "productTaxonomy": "Automotive > Tools > Sports",
      "isForRecipes": true,
      "mappedRecipeCount": 35,
      "mappedProductCount": 3,
      "recordId": 314
    },
    {
      "id": "df9ba46d-4a9d-4f46-a848-05ea02a7bd22",
      "name": "Awesome Soft Pants",
      "productTaxonomy": "Beauty > Outdoors > Books",
      "isForRecipes": false,
      "mappedRecipeCount": 35,
      "mappedProductCount": 45,
      "recordId": 9510
    },
    {
      "id": "dbbd66df-ce5b-4df2-a8f1-fe726fe2fcf4",
      "name": "Awesome Bronze Towels",
      "productTaxonomy": "Industrial > Beauty > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 35,
      "mappedProductCount": 19,
      "recordId": 9671
    },
    {
      "id": "12b83604-6e93-4094-a4a4-3b27d6dffa76",
      "name": "Handmade Granite Chicken",
      "productTaxonomy": "Beauty > Kids > Outdoors",
      "isForRecipes": true,
      "mappedRecipeCount": 6,
      "mappedProductCount": 19,
      "recordId": 3477
    },
    {
      "id": "13f4edea-fdbc-4baa-8dc5-407554021196",
      "name": "Handcrafted Cotton Keyboard",
      "productTaxonomy": "Electronics > Home > Jewelery",
      "isForRecipes": true,
      "mappedRecipeCount": 68,
      "mappedProductCount": 26,
      "recordId": 5421
    },
    {
      "id": "91afa8e5-35f2-4af1-a79c-f3ccd781666e",
      "name": "Ergonomic Soft Shirt",
      "productTaxonomy": "Industrial > Clothing > Health",
      "isForRecipes": true,
      "mappedRecipeCount": 95,
      "mappedProductCount": 81,
      "recordId": 8069
    },
    {
      "id": "d2952c8a-472e-4a49-bed3-896853682bf2",
      "name": "Bespoke Cotton Bacon",
      "productTaxonomy": "Kids > Garden > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 63,
      "mappedProductCount": 16,
      "recordId": 5915
    },
    {
      "id": "b9d3058b-1690-4297-a1ec-aa6f20b60a03",
      "name": "Intelligent Cotton Bike",
      "productTaxonomy": "Sports > Clothing > Automotive",
      "isForRecipes": true,
      "mappedRecipeCount": 28,
      "mappedProductCount": 89,
      "recordId": 5431
    },
    {
      "id": "f243f319-f6e0-482e-8262-c020a341822a",
      "name": "Generic Metal Pizza",
      "productTaxonomy": "Automotive > Music > Tools",
      "isForRecipes": true,
      "mappedRecipeCount": 41,
      "mappedProductCount": 37,
      "recordId": 6992
    },
    {
      "id": "6bebde86-c204-46a7-b2e1-9cae59198c68",
      "name": "Small Rubber Towels",
      "productTaxonomy": "Home > Baby > Baby",
      "isForRecipes": true,
      "mappedRecipeCount": 84,
      "mappedProductCount": 37,
      "recordId": 5137
    },
    {
      "id": "b4c04892-00f4-4532-9c1b-d34558f09560",
      "name": "Awesome Frozen Cheese",
      "productTaxonomy": "Music > Kids > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 42,
      "mappedProductCount": 45,
      "recordId": 8609
    },
    {
      "id": "b6f3b34e-d913-4255-af2c-fb62aa2e3c56",
      "name": "Generic Metal Ball",
      "productTaxonomy": "Beauty > Industrial > Grocery",
      "isForRecipes": true,
      "mappedRecipeCount": 82,
      "mappedProductCount": 87,
      "recordId": 5909
    },
    {
      "id": "5b40fd3b-3d38-4a3b-bb26-6704570eb395",
      "name": "Oriental Fresh Soap",
      "productTaxonomy": "Garden > Sports > Grocery",
      "isForRecipes": true,
      "mappedRecipeCount": 96,
      "mappedProductCount": 31,
      "recordId": 1648
    },
    {
      "id": "f698d1f1-6afd-4d35-a1dc-4a2c1edfae93",
      "name": "Oriental Soft Pizza",
      "productTaxonomy": "Sports > Clothing > Kids",
      "isForRecipes": true,
      "mappedRecipeCount": 37,
      "mappedProductCount": 70,
      "recordId": 949
    },
    {
      "id": "62bf4e26-23c6-4ea0-9331-9c094e310a98",
      "name": "Ergonomic Granite Bacon",
      "productTaxonomy": "Jewelery > Baby > Electronics",
      "isForRecipes": true,
      "mappedRecipeCount": 96,
      "mappedProductCount": 29,
      "recordId": 3274
    },
    {
      "id": "3f78a3d9-a87b-4e45-8ac3-c3f8592a677b",
      "name": "Handmade Cotton Keyboard",
      "productTaxonomy": "Shoes > Computers > Movies",
      "isForRecipes": false,
      "mappedRecipeCount": 92,
      "mappedProductCount": 88,
      "recordId": 819
    },
    {
      "id": "8f5a2990-d03a-4d90-a184-b9b8c7802499",
      "name": "Gorgeous Soft Chicken",
      "productTaxonomy": "Electronics > Kids > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 70,
      "mappedProductCount": 4,
      "recordId": 9120
    },
    {
      "id": "9763e657-0f9e-4ac7-8fab-d95a3bfaba9b",
      "name": "Practical Granite Ball",
      "productTaxonomy": "Kids > Toys > Tools",
      "isForRecipes": true,
      "mappedRecipeCount": 70,
      "mappedProductCount": 21,
      "recordId": 9887
    },
    {
      "id": "0bc0bb1c-edb4-4346-a4c3-9b133bbfa8da",
      "name": "Tasty Soft Shoes",
      "productTaxonomy": "Sports > Clothing > Shoes",
      "isForRecipes": true,
      "mappedRecipeCount": 61,
      "mappedProductCount": 5,
      "recordId": 9999
    },
    {
      "id": "7d767c17-54f8-4c12-bc20-9c64424fc6f6",
      "name": "Generic Metal Pants",
      "productTaxonomy": "Health > Games > Jewelery",
      "isForRecipes": true,
      "mappedRecipeCount": 98,
      "mappedProductCount": 5,
      "recordId": 8670
    },
    {
      "id": "1040d008-db56-462f-83fb-474782432791",
      "name": "Gorgeous Steel Car",
      "productTaxonomy": "Automotive > Toys > Toys",
      "isForRecipes": true,
      "mappedRecipeCount": 47,
      "mappedProductCount": 84,
      "recordId": 1791
    },
    {
      "id": "dd2756ba-9eea-4be6-977e-d5b4ed63613e",
      "name": "Intelligent Granite Cheese",
      "productTaxonomy": "Electronics > Computers > Clothing",
      "isForRecipes": true,
      "mappedRecipeCount": 41,
      "mappedProductCount": 82,
      "recordId": 1402
    },
    {
      "id": "80efd275-366a-4fa2-9865-38cac238b0e9",
      "name": "Sleek Bronze Pants",
      "productTaxonomy": "Automotive > Home > Clothing",
      "isForRecipes": true,
      "mappedRecipeCount": 63,
      "mappedProductCount": 16,
      "recordId": 5234
    },
    {
      "id": "61fc85c3-c4a9-4b5f-8085-11354989a2d0",
      "name": "Bespoke Cotton Pants",
      "productTaxonomy": "Industrial > Outdoors > Industrial",
      "isForRecipes": true,
      "mappedRecipeCount": 10,
      "mappedProductCount": 26,
      "recordId": 6236
    },
    {
      "id": "2d5fc19b-bde0-4648-90c1-cf63282214a5",
      "name": "Refined Plastic Keyboard",
      "productTaxonomy": "Automotive > Books > Toys",
      "isForRecipes": true,
      "mappedRecipeCount": 34,
      "mappedProductCount": 20,
      "recordId": 8868
    },
    {
      "id": "bba61827-370d-44cb-98a9-3d51b67a6f4c",
      "name": "Bespoke Plastic Pizza",
      "productTaxonomy": "Computers > Toys > Garden",
      "isForRecipes": true,
      "mappedRecipeCount": 92,
      "mappedProductCount": 21,
      "recordId": 9995
    },
    {
      "id": "4fd54fe7-aac4-4934-ad0a-60434ec1ccef",
      "name": "Luxurious Plastic Tuna",
      "productTaxonomy": "Home > Outdoors > Baby",
      "isForRecipes": true,
      "mappedRecipeCount": 86,
      "mappedProductCount": 75,
      "recordId": 3624
    },
    {
      "id": "25d3cf7d-1e12-4149-83ab-09218e906c99",
      "name": "Electronic Fresh Shoes",
      "productTaxonomy": "Games > Shoes > Shoes",
      "isForRecipes": true,
      "mappedRecipeCount": 27,
      "mappedProductCount": 16,
      "recordId": 5044
    },
    {
      "id": "38014567-e9e2-426c-8917-1e2d5c954c7f",
      "name": "Gorgeous Plastic Cheese",
      "productTaxonomy": "Baby > Clothing > Jewelery",
      "isForRecipes": true,
      "mappedRecipeCount": 36,
      "mappedProductCount": 37,
      "recordId": 7673
    },
    {
      "id": "2059eb9d-f638-4e2d-8190-a3f4e1b21486",
      "name": "Unbranded Granite Soap",
      "productTaxonomy": "Home > Automotive > Music",
      "isForRecipes": true,
      "mappedRecipeCount": 64,
      "mappedProductCount": 39,
      "recordId": 4197
    },
    {
      "id": "1e6e81f1-c44f-462e-bafb-008fcbf44cbf",
      "name": "Oriental Steel Soap",
      "productTaxonomy": "Outdoors > Home > Shoes",
      "isForRecipes": true,
      "mappedRecipeCount": 92,
      "mappedProductCount": 3,
      "recordId": 9318
    },
    {
      "id": "98289068-158e-4a24-861e-7bff75fb9915",
      "name": "Electronic Metal Shirt",
      "productTaxonomy": "Movies > Industrial > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 77,
      "mappedProductCount": 60,
      "recordId": 2516
    },
    {
      "id": "cf089b96-ff0c-4012-a689-9e2846c70a46",
      "name": "Intelligent Soft Chicken",
      "productTaxonomy": "Tools > Sports > Movies",
      "isForRecipes": true,
      "mappedRecipeCount": 82,
      "mappedProductCount": 46,
      "recordId": 713
    },
    {
      "id": "346dc7da-c405-4421-b158-d12069ee40fa",
      "name": "Recycled Rubber Bike",
      "productTaxonomy": "Games > Tools > Toys",
      "isForRecipes": true,
      "mappedRecipeCount": 17,
      "mappedProductCount": 1,
      "recordId": 5440
    },
    {
      "id": "c35435cd-7b38-42c4-9466-0ee8736c75af",
      "name": "Generic Steel Salad",
      "productTaxonomy": "Industrial > Health > Home",
      "isForRecipes": true,
      "mappedRecipeCount": 0,
      "mappedProductCount": 38,
      "recordId": 3850
    },
    {
      "id": "283691e9-f646-4ecd-951e-b3d4d0c333b6",
      "name": "Small Rubber Bacon",
      "productTaxonomy": "Games > Movies > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 78,
      "mappedProductCount": 16,
      "recordId": 4575
    },
    {
      "id": "a22a21b5-0930-4eaf-bf59-6f114b4601ab",
      "name": "Awesome Rubber Chicken",
      "productTaxonomy": "Music > Home > Clothing",
      "isForRecipes": true,
      "mappedRecipeCount": 34,
      "mappedProductCount": 45,
      "recordId": 4670
    },
    {
      "id": "a2c7c3f7-3443-4093-856b-d236c0c7fd69",
      "name": "Tasty Soft Mouse",
      "productTaxonomy": "Books > Sports > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 61,
      "mappedProductCount": 6,
      "recordId": 9358
    },
    {
      "id": "247441e3-0fb0-4534-a1f8-011981b48a31",
      "name": "Modern Concrete Computer",
      "productTaxonomy": "Shoes > Home > Beauty",
      "isForRecipes": true,
      "mappedRecipeCount": 88,
      "mappedProductCount": 83,
      "recordId": 4256
    }
  ];

/*
* A function that populates data for a particular field in a GraphQL schems, 
* providing instructions needed to resolve data queries and mutations,
* e.g. return data provided by query fields,
*      or read/write local data to cache (client)
* */
export const resolvers = {
    Query: {
      getBaseItems: (): BaseItem[] => baseItems,
      getBaseItemById: (parent: unknown, args: QueryGetBaseItemByIdArgs): BaseItem | undefined =>
        baseItems.find(item => item.id === args.id),
    },
    Mutation: {
      addBaseItem: (parent: unknown, { input }: MutationAddBaseItemArgs): BaseItem => {
        const newItem: BaseItem = {
            id: uuidv4(),
            ...input,
            recordId: (Math.floor(Math.random() * 900) + 100),
        }
        baseItems.push(newItem);
        return newItem;
      },
      updateBaseItem: (parent: unknown, { input }: MutationUpdateBaseItemArgs): BaseItem | undefined => {
        const index = baseItems.findIndex(item => item.id === input.id);
        if (index === -1) {
          throw new Error('Item not found');
        }
        baseItems[index] = { ...baseItems[index], ...input };
        return baseItems[index];
      },
      deleteBaseItem: (parent: unknown, { id }: MutationDeleteBaseItemArgs): boolean => {
        const index = baseItems.findIndex(item => item.id === id);
        if (index === -1) {
          throw new Error('Item not found');
        }
        baseItems.splice(index, 1);
        return true;
      },
    },
};
