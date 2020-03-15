/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateProduct = `subscription OnCreateProduct($owner: String!) {
  onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = `subscription OnUpdateProduct($owner: String!) {
  onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = `subscription OnDeleteProduct($owner: String!) {
  onDeleteProduct(owner: $owner) {
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
export const onCreateShop = `subscription OnCreateShop {
  onCreateShop {
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
export const onUpdateShop = `subscription OnUpdateShop {
  onUpdateShop {
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
export const onDeleteShop = `subscription OnDeleteShop {
  onDeleteShop {
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
export const onCreateList = `subscription OnCreateList($owner: String!) {
  onCreateList(owner: $owner) {
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
export const onUpdateList = `subscription OnUpdateList($owner: String!) {
  onUpdateList(owner: $owner) {
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
export const onDeleteList = `subscription OnDeleteList($owner: String!) {
  onDeleteList(owner: $owner) {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
