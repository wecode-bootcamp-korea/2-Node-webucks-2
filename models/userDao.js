import prisma from '../prisma';

export const getUsersModel = async () => {
  return await prisma.$queryRaw`
    SELECT * FROM users
    `;
};

export const getUserById = async id => {
  return await prisma.$queryRaw`
    SELECT 
      u.id 
    FROM 
      users u 
    WHERE 
      u.id=${id};
  `;
};

export const getUsersByEmailModel = async email => {
  return await prisma.$queryRaw`
    SELECT * FROM users WHERE email=${email};
  `;
};

export const createUserModel = async (
  email,
  password,
  username,
  address,
  phoneNumber,
  policyAgreed
) => {
  console.log(email, password, username, address, phoneNumber, policyAgreed);
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
