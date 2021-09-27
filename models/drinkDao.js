import prisma from '../prisma';

const getDrinkList = async () => {
  return await prisma.$queryRaw`
    SELECT
      d.id,
      d.korean_name AS name,
      i.image_url
    FROM
      drinks d
    LEFT JOIN
      images i
    ON
      i.drink_id = d.id
  `;
};

const getDrinkDetail = async id => {
  return await prisma.$queryRaw`
    SELECT
      d.id,
      d.korean_name,
      d.english_name,
      i.image_url,
      d.description,
      n.calories,
      n.fat,
      n.protein,
      n.sodium,
      n.sugars,
      n.caffeine
    FROM
      drinks d
    LEFT JOIN
      images i
    ON
      i.drink_id = d.id
    LEFT JOIN
      nutritions n
    ON
      n.drink_id = d.id
    WHERE
      d.id = ${id}
  `;
};

export default { getDrinkList, getDrinkDetail };