import prisma from '../prisma';

export const getCategoryModel = async () => {
  return await prisma.$queryRaw`
    SELECT
      id, name
    FROM
      categories
  ;`;
};

export const getCategoryByIdModel = async id => {
  return await prisma.$queryRaw`
    SELECT
      id, name
    FROM
      categories
    WHERE id = ${id}
  ;`;
};
