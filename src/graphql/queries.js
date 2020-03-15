/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      categoryName
      img
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      category {
        id
        categoryName
        img
      }
      primaryShop {
        id
        shopName
        location
      }
      user {
        id
        username
        email
        registered
        shopName
        createdAt
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getShop = `query GetShop($id: ID!) {
  getShop(id: $id) {
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
export const listShops = `query ListShops(
  $filter: ModelShopFilterInput
  $limit: Int
  $nextToken: String
) {
  listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      shopName
      location
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getList = `query GetList($id: ID!) {
  getList(id: $id) {
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
export const listLists = `query ListLists(
  $filter: ModelListFilterInput
  $limit: Int
  $nextToken: String
) {
  listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
