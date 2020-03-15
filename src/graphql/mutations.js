/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    categoryName
    img
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    categoryName
    img
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    categoryName
    img
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const createProduct = `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    pname
    img
    pack
    size
    unitPrice
    currentInventory
    addToList
    toBuyNumber
    invenotryDate
    listDate
    purchaseComplete
    category {
      id
      categoryName
      img
      products {
        nextToken
      }
    }
    primaryShop {
      id
      shopName
      location
      products {
        nextToken
      }
    }
    user {
      id
      username
      email
      registered
      shopName
      createdAt
      owner
      products {
        nextToken
      }
    }
    owner
  }
}
`;
export const updateProduct = `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    pname
    img
    pack
    size
    unitPrice
    currentInventory
    addToList
    toBuyNumber
    invenotryDate
    listDate
    purchaseComplete
    category {
      id
      categoryName
      img
      products {
        nextToken
      }
    }
    primaryShop {
      id
      shopName
      location
      products {
        nextToken
      }
    }
    user {
      id
      username
      email
      registered
      shopName
      createdAt
      owner
      products {
        nextToken
      }
    }
    owner
  }
}
`;
export const deleteProduct = `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    pname
    img
    pack
    size
    unitPrice
    currentInventory
    addToList
    toBuyNumber
    invenotryDate
    listDate
    purchaseComplete
    category {
      id
      categoryName
      img
      products {
        nextToken
      }
    }
    primaryShop {
      id
      shopName
      location
      products {
        nextToken
      }
    }
    user {
      id
      username
      email
      registered
      shopName
      createdAt
      owner
      products {
        nextToken
      }
    }
    owner
  }
}
`;
export const createShop = `mutation CreateShop(
  $input: CreateShopInput!
  $condition: ModelShopConditionInput
) {
  createShop(input: $input, condition: $condition) {
    id
    shopName
    location
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const updateShop = `mutation UpdateShop(
  $input: UpdateShopInput!
  $condition: ModelShopConditionInput
) {
  updateShop(input: $input, condition: $condition) {
    id
    shopName
    location
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteShop = `mutation DeleteShop(
  $input: DeleteShopInput!
  $condition: ModelShopConditionInput
) {
  deleteShop(input: $input, condition: $condition) {
    id
    shopName
    location
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const createList = `mutation CreateList(
  $input: CreateListInput!
  $condition: ModelListConditionInput
) {
  createList(input: $input, condition: $condition) {
    id
    createdDate
    completed
    products {
      id
      pname
      img
      pack
      size
      unitPrice
      currentInventory
      addToList
      toBuyNumber
      invenotryDate
      purchaseComplete
      categoryName
    }
    owner
  }
}
`;
export const updateList = `mutation UpdateList(
  $input: UpdateListInput!
  $condition: ModelListConditionInput
) {
  updateList(input: $input, condition: $condition) {
    id
    createdDate
    completed
    products {
      id
      pname
      img
      pack
      size
      unitPrice
      currentInventory
      addToList
      toBuyNumber
      invenotryDate
      purchaseComplete
      categoryName
    }
    owner
  }
}
`;
export const deleteList = `mutation DeleteList(
  $input: DeleteListInput!
  $condition: ModelListConditionInput
) {
  deleteList(input: $input, condition: $condition) {
    id
    createdDate
    completed
    products {
      id
      pname
      img
      pack
      size
      unitPrice
      currentInventory
      addToList
      toBuyNumber
      invenotryDate
      purchaseComplete
      categoryName
    }
    owner
  }
}
`;
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    registered
    shopName
    createdAt
    owner
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    registered
    shopName
    createdAt
    owner
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    registered
    shopName
    createdAt
    owner
    products {
      items {
        id
        pname
        img
        pack
        size
        unitPrice
        currentInventory
        addToList
        toBuyNumber
        invenotryDate
        listDate
        purchaseComplete
        owner
      }
      nextToken
    }
  }
}
`;
