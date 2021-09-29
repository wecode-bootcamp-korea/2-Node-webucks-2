import prisma from '../prisma';

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

const loginUser = async email => {
  try {
    const [users] = await prisma.$queryRaw`
    SELECT users.password  FROM users WHERE users.email=${email}`;
    
    if (!users) {
      throw new Error('User does not Exist');
    } return users
  } catch (err) {
    console.log(err);
  }
}; 

export default { createUser, loginUser }



