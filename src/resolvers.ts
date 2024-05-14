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

let baseItems: BaseItem[] = [
    {
      "id": "e53bd42b-5e5f-44dc-a991-27e190147400",
      "name": "Bespoke Steel Keyboard",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "f8e1b1ba-d8e7-4116-922d-c6adf7364a8f",
          "name": "Frozen",
          "recordId": 526
        },
        {
          "id": "7fb1d3ba-e956-4818-bef5-fb728a9f99b6",
          "name": "Granite",
          "recordId": 944
        },
        {
          "id": "dae3d6f0-bb06-4312-87a9-08ac24dd2427",
          "name": "Metal",
          "recordId": 422
        }
      ],
      "products": [
        {
          "id": "8d0646bc-9df4-417f-9daa-1c1a8fe69172",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/S991KRi/640/480",
          "recordId": 783
        },
        {
          "id": "df48e63c-6155-4596-8b55-68966feae933",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=4563001285804032",
          "recordId": 785
        },
        {
          "id": "982ca26c-74d6-4f96-bab7-7b50251e64fb",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/ExKpMSiu0h/640/480",
          "recordId": 587
        }
      ],
      "recordId": 383
    },
    {
      "id": "5aac0e4d-9512-4d68-ac18-884c4fb2c5fa",
      "name": "Electronic Soft Sausages",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "94759ac6-91de-4a07-be40-a08fa1f888d4",
          "name": "Frozen",
          "recordId": 316
        }
      ],
      "products": [
        {
          "id": "15b0d9bb-56b6-49ae-baea-02463bf35c78",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/GBFNPmmK/640/480",
          "recordId": 583
        },
        {
          "id": "3e738e0a-2872-4005-b5dd-459d5abf9f07",
          "name": "Chicken",
          "imageUrl": "https://picsum.photos/seed/S6gaJQ/640/480",
          "recordId": 673
        },
        {
          "id": "5a71d70a-cc0e-4f2f-a693-2afd30ff369a",
          "name": "Towels",
          "imageUrl": "https://picsum.photos/seed/jEd8HkJ/640/480",
          "recordId": 910
        },
        {
          "id": "248256d2-0049-4fcb-b8d5-bc7fbfa4982d",
          "name": "Towels",
          "imageUrl": "https://picsum.photos/seed/QY1yQ/640/480",
          "recordId": 322
        },
        {
          "id": "a54c8aad-36ed-4700-ba4a-a54b5e5d17bc",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/rU6fd/640/480",
          "recordId": 563
        }
      ],
      "recordId": 652
    },
    {
      "id": "73c6823a-086a-4ab5-8464-1a093bdf24df",
      "name": "Incredible Concrete Cheese",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "00592d47-6576-4eae-94fa-07d4b18c1aa7",
          "name": "Concrete",
          "recordId": 458
        }
      ],
      "products": [
        {
          "id": "5ceebbbf-9e1b-4e55-b505-51fb80cb29b2",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/8NoTn6od8x/640/480",
          "recordId": 136
        },
        {
          "id": "04075279-8fc5-46e3-9213-692763d5450d",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/5Xs7ouSP/640/480",
          "recordId": 575
        },
        {
          "id": "791aed0f-5401-4143-970b-3210d6eaf6df",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/pCdyX/640/480",
          "recordId": 108
        },
        {
          "id": "6af893a4-aa18-47d5-b2a8-235babc0fbf0",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/f2iXPA/640/480",
          "recordId": 904
        }
      ],
      "recordId": 574
    },
    {
      "id": "0f3327e5-a93f-496b-9430-581766e3d2e6",
      "name": "Handmade Bronze Shirt",
      "productTaxonomy": "Clothing",
      "ingredients": [
        {
          "id": "71f0a3c2-c21e-4762-ba2b-2c1f09dd0067",
          "name": "Metal",
          "recordId": 363
        },
        {
          "id": "2467197f-fc0c-4fed-b128-d813b649d020",
          "name": "Frozen",
          "recordId": 397
        },
        {
          "id": "a5a3c05e-4b28-4d77-ae56-8d96934e1954",
          "name": "Frozen",
          "recordId": 620
        },
        {
          "id": "4cabcfa4-2d8a-443e-aa4c-3b6a6fb61d6c",
          "name": "Metal",
          "recordId": 942
        }
      ],
      "products": [
        {
          "id": "688f1768-599c-4d87-90dc-1cc96f7ea55f",
          "name": "Tuna",
          "imageUrl": "https://loremflickr.com/640/480?lock=3193981387145216",
          "recordId": 479
        },
        {
          "id": "ab10c8b8-5771-42d0-bb8a-1ba3627f5110",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/YyVz54/640/480",
          "recordId": 237
        },
        {
          "id": "8acfad74-661d-4b70-a61d-ba162f4f737e",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/q9H3L2G/640/480",
          "recordId": 141
        },
        {
          "id": "9640a1f1-9763-4c2b-b270-3d11fe48cf3d",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=2822657909194752",
          "recordId": 831
        }
      ],
      "recordId": 731
    },
    {
      "id": "0fff430c-6987-4c2c-ab7a-33a103446446",
      "name": "Modern Frozen Shoes",
      "productTaxonomy": "Computers",
      "ingredients": [
        {
          "id": "abee1021-b062-43d3-b2a7-6e4e84b85ba5",
          "name": "Concrete",
          "recordId": 783
        },
        {
          "id": "f9a3c26c-bf73-44e5-83ba-d9f908938b39",
          "name": "Fresh",
          "recordId": 351
        },
        {
          "id": "6377d78a-bf5f-4846-b71f-95b656884312",
          "name": "Concrete",
          "recordId": 359
        },
        {
          "id": "46f10726-5ce4-4c7d-b390-b47ad149d004",
          "name": "Fresh",
          "recordId": 477
        },
        {
          "id": "fb9b43f7-3693-4337-84a8-96d18f5454f4",
          "name": "Fresh",
          "recordId": 292
        }
      ],
      "products": [
        {
          "id": "8e3eebd2-d74b-44c2-a659-32886b0f56b0",
          "name": "Chicken",
          "imageUrl": "https://picsum.photos/seed/QSBZC0y/640/480",
          "recordId": 368
        }
      ],
      "recordId": 265
    },
    {
      "id": "de255a07-3b2f-4a7e-a0e8-f871bb08f289",
      "name": "Small Rubber Mouse",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "a4f0fd27-bbfe-44dd-b03b-fef0ca31516c",
          "name": "Frozen",
          "recordId": 547
        },
        {
          "id": "5ca13269-4d1e-4fe3-b547-e11bfa372eb5",
          "name": "Cotton",
          "recordId": 995
        },
        {
          "id": "af355f7a-0a6f-4fb8-b339-8e7d9a0ed84b",
          "name": "Frozen",
          "recordId": 100
        },
        {
          "id": "6de70190-d534-4254-bc56-c08b9aa5fe4f",
          "name": "Concrete",
          "recordId": 603
        },
        {
          "id": "a05e5e32-64fe-4074-a0c9-b242e0007e81",
          "name": "Plastic",
          "recordId": 731
        }
      ],
      "products": [
        {
          "id": "0fbde8e2-450e-4add-b0af-d75b4071557e",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/rKRA4/640/480",
          "recordId": 475
        },
        {
          "id": "cf0be88a-727a-442b-8c23-3d7f87275572",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=3169794234777600",
          "recordId": 221
        }
      ],
      "recordId": 522
    },
    {
      "id": "e1ba3a4e-c696-4c26-9c92-517c36a77a20",
      "name": "Fantastic Plastic Fish",
      "productTaxonomy": "Kids",
      "ingredients": [
        {
          "id": "3a6ca00b-22ff-435c-bf6d-f9312c04e1bb",
          "name": "Soft",
          "recordId": 463
        },
        {
          "id": "6f749e67-011c-4c1e-9b1d-df00169c5033",
          "name": "Cotton",
          "recordId": 108
        },
        {
          "id": "73eb78a0-6a9c-4907-af1f-5eb4b8b76f1d",
          "name": "Plastic",
          "recordId": 714
        }
      ],
      "products": [
        {
          "id": "05724892-8042-4a67-bba7-b66b818cb507",
          "name": "Cheese",
          "imageUrl": "https://picsum.photos/seed/8Ds2thFBD/640/480",
          "recordId": 179
        }
      ],
      "recordId": 671
    },
    {
      "id": "a77a8c59-0355-4dfd-98bc-b59387e52a24",
      "name": "Unbranded Metal Salad",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "288a7a30-b26d-4f5d-93e8-ae4694f955d4",
          "name": "Cotton",
          "recordId": 124
        },
        {
          "id": "542269bb-1173-4e39-8fdd-555cbdf7a8f1",
          "name": "Wooden",
          "recordId": 165
        },
        {
          "id": "9cf7d09d-dc49-4dde-b229-db2c8d59ddfe",
          "name": "Fresh",
          "recordId": 700
        },
        {
          "id": "e1559b66-1fc4-42ec-a553-82f0aafe5d77",
          "name": "Bronze",
          "recordId": 264
        },
        {
          "id": "41c4a00a-47ee-4534-8110-33e7ef5c1655",
          "name": "Metal",
          "recordId": 987
        }
      ],
      "products": [
        {
          "id": "c2bd7d8f-2718-4fed-bd0d-128ace860db2",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=6248977829724160",
          "recordId": 864
        },
        {
          "id": "33c44f4f-2ed8-4d55-94be-bdfa4c924972",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=7602654125490176",
          "recordId": 482
        },
        {
          "id": "d4ce047f-b3bc-4ee3-95d4-0436a876eee8",
          "name": "Table",
          "imageUrl": "https://loremflickr.com/640/480?lock=8116696673943552",
          "recordId": 942
        }
      ],
      "recordId": 904
    },
    {
      "id": "c3093c61-8914-43ad-9c3d-32c9db64aecd",
      "name": "Generic Soft Salad",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "1a324f86-6fe0-473f-9ce7-31a93293961e",
          "name": "Concrete",
          "recordId": 602
        },
        {
          "id": "673286ad-5fae-476d-90a9-d6b12c6108cc",
          "name": "Soft",
          "recordId": 133
        },
        {
          "id": "30c72f41-9975-4d72-b880-e19c069bbcf9",
          "name": "Plastic",
          "recordId": 968
        },
        {
          "id": "8c4faa5b-69d7-417c-8917-d5a5ca30f24e",
          "name": "Plastic",
          "recordId": 850
        },
        {
          "id": "090ca0d2-d139-413a-8041-2dda1e6a9ff2",
          "name": "Steel",
          "recordId": 347
        }
      ],
      "products": [
        {
          "id": "ad2a07db-e421-4dc2-a310-dcebb180297c",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=3983392165068800",
          "recordId": 835
        }
      ],
      "recordId": 353
    },
    {
      "id": "a5e152cb-b33b-4835-8c80-16deb253fc62",
      "name": "Sleek Bronze Car",
      "productTaxonomy": "Shoes",
      "ingredients": [
        {
          "id": "8ee46390-520c-4993-82da-c0bb632243b6",
          "name": "Fresh",
          "recordId": 452
        },
        {
          "id": "8835dcbf-a35d-4a0f-aaab-6c36aec67e4e",
          "name": "Rubber",
          "recordId": 416
        },
        {
          "id": "24eea4c8-293e-4f71-994c-8491fd666a94",
          "name": "Plastic",
          "recordId": 770
        }
      ],
      "products": [
        {
          "id": "836c1b4e-9b1f-4f5d-89c0-a52b01e9a867",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=1411118161461248",
          "recordId": 419
        },
        {
          "id": "0dd49b72-c692-4952-9dbb-fab53f23774b",
          "name": "Cheese",
          "imageUrl": "https://picsum.photos/seed/zzwkyFDO/640/480",
          "recordId": 953
        },
        {
          "id": "3b1d048b-3f6a-4918-bb6e-bb2570df593b",
          "name": "Soap",
          "imageUrl": "https://picsum.photos/seed/PY23HOc/640/480",
          "recordId": 669
        },
        {
          "id": "1453c90b-e1ae-496e-b5d4-33c6756a29d5",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/WUPPsWNz/640/480",
          "recordId": 718
        },
        {
          "id": "0859f23a-bfc5-4c0b-b394-e8d7d3f7f31e",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/aJQzZ1N/640/480",
          "recordId": 371
        }
      ],
      "recordId": 937
    },
    {
      "id": "0c310a0a-b5cb-4224-96b7-cb9f3d77bae6",
      "name": "Ergonomic Wooden Sausages",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "351cf330-8a31-4887-bf93-938fcbe00033",
          "name": "Wooden",
          "recordId": 249
        }
      ],
      "products": [
        {
          "id": "e52a0fbd-8de2-4dd1-bf27-7f75cf4d0f79",
          "name": "Towels",
          "imageUrl": "https://picsum.photos/seed/BI7qTwD/640/480",
          "recordId": 820
        },
        {
          "id": "b1c5f370-bdcc-4c04-bd6e-9851a444a569",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/12kX2Pgo/640/480",
          "recordId": 953
        },
        {
          "id": "86e1d7f5-9de7-4ac1-918d-5bfd1de26b40",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/1gT8cXfxmL/640/480",
          "recordId": 190
        }
      ],
      "recordId": 678
    },
    {
      "id": "fa1e3be5-4c8e-4d2b-a71f-579a427b06fa",
      "name": "Licensed Plastic Salad",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "4034b0ee-1b75-4502-8a41-d84bda8b246e",
          "name": "Wooden",
          "recordId": 460
        },
        {
          "id": "cec6e893-cc25-42ba-bd48-3c53395418ea",
          "name": "Frozen",
          "recordId": 618
        },
        {
          "id": "1b87b2f9-01b9-43f3-a40a-ee4c300f66b4",
          "name": "Wooden",
          "recordId": 532
        },
        {
          "id": "666ec2be-f815-40a6-8978-70b913bd1aea",
          "name": "Cotton",
          "recordId": 105
        },
        {
          "id": "077ebf62-95d0-4e70-af12-253221a9b149",
          "name": "Concrete",
          "recordId": 208
        }
      ],
      "products": [
        {
          "id": "91a6a7b3-f852-4929-a942-d7d10f1d3ae0",
          "name": "Car",
          "imageUrl": "https://loremflickr.com/640/480?lock=6924713376874496",
          "recordId": 802
        },
        {
          "id": "eeba6035-c9fa-4d8e-841b-fd027cb9c511",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/FTOMm/640/480",
          "recordId": 260
        }
      ],
      "recordId": 996
    },
    {
      "id": "43c482eb-a6c2-47fd-a27e-e267a95b6aab",
      "name": "Sleek Concrete Shoes",
      "productTaxonomy": "Health",
      "ingredients": [
        {
          "id": "ba7af5d1-5dc1-4f12-93fa-ec4995832673",
          "name": "Bronze",
          "recordId": 310
        },
        {
          "id": "f01ba5b8-a470-46d7-8302-0f03229768f8",
          "name": "Wooden",
          "recordId": 427
        }
      ],
      "products": [
        {
          "id": "276a366c-e015-4631-b960-64e58096c022",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=6436565626650624",
          "recordId": 596
        },
        {
          "id": "86b92298-207c-4e7e-ab65-3d89dd5c722b",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=1585532761014272",
          "recordId": 195
        }
      ],
      "recordId": 265
    },
    {
      "id": "4047c445-23e8-4ee4-8282-f6ec9dabe1ef",
      "name": "Intelligent Plastic Chair",
      "productTaxonomy": "Electronics",
      "ingredients": [
        {
          "id": "ff530323-12b2-4c33-a72c-912141957d3d",
          "name": "Rubber",
          "recordId": 605
        },
        {
          "id": "d524f3ea-6ee5-4da7-bf5c-39f6b5e0ed92",
          "name": "Metal",
          "recordId": 525
        },
        {
          "id": "d012c661-1b1e-46f9-b636-13685d661aa4",
          "name": "Concrete",
          "recordId": 274
        },
        {
          "id": "632e200c-19e0-46fa-8166-8e8da1725535",
          "name": "Soft",
          "recordId": 692
        },
        {
          "id": "c994f026-f579-441a-a355-2c232c2a5edc",
          "name": "Bronze",
          "recordId": 732
        }
      ],
      "products": [
        {
          "id": "095b6262-3b5a-45e1-bebd-96dfbf37d3af",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/ZtoaCGQ/640/480",
          "recordId": 395
        },
        {
          "id": "789e2a17-f07b-4901-b8ad-e6f83cec895e",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=7211575979016192",
          "recordId": 893
        },
        {
          "id": "2ddaf74a-19fb-427a-9cc0-44f147fe413a",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=7730821471404032",
          "recordId": 483
        },
        {
          "id": "82584dfb-8396-4166-94e8-333f16d01287",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=2689969516707840",
          "recordId": 525
        },
        {
          "id": "06c20045-1d82-4411-94f7-3d8699f73387",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/f7JxdNuii/640/480",
          "recordId": 275
        }
      ],
      "recordId": 663
    },
    {
      "id": "ec050c2a-7109-4ba1-a55e-12980cba89fd",
      "name": "Recycled Soft Table",
      "productTaxonomy": "Health",
      "ingredients": [
        {
          "id": "58f4774f-36e6-4490-8772-51d481d2738a",
          "name": "Rubber",
          "recordId": 268
        },
        {
          "id": "2f9ad518-d993-440e-a0bb-6521972b411a",
          "name": "Soft",
          "recordId": 817
        },
        {
          "id": "111dd0fc-eb3f-4358-b961-5980896cd4fe",
          "name": "Rubber",
          "recordId": 296
        },
        {
          "id": "de051d66-d406-45da-922f-d4956ebb920f",
          "name": "Fresh",
          "recordId": 121
        },
        {
          "id": "2ea74e93-d69b-4da9-8ed3-1fdff62d92dd",
          "name": "Granite",
          "recordId": 693
        }
      ],
      "products": [
        {
          "id": "ebaa9878-c131-458c-ba8b-dbac485ad9d2",
          "name": "Cheese",
          "imageUrl": "https://loremflickr.com/640/480?lock=5444211761479680",
          "recordId": 482
        }
      ],
      "recordId": 265
    },
    {
      "id": "7ba23415-9c3e-4c50-8b2e-6128a9dceac3",
      "name": "Ergonomic Bronze Salad",
      "productTaxonomy": "Computers",
      "ingredients": [
        {
          "id": "b1b27e3a-e4a7-4311-b76d-4ad078c4ea34",
          "name": "Granite",
          "recordId": 696
        },
        {
          "id": "6bb72689-8083-45c7-a4a6-119ca804b975",
          "name": "Frozen",
          "recordId": 578
        },
        {
          "id": "6ff67e74-0404-4a32-8637-45d6067182c5",
          "name": "Metal",
          "recordId": 601
        },
        {
          "id": "d7703ff3-a1d7-4be6-857d-cdacc1ac5287",
          "name": "Soft",
          "recordId": 130
        },
        {
          "id": "2b3e9a74-faf0-456a-9ad6-e8bf56f95184",
          "name": "Frozen",
          "recordId": 998
        }
      ],
      "products": [
        {
          "id": "ac7ba1ff-e6d2-4829-afd9-b7f4eae52a83",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/FXdUfn/640/480",
          "recordId": 927
        },
        {
          "id": "2ec49d92-fa28-456e-b34b-5e9bd12c2450",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=1795509805121536",
          "recordId": 920
        }
      ],
      "recordId": 256
    },
    {
      "id": "53de1e88-3a95-44c8-abb1-ff4724e0aded",
      "name": "Elegant Metal Car",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "72d42f13-167b-4eff-98eb-66109fe3f104",
          "name": "Plastic",
          "recordId": 722
        },
        {
          "id": "eb00cca1-0188-49f7-a348-696d50806088",
          "name": "Plastic",
          "recordId": 689
        },
        {
          "id": "571c46b4-660b-46de-876c-be8e9dea6766",
          "name": "Frozen",
          "recordId": 806
        },
        {
          "id": "a1c1e4a0-813d-4c65-b704-c259e1f01686",
          "name": "Plastic",
          "recordId": 213
        },
        {
          "id": "21ff0b00-7b1c-47b2-be30-f76a604fd346",
          "name": "Metal",
          "recordId": 741
        }
      ],
      "products": [
        {
          "id": "cc87f35a-6437-4d03-b9a4-0e561516990b",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=2697686968958976",
          "recordId": 607
        },
        {
          "id": "b5b32621-1865-415a-8ba9-4940f7aca0be",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/dVa8IJIoq/640/480",
          "recordId": 140
        },
        {
          "id": "c3f987f7-531e-459e-9d3a-65c0f1c3b49a",
          "name": "Sausages",
          "imageUrl": "https://loremflickr.com/640/480?lock=7206662836322304",
          "recordId": 176
        },
        {
          "id": "f46a6df3-ee0a-4021-ac21-f644067d4d90",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=6506315746639872",
          "recordId": 215
        },
        {
          "id": "dfb35f73-bc27-4763-81f7-bf417e038123",
          "name": "Ball",
          "imageUrl": "https://loremflickr.com/640/480?lock=5787124280328192",
          "recordId": 712
        }
      ],
      "recordId": 484
    },
    {
      "id": "c26583c7-7807-4217-b182-302e7695842b",
      "name": "Modern Plastic Mouse",
      "productTaxonomy": "Movies",
      "ingredients": [
        {
          "id": "d1e728d8-f745-459f-b924-5b80422842c3",
          "name": "Rubber",
          "recordId": 563
        },
        {
          "id": "24a5a86b-4415-421d-97a0-b90d3ec69511",
          "name": "Wooden",
          "recordId": 368
        },
        {
          "id": "aa1df78a-8d4b-427e-99f7-a4bb7e57abb6",
          "name": "Cotton",
          "recordId": 832
        }
      ],
      "products": [
        {
          "id": "fc49bd3b-5a74-495a-ae9d-afa096a76e4d",
          "name": "Gloves",
          "imageUrl": "https://loremflickr.com/640/480?lock=2926556190081024",
          "recordId": 738
        },
        {
          "id": "4f90d9a5-e7c7-4a28-8552-c914593bfef2",
          "name": "Soap",
          "imageUrl": "https://picsum.photos/seed/sT5Pk/640/480",
          "recordId": 839
        },
        {
          "id": "a6a2b5fc-8f53-4ec0-ad06-a1565375de82",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=7341347583295488",
          "recordId": 328
        }
      ],
      "recordId": 836
    },
    {
      "id": "e6171e71-1e1a-403c-8789-c6768c3823f2",
      "name": "Modern Concrete Gloves",
      "productTaxonomy": "Beauty",
      "ingredients": [
        {
          "id": "b6c654c4-7ccd-47e1-8704-e49a93dbcfbb",
          "name": "Rubber",
          "recordId": 832
        }
      ],
      "products": [
        {
          "id": "564ad195-c9bb-499c-9449-e4521fb0dc1c",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/HAFUoObYA/640/480",
          "recordId": 445
        },
        {
          "id": "138c60ed-82e0-4250-bd33-b0aee73d4a9c",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/zZr6CUx/640/480",
          "recordId": 671
        },
        {
          "id": "b6bb8ce1-439d-430a-b705-c089bd7fda89",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=7570183361134592",
          "recordId": 664
        },
        {
          "id": "bc1db1b5-ca22-4360-8bd3-4826c4170c9e",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/1Y3UrBg/640/480",
          "recordId": 160
        }
      ],
      "recordId": 967
    },
    {
      "id": "f9d0b970-fe9f-45bf-806a-1147df90cdb2",
      "name": "Oriental Frozen Chair",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "4b15ff07-d502-4c92-b0da-4f634edda9b9",
          "name": "Soft",
          "recordId": 370
        }
      ],
      "products": [
        {
          "id": "2db10dee-17b7-4f7a-943c-82d8278140d1",
          "name": "Shirt",
          "imageUrl": "https://picsum.photos/seed/tImw3/640/480",
          "recordId": 442
        },
        {
          "id": "c931c71b-243e-4717-b88a-fcf35cbe3c88",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/oboOUKtWp7/640/480",
          "recordId": 300
        },
        {
          "id": "3201620d-5958-471b-acbb-f02a90f6632d",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/E4ovm/640/480",
          "recordId": 674
        },
        {
          "id": "5887be37-84c7-4256-a684-ed9b5ef63675",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/eFNPQ4aG/640/480",
          "recordId": 871
        }
      ],
      "recordId": 230
    },
    {
      "id": "0d627cac-bdc7-42ee-bcff-0437bc517031",
      "name": "Unbranded Rubber Sausages",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "bf0e44c5-4e93-431b-87b8-b4199ed89a79",
          "name": "Rubber",
          "recordId": 968
        },
        {
          "id": "9d0a086e-6b77-4718-b819-6d33ae56aa53",
          "name": "Frozen",
          "recordId": 104
        }
      ],
      "products": [
        {
          "id": "d2adc49b-f73e-480e-b111-2af4bd700aba",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/lsgPGCxT/640/480",
          "recordId": 501
        },
        {
          "id": "fc4103b4-c9bb-4216-9179-a02f5fbc396f",
          "name": "Soap",
          "imageUrl": "https://picsum.photos/seed/8Qv2ETOO/640/480",
          "recordId": 571
        },
        {
          "id": "9cc70245-e3ac-4c3d-8833-b1b20f99436d",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/hLDyjwjM/640/480",
          "recordId": 107
        }
      ],
      "recordId": 641
    },
    {
      "id": "8e6dff48-8237-490c-afc2-7663a608fe6e",
      "name": "Handcrafted Concrete Shirt",
      "productTaxonomy": "Games",
      "ingredients": [
        {
          "id": "f50110a6-1ffb-4731-95e3-d81a2cee2ed6",
          "name": "Wooden",
          "recordId": 625
        }
      ],
      "products": [
        {
          "id": "4d462544-fd56-480a-91bb-645eeee07061",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/v050A/640/480",
          "recordId": 118
        },
        {
          "id": "904ec14d-e5bf-46f5-b61a-e512000f002f",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/Vm4LEaHa/640/480",
          "recordId": 307
        },
        {
          "id": "9e5588af-0a63-48d9-8a53-34216b206405",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=5989245120413696",
          "recordId": 924
        }
      ],
      "recordId": 458
    },
    {
      "id": "80a13dd2-bc85-4a2a-851a-4d49140800b4",
      "name": "Ergonomic Steel Sausages",
      "productTaxonomy": "Electronics",
      "ingredients": [
        {
          "id": "4671654e-f334-4e63-beec-b7f78e91e312",
          "name": "Concrete",
          "recordId": 339
        }
      ],
      "products": [
        {
          "id": "674ba278-3274-4681-8b74-89d753e96db9",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/eToYJ/640/480",
          "recordId": 569
        },
        {
          "id": "50eefa4f-e69d-45e8-ae2f-7e8be3088258",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=127864940789760",
          "recordId": 987
        }
      ],
      "recordId": 829
    },
    {
      "id": "39493b07-74b4-4fe2-82cc-75ef4d2133d8",
      "name": "Electronic Wooden Shirt",
      "productTaxonomy": "Baby",
      "ingredients": [
        {
          "id": "611e7f93-4478-4103-807c-a956b3b74781",
          "name": "Cotton",
          "recordId": 481
        },
        {
          "id": "c06ffbdd-42ec-445e-909c-ce45516ce44a",
          "name": "Wooden",
          "recordId": 259
        },
        {
          "id": "81104992-e4a0-46d4-8629-acd9751519e0",
          "name": "Cotton",
          "recordId": 111
        },
        {
          "id": "1e8dadf2-21d6-4477-81b3-3bb60d3c0c43",
          "name": "Granite",
          "recordId": 987
        },
        {
          "id": "32d5f0d2-39a4-44b4-8d75-cb6406270032",
          "name": "Metal",
          "recordId": 158
        }
      ],
      "products": [
        {
          "id": "d3d0de1d-fb76-412f-9dea-a3edd8fab350",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=6746740631797760",
          "recordId": 134
        },
        {
          "id": "faad2112-8508-442d-af4a-0e8bcdc39226",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/BzEiwWi/640/480",
          "recordId": 644
        },
        {
          "id": "109ee4b9-ad98-428b-8f75-765b0e61ad5a",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=7245949105602560",
          "recordId": 970
        },
        {
          "id": "00fc7bbf-a5d6-4c36-bd5c-2c11319656b9",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=7193451980390400",
          "recordId": 909
        },
        {
          "id": "83191a0a-0cc9-4fab-80a5-92ce60dee7cc",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=3516233349595136",
          "recordId": 101
        }
      ],
      "recordId": 747
    },
    {
      "id": "bf93baae-86af-435e-8c1d-f308c0ad8b0d",
      "name": "Practical Wooden Computer",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "02f54dc9-98b9-4d05-ae5c-13c4222dcfdd",
          "name": "Frozen",
          "recordId": 462
        },
        {
          "id": "2a9e44d5-8998-446c-b414-f67d693df88b",
          "name": "Cotton",
          "recordId": 405
        },
        {
          "id": "36140539-4df8-4594-84fe-4248eb512822",
          "name": "Concrete",
          "recordId": 997
        }
      ],
      "products": [
        {
          "id": "ee49461e-66da-48ce-83ff-0d10ebc572a0",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=2426618133872640",
          "recordId": 960
        },
        {
          "id": "939d4bce-83d6-4273-bc24-ae8048da8c3a",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/e9Lb1E8nW/640/480",
          "recordId": 991
        },
        {
          "id": "80bed522-1f9d-436b-af75-e22c2c00ea5d",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/lDHfxYj2u/640/480",
          "recordId": 593
        },
        {
          "id": "caf683f1-642c-401f-813b-20e7af4dd47e",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/OrbQ1/640/480",
          "recordId": 444
        }
      ],
      "recordId": 194
    },
    {
      "id": "0a6fa5e5-db0b-4435-9e3f-234542c0dc42",
      "name": "Incredible Granite Pants",
      "productTaxonomy": "Clothing",
      "ingredients": [
        {
          "id": "db63ad9f-5834-4a7e-a061-7888ba7055ca",
          "name": "Frozen",
          "recordId": 200
        }
      ],
      "products": [
        {
          "id": "bf96dbdd-32cd-4a06-801c-f69881cdab19",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/PMGEj1DnWw/640/480",
          "recordId": 255
        },
        {
          "id": "36c9d636-dbc3-4b04-9f94-ddb2356a62d4",
          "name": "Soap",
          "imageUrl": "https://picsum.photos/seed/kPxdP1/640/480",
          "recordId": 746
        }
      ],
      "recordId": 470
    },
    {
      "id": "52ed54c1-5d66-4e77-bbd7-61440592cd79",
      "name": "Awesome Steel Gloves",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "2dc47d4e-1f87-4e85-9d47-630300b077e2",
          "name": "Granite",
          "recordId": 180
        },
        {
          "id": "8dcf75c2-74f4-4cac-a181-886f8665cef0",
          "name": "Soft",
          "recordId": 254
        }
      ],
      "products": [
        {
          "id": "ba518c38-3f98-4d0a-89d5-1c0d90dd6cf4",
          "name": "Chips",
          "imageUrl": "https://loremflickr.com/640/480?lock=2387803052703744",
          "recordId": 440
        }
      ],
      "recordId": 369
    },
    {
      "id": "9a9172a6-44f0-4c5f-b12b-f49faf5bed12",
      "name": "Refined Plastic Bacon",
      "productTaxonomy": "Games",
      "ingredients": [
        {
          "id": "c852927e-1c3a-452f-a407-19ae2f65b97f",
          "name": "Fresh",
          "recordId": 815
        },
        {
          "id": "3df5d94d-5eb7-4a1e-9634-d6be9b800fe8",
          "name": "Granite",
          "recordId": 965
        },
        {
          "id": "44b79025-ca6d-4ccf-b4ba-3e26192e7ef6",
          "name": "Bronze",
          "recordId": 796
        },
        {
          "id": "5a0bec0e-ed9d-4ddd-9a5b-c544026f6b8a",
          "name": "Fresh",
          "recordId": 437
        }
      ],
      "products": [
        {
          "id": "70f1ea89-e0ea-4a7f-9792-3dbb2700a142",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=5624979620102144",
          "recordId": 750
        },
        {
          "id": "9fa40623-43c9-44f8-acac-844ec1fd95df",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=1724083251183616",
          "recordId": 575
        }
      ],
      "recordId": 119
    },
    {
      "id": "d17d8b47-6ee6-4842-8b26-46ccd652c44d",
      "name": "Sleek Frozen Table",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "c5663b48-efb0-4c9a-a029-ab57d0c40f0c",
          "name": "Plastic",
          "recordId": 497
        }
      ],
      "products": [
        {
          "id": "0044f90e-a887-4c63-a123-177aff9693d5",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=1147288214831104",
          "recordId": 913
        },
        {
          "id": "00b6ad74-0273-42f7-842d-aa3bb531154b",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/8LS5iau/640/480",
          "recordId": 936
        },
        {
          "id": "79b323bd-6523-469e-961a-dd132e22c10c",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=7209122160181248",
          "recordId": 397
        }
      ],
      "recordId": 236
    },
    {
      "id": "1f993381-6a93-45a3-9ca6-d80701b610e5",
      "name": "Modern Wooden Keyboard",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "b97ef863-91cd-4f3e-87d9-d0bcb5c6ca0b",
          "name": "Granite",
          "recordId": 536
        },
        {
          "id": "7aec41aa-ad71-40e8-8a28-327ee882a332",
          "name": "Cotton",
          "recordId": 654
        },
        {
          "id": "e4ae76e7-6d27-4abd-8a16-65ab7a0688ee",
          "name": "Wooden",
          "recordId": 671
        },
        {
          "id": "d6fdc563-fbb3-4654-a41f-fe26a603cedc",
          "name": "Concrete",
          "recordId": 498
        }
      ],
      "products": [
        {
          "id": "d012f3fd-a734-428c-a8a3-a21a917009e0",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/Aq3jdtoNkU/640/480",
          "recordId": 813
        },
        {
          "id": "65c49e40-38d7-4bbc-8f4f-3cf1e6877ca9",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=1855751733641216",
          "recordId": 426
        },
        {
          "id": "ff122833-bd47-4a73-af7b-6db891c96c7e",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=1730150626492416",
          "recordId": 988
        }
      ],
      "recordId": 664
    },
    {
      "id": "33c04c04-bf0f-45a4-ae25-027ca814cf49",
      "name": "Elegant Frozen Hat",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "d623e3e4-8038-4cbf-a5a0-3a3832c33ad6",
          "name": "Metal",
          "recordId": 454
        },
        {
          "id": "8d3c3cb8-5068-4b11-bd48-f433abd119c8",
          "name": "Metal",
          "recordId": 254
        }
      ],
      "products": [
        {
          "id": "5549d7df-5775-45a8-8239-d1cd86aa5bab",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/lR9jK/640/480",
          "recordId": 438
        },
        {
          "id": "e63433c6-dddc-466a-989c-2574a9807dc5",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=8110224063856640",
          "recordId": 995
        },
        {
          "id": "72201a4c-3782-4363-8369-2996c35c5127",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/6GhoxmGn/640/480",
          "recordId": 908
        }
      ],
      "recordId": 722
    },
    {
      "id": "0ed54c58-f765-40ea-a23f-fddc8f1dd3fe",
      "name": "Intelligent Cotton Salad",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "b780f425-cb96-4024-be8f-c13399794400",
          "name": "Bronze",
          "recordId": 752
        }
      ],
      "products": [
        {
          "id": "4b50ed44-a140-4e2d-b5c4-c1e2d79812bd",
          "name": "Chicken",
          "imageUrl": "https://picsum.photos/seed/L5rNDiI/640/480",
          "recordId": 833
        }
      ],
      "recordId": 334
    },
    {
      "id": "004dff50-5aca-46ea-acfe-f8e5cadb63d5",
      "name": "Oriental Rubber Fish",
      "productTaxonomy": "Garden",
      "ingredients": [
        {
          "id": "4437c901-7e35-4380-87cc-1336fb465c3c",
          "name": "Fresh",
          "recordId": 283
        }
      ],
      "products": [
        {
          "id": "b9418a9a-16fc-40a8-a5a8-054ceb78ed6d",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/inc34608m/640/480",
          "recordId": 625
        }
      ],
      "recordId": 548
    },
    {
      "id": "f9d55473-ef84-4905-81a6-b1c60f3cda7a",
      "name": "Practical Fresh Soap",
      "productTaxonomy": "Home",
      "ingredients": [
        {
          "id": "ebdd5ccb-624f-40db-a9ef-b22162cf805c",
          "name": "Steel",
          "recordId": 279
        },
        {
          "id": "e368a09b-c41b-4991-a6bf-721e0bb893f8",
          "name": "Steel",
          "recordId": 287
        },
        {
          "id": "c231c057-15aa-4f0b-8041-157b3bbd0f16",
          "name": "Concrete",
          "recordId": 336
        },
        {
          "id": "5457f77f-9735-4cb1-8890-57fbfd8e41b3",
          "name": "Granite",
          "recordId": 107
        },
        {
          "id": "64f61694-6a79-42ca-95e4-54fd94f90cb8",
          "name": "Frozen",
          "recordId": 895
        }
      ],
      "products": [
        {
          "id": "54fc94a4-c91c-48f2-b740-7b44d7cacd85",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/eghDyC/640/480",
          "recordId": 976
        }
      ],
      "recordId": 574
    },
    {
      "id": "253e11d8-625f-4312-8972-864851c3b9cf",
      "name": "Tasty Fresh Keyboard",
      "productTaxonomy": "Home",
      "ingredients": [
        {
          "id": "00504b81-f1d6-4688-a5f3-e3ffbec57e82",
          "name": "Plastic",
          "recordId": 212
        }
      ],
      "products": [
        {
          "id": "c86a5171-b1b0-4004-ad08-1f1ae8e847d3",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/WQFYm/640/480",
          "recordId": 577
        },
        {
          "id": "aefbc987-25d5-4ac5-9d80-9e13eb94f530",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/MTz9hO/640/480",
          "recordId": 138
        }
      ],
      "recordId": 282
    },
    {
      "id": "b40f48bb-e5ac-4236-9e64-37aeab03b2a3",
      "name": "Fantastic Frozen Ball",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "c27fd54a-3677-4d4d-965c-194121a8e177",
          "name": "Granite",
          "recordId": 591
        },
        {
          "id": "5a27d621-d3f2-4def-a456-030d74947251",
          "name": "Metal",
          "recordId": 352
        },
        {
          "id": "ff4e0c49-c4b3-4549-8b88-d403a4ee4bf8",
          "name": "Rubber",
          "recordId": 813
        }
      ],
      "products": [
        {
          "id": "811faaae-8e27-483d-8a45-d3f297b6e0dd",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/34IY7J/640/480",
          "recordId": 430
        },
        {
          "id": "a5d72af2-507a-4f48-a59f-7d4b2e5270ce",
          "name": "Tuna",
          "imageUrl": "https://loremflickr.com/640/480?lock=6854713848889344",
          "recordId": 678
        },
        {
          "id": "98514163-e39d-4e4e-883d-ae768740c6c5",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=7874663245938688",
          "recordId": 849
        },
        {
          "id": "16f29cdc-3be9-443c-a75e-784f40ceddec",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/BxCUpDCVj/640/480",
          "recordId": 868
        },
        {
          "id": "ee02f044-4290-4fbb-8e0a-a21656043769",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/MmppNKBfB/640/480",
          "recordId": 267
        }
      ],
      "recordId": 932
    },
    {
      "id": "32960264-c7b1-4fb4-8d2a-0e3d041e50e2",
      "name": "Refined Granite Ball",
      "productTaxonomy": "Shoes",
      "ingredients": [
        {
          "id": "f74c360b-08bc-4b1e-8970-abd937f7dc82",
          "name": "Steel",
          "recordId": 364
        },
        {
          "id": "d59c0828-4394-4809-8923-784b3440b872",
          "name": "Rubber",
          "recordId": 902
        },
        {
          "id": "b9ede766-beba-4ae5-80c6-ba0897b533cd",
          "name": "Fresh",
          "recordId": 246
        },
        {
          "id": "2ceec1fc-d099-41f3-80d0-1b8ad5f54a5f",
          "name": "Metal",
          "recordId": 902
        }
      ],
      "products": [
        {
          "id": "0585f0ea-c3d3-4191-921d-c86b7130a378",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/b0CWd6/640/480",
          "recordId": 148
        }
      ],
      "recordId": 576
    },
    {
      "id": "1ca2181e-8697-4b7c-9eaf-ff0921ab830b",
      "name": "Recycled Soft Ball",
      "productTaxonomy": "Computers",
      "ingredients": [
        {
          "id": "6765bf5b-e0a2-4d51-ba74-a633b7e0cf6f",
          "name": "Wooden",
          "recordId": 434
        },
        {
          "id": "0790c848-2989-479e-a6bf-be928dd767d3",
          "name": "Metal",
          "recordId": 830
        },
        {
          "id": "e1f672e3-2169-40e7-8870-c95cbaff42b5",
          "name": "Granite",
          "recordId": 240
        },
        {
          "id": "1ce80303-74bf-4e5f-b257-db97047bb649",
          "name": "Granite",
          "recordId": 561
        }
      ],
      "products": [
        {
          "id": "f6ff126c-dfda-4a09-9d46-a83530bdc31d",
          "name": "Table",
          "imageUrl": "https://loremflickr.com/640/480?lock=7780220662710272",
          "recordId": 995
        }
      ],
      "recordId": 198
    },
    {
      "id": "6f27614e-2b35-4d5f-bfd9-b581ebe16d25",
      "name": "Luxurious Concrete Computer",
      "productTaxonomy": "Movies",
      "ingredients": [
        {
          "id": "c17b38d1-d956-407d-ad73-68ec9ebb604f",
          "name": "Wooden",
          "recordId": 469
        },
        {
          "id": "442932c1-20ac-47cb-8730-c7416e26ffae",
          "name": "Bronze",
          "recordId": 579
        },
        {
          "id": "fd6614cb-da4a-432e-8e02-52a2a1ac6e80",
          "name": "Cotton",
          "recordId": 157
        },
        {
          "id": "b3030c83-9a7e-4200-b725-0a7787322c58",
          "name": "Soft",
          "recordId": 425
        },
        {
          "id": "2a1be382-3725-4ead-8c7a-7e05b53244dc",
          "name": "Plastic",
          "recordId": 417
        }
      ],
      "products": [
        {
          "id": "f1c9dd95-d880-494f-9f9f-fe2761aa4296",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/1XdGO9Wkk/640/480",
          "recordId": 676
        },
        {
          "id": "aa8ea3e4-441b-4af1-a861-7276d78c6835",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/QLNUrU/640/480",
          "recordId": 721
        },
        {
          "id": "97e6b180-b4c8-4c54-8da6-6f4fd5afae31",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=8562245608931328",
          "recordId": 152
        },
        {
          "id": "3b26cc06-1feb-4cc7-a6d6-1ea81c657edd",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/v1sUczm8BU/640/480",
          "recordId": 779
        },
        {
          "id": "5f8f3666-465d-4814-ad88-a1825c1f1ece",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=3602154581393408",
          "recordId": 579
        }
      ],
      "recordId": 890
    },
    {
      "id": "4673ce9c-4c38-4b76-b784-e0ec65718663",
      "name": "Practical Steel Chicken",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "32d040ec-af60-48cf-83c8-69526d32c1af",
          "name": "Wooden",
          "recordId": 320
        },
        {
          "id": "939d5b01-0809-46b1-a558-6c1fc23192b7",
          "name": "Metal",
          "recordId": 317
        },
        {
          "id": "8a45a543-1d5b-457f-91b1-ddc69557098b",
          "name": "Bronze",
          "recordId": 618
        },
        {
          "id": "cb3a24df-3718-4f53-9917-9a438177fe91",
          "name": "Wooden",
          "recordId": 373
        }
      ],
      "products": [
        {
          "id": "7baa89ca-0570-429f-a06c-a1c9a6d35b3b",
          "name": "Shirt",
          "imageUrl": "https://loremflickr.com/640/480?lock=3024949547630592",
          "recordId": 869
        },
        {
          "id": "b89c4c16-a5df-4da9-9901-17b3117342c6",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=7240327580614656",
          "recordId": 764
        },
        {
          "id": "94fee9e5-b9b2-449f-beec-5237d84832f5",
          "name": "Shirt",
          "imageUrl": "https://picsum.photos/seed/xCf9aFYKDV/640/480",
          "recordId": 148
        }
      ],
      "recordId": 696
    },
    {
      "id": "c9d2074f-3e6b-4101-9610-501a6d601124",
      "name": "Sleek Frozen Shirt",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "1989a9d5-5899-476c-9fbd-9c1b811277ab",
          "name": "Metal",
          "recordId": 294
        },
        {
          "id": "2648b9b4-77c8-40c8-bc52-10273c6c790d",
          "name": "Soft",
          "recordId": 140
        },
        {
          "id": "a5d96493-bd2e-4b30-967d-aa432e04a65d",
          "name": "Fresh",
          "recordId": 239
        },
        {
          "id": "18560de5-3d5d-46ae-8124-eba257ef4ecd",
          "name": "Plastic",
          "recordId": 749
        },
        {
          "id": "edc59021-1546-473f-a56f-0160282d5cdf",
          "name": "Cotton",
          "recordId": 880
        }
      ],
      "products": [
        {
          "id": "75d518b3-5fd1-4d01-bfb5-8df9836062fc",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/3l2hy0Y/640/480",
          "recordId": 813
        },
        {
          "id": "45345b77-7823-499c-8df5-213ccb9807f9",
          "name": "Computer",
          "imageUrl": "https://picsum.photos/seed/CJKBn3/640/480",
          "recordId": 581
        }
      ],
      "recordId": 903
    },
    {
      "id": "bf0e6298-deae-4a03-8471-6fe514fb00e9",
      "name": "Intelligent Rubber Hat",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "e7f7574d-56b5-4770-9472-c52698826079",
          "name": "Soft",
          "recordId": 202
        },
        {
          "id": "7eb3aa09-1acf-4133-835e-7fa82b61e5a0",
          "name": "Soft",
          "recordId": 110
        },
        {
          "id": "1c031478-f448-4e1f-ada4-653c941cddaf",
          "name": "Bronze",
          "recordId": 287
        },
        {
          "id": "6dc6b8dc-6b34-4dc0-a2d4-1864554f5b27",
          "name": "Wooden",
          "recordId": 308
        },
        {
          "id": "8c7ac83f-bba2-4dd9-801f-7de0962ff0aa",
          "name": "Cotton",
          "recordId": 224
        }
      ],
      "products": [
        {
          "id": "98456fc0-b058-49e6-9d34-ff10628c409a",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=8982381832699904",
          "recordId": 533
        },
        {
          "id": "605af450-4bf6-40fc-85c0-4d47be3f63ae",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=5091478365798400",
          "recordId": 296
        },
        {
          "id": "04641e3a-62e1-455d-baaf-484bf8ae6c15",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/Dn3lI3/640/480",
          "recordId": 888
        }
      ],
      "recordId": 129
    },
    {
      "id": "00fa7ef7-2f82-4fa8-b223-4dffd99970f5",
      "name": "Rustic Steel Chips",
      "productTaxonomy": "Outdoors",
      "ingredients": [
        {
          "id": "3fd637fd-7c50-4c49-8244-e498ecdf9764",
          "name": "Frozen",
          "recordId": 251
        }
      ],
      "products": [
        {
          "id": "069df00c-03b0-47b5-b4f8-e318b51939c1",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/L1TqlRx/640/480",
          "recordId": 915
        }
      ],
      "recordId": 418
    },
    {
      "id": "543bd183-9872-4575-836e-2812d0e82864",
      "name": "Modern Steel Chicken",
      "productTaxonomy": "Games",
      "ingredients": [
        {
          "id": "defc54a8-088c-4a97-b56b-0ec210164a15",
          "name": "Bronze",
          "recordId": 221
        },
        {
          "id": "7d6f92b4-71c1-4b1f-9043-26c561c24e33",
          "name": "Wooden",
          "recordId": 635
        }
      ],
      "products": [
        {
          "id": "67df6d8b-f1c4-4776-a1d9-89de8ee66537",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=1572897187430400",
          "recordId": 288
        },
        {
          "id": "bf7eca80-fa89-494d-9bdf-1f9179bf251b",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/EFhbY2vbE/640/480",
          "recordId": 298
        },
        {
          "id": "07f04b3f-fca3-4705-952b-c2f88b2a97cf",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/nCjVip3S/640/480",
          "recordId": 506
        },
        {
          "id": "a4c616c4-5dd8-4f8a-a88a-0b176b6b2eca",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/1BRkDxS6Xk/640/480",
          "recordId": 893
        }
      ],
      "recordId": 901
    },
    {
      "id": "d96703fd-2de1-4be5-b008-4c3f409da6ec",
      "name": "Luxurious Steel Tuna",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "44d4b947-d94b-4d66-bedd-6ac5a08fcea2",
          "name": "Fresh",
          "recordId": 972
        },
        {
          "id": "ce4a3b0b-2a8f-4a77-b120-c0712bd0b11c",
          "name": "Cotton",
          "recordId": 299
        },
        {
          "id": "cb5d36c3-ffed-48df-94ad-dbd5ac079d8d",
          "name": "Rubber",
          "recordId": 992
        },
        {
          "id": "0c7c3a0d-2713-4084-b0bb-ea700d2d4cb4",
          "name": "Concrete",
          "recordId": 760
        }
      ],
      "products": [
        {
          "id": "ed8d2f40-b515-41b1-8084-48807fcd0c35",
          "name": "Table",
          "imageUrl": "https://loremflickr.com/640/480?lock=331749139677184",
          "recordId": 308
        },
        {
          "id": "53e1aaa3-9f6b-49ce-abd8-850b68e8c353",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/DzyZHDIc/640/480",
          "recordId": 463
        },
        {
          "id": "ca14dbe7-8274-41f6-9e5e-6b4ca718b122",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/V415F5uJN7/640/480",
          "recordId": 272
        },
        {
          "id": "7fdbd215-3fd6-49c5-a041-569c125137f8",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/g9ZfkLghUq/640/480",
          "recordId": 681
        }
      ],
      "recordId": 624
    },
    {
      "id": "c44f8583-d926-419f-8e22-77528f63b20d",
      "name": "Intelligent Cotton Computer",
      "productTaxonomy": "Health",
      "ingredients": [
        {
          "id": "c6e1da42-3290-458c-a474-cdd39ab2f171",
          "name": "Granite",
          "recordId": 483
        },
        {
          "id": "7ed7dce1-428e-4799-ad87-91e8bcce1d3b",
          "name": "Bronze",
          "recordId": 329
        },
        {
          "id": "4c038ca7-de58-4e62-b506-09cf0943a32a",
          "name": "Plastic",
          "recordId": 138
        },
        {
          "id": "e7eb81d3-3bec-415d-85ac-7ae944bc9569",
          "name": "Steel",
          "recordId": 168
        },
        {
          "id": "b56cd63c-7d3d-4cd7-8007-9f59d3138b75",
          "name": "Soft",
          "recordId": 307
        }
      ],
      "products": [
        {
          "id": "96df7018-8d7d-497a-bca0-c61c89955190",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=3024288238010368",
          "recordId": 462
        },
        {
          "id": "de22e8b9-eda8-40de-bcfc-557cbafa2d2e",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=3607785560342528",
          "recordId": 264
        },
        {
          "id": "478f2a30-9b22-4dbd-84df-4847f45eb6fe",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/jceFi0/640/480",
          "recordId": 126
        },
        {
          "id": "4a58ef16-8fcc-47c5-bc5b-51ea974c075f",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/BbgOAEZUH/640/480",
          "recordId": 393
        }
      ],
      "recordId": 619
    },
    {
      "id": "4d8da314-e8d6-4a7a-b2b7-83993025ef2c",
      "name": "Rustic Soft Tuna",
      "productTaxonomy": "Automotive",
      "ingredients": [
        {
          "id": "c60ffdd0-e4b4-477a-8bfa-ccf0b536579f",
          "name": "Soft",
          "recordId": 136
        },
        {
          "id": "0d5a03c3-c470-4dac-b78f-69198452a20b",
          "name": "Soft",
          "recordId": 826
        },
        {
          "id": "f01ad226-6aff-42e3-a7e2-4683cb3ef305",
          "name": "Concrete",
          "recordId": 470
        },
        {
          "id": "219a5e59-f504-46c6-b55c-bcbbcc8ab31b",
          "name": "Plastic",
          "recordId": 468
        }
      ],
      "products": [
        {
          "id": "4e412333-c513-4d38-910b-d7e7d571a5f9",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=3754384638869504",
          "recordId": 936
        }
      ],
      "recordId": 618
    },
    {
      "id": "4b34fe8f-8fb4-4d5a-9248-3afc2e82f87b",
      "name": "Practical Bronze Bike",
      "productTaxonomy": "Home",
      "ingredients": [
        {
          "id": "ca55f540-08f7-47e3-979d-e2b7f7d25e5e",
          "name": "Rubber",
          "recordId": 381
        },
        {
          "id": "6b09f349-3392-4a6a-bf4f-d80d0542f0d9",
          "name": "Cotton",
          "recordId": 886
        },
        {
          "id": "8731b40b-1c08-4d72-94a0-8174af666f24",
          "name": "Concrete",
          "recordId": 319
        },
        {
          "id": "2ba32bf9-2283-4cfb-a48e-e9f302193d61",
          "name": "Granite",
          "recordId": 104
        },
        {
          "id": "141c3033-1c7c-4046-96c5-e7b42c972100",
          "name": "Cotton",
          "recordId": 812
        }
      ],
      "products": [
        {
          "id": "5eb4c84b-0684-4e14-a752-784afc76e53c",
          "name": "Table",
          "imageUrl": "https://loremflickr.com/640/480?lock=1641967043739648",
          "recordId": 780
        },
        {
          "id": "9adf832c-d509-4476-babd-61eab3f888c9",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=8349892300767232",
          "recordId": 674
        },
        {
          "id": "3e66e1d9-0199-4a26-9921-749e4e7ef3cd",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=2782714776256512",
          "recordId": 848
        }
      ],
      "recordId": 341
    },
    {
      "id": "60703d08-012b-4329-814c-0a3be1666817",
      "name": "Tasty Soft Gloves",
      "productTaxonomy": "Computers",
      "ingredients": [
        {
          "id": "69835c43-4193-43bf-bad1-2602ea2398c7",
          "name": "Rubber",
          "recordId": 454
        }
      ],
      "products": [
        {
          "id": "10c9b2f8-026c-40ef-ba69-3dfe476e8dc2",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=6525311705415680",
          "recordId": 633
        },
        {
          "id": "09ea6dad-beaf-4bad-b3fe-7d6aa98f470a",
          "name": "Fish",
          "imageUrl": "https://loremflickr.com/640/480?lock=2555785341042688",
          "recordId": 237
        },
        {
          "id": "9c7905d2-c3a7-4803-b35f-3255c7d198ae",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=4830114913189888",
          "recordId": 498
        },
        {
          "id": "0c496ada-f0ec-4b0b-820b-0f2a79f767b4",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/Weg4uRY/640/480",
          "recordId": 441
        }
      ],
      "recordId": 293
    },
    {
      "id": "c398575d-0dbe-4f4b-b9cb-f2d2e7824b9d",
      "name": "Fantastic Cotton Fish",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "8f8ea333-2d52-4b8b-8292-6beade7470d3",
          "name": "Wooden",
          "recordId": 865
        }
      ],
      "products": [
        {
          "id": "242a79e1-6cca-485e-aedd-99bd7271edc0",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=4142475088232448",
          "recordId": 600
        },
        {
          "id": "612389d8-2200-4394-88f4-4ac5e6464eba",
          "name": "Chicken",
          "imageUrl": "https://picsum.photos/seed/YlcKZPS/640/480",
          "recordId": 856
        },
        {
          "id": "d10c5fda-729e-475d-aeab-7a9551439b05",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=1548570849181696",
          "recordId": 624
        },
        {
          "id": "d3ceddaa-9d4c-4658-ab5e-d4790a804522",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/aOpwnZZgiM/640/480",
          "recordId": 463
        }
      ],
      "recordId": 589
    },
    {
      "id": "2b5b983b-a05e-4f21-af1b-e8464bcb9958",
      "name": "Intelligent Metal Table",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "c6fc1b97-4d6c-4846-9c13-e69388ea55cf",
          "name": "Cotton",
          "recordId": 338
        },
        {
          "id": "490a0736-7d10-49c8-9a8c-aa5643f3b728",
          "name": "Fresh",
          "recordId": 641
        }
      ],
      "products": [
        {
          "id": "4f0955fb-33da-41e9-b949-f2e4a7e92023",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=6948435181699072",
          "recordId": 995
        },
        {
          "id": "519e5f80-de08-4dee-8c6b-18ecb6f13d69",
          "name": "Shoes",
          "imageUrl": "https://picsum.photos/seed/EjWl3bY/640/480",
          "recordId": 354
        },
        {
          "id": "cb8e18cd-c00e-4c79-b251-6c00e0d878f0",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/67jtgFAl/640/480",
          "recordId": 842
        },
        {
          "id": "de0db29c-49a9-47a7-8ddb-50e3d469317f",
          "name": "Shirt",
          "imageUrl": "https://loremflickr.com/640/480?lock=6489497460015104",
          "recordId": 456
        }
      ],
      "recordId": 605
    },
    {
      "id": "0cb37bad-8b93-48fb-961d-d34918c76310",
      "name": "Refined Soft Car",
      "productTaxonomy": "Garden",
      "ingredients": [
        {
          "id": "527bd9c0-59be-495c-bf5f-6bb525d71a23",
          "name": "Granite",
          "recordId": 969
        },
        {
          "id": "9c06dadd-16c0-4866-86db-6286fbf8c11f",
          "name": "Granite",
          "recordId": 199
        },
        {
          "id": "638b8e5e-58cf-476b-986f-108326f4f3f1",
          "name": "Steel",
          "recordId": 255
        },
        {
          "id": "e8ef01e5-6190-450c-b43a-0c35920ddbec",
          "name": "Frozen",
          "recordId": 802
        }
      ],
      "products": [
        {
          "id": "2883a97c-cd4a-4dba-add4-0a175c6d5768",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/p7gnG9jE/640/480",
          "recordId": 463
        },
        {
          "id": "1e484a26-4283-4476-8654-f2cf378f432f",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/66gXENa/640/480",
          "recordId": 793
        }
      ],
      "recordId": 958
    },
    {
      "id": "faae9a21-3610-4a8a-83b0-eea1a0bdfc45",
      "name": "Awesome Cotton Pizza",
      "productTaxonomy": "Kids",
      "ingredients": [
        {
          "id": "5da7b673-79c0-4848-a85f-c2e2fc049186",
          "name": "Metal",
          "recordId": 133
        },
        {
          "id": "e5161c80-4644-49b5-a9d5-ae37d5d233ff",
          "name": "Fresh",
          "recordId": 962
        },
        {
          "id": "b17bfe30-9d38-4a8a-8943-81a3673dfa97",
          "name": "Bronze",
          "recordId": 426
        }
      ],
      "products": [
        {
          "id": "2d356947-32ae-4f67-91d7-c352b6abb508",
          "name": "Soap",
          "imageUrl": "https://loremflickr.com/640/480?lock=4658071062183936",
          "recordId": 775
        },
        {
          "id": "58d2138f-5c67-4f5a-bcf8-459f679482cc",
          "name": "Gloves",
          "imageUrl": "https://loremflickr.com/640/480?lock=8749881780862976",
          "recordId": 729
        },
        {
          "id": "59a4ad87-195b-4a68-8023-69dadf532697",
          "name": "Fish",
          "imageUrl": "https://loremflickr.com/640/480?lock=5241932743704576",
          "recordId": 618
        },
        {
          "id": "a91c4e69-6d04-4c96-90fc-19a4146561fa",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/ByVUTIS5y/640/480",
          "recordId": 587
        },
        {
          "id": "67306de5-13b3-4a4c-b5dd-a67c016b085a",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/cugGgaw/640/480",
          "recordId": 758
        }
      ],
      "recordId": 861
    },
    {
      "id": "38f2a83b-3c83-4a34-9e35-a1f59f939c70",
      "name": "Recycled Concrete Chair",
      "productTaxonomy": "Jewelery",
      "ingredients": [
        {
          "id": "a15d65d1-7a15-470c-9bf7-eb80a715059d",
          "name": "Wooden",
          "recordId": 439
        },
        {
          "id": "e5f18535-dd22-41ab-a921-fcab855ccafc",
          "name": "Soft",
          "recordId": 143
        },
        {
          "id": "6ac97cf0-92d8-486f-a349-e964a79916fb",
          "name": "Concrete",
          "recordId": 208
        }
      ],
      "products": [
        {
          "id": "5f3203b3-706d-4d52-86a6-5ab27ad3d0c3",
          "name": "Sausages",
          "imageUrl": "https://loremflickr.com/640/480?lock=3412172759629824",
          "recordId": 614
        },
        {
          "id": "aea51704-61b8-4ed8-8926-0d74946b24ef",
          "name": "Sausages",
          "imageUrl": "https://loremflickr.com/640/480?lock=4796708380737536",
          "recordId": 768
        }
      ],
      "recordId": 894
    },
    {
      "id": "046964ae-2be9-46f3-be18-ef3b06ae5129",
      "name": "Licensed Wooden Chair",
      "productTaxonomy": "Home",
      "ingredients": [
        {
          "id": "13fccbcb-df7c-43c4-b7b9-623935c48fcb",
          "name": "Concrete",
          "recordId": 467
        },
        {
          "id": "2edc37eb-4aae-4295-b238-31f5845c8a9e",
          "name": "Metal",
          "recordId": 955
        }
      ],
      "products": [
        {
          "id": "dad11f91-025f-4dd8-bd7f-536b63e23eb7",
          "name": "Car",
          "imageUrl": "https://loremflickr.com/640/480?lock=8664753431904256",
          "recordId": 147
        },
        {
          "id": "d124e4ef-485b-43b1-a2ae-edb6df0eb147",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=6535389718249472",
          "recordId": 822
        }
      ],
      "recordId": 590
    },
    {
      "id": "d5bbf5a3-9b15-42cb-bb43-367c8ed56683",
      "name": "Electronic Fresh Car",
      "productTaxonomy": "Automotive",
      "ingredients": [
        {
          "id": "553a4a33-4a37-4f27-9c1f-f3bf1c7b54ec",
          "name": "Steel",
          "recordId": 683
        },
        {
          "id": "bb54a102-1f84-440b-a713-42f5c6a1c0a8",
          "name": "Plastic",
          "recordId": 197
        }
      ],
      "products": [
        {
          "id": "1c4e86f0-9614-4fb6-ba6b-1e614ef9bbcd",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/Ng3Mg/640/480",
          "recordId": 952
        },
        {
          "id": "070685a3-ecac-4889-8a21-9fd9391c4881",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/EEHxMT/640/480",
          "recordId": 580
        }
      ],
      "recordId": 822
    },
    {
      "id": "ffebf527-7918-4721-b47e-3865b0e3ba1e",
      "name": "Practical Soft Gloves",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "62828990-206a-4181-9865-d3dd335e354d",
          "name": "Rubber",
          "recordId": 791
        },
        {
          "id": "9ae0b76f-928e-4f0b-ab7e-635e4a8cb8e5",
          "name": "Frozen",
          "recordId": 688
        },
        {
          "id": "8c2b014c-83ed-43d8-bfbc-8a31041c7103",
          "name": "Rubber",
          "recordId": 819
        }
      ],
      "products": [
        {
          "id": "a0c9c199-18c0-437d-bb7c-bf07f7058997",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/wqr1SjNe57/640/480",
          "recordId": 568
        }
      ],
      "recordId": 639
    },
    {
      "id": "faf32ce9-7cb6-4022-b2d8-e5f78c84ea1a",
      "name": "Awesome Plastic Car",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "72517f6b-9f20-486a-91d4-aa0bda3ca20a",
          "name": "Concrete",
          "recordId": 135
        }
      ],
      "products": [
        {
          "id": "6dc51fac-ae84-428b-8c82-1e279c2a0fe0",
          "name": "Chips",
          "imageUrl": "https://loremflickr.com/640/480?lock=3572179148996608",
          "recordId": 974
        }
      ],
      "recordId": 244
    },
    {
      "id": "69528666-8b90-48db-aed0-6ab534f577d9",
      "name": "Awesome Granite Shirt",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "7427ea7e-1565-45fe-8625-23d0d186820a",
          "name": "Granite",
          "recordId": 253
        }
      ],
      "products": [
        {
          "id": "621d7d6c-2668-4a29-bb19-ce27e59b2346",
          "name": "Fish",
          "imageUrl": "https://loremflickr.com/640/480?lock=8716891510013952",
          "recordId": 291
        },
        {
          "id": "91a1a328-c126-44fc-8b3f-4ee78d96075f",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/5q9hD7/640/480",
          "recordId": 999
        },
        {
          "id": "7251de69-963a-468a-9bc7-1e473761bd4a",
          "name": "Computer",
          "imageUrl": "https://picsum.photos/seed/vkN6Tp/640/480",
          "recordId": 578
        }
      ],
      "recordId": 752
    },
    {
      "id": "e076ed5b-78cf-48c1-9c1e-a662c93529cc",
      "name": "Modern Frozen Soap",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "2f0781be-dc1a-4468-9214-98190481a554",
          "name": "Metal",
          "recordId": 446
        }
      ],
      "products": [
        {
          "id": "14235685-989e-4b83-b165-8232fff54c98",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=3154101290401792",
          "recordId": 547
        }
      ],
      "recordId": 520
    },
    {
      "id": "c44f74e7-1c59-4e84-b9a8-34acf47f71cc",
      "name": "Incredible Wooden Mouse",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "1365907e-5219-49b6-978c-4fcc169ef444",
          "name": "Steel",
          "recordId": 268
        },
        {
          "id": "78f59413-e423-4e2a-8eb5-b6f8846d2bed",
          "name": "Metal",
          "recordId": 333
        }
      ],
      "products": [
        {
          "id": "ff864ddc-0832-4b14-b174-ecc662bdedbd",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=2455075112878080",
          "recordId": 746
        },
        {
          "id": "95bd3c86-727f-47c7-9a3b-ec04871b35fd",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/szdvwaO/640/480",
          "recordId": 456
        },
        {
          "id": "759d9b8b-f730-4757-9430-5d966b2033e6",
          "name": "Chair",
          "imageUrl": "https://picsum.photos/seed/SuSTvckG/640/480",
          "recordId": 390
        },
        {
          "id": "0455c78a-361f-4817-8cfe-fb467cb41a51",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/M1ECZ9i/640/480",
          "recordId": 504
        }
      ],
      "recordId": 360
    },
    {
      "id": "ecae73c8-9c94-4730-9d98-da3255ae29c8",
      "name": "Luxurious Steel Hat",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "463dce7e-6900-49f8-a3d3-d057a805bc2d",
          "name": "Fresh",
          "recordId": 367
        }
      ],
      "products": [
        {
          "id": "f2b685c4-761d-43fb-b5fd-c8e190a36e8d",
          "name": "Shirt",
          "imageUrl": "https://loremflickr.com/640/480?lock=8344352449363968",
          "recordId": 963
        },
        {
          "id": "05d8557f-47a2-4a5e-9712-eb1277605f48",
          "name": "Ball",
          "imageUrl": "https://loremflickr.com/640/480?lock=2113885672833024",
          "recordId": 472
        },
        {
          "id": "5e2f3c0b-c406-4199-95d3-1c0f256e7b25",
          "name": "Shoes",
          "imageUrl": "https://picsum.photos/seed/qJfncLN1/640/480",
          "recordId": 167
        },
        {
          "id": "10c3eaca-1359-499e-bba8-3f6753cd5388",
          "name": "Computer",
          "imageUrl": "https://picsum.photos/seed/AFxaXQn2pR/640/480",
          "recordId": 886
        },
        {
          "id": "be932a18-7232-4ca2-b72f-baafa5fc47ad",
          "name": "Gloves",
          "imageUrl": "https://loremflickr.com/640/480?lock=6121067932286976",
          "recordId": 926
        }
      ],
      "recordId": 819
    },
    {
      "id": "34ea58fe-4e40-4c08-83c5-4e0971b32cdf",
      "name": "Ergonomic Cotton Bike",
      "productTaxonomy": "Garden",
      "ingredients": [
        {
          "id": "808f26ab-161d-476e-9bb3-48be8df169c1",
          "name": "Cotton",
          "recordId": 741
        },
        {
          "id": "65d990bf-6049-4655-afcd-f621ac57c761",
          "name": "Frozen",
          "recordId": 140
        }
      ],
      "products": [
        {
          "id": "cb7961c9-b4ed-44a6-aa38-479f045b70c9",
          "name": "Computer",
          "imageUrl": "https://picsum.photos/seed/uSkw8ZX/640/480",
          "recordId": 913
        },
        {
          "id": "0a5e4b55-30b5-4327-b6da-b0ab843f0951",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/tIh0xYR2/640/480",
          "recordId": 873
        }
      ],
      "recordId": 760
    },
    {
      "id": "343dbb34-e3b9-4add-9323-016841c09808",
      "name": "Oriental Wooden Bacon",
      "productTaxonomy": "Jewelery",
      "ingredients": [
        {
          "id": "af44163d-3717-403b-bcd1-43d4aa36cec2",
          "name": "Cotton",
          "recordId": 567
        }
      ],
      "products": [
        {
          "id": "42a1787f-13cc-4624-b9fe-ae14400d1eec",
          "name": "Computer",
          "imageUrl": "https://picsum.photos/seed/oqYiRJuJi/640/480",
          "recordId": 579
        },
        {
          "id": "fcd891a2-4c03-4268-ac7e-ca1d043f444d",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=389941318123520",
          "recordId": 659
        },
        {
          "id": "d10cefb8-2e83-4533-a86b-4500906eb741",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=7950183451066368",
          "recordId": 842
        },
        {
          "id": "edc198e6-2029-43bb-abe7-a0d016d8e7d4",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=8241630775607296",
          "recordId": 241
        }
      ],
      "recordId": 451
    },
    {
      "id": "4eef9a83-77a1-4f60-ae7f-6255f49f2293",
      "name": "Fantastic Rubber Salad",
      "productTaxonomy": "Automotive",
      "ingredients": [
        {
          "id": "a19ee7a5-bb28-405e-8229-c743291aff8f",
          "name": "Concrete",
          "recordId": 124
        },
        {
          "id": "633d4ea0-a439-483f-b93f-9f46b053759e",
          "name": "Concrete",
          "recordId": 366
        },
        {
          "id": "d5c26dcf-f0bf-40d3-a4f0-d3aab648ea21",
          "name": "Plastic",
          "recordId": 388
        }
      ],
      "products": [
        {
          "id": "4655da50-1cf4-4526-9ec4-754aca75edd8",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=3328556381765632",
          "recordId": 390
        },
        {
          "id": "a2acb902-4636-4737-8ce9-a6ddaf6056aa",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=4562396985163776",
          "recordId": 738
        },
        {
          "id": "e1a2eff1-6e6f-400c-8865-1aa4a74018d9",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=4935987448774656",
          "recordId": 701
        },
        {
          "id": "3c30da00-f9c2-4db8-be0d-829bdd09ac5b",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=1221960686108672",
          "recordId": 356
        }
      ],
      "recordId": 328
    },
    {
      "id": "32c8c895-535b-460a-9ab6-090b4ed6953b",
      "name": "Electronic Wooden Pants",
      "productTaxonomy": "Games",
      "ingredients": [
        {
          "id": "ced75402-77f7-49fd-9a4d-b100e6b0dc92",
          "name": "Fresh",
          "recordId": 259
        },
        {
          "id": "fdb57245-36f3-4d8e-9dac-0b8e14533451",
          "name": "Bronze",
          "recordId": 791
        }
      ],
      "products": [
        {
          "id": "c33e746d-c2e0-4da4-847c-db5566137a30",
          "name": "Cheese",
          "imageUrl": "https://loremflickr.com/640/480?lock=8220311312924672",
          "recordId": 975
        },
        {
          "id": "cfd4063d-8203-4386-8a3d-cc6e0a76bdac",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=790631458799616",
          "recordId": 779
        },
        {
          "id": "af627ee1-92d8-45a9-94d0-6030974746aa",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/84KwvNs/640/480",
          "recordId": 708
        }
      ],
      "recordId": 622
    },
    {
      "id": "e50f3b45-3be0-41a8-868d-14a6b143a7b7",
      "name": "Licensed Cotton Keyboard",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "e25083d5-d20c-453e-9fef-21807acd63bb",
          "name": "Granite",
          "recordId": 548
        },
        {
          "id": "dcdd8d02-007f-4fae-bbf8-c8597d1cb1aa",
          "name": "Frozen",
          "recordId": 618
        },
        {
          "id": "64fad2d3-5119-4544-8c37-575094d310f1",
          "name": "Concrete",
          "recordId": 745
        },
        {
          "id": "912dc5ab-945c-41b8-8ece-4c1c06774169",
          "name": "Bronze",
          "recordId": 767
        }
      ],
      "products": [
        {
          "id": "1c6e2ca2-5316-4f2b-a2d4-7dcde69320de",
          "name": "Bike",
          "imageUrl": "https://loremflickr.com/640/480?lock=7804470454910976",
          "recordId": 346
        }
      ],
      "recordId": 798
    },
    {
      "id": "f07811b7-2f4c-46c0-b947-242adb9d57ba",
      "name": "Electronic Steel Table",
      "productTaxonomy": "Movies",
      "ingredients": [
        {
          "id": "668b216b-2bcb-43ee-babf-ab3127603641",
          "name": "Soft",
          "recordId": 252
        },
        {
          "id": "90e4813a-e21f-46ea-97c7-b43a1a9d66e8",
          "name": "Cotton",
          "recordId": 607
        }
      ],
      "products": [
        {
          "id": "1399709e-39ad-469e-afc3-91573491cbe0",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/K8PalNB/640/480",
          "recordId": 247
        },
        {
          "id": "ae1fc27d-6e8b-4829-ae2e-0365bbcead1f",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/KkwTOs076/640/480",
          "recordId": 782
        }
      ],
      "recordId": 957
    },
    {
      "id": "d587737a-f68d-4476-a66c-df185c77304f",
      "name": "Gorgeous Metal Shirt",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "3b7702bc-becd-45f9-8e23-2e23f65fb620",
          "name": "Rubber",
          "recordId": 892
        },
        {
          "id": "3ab08e2b-01ec-43ec-82db-83dea13d2c0b",
          "name": "Rubber",
          "recordId": 930
        }
      ],
      "products": [
        {
          "id": "fc110a25-1db3-406c-b638-0917b08090e5",
          "name": "Sausages",
          "imageUrl": "https://loremflickr.com/640/480?lock=7237979590361088",
          "recordId": 789
        },
        {
          "id": "47c0d89a-5d05-4f5c-b0a4-29e451d81136",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/HJXxROyWZ/640/480",
          "recordId": 205
        },
        {
          "id": "7efa6d93-344c-4bf6-bda6-f5f3a76d0b2a",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/MOCF2kZ5am/640/480",
          "recordId": 682
        },
        {
          "id": "8bb8f14b-27a8-4622-9338-1bb437afd316",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/3Krn74BK/640/480",
          "recordId": 883
        }
      ],
      "recordId": 725
    },
    {
      "id": "eb7092f0-7668-4721-b9f1-b9dbb05b826b",
      "name": "Licensed Plastic Computer",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "d8272c25-bdd5-4677-92aa-a156b93902de",
          "name": "Rubber",
          "recordId": 205
        },
        {
          "id": "f98287e9-5c4c-456a-b822-b6d14585bab4",
          "name": "Steel",
          "recordId": 332
        }
      ],
      "products": [
        {
          "id": "2d0c46fa-eb98-43b7-b016-ff1347dab359",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/esgJTbyyqp/640/480",
          "recordId": 368
        },
        {
          "id": "f01b911a-7728-4c97-bda1-286cec58d770",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=6076492459016192",
          "recordId": 935
        },
        {
          "id": "04491546-62b8-43dd-a444-29a21cadc278",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/8YUyyt/640/480",
          "recordId": 849
        },
        {
          "id": "a3e1250d-ca79-4c5c-950a-47c655bd39df",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/kv0Tu/640/480",
          "recordId": 861
        },
        {
          "id": "b1568a04-31ce-4df5-9feb-e0b7795e6287",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/BoEajm8/640/480",
          "recordId": 897
        }
      ],
      "recordId": 229
    },
    {
      "id": "f8e2a1d2-787c-4f77-845c-a054e98aada0",
      "name": "Awesome Wooden Sausages",
      "productTaxonomy": "Music",
      "ingredients": [
        {
          "id": "582485d5-9ea1-45ad-a866-f3170a5bafad",
          "name": "Soft",
          "recordId": 195
        },
        {
          "id": "8afa2ae9-a977-4781-a181-5e6b5df03021",
          "name": "Soft",
          "recordId": 179
        },
        {
          "id": "b7dfdae4-fa86-4141-8639-29e085320944",
          "name": "Granite",
          "recordId": 125
        },
        {
          "id": "622f86b1-3d60-488b-b396-9742033fe710",
          "name": "Concrete",
          "recordId": 961
        },
        {
          "id": "f763710e-5063-48ca-80b1-1236955b7575",
          "name": "Bronze",
          "recordId": 337
        }
      ],
      "products": [
        {
          "id": "327d7553-3cb5-4dde-9d16-5a5d03acf9dd",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=1426856045707264",
          "recordId": 838
        },
        {
          "id": "b6f71447-b488-4f15-b9b9-716cfadda087",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/XV5dMcqpYa/640/480",
          "recordId": 519
        },
        {
          "id": "c209de32-0d8a-4723-94e1-1781930a08bb",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=813302710009856",
          "recordId": 102
        },
        {
          "id": "76ce85f2-2a5b-44fb-82a8-498915d8c2a9",
          "name": "Shirt",
          "imageUrl": "https://loremflickr.com/640/480?lock=5011908606296064",
          "recordId": 619
        }
      ],
      "recordId": 725
    },
    {
      "id": "9f98abc2-7bb0-4d7a-a9ec-97c99341c78c",
      "name": "Licensed Metal Chips",
      "productTaxonomy": "Movies",
      "ingredients": [
        {
          "id": "1fe2b687-217d-4ca8-ace4-b6afce3b8a95",
          "name": "Steel",
          "recordId": 467
        },
        {
          "id": "eee16040-824a-4b70-aed7-fbd80a280d21",
          "name": "Wooden",
          "recordId": 827
        },
        {
          "id": "bb39b324-48c7-4b29-8bf5-11bb0dcc4458",
          "name": "Soft",
          "recordId": 561
        },
        {
          "id": "e6f795f3-cf52-49ea-931c-148060b5b39f",
          "name": "Cotton",
          "recordId": 967
        }
      ],
      "products": [
        {
          "id": "5e83ab51-292d-4043-b5d4-e5d8575b40db",
          "name": "Table",
          "imageUrl": "https://picsum.photos/seed/JczdJG0VG/640/480",
          "recordId": 626
        },
        {
          "id": "4756cb70-9ecc-4548-aa9a-f18b4f702910",
          "name": "Soap",
          "imageUrl": "https://loremflickr.com/640/480?lock=1735912987820032",
          "recordId": 450
        },
        {
          "id": "b97939a8-da84-4b00-98e6-a6f1000b1f05",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/0V9Bk/640/480",
          "recordId": 788
        },
        {
          "id": "5585671b-5fef-4fb9-8d30-b00dd1b3364f",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=7723338518495232",
          "recordId": 839
        },
        {
          "id": "8ab04199-0496-41f3-9c99-169f201fba82",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/61w70TD/640/480",
          "recordId": 165
        }
      ],
      "recordId": 574
    },
    {
      "id": "ca2b495c-e064-491c-9557-a79475fcaa02",
      "name": "Rustic Frozen Cheese",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "cfaf20e3-174c-42f6-ab9d-f3ca44e58726",
          "name": "Concrete",
          "recordId": 353
        },
        {
          "id": "bf50c1c7-bdb4-4967-a0ba-34f0998f240c",
          "name": "Cotton",
          "recordId": 261
        }
      ],
      "products": [
        {
          "id": "71cf231d-55cf-4815-85d5-f038bcacf6b9",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/hwtA6lT0q9/640/480",
          "recordId": 359
        },
        {
          "id": "c780fe9b-26f0-4861-a0f6-f07ef0af76aa",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=8159139568025600",
          "recordId": 681
        },
        {
          "id": "9b2edccd-bec3-4426-9e10-2bdccb804e8a",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=1381285664653312",
          "recordId": 378
        }
      ],
      "recordId": 714
    },
    {
      "id": "b1e2930b-8768-4ba9-a456-f81875291750",
      "name": "Fantastic Concrete Mouse",
      "productTaxonomy": "Electronics",
      "ingredients": [
        {
          "id": "15272064-0aa4-4dfa-9c95-7b5f5720f004",
          "name": "Frozen",
          "recordId": 976
        },
        {
          "id": "5fa7461a-cf4e-43a9-aa43-a5e117b87f9d",
          "name": "Steel",
          "recordId": 481
        },
        {
          "id": "c7057d9f-ac8c-45fb-b9e4-0c175a2ad6c5",
          "name": "Frozen",
          "recordId": 446
        }
      ],
      "products": [
        {
          "id": "5d78ec14-efd5-4409-8df4-c2069cf335e0",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=3726914701230080",
          "recordId": 593
        },
        {
          "id": "a724ff71-03d6-47a9-9c0d-62593465a4da",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=2465426766299136",
          "recordId": 537
        }
      ],
      "recordId": 258
    },
    {
      "id": "74089660-4974-4f2a-a0ab-91b95b045c8f",
      "name": "Bespoke Wooden Bacon",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "0938c28c-da4e-48ce-9254-56f0a60aa35f",
          "name": "Metal",
          "recordId": 904
        }
      ],
      "products": [
        {
          "id": "bfadfec1-2157-48e0-bb9a-8cfabc18c1bb",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=3835622556958720",
          "recordId": 682
        },
        {
          "id": "ad38bba9-246f-4aaf-b697-956216615900",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=6989542483558400",
          "recordId": 207
        }
      ],
      "recordId": 689
    },
    {
      "id": "9c34241f-a327-4740-b8cc-62858601c833",
      "name": "Gorgeous Concrete Chair",
      "productTaxonomy": "Garden",
      "ingredients": [
        {
          "id": "9fc802c5-1b03-42c5-9ff2-3b0d0fb78db8",
          "name": "Rubber",
          "recordId": 614
        },
        {
          "id": "c0e3af3c-fd70-43b0-9c8e-92829b8d4ed4",
          "name": "Fresh",
          "recordId": 287
        },
        {
          "id": "63ecc74a-3ee5-435a-a270-f174d57a579d",
          "name": "Cotton",
          "recordId": 253
        },
        {
          "id": "be7446bd-7607-4d3f-aed5-47b0a049ff86",
          "name": "Steel",
          "recordId": 604
        },
        {
          "id": "31e50e4e-90d5-4d0e-983b-f53eeff54bee",
          "name": "Bronze",
          "recordId": 317
        }
      ],
      "products": [
        {
          "id": "9a20d21d-1785-4df2-bbf1-aba2ca22fb44",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/dF774GJpLI/640/480",
          "recordId": 250
        },
        {
          "id": "9517e946-3187-4f82-90f7-02c52d75944e",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/hidBKQR/640/480",
          "recordId": 570
        },
        {
          "id": "48195631-d250-45ae-905b-5e2c091717ad",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/zx3rxq/640/480",
          "recordId": 807
        },
        {
          "id": "b2e5dbab-7052-460a-9eeb-2a5541ba5fd7",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=8899016186134528",
          "recordId": 474
        }
      ],
      "recordId": 277
    },
    {
      "id": "b6b753de-e2ac-4bd0-b0a0-9aa3b5d8137c",
      "name": "Recycled Granite Hat",
      "productTaxonomy": "Baby",
      "ingredients": [
        {
          "id": "b65f13b3-f163-4e9b-87de-5704c49001e4",
          "name": "Soft",
          "recordId": 528
        },
        {
          "id": "66fb71aa-2302-4180-a4ef-5cc71bbdca70",
          "name": "Granite",
          "recordId": 997
        },
        {
          "id": "7c649310-2aee-4997-ad98-1e552722193b",
          "name": "Bronze",
          "recordId": 622
        },
        {
          "id": "85796615-4703-41c6-928a-dc4cf3e13322",
          "name": "Steel",
          "recordId": 778
        }
      ],
      "products": [
        {
          "id": "357ff116-7748-41e6-ac53-673a9e8c5c16",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/Aqvsz9/640/480",
          "recordId": 332
        }
      ],
      "recordId": 814
    },
    {
      "id": "2b488c16-314f-4af8-868b-995d9cb5fbdf",
      "name": "Tasty Frozen Shirt",
      "productTaxonomy": "Sports",
      "ingredients": [
        {
          "id": "13d581a6-066d-417a-b79c-16f755f32cfa",
          "name": "Steel",
          "recordId": 213
        }
      ],
      "products": [
        {
          "id": "eab6a24a-077b-49fe-8ae3-262888a65ee7",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=3196329601794048",
          "recordId": 570
        }
      ],
      "recordId": 701
    },
    {
      "id": "a8b01350-273d-4ee2-96c8-80672213e819",
      "name": "Generic Cotton Cheese",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "1363d4a9-4b73-4f6c-a13f-4b3244ebcab4",
          "name": "Steel",
          "recordId": 992
        },
        {
          "id": "386dc032-eb62-4ecd-ab5b-b1ad58b7654c",
          "name": "Soft",
          "recordId": 256
        },
        {
          "id": "a25cc169-05c2-47b8-9590-8ca134f26e26",
          "name": "Rubber",
          "recordId": 762
        },
        {
          "id": "bfd7dc78-72c5-41b3-b008-f538df860567",
          "name": "Wooden",
          "recordId": 752
        },
        {
          "id": "e0aac55f-d56d-4d9d-a5cc-3db7c24a0b1c",
          "name": "Metal",
          "recordId": 478
        }
      ],
      "products": [
        {
          "id": "2b1dd445-b277-4bb7-9e9e-d996d33be03c",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=543811505750016",
          "recordId": 527
        },
        {
          "id": "b957208b-2392-4d01-a974-86fd099c9d02",
          "name": "Tuna",
          "imageUrl": "https://loremflickr.com/640/480?lock=6716013794033664",
          "recordId": 942
        },
        {
          "id": "bb75e213-a835-4984-b668-0238ed695489",
          "name": "Soap",
          "imageUrl": "https://picsum.photos/seed/6Z4kguF/640/480",
          "recordId": 322
        },
        {
          "id": "fc692f80-f275-49f1-9f61-693f63c8d26b",
          "name": "Cheese",
          "imageUrl": "https://picsum.photos/seed/VBqfNfK5KQ/640/480",
          "recordId": 289
        },
        {
          "id": "f73b9838-1442-44eb-92cf-55229861ea19",
          "name": "Chair",
          "imageUrl": "https://picsum.photos/seed/jdRljF/640/480",
          "recordId": 712
        }
      ],
      "recordId": 135
    },
    {
      "id": "2cfe0fbf-7331-4297-9caa-c9a9713b244a",
      "name": "Gorgeous Granite Shirt",
      "productTaxonomy": "Clothing",
      "ingredients": [
        {
          "id": "e6d10260-3ff0-4684-bb37-ce6c5119cef8",
          "name": "Bronze",
          "recordId": 872
        },
        {
          "id": "c0c81d77-5018-4623-8b6b-81a93d22e392",
          "name": "Plastic",
          "recordId": 477
        },
        {
          "id": "a692bb7e-1b4d-404c-824e-8b45bf202147",
          "name": "Concrete",
          "recordId": 111
        }
      ],
      "products": [
        {
          "id": "43814643-2f85-4084-976f-688a612b42ac",
          "name": "Ball",
          "imageUrl": "https://loremflickr.com/640/480?lock=226294497280000",
          "recordId": 490
        },
        {
          "id": "cb09d20b-1339-4deb-a78a-a747c1ebb14a",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/TkcPnk/640/480",
          "recordId": 339
        },
        {
          "id": "3943a68c-4e71-428e-8565-41405229aea9",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/8hF2Ff7t/640/480",
          "recordId": 160
        },
        {
          "id": "43c79cac-f1bf-46d8-a7ff-f61f7fd3feb0",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=3551465494806528",
          "recordId": 606
        },
        {
          "id": "282e65cd-bf85-4963-bec8-e2bf7f4552e0",
          "name": "Mouse",
          "imageUrl": "https://loremflickr.com/640/480?lock=608587613208576",
          "recordId": 269
        }
      ],
      "recordId": 894
    },
    {
      "id": "a8a241bd-0154-4630-a1e5-28a4c2b8a2eb",
      "name": "Tasty Steel Chips",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "7689eceb-2b5d-4dae-b7be-5b4e414962b5",
          "name": "Granite",
          "recordId": 493
        }
      ],
      "products": [
        {
          "id": "ee618d53-b6c1-4c42-b9a2-447a6a5f86b8",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/kt4l1Bl/640/480",
          "recordId": 984
        },
        {
          "id": "76116f69-907c-4f18-983c-0505f4ae6e96",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/YnmBX/640/480",
          "recordId": 306
        },
        {
          "id": "0dc79bb5-28a2-4615-b988-ef0ffff196b6",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=6590702534262784",
          "recordId": 829
        },
        {
          "id": "461e429c-b62d-4eb9-b8c3-4410a6f4d916",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=2970180772691968",
          "recordId": 256
        }
      ],
      "recordId": 415
    },
    {
      "id": "fc4fdd23-48c2-40b1-b396-c5c8e89eca9c",
      "name": "Practical Bronze Shirt",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "1822367f-f7a4-4cd5-bb50-1d90ffd16fa1",
          "name": "Steel",
          "recordId": 753
        },
        {
          "id": "0d6c7f43-faf6-4ad1-8f65-75686cd4cf96",
          "name": "Cotton",
          "recordId": 895
        }
      ],
      "products": [
        {
          "id": "aa6baef1-a127-4260-a739-bd057bfefe35",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=5493521467310080",
          "recordId": 862
        },
        {
          "id": "5db0767f-be99-4762-b7f4-0eced7dacb1e",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=4541800861663232",
          "recordId": 193
        },
        {
          "id": "b2cffc7b-2388-4bae-a3e3-7b9f3a0b6b89",
          "name": "Bike",
          "imageUrl": "https://loremflickr.com/640/480?lock=4274963485818880",
          "recordId": 281
        },
        {
          "id": "2b32d60d-ae44-4d7a-94be-58f8ba3f9006",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=6563726708703232",
          "recordId": 658
        }
      ],
      "recordId": 832
    },
    {
      "id": "68a20bc3-161b-4da7-b001-82ecb59e72bb",
      "name": "Generic Steel Salad",
      "productTaxonomy": "Electronics",
      "ingredients": [
        {
          "id": "8a3711bb-566e-4dd1-a202-8a5afa6959e9",
          "name": "Cotton",
          "recordId": 542
        },
        {
          "id": "e14da204-bd67-4261-bb6f-3f265c5754d3",
          "name": "Cotton",
          "recordId": 761
        },
        {
          "id": "56c08123-0f4c-40d1-a910-a93606cc90ab",
          "name": "Soft",
          "recordId": 615
        },
        {
          "id": "544e3fef-f19b-45ae-a366-aa9d19b24444",
          "name": "Concrete",
          "recordId": 548
        },
        {
          "id": "9baaff3a-2c39-4ed6-b3d0-8f5cf46843a4",
          "name": "Granite",
          "recordId": 102
        }
      ],
      "products": [
        {
          "id": "64f5c055-42a5-46a1-bbd0-21a9ef89e881",
          "name": "Chips",
          "imageUrl": "https://loremflickr.com/640/480?lock=5012042014523392",
          "recordId": 878
        },
        {
          "id": "5c3b8baa-755b-4d74-bd91-f1aba3beca5d",
          "name": "Pants",
          "imageUrl": "https://picsum.photos/seed/wW1MK/640/480",
          "recordId": 511
        },
        {
          "id": "1f6960d5-347e-4155-8c24-d82127c60777",
          "name": "Chair",
          "imageUrl": "https://picsum.photos/seed/DxddTf5/640/480",
          "recordId": 755
        },
        {
          "id": "5185a047-4309-4f82-9842-af06f1283c68",
          "name": "Pants",
          "imageUrl": "https://loremflickr.com/640/480?lock=4490033197219840",
          "recordId": 799
        },
        {
          "id": "db621296-baf7-422e-9e3b-c2a9b85568b1",
          "name": "Car",
          "imageUrl": "https://picsum.photos/seed/j12e7/640/480",
          "recordId": 587
        }
      ],
      "recordId": 729
    },
    {
      "id": "d5f2e6e6-102c-46ea-8881-95dab054fe96",
      "name": "Handcrafted Rubber Sausages",
      "productTaxonomy": "Industrial",
      "ingredients": [
        {
          "id": "242b9884-e860-49e5-82d7-e9afce39a7e0",
          "name": "Wooden",
          "recordId": 649
        }
      ],
      "products": [
        {
          "id": "631984b9-1c79-4116-9589-564835c692f0",
          "name": "Bacon",
          "imageUrl": "https://picsum.photos/seed/FDAxnPCpo/640/480",
          "recordId": 336
        },
        {
          "id": "5b50e771-1c65-4148-8628-f163f71e8d9f",
          "name": "Shirt",
          "imageUrl": "https://picsum.photos/seed/qk0SDEhIPw/640/480",
          "recordId": 765
        }
      ],
      "recordId": 883
    },
    {
      "id": "f5b160be-3258-42a3-a351-04f6fe89de86",
      "name": "Generic Soft Gloves",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "8f1d2be6-b61d-4b58-8089-4f7e6933942b",
          "name": "Cotton",
          "recordId": 570
        }
      ],
      "products": [
        {
          "id": "04b16559-53e5-4201-b799-9618875bdd42",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/LtHBqAVGP/640/480",
          "recordId": 212
        },
        {
          "id": "a2746704-00ed-4ce5-9f9f-b993afe1128b",
          "name": "Cheese",
          "imageUrl": "https://picsum.photos/seed/0qick/640/480",
          "recordId": 538
        },
        {
          "id": "e69201c3-08e4-4ac3-8556-44a664c93658",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/XYTLL0i/640/480",
          "recordId": 741
        },
        {
          "id": "234fe9b7-a72e-42a7-87fa-66e1cfa8fe9e",
          "name": "Chair",
          "imageUrl": "https://picsum.photos/seed/crMStW3Y/640/480",
          "recordId": 173
        }
      ],
      "recordId": 637
    },
    {
      "id": "4be3f8cd-7881-48a7-a01a-5165baec38d4",
      "name": "Bespoke Frozen Car",
      "productTaxonomy": "Books",
      "ingredients": [
        {
          "id": "cbe3ab64-ab31-4a0a-91e3-deceaf47ba9d",
          "name": "Concrete",
          "recordId": 278
        },
        {
          "id": "0e46d498-03ea-4181-806e-d6f9bb014fc6",
          "name": "Metal",
          "recordId": 162
        },
        {
          "id": "1ff382c1-74c7-4cd1-bc40-670699a1d80b",
          "name": "Soft",
          "recordId": 798
        },
        {
          "id": "bd5fbef7-a2e3-41d5-ac67-48006a2b0734",
          "name": "Concrete",
          "recordId": 728
        },
        {
          "id": "9c7661e4-81ba-4c2d-bdf9-6fa37d402a9c",
          "name": "Rubber",
          "recordId": 200
        }
      ],
      "products": [
        {
          "id": "54c3eb32-87ad-490c-9176-c674dfdab901",
          "name": "Towels",
          "imageUrl": "https://loremflickr.com/640/480?lock=2566363939864576",
          "recordId": 252
        },
        {
          "id": "ffa5cf19-3793-497d-9899-1e0abda4a7bd",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/EifVPh/640/480",
          "recordId": 376
        },
        {
          "id": "c5ceb955-b419-443b-9865-cfe39fac326d",
          "name": "Soap",
          "imageUrl": "https://loremflickr.com/640/480?lock=5258822077644800",
          "recordId": 789
        },
        {
          "id": "738ea859-f0db-41d5-8e23-e848ffa7c91b",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/vO5gusrS9R/640/480",
          "recordId": 397
        },
        {
          "id": "38b553d7-2362-46b0-a36a-d172aacf7b28",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=440967249264640",
          "recordId": 575
        }
      ],
      "recordId": 784
    },
    {
      "id": "4ebb6e60-c8e2-4033-91d0-a28b24bf9128",
      "name": "Awesome Concrete Chips",
      "productTaxonomy": "Jewelery",
      "ingredients": [
        {
          "id": "564df525-4bd6-45e5-a25c-dd240c7136c0",
          "name": "Concrete",
          "recordId": 764
        },
        {
          "id": "3a2abeb5-d19f-4b61-b916-a9025d6d7d9b",
          "name": "Steel",
          "recordId": 238
        },
        {
          "id": "1b510153-e431-4efa-a295-193174fd3cdb",
          "name": "Cotton",
          "recordId": 414
        }
      ],
      "products": [
        {
          "id": "8faff671-d54a-4cf9-b8e1-731486e30ce1",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=3371468406652928",
          "recordId": 404
        },
        {
          "id": "5d57c3a2-d5cc-4794-8bb8-65753a9ed31e",
          "name": "Tuna",
          "imageUrl": "https://picsum.photos/seed/4sKku4RR9T/640/480",
          "recordId": 244
        },
        {
          "id": "ee111296-db65-447d-85fe-5cfaad0fe131",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/ottn0SsZ/640/480",
          "recordId": 470
        }
      ],
      "recordId": 765
    },
    {
      "id": "7cc5434a-38e9-4965-bc81-ba75d609cdf7",
      "name": "Licensed Wooden Fish",
      "productTaxonomy": "Games",
      "ingredients": [
        {
          "id": "042ca9be-830a-428b-9fbe-968ee35bfddf",
          "name": "Frozen",
          "recordId": 770
        },
        {
          "id": "5eb805dd-d003-4639-ae76-5c999734a08e",
          "name": "Cotton",
          "recordId": 945
        },
        {
          "id": "44c5087d-9b85-48ad-8ca4-f570bb804950",
          "name": "Wooden",
          "recordId": 911
        }
      ],
      "products": [
        {
          "id": "7520ad9a-0280-4e74-a390-fd5f0f883fab",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/bnt3e9Mq/640/480",
          "recordId": 330
        },
        {
          "id": "092e0c5d-0e3a-456f-9535-cdb2935a0ceb",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/lQrr6o/640/480",
          "recordId": 955
        },
        {
          "id": "20bf2653-7fae-47b1-a1a3-00f13cfc8564",
          "name": "Fish",
          "imageUrl": "https://picsum.photos/seed/K0v151j/640/480",
          "recordId": 438
        },
        {
          "id": "3a52046a-f9d8-4b50-ada5-8a8b18143c93",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/KHJlW/640/480",
          "recordId": 555
        }
      ],
      "recordId": 461
    },
    {
      "id": "af2695ae-0b7f-4f44-9415-1def19a750d5",
      "name": "Licensed Rubber Fish",
      "productTaxonomy": "Movies",
      "ingredients": [
        {
          "id": "01188131-4791-4c76-8d95-a18f6f3752c8",
          "name": "Concrete",
          "recordId": 801
        },
        {
          "id": "ec6330eb-8852-4fed-ae45-9974ea81ebef",
          "name": "Steel",
          "recordId": 607
        }
      ],
      "products": [
        {
          "id": "c119ab91-c345-4acb-af63-49c6e660d4b2",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=5495589196267520",
          "recordId": 548
        },
        {
          "id": "5509f33d-744c-40e5-a261-690b2208daf1",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/Fh6OyTDaIR/640/480",
          "recordId": 111
        },
        {
          "id": "af0f34bc-951e-4a68-979b-bdd92a0f89b0",
          "name": "Chair",
          "imageUrl": "https://picsum.photos/seed/GXpHQNXM1/640/480",
          "recordId": 247
        }
      ],
      "recordId": 190
    },
    {
      "id": "d1cd8aa5-8d8e-44f2-8b10-8ce63ab34927",
      "name": "Rustic Rubber Ball",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "57b609ae-e16f-43a0-98f4-be1d0f8710b6",
          "name": "Soft",
          "recordId": 520
        },
        {
          "id": "5fe74184-b5a3-440a-98ff-4ac1115b3095",
          "name": "Granite",
          "recordId": 556
        },
        {
          "id": "ea334c39-bbfe-47d0-b523-6bdd4224deb9",
          "name": "Wooden",
          "recordId": 898
        },
        {
          "id": "2004a1a4-6213-443d-be8d-cf49dc495709",
          "name": "Concrete",
          "recordId": 370
        }
      ],
      "products": [
        {
          "id": "8468def7-0028-4dd1-ac76-fff6f751d144",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=7450767543762944",
          "recordId": 740
        },
        {
          "id": "14a4c96f-d13c-468e-8841-5d2d77746a39",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/ymwiv/640/480",
          "recordId": 572
        },
        {
          "id": "19b9d5ce-b7ab-44da-afc3-c3f04b7fc4ac",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=115979199709184",
          "recordId": 456
        }
      ],
      "recordId": 315
    },
    {
      "id": "8ac05720-1f2e-416b-9830-e93059658a2d",
      "name": "Awesome Bronze Gloves",
      "productTaxonomy": "Jewelery",
      "ingredients": [
        {
          "id": "72cfc7dd-0f10-44f2-b5c7-e4ab5d3b9f78",
          "name": "Steel",
          "recordId": 648
        },
        {
          "id": "f2af1b87-fe3b-4fe6-92de-202c48a9da3f",
          "name": "Metal",
          "recordId": 782
        },
        {
          "id": "36f4fbca-39df-42cb-a2fc-9d63418511e3",
          "name": "Wooden",
          "recordId": 561
        },
        {
          "id": "5e320b50-1c58-4143-bf26-2bcc0f82490c",
          "name": "Concrete",
          "recordId": 791
        }
      ],
      "products": [
        {
          "id": "a81b5e34-2ec6-4099-b70f-155bceca76c0",
          "name": "Tuna",
          "imageUrl": "https://loremflickr.com/640/480?lock=5646558785699840",
          "recordId": 738
        },
        {
          "id": "3c599952-e774-411e-8d12-e873014da05c",
          "name": "Pizza",
          "imageUrl": "https://loremflickr.com/640/480?lock=3302433558102016",
          "recordId": 359
        }
      ],
      "recordId": 803
    },
    {
      "id": "670ba99d-e58f-4e31-bd74-33c3797321e9",
      "name": "Bespoke Frozen Sausages",
      "productTaxonomy": "Kids",
      "ingredients": [
        {
          "id": "cf69676f-fefb-4248-9c32-c41e9b3e7d2c",
          "name": "Rubber",
          "recordId": 865
        },
        {
          "id": "58be398a-0f19-4640-bbcb-778bcce0893f",
          "name": "Plastic",
          "recordId": 460
        },
        {
          "id": "a570f718-9106-4f8b-833d-5a51181bd45d",
          "name": "Frozen",
          "recordId": 929
        }
      ],
      "products": [
        {
          "id": "3282f7b1-229b-42f8-b110-2eb29d3b7d8f",
          "name": "Keyboard",
          "imageUrl": "https://picsum.photos/seed/wZmKmr9/640/480",
          "recordId": 727
        }
      ],
      "recordId": 315
    },
    {
      "id": "01698345-110a-4c09-af2c-323c6605a4e9",
      "name": "Elegant Rubber Car",
      "productTaxonomy": "Grocery",
      "ingredients": [
        {
          "id": "bb96335b-f6e9-4d90-8a6c-c8f5d9634d23",
          "name": "Rubber",
          "recordId": 797
        },
        {
          "id": "424981e4-58d7-4cf7-a0c4-031eea745d16",
          "name": "Granite",
          "recordId": 437
        },
        {
          "id": "5a0d74c7-087a-4df4-b270-3136a63d6217",
          "name": "Cotton",
          "recordId": 636
        },
        {
          "id": "6444d9e2-682a-4134-a97b-c53f881f54aa",
          "name": "Steel",
          "recordId": 722
        },
        {
          "id": "a78936ed-7c7f-4dc6-962b-31c02a19bdac",
          "name": "Wooden",
          "recordId": 178
        }
      ],
      "products": [
        {
          "id": "40546611-17b5-475b-9500-350bdabfbec4",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/2IKPtQ/640/480",
          "recordId": 516
        },
        {
          "id": "4f3f31fc-9763-4245-8b89-c888a6c7cb2f",
          "name": "Hat",
          "imageUrl": "https://loremflickr.com/640/480?lock=7613768280309760",
          "recordId": 542
        },
        {
          "id": "6794c085-3d18-460f-bbc2-8d75523439d2",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/rPnjzb4/640/480",
          "recordId": 588
        },
        {
          "id": "026c4c2c-5f20-4d15-9e4c-a01f82b4bc51",
          "name": "Ball",
          "imageUrl": "https://loremflickr.com/640/480?lock=5975673204113408",
          "recordId": 410
        }
      ],
      "recordId": 326
    },
    {
      "id": "c66fdf7d-6528-45da-b481-8d9c0ae72b05",
      "name": "Refined Bronze Bike",
      "productTaxonomy": "Health",
      "ingredients": [
        {
          "id": "f5d38d6c-28f5-493a-85a2-1f26a06d6133",
          "name": "Fresh",
          "recordId": 213
        },
        {
          "id": "20a72ce7-5165-4b83-bb43-9c616f19b010",
          "name": "Granite",
          "recordId": 515
        }
      ],
      "products": [
        {
          "id": "e075757d-010b-45b6-866d-92a8f50ecda7",
          "name": "Computer",
          "imageUrl": "https://loremflickr.com/640/480?lock=8028512520765440",
          "recordId": 820
        },
        {
          "id": "f7f66e05-c858-4341-bd88-ff2846d638ed",
          "name": "Pizza",
          "imageUrl": "https://picsum.photos/seed/39gN0V/640/480",
          "recordId": 312
        },
        {
          "id": "4601a9e8-7040-4426-85f9-a377c9e9e80c",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=649039026585600",
          "recordId": 854
        }
      ],
      "recordId": 218
    },
    {
      "id": "620eed7b-32c1-4fbc-8408-845097124e8a",
      "name": "Practical Bronze Soap",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "d7c108fc-54b5-4e75-b0da-2aafba91c7ab",
          "name": "Cotton",
          "recordId": 373
        }
      ],
      "products": [
        {
          "id": "6cef0b38-3900-46be-85bb-ff97f99dcd88",
          "name": "Hat",
          "imageUrl": "https://picsum.photos/seed/3gqFSuOX/640/480",
          "recordId": 411
        },
        {
          "id": "7007883b-7949-4591-ad6f-b8fab0ae7335",
          "name": "Salad",
          "imageUrl": "https://loremflickr.com/640/480?lock=2667039311265792",
          "recordId": 641
        },
        {
          "id": "34d217db-9428-4fbc-b2ad-27100b3c96f3",
          "name": "Mouse",
          "imageUrl": "https://picsum.photos/seed/FyTvGGmD/640/480",
          "recordId": 280
        },
        {
          "id": "e6434d38-ee6b-4519-bcb4-333e40e63db8",
          "name": "Shirt",
          "imageUrl": "https://picsum.photos/seed/8Oeui/640/480",
          "recordId": 613
        },
        {
          "id": "2b7d3561-466b-4402-ab1d-7dd04c8359a3",
          "name": "Chips",
          "imageUrl": "https://picsum.photos/seed/Knys6/640/480",
          "recordId": 509
        }
      ],
      "recordId": 825
    },
    {
      "id": "aa1b343f-0ca0-426e-bf0b-b126d60e410e",
      "name": "Sleek Bronze Chair",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "4ffa852b-4017-437d-8b67-a9237ceb6f74",
          "name": "Bronze",
          "recordId": 711
        }
      ],
      "products": [
        {
          "id": "89efe783-4299-4ca8-ba33-b0bc45f8ad3c",
          "name": "Bacon",
          "imageUrl": "https://loremflickr.com/640/480?lock=3458063851847680",
          "recordId": 881
        },
        {
          "id": "bc6a7e30-69b3-4437-b516-2fba42416f44",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=5951276466569216",
          "recordId": 503
        }
      ],
      "recordId": 299
    },
    {
      "id": "31507eb5-9e2c-43d8-b716-115fc1dd7792",
      "name": "Bespoke Bronze Towels",
      "productTaxonomy": "Toys",
      "ingredients": [
        {
          "id": "2a8bab0e-9109-416d-b784-2ed1fd1e218d",
          "name": "Steel",
          "recordId": 857
        },
        {
          "id": "17302190-4966-472e-a901-4a51e36a30df",
          "name": "Fresh",
          "recordId": 900
        },
        {
          "id": "68ee8cdb-dd3a-46d6-9f6d-6824af8c59b0",
          "name": "Plastic",
          "recordId": 869
        },
        {
          "id": "b1c93155-ad6d-426d-9c1b-ded43e3f9fa5",
          "name": "Cotton",
          "recordId": 587
        }
      ],
      "products": [
        {
          "id": "f9c9fd34-533a-409c-b2c8-661271dfeea0",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/vy1xJ2aZlZ/640/480",
          "recordId": 828
        },
        {
          "id": "d7d439e0-ea72-4820-8b00-591e707a6832",
          "name": "Salad",
          "imageUrl": "https://picsum.photos/seed/ydsVVzfIov/640/480",
          "recordId": 478
        },
        {
          "id": "27c0cc79-0951-4c65-bef3-53acdfddee94",
          "name": "Gloves",
          "imageUrl": "https://picsum.photos/seed/nxy6QZ/640/480",
          "recordId": 111
        },
        {
          "id": "2ea4c725-34b3-48fe-86b9-b88a6aa0e48c",
          "name": "Sausages",
          "imageUrl": "https://loremflickr.com/640/480?lock=8567882617192448",
          "recordId": 180
        }
      ],
      "recordId": 942
    },
    {
      "id": "65f74c80-8791-49c9-95b4-b630af65ee15",
      "name": "Elegant Concrete Chicken",
      "productTaxonomy": "Clothing",
      "ingredients": [
        {
          "id": "55d91dc6-b4bf-4253-b4c2-e2263d692803",
          "name": "Fresh",
          "recordId": 725
        }
      ],
      "products": [
        {
          "id": "53deda14-e18d-4e9e-957d-d9704708cd30",
          "name": "Table",
          "imageUrl": "https://loremflickr.com/640/480?lock=8462333451960320",
          "recordId": 137
        },
        {
          "id": "7a631653-c172-441b-8ea0-204daa47f610",
          "name": "Cheese",
          "imageUrl": "https://loremflickr.com/640/480?lock=7673438560845824",
          "recordId": 585
        },
        {
          "id": "6c791155-2107-4f16-b977-ca29518c9571",
          "name": "Car",
          "imageUrl": "https://loremflickr.com/640/480?lock=7045344726614016",
          "recordId": 193
        },
        {
          "id": "04dd5c40-a805-46a7-b408-4d40da86d175",
          "name": "Chicken",
          "imageUrl": "https://loremflickr.com/640/480?lock=4390497648902144",
          "recordId": 226
        }
      ],
      "recordId": 362
    },
    {
      "id": "21ca0289-ee27-4e08-8960-dc58c4fba870",
      "name": "Recycled Steel Shoes",
      "productTaxonomy": "Clothing",
      "ingredients": [
        {
          "id": "c5429db4-4d83-4a32-aa70-ca0db805c573",
          "name": "Metal",
          "recordId": 830
        },
        {
          "id": "aabdf007-0fc7-4717-9868-5e2f261508de",
          "name": "Rubber",
          "recordId": 790
        },
        {
          "id": "99921b33-8615-4479-8c08-a80d49e1fce1",
          "name": "Plastic",
          "recordId": 493
        },
        {
          "id": "b02923cd-7de5-42a1-ad10-e3817a7e9da8",
          "name": "Plastic",
          "recordId": 953
        },
        {
          "id": "63c331fa-239a-4d42-8282-0259295aca45",
          "name": "Frozen",
          "recordId": 970
        }
      ],
      "products": [
        {
          "id": "d3093047-90a7-4022-b1b6-0b640679d81d",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=5696492778029056",
          "recordId": 603
        },
        {
          "id": "3a0b3030-ff19-46c8-9dde-22d67a53d8e4",
          "name": "Bike",
          "imageUrl": "https://picsum.photos/seed/t8wlu/640/480",
          "recordId": 306
        },
        {
          "id": "c9c8b7c2-e0f8-490f-ae71-0908edb901a7",
          "name": "Soap",
          "imageUrl": "https://loremflickr.com/640/480?lock=2935954868273152",
          "recordId": 746
        },
        {
          "id": "1c6e6721-109b-4001-b8f5-94303e8631ad",
          "name": "Shoes",
          "imageUrl": "https://loremflickr.com/640/480?lock=7891903399854080",
          "recordId": 226
        },
        {
          "id": "14d01dfc-637b-4ea0-a6be-0f3dff8de06b",
          "name": "Keyboard",
          "imageUrl": "https://loremflickr.com/640/480?lock=5226461311008768",
          "recordId": 201
        }
      ],
      "recordId": 681
    },
    {
      "id": "88a31c78-157b-4f85-9e5d-4642c3344f12",
      "name": "Elegant Granite Pizza",
      "productTaxonomy": "Tools",
      "ingredients": [
        {
          "id": "086213f8-5934-456f-a594-80ce9834b9d4",
          "name": "Frozen",
          "recordId": 279
        },
        {
          "id": "08c7e02b-e6c0-4dfb-b6d4-5bc0e46ad6e3",
          "name": "Metal",
          "recordId": 500
        },
        {
          "id": "41708492-89ff-4a5e-b5da-a163046270a7",
          "name": "Bronze",
          "recordId": 670
        },
        {
          "id": "4d574242-be63-483e-809c-2d99b0dce2d8",
          "name": "Frozen",
          "recordId": 897
        },
        {
          "id": "d2fd724b-dd28-4018-a75e-b657ca17391c",
          "name": "Bronze",
          "recordId": 742
        }
      ],
      "products": [
        {
          "id": "2874d74e-da17-410c-b941-9ae65136391f",
          "name": "Sausages",
          "imageUrl": "https://picsum.photos/seed/aoNIu/640/480",
          "recordId": 634
        },
        {
          "id": "10af9423-39bf-40ea-9af4-58b4467577e7",
          "name": "Chips",
          "imageUrl": "https://loremflickr.com/640/480?lock=2484670172233728",
          "recordId": 669
        },
        {
          "id": "284ca72d-2847-4ac2-a270-453d282a26dc",
          "name": "Chair",
          "imageUrl": "https://loremflickr.com/640/480?lock=5065957185683456",
          "recordId": 530
        }
      ],
      "recordId": 189
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
    baseItems: () => baseItems,
    baseItem: (_: any, { id }: { id: string }) => baseItems.find((baseItem) => baseItem.id === id),
  },
  Mutation: {
    addBaseItem: (_: any, args: Omit<BaseItem, 'id'>) => {
      let newBaseItem: BaseItem = {
        id: uuidv4(),
        ...args,
        recordId: Math.floor(Math.random() * 900) + 100
      };
    
      baseItems.push(newBaseItem);
      return newBaseItem;
    },
    updateBaseItem: (_: any, { recordId, ...args }: Partial<BaseItem> & { recordId: number }) => {
      const index = baseItems.findIndex((baseItem) => baseItem.recordId === recordId);
      if (index === -1) return null;
      baseItems[index] = { ...baseItems[index], ...args };
      return baseItems[index];
    },
    deleteBaseItem: (_: any, { recordId }: { recordId: number }) => {
      const index = baseItems.findIndex((baseItem) => baseItem.recordId === recordId);
      if (index === -1) return null;
      const [deletedBaseItem] = baseItems.splice(index, 1);
      return deletedBaseItem;
    },
    addIngredient: (_: any, { creativeId, ...args }: Omit<Product, 'id'> & { creativeId: string }) => {
        const baseItem = baseItems.find((baseItem) => baseItem.id === creativeId);
        if (!baseItem) return null;
        const newIngredient: Product = {
            id: uuidv4(),
            ...args,
            recordId: Math.floor(Math.random() * 900) + 100
        };
        baseItem.products.push(newIngredient);
        return newIngredient;
    },
    updateIngredient: (_: any, { recordId, ...args }: Partial<Product> & { recordId: number }) => {
        let updatedIngredient: Ingredient | null = null;
        baseItems = baseItems.map((baseItem) => {
          const index = baseItem.ingredients.findIndex((ingredient) => ingredient.recordId === recordId);
          if (index !== -1) {
            baseItem.ingredients[index] = { ...baseItem.ingredients[index], ...args };
            updatedIngredient = baseItem.ingredients[index];
          }
          return baseItem;
        });
        return updatedIngredient;
    },
    deleteIngredient: (_: any, { recordId }: { recordId: number }) => {
        let deletedIngredient: Ingredient | null = null;
        baseItems = baseItems.map((baseItem) => {
          const index = baseItem.ingredients.findIndex((ingredient) => ingredient.recordId === recordId);
          if (index !== -1) {
            [deletedIngredient] = baseItem.ingredients.splice(index, 1);
          }
          return baseItem;
        });
        return deletedIngredient;
    },
    addProduct: (_: any, { recordId, ...args }: Omit<Product, 'recordId'> & { recordId: number }) => {
      const baseItem = baseItems.find((baseItem) => baseItem.recordId === recordId);
      if (!baseItem) return null;
      const newProduct: Product = {
        id: uuidv4(),
        ...args,
        recordId: Math.floor(Math.random() * 900) + 100
    };
      baseItem.products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_: any, { id, ...args }: Partial<Product> & { id: string }) => {
      let updatedProduct: Product | null = null;
      baseItems = baseItems.map((baseItem) => {
        const index = baseItem.products.findIndex((product) => product.id === id);
        if (index !== -1) {
          baseItem.products[index] = { ...baseItem.products[index], ...args };
          updatedProduct = baseItem.products[index];
        }
        return baseItem;
      });
      return updatedProduct;
    },
    deleteProduct: (_: any, { id }: { id: string }) => {
      let deletedProduct: Product | null = null;
      baseItems = baseItems.map((baseItem) => {
        const index = baseItem.products.findIndex((product) => product.id === id);
        if (index !== -1) {
          [deletedProduct] = baseItem.products.splice(index, 1);
        }
        return baseItem;
      });
      return deletedProduct;
    },
  },
};