import prisma from '../prisma';

const findAllUsers = async () => {
  const users = await prisma.$queryRaw`
    SELECT
      email, 
      password, 
      username, 
      address, 
      phone_number
    FROM
      users;
  `;
  return users;
};


const createUser = async ( email, hashPW ,username, address, phone_number) => {
  const doesUserExist = await prisma.$queryRaw`
  SELECT users.email FROM users WHERE users.email = ${email}`;

  if (!doesUserExist) {
    throw new Error('User already Exist');
  }
  return await prisma.$queryRaw`
  INSERT INTO
    users(
      email,
      password,
      username,
      address,
      phone_number
    )
    VALUES (
      ${email},
      ${hashPW},
      ${username},
      ${address},
      ${phone_number}
    );`
  };

export default {
  findAllUsers,
  createUser,
}



