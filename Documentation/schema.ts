export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: '_id', type: 'string', title: 'ID' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'discountPercentage', type: 'number', title: 'Discount Percentage' },
      {
        name: 'colors',
        type: 'array',
        title: 'Colors',
        of: [{ type: 'string' }],
        options: { list: ['Black', 'Silver'] },
      },
      { name: 'stockQuantity', type: 'number', title: 'Stock Quantity' },
      { name: 'rating', type: 'number', title: 'Rating' },
      { name: 'ratingCount', type: 'number', title: 'Rating Count' },
      { name: 'brand', type: 'string', title: 'Brand' },
      {
        name: 'category',
        type: 'array',
        title: 'Category',
        of: [{ type: 'string' }],
        options: { list: ['Watches', 'Perfumes'] },
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: { list: ['Sale', 'New'] },
      },
      { name: 'priceWithoutDiscount', type: 'number', title: 'Price Without Discount' },
      {
        name: 'size',
        type: 'array',
        title: 'Size',
        of: [{ type: 'string' }],
        options: { list: ['Small', 'Medium', 'Large', 'Extra Large'] },
      },
      {
        name: 'gender',
        type: 'string',
        title: 'Gender',
        options: { list: ['Male', 'Female', 'Unisex'] },
      },
      {
        name: 'image',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image', options: { hotspot: true } }],
      },
      { name: 'sku', type: 'string', title: 'SKU' },
    ],
  };
  