import prisma from '../prisma';

const getDrinkList = async () => {
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

const getDrinkDetail = async id => {
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
      n.sugars,
    FROM
      drinks d,
      images i,
      nutrition n
    WHERE d.id = ${id}
      AND i.drink_id = d.id
      AND n.drink_id = d.id
  ;`;
};

export default { getDrinkList, getDrinkDetail };
