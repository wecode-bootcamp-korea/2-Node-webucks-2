import prisma from '../prisma';

const findAllUsers = async () => {
  return await prisma.$queryRaw`
    SELECT
      u.id,
      u.email,
      u.password,
      u.username,
      u.address,
      u.phone_number,
      u.policy_agreed
    FROM
      users u;
  `;
};

const createUser = async (
  email,
  hashPw,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  const userExist = await prisma.$queryRaw`
  SELECT * FROM 
    users
  WHERE
    email=${email}
  `;

  if (!userExist) {
    throw new Error('user already exist');
  }
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
      ${hashPw},
      ${username},
      ${address},
      ${phone_number},
      ${policy_agreed}
    )
  `;
};

export default {
  findAllUsers,
  createUser,
};
