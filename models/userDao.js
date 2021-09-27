import prisma from '../prisma';

const findAllUsers = async () => {
  return await prisma.$queryRaw(`
    SELECT
      id,
      username,
      email,
      password
    FROM
      users;  
  `);
};

const createUser = async (username, email, password) => {
  return await prisma.$queryRaw(`
    INSERT INTO
      users (
        username,
        email,
        password
      )
    VALUES (
      '${username}',
      '${email}', 
      '${password}'
    )
  `);
};

export default {
  findAllUsers,
  createUser,
}



