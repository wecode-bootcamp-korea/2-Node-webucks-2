import prisma from '../prisma';

const getUsers = async () => {
  return await prisma.$queryRaw`
    SELECT * FROM users
    `;
};

const getUsersByEmail = async email => {
  return await prisma.$queryRaw`
    SELECT * FROM users WHERE email=${email};
  `;
};

const createUser = async userInfo => {
  const { email, password, username, address, phoneNumber, policyAgreed } =
    userInfo;
  return await prisma.$queryRaw`
    INSERT INTO 
      users(
        email, 
        password, 
        username, 
        address, 
        phoneNumber, 
        policyAgreed
      )
      VALUES (
        ${email},
        ${password},
        ${username},
        ${address},
        ${phoneNumber},
        ${policyAgreed},
      )
    `;
};

export default { getUsers, getUsersByEmail, createUser };
