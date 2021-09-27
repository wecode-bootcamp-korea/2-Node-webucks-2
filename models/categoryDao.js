import prisma from '../prisma';

const findAllCategories = async () => {
  return await prisma.$queryRaw`
    SELECT
      c.id,
      c.name
    FROM
      categories c;
  `;
};

export default {
  findAllCategories,
};
