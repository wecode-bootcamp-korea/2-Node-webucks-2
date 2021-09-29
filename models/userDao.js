import prisma from '../prisma';

const getUsers = async () => {
  return await prisma.$queryRaw`
    SELECT * FROM users
  `;
};

const login = async email => {
  return await prisma.$queryRaw`
    SELECT * FROM users
    WHERE email=${email};
  `;
};

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  return await prisma.$queryRaw`
    INSERT INTO
      users(
        email,
        password,
        username,
        address,
        phone_number,
        policy_agreed
      )
    VALUES (
      ${email},
      ${password},
      ${username},
      ${address},
      ${phone_number},
      ${policy_agreed}
    )
  `;
};

export default { getUsers, login, createUser };
