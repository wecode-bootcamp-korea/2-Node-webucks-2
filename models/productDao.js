import prisma from '../prisma';

const getProductList = async () => {
  const productList = await prisma.$queryRaw`
    SELECT p.id, p.name, i.image_url
    FROM products p

    LEFT JOIN images i
    ON p.id = i.product_id
  `;
  return productList;
};

const getProductDetail = async prouctId => {
  const productDetail = await prisma.$queryRaw`
  SELECT p.id, p.korean_name, p.english_name, c.name as categories_name, a.name as allergies_name,
  n.caffeine, n.calories, n.fat, n.natrium, n.protein, n.sugars, i.image_url

  FROM products p

  LEFT JOIN categories c
  ON p.categories_id = c.id

  LEFT JOIN nutritions n
  ON p.id = n.product_id

  LEFT JOIN images i
  ON p.id = i.product_id

  LEFT JOIN product_allergies pa
  ON p.id = pa.product_id

  LEFT JOIN allergies a
  ON a.id = pa.allergies_id

  WHERE p.id = ${prouctId};
  `;
  return productDetail;
};

export { getProductList, getProductDetail };
