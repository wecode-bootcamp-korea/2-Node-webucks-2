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

const createUser = async createUserData => {
  const { email, password, username, address, phoneNumber, policyAgreed } =
    createUserData;
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
      ${password},
      ${username},
      ${address},
      ${phoneNumber},
      ${policyAgreed}
    )
  `;
};

export default {
  findAllUsers,
  createUser,
};
