import prisma from '../prisma';

const findAllProducts = async () => {
  return await prisma.$queryRaw`
    SELECT
      p.id,
      p.korean_name,
      p.english_name,
      p.description,
      p.categories_id
    FROM
      products p
  `;
};

const findAllProductsDetail = async () => {
  return await prisma.$queryRaw`
    SELECT
      p.english_name,
      p.korean_name,
      p.description,
      i.image_url,
      n.caffeine,
      n.fat,
      n.kcal,
      n.natrium,
      n.protein,
      n.sugar
    FROM
      products p
    LEFT JOIN
      images i
    ON
      p.id=i.product_id
    LEFT JOIN
      nutritions n
    ON
      p.id=n.product_id;
  `;
};

export default {
  findAllProducts,
  findAllProductsDetail,
};
