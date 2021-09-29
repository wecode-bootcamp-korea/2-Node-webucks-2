import prisma from '../prisma';

const findAllUsers = async () => {
  const allUsers = await prisma.$queryRaw`
  SELECT id, username, email, password FROM users;
  `;
  return allUsers;
};

const createUser = async (name, email, password) => {
  const createUser = await prisma.$queryRaw`
    INSERT INTO 
      users(username, email, password) VALUES (${name}, ${email}, ${password})
  `;
  return createUser;
};

export { findAllUsers, createUser };
