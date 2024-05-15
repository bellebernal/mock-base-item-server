export interface BaseItem {
    id: string;
    name: string;
    productTaxonomy: string;
    isForRecipes: boolean;
    mappedRecipeCount: number;
    mappedProductCount: number;
    recordId: number;
  }
  
  export interface AddBaseItemInput {
    name: string;
    productTaxonomy: string;
    isForRecipes: boolean;
    mappedRecipeCount: number;
    mappedProductCount: number;
  }
  
  export interface UpdateBaseItemInput {
    id: string;
    name?: string;
    productTaxonomy?: string;
    isForRecipes?: boolean;
    mappedRecipeCount?: number;
    mappedProductCount?: number;
    recordId?: number;
  }
  
  export interface QueryGetBaseItemByIdArgs {
    id: string;
  }
  
  export interface MutationAddBaseItemArgs {
    input: AddBaseItemInput;
  }
  
  export interface MutationUpdateBaseItemArgs {
    input: UpdateBaseItemInput;
  }
  
  export interface MutationDeleteBaseItemArgs {
    id: string;
  }
  