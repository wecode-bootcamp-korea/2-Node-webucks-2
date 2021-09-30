import prisma from '../prisma';

export const getDrinkListModel = async () => {
  return await prisma.$queryRaw`
    SELECT
      id,
      korean_name,
      english_name,
      description,
      is_new,
      category_id
    FROM drinks
  ;`;
};

export const getDrinkDetailModel = async id => {
  return await prisma.$queryRaw`
    SELECT
      d.id,
      d.korean_name,
      d.english_name,
      d.description,
      i.image_url,
      n.natrium,
      n.fat,
      n.protein,
      n.caffeine,
      n.calorie,
      n.sugar
    FROM
      drinks d
    LEFT JOIN
      images i
    ON
      i.drink_id = d.id
    LEFT JOIN
      nutrition n
    ON
      n.drink_id = d.id
    WHERE
      d.id = ${id}
  ;`;
};
