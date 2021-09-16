
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.0.2
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */
Prisma.prismaVersion = {
  client: "3.0.2",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AllergiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Allergies_drinksScalarFieldEnum = makeEnum({
  id: 'id',
  allergies_id: 'allergies_id',
  drinks_id: 'drinks_id'
});

exports.Prisma.CategoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CommentsScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  drinks_id: 'drinks_id',
  contents: 'contents',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.DrinksScalarFieldEnum = makeEnum({
  id: 'id',
  categories_id: 'categories_id',
  korean_name: 'korean_name',
  english_name: 'english_name',
  description: 'description',
  is_new: 'is_new'
});

exports.Prisma.ImagesScalarFieldEnum = makeEnum({
  id: 'id',
  drinks_id: 'drinks_id',
  images_url: 'images_url'
});

exports.Prisma.LikesScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  drinks_id: 'drinks_id'
});

exports.Prisma.NutritionScalarFieldEnum = makeEnum({
  id: 'id',
  drinks_id: 'drinks_id',
  calories: 'calories',
  natrium: 'natrium',
  fat: 'fat',
  sugars: 'sugars',
  protein: 'protein',
  caffeine: 'caffeine'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  username: 'username',
  address: 'address',
  phone_number: 'phone_number',
  policy_agreed: 'policy_agreed',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Allergies: 'Allergies',
  Allergies_drinks: 'Allergies_drinks',
  Categories: 'Categories',
  Comments: 'Comments',
  Drinks: 'Drinks',
  Images: 'Images',
  Likes: 'Likes',
  Nutrition: 'Nutrition',
  Users: 'Users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
