import prisma from '../prisma';

const getCategory = async () => {
  return await prisma.$queryRaw`
    SELECT
      id, name
    FROM
      categories
  ;`;
};

const getCategoryById = async id => {
  return await prisma.$queryRaw`
    SELECT
      id, name
    FROM
      categories
    WHERE id = ${id}
  ;`;
};

export default { getCategory, getCategoryById };
