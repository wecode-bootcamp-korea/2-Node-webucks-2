
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Allergies
 */

export type Allergies = {
  id: number
  name: string
}

/**
 * Model Allergies_drinks
 */

export type Allergies_drinks = {
  id: number
  allergieId: number
  drinkId: number
}

/**
 * Model Categories
 */

export type Categories = {
  id: number
  name: string
}

/**
 * Model Comments
 */

export type Comments = {
  id: number
  userId: number
  drinkId: number
  content: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model Drinks
 */

export type Drinks = {
  id: number
  categoryId: number
  koreanName: string
  englishName: string
  description: string
  isNew: number
}

/**
 * Model Images
 */

export type Images = {
  id: number
  drinkId: number
  imageUrl: string
}

/**
 * Model Likes
 */

export type Likes = {
  id: number
  userId: number
  drinkId: number
}

/**
 * Model Nutrition
 */

export type Nutrition = {
  id: number
  drinkId: number
  calorie: number
  natrium: number
  fat: number
  sugar: number
  protein: number
  caffeine: number
}

/**
 * Model Users
 */

export type Users = {
  id: number
  email: string
  password: string
  username: string | null
  address: string | null
  phoneNumber: string | null
  policyAgreed: boolean
  createdAt: Date | null
  updatedAt: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Allergies
 * const allergies = await prisma.allergies.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Allergies
   * const allergies = await prisma.allergies.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.allergies`: Exposes CRUD operations for the **Allergies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergies.findMany()
    * ```
    */
  get allergies(): Prisma.AllergiesDelegate<GlobalReject>;

  /**
   * `prisma.allergies_drinks`: Exposes CRUD operations for the **Allergies_drinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies_drinks
    * const allergies_drinks = await prisma.allergies_drinks.findMany()
    * ```
    */
  get allergies_drinks(): Prisma.Allergies_drinksDelegate<GlobalReject>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<GlobalReject>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<GlobalReject>;

  /**
   * `prisma.drinks`: Exposes CRUD operations for the **Drinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drinks
    * const drinks = await prisma.drinks.findMany()
    * ```
    */
  get drinks(): Prisma.DrinksDelegate<GlobalReject>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<GlobalReject>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<GlobalReject>;

  /**
   * `prisma.nutrition`: Exposes CRUD operations for the **Nutrition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nutritions
    * const nutritions = await prisma.nutrition.findMany()
    * ```
    */
  get nutrition(): Prisma.NutritionDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.1.1
   * Query Engine version: c22652b7e418506fab23052d569b85d3aec4883f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Allergies: 'Allergies',
    Allergies_drinks: 'Allergies_drinks',
    Categories: 'Categories',
    Comments: 'Comments',
    Drinks: 'Drinks',
    Images: 'Images',
    Likes: 'Likes',
    Nutrition: 'Nutrition',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AllergiesCountOutputType
   */


  export type AllergiesCountOutputType = {
    allergies_drink: number
  }

  export type AllergiesCountOutputTypeSelect = {
    allergies_drink?: boolean
  }

  export type AllergiesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AllergiesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AllergiesCountOutputType
    : S extends undefined
    ? never
    : S extends AllergiesCountOutputTypeArgs
    ?'include' extends U
    ? AllergiesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AllergiesCountOutputType ?AllergiesCountOutputType [P]
  : 
     never
  } 
    : AllergiesCountOutputType
  : AllergiesCountOutputType




  // Custom InputTypes

  /**
   * AllergiesCountOutputType without action
   */
  export type AllergiesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AllergiesCountOutputType
     * 
    **/
    select?: AllergiesCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoriesCountOutputType
   */


  export type CategoriesCountOutputType = {
    Drinks: number
  }

  export type CategoriesCountOutputTypeSelect = {
    Drinks?: boolean
  }

  export type CategoriesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoriesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoriesCountOutputType
    : S extends undefined
    ? never
    : S extends CategoriesCountOutputTypeArgs
    ?'include' extends U
    ? CategoriesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoriesCountOutputType ?CategoriesCountOutputType [P]
  : 
     never
  } 
    : CategoriesCountOutputType
  : CategoriesCountOutputType




  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     * 
    **/
    select?: CategoriesCountOutputTypeSelect | null
  }



  /**
   * Count Type DrinksCountOutputType
   */


  export type DrinksCountOutputType = {
    Allergies_drinks: number
    Comments: number
    Images: number
    Likes: number
    Nutrition: number
  }

  export type DrinksCountOutputTypeSelect = {
    Allergies_drinks?: boolean
    Comments?: boolean
    Images?: boolean
    Likes?: boolean
    Nutrition?: boolean
  }

  export type DrinksCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DrinksCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DrinksCountOutputType
    : S extends undefined
    ? never
    : S extends DrinksCountOutputTypeArgs
    ?'include' extends U
    ? DrinksCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DrinksCountOutputType ?DrinksCountOutputType [P]
  : 
     never
  } 
    : DrinksCountOutputType
  : DrinksCountOutputType




  // Custom InputTypes

  /**
   * DrinksCountOutputType without action
   */
  export type DrinksCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DrinksCountOutputType
     * 
    **/
    select?: DrinksCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    Comments: number
    Likes: number
  }

  export type UsersCountOutputTypeSelect = {
    Comments?: boolean
    Likes?: boolean
  }

  export type UsersCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UsersCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UsersCountOutputType
    : S extends undefined
    ? never
    : S extends UsersCountOutputTypeArgs
    ?'include' extends U
    ? UsersCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UsersCountOutputType ?UsersCountOutputType [P]
  : 
     never
  } 
    : UsersCountOutputType
  : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Allergies
   */


  export type AggregateAllergies = {
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  export type AllergiesAvgAggregateOutputType = {
    id: number | null
  }

  export type AllergiesSumAggregateOutputType = {
    id: number | null
  }

  export type AllergiesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AllergiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AllergiesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AllergiesAvgAggregateInputType = {
    id?: true
  }

  export type AllergiesSumAggregateInputType = {
    id?: true
  }

  export type AllergiesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AllergiesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AllergiesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AllergiesAggregateArgs = {
    /**
     * Filter which Allergies to aggregate.
     * 
    **/
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     * 
    **/
    orderBy?: Enumerable<AllergiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies
    **/
    _count?: true | AllergiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergiesMaxAggregateInputType
  }

  export type GetAllergiesAggregateType<T extends AllergiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergies[P]>
      : GetScalarType<T[P], AggregateAllergies[P]>
  }


    
    
  export type AllergiesGroupByArgs = {
    where?: AllergiesWhereInput
    orderBy?: Enumerable<AllergiesOrderByWithAggregationInput>
    by: Array<AllergiesScalarFieldEnum>
    having?: AllergiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergiesCountAggregateInputType | true
    _avg?: AllergiesAvgAggregateInputType
    _sum?: AllergiesSumAggregateInputType
    _min?: AllergiesMinAggregateInputType
    _max?: AllergiesMaxAggregateInputType
  }


  export type AllergiesGroupByOutputType = {
    id: number
    name: string
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  type GetAllergiesGroupByPayload<T extends AllergiesGroupByArgs> = Promise<
    Array<
      PickArray<AllergiesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AllergiesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AllergiesGroupByOutputType[P]> 
            : GetScalarType<T[P], AllergiesGroupByOutputType[P]>
        }
      > 
    >


  export type AllergiesSelect = {
    id?: boolean
    name?: boolean
    allergies_drink?: boolean | Allergies_drinksFindManyArgs
    _count?: boolean | AllergiesCountOutputTypeArgs
  }

  export type AllergiesInclude = {
    allergies_drink?: boolean | Allergies_drinksFindManyArgs
    _count?: boolean | AllergiesCountOutputTypeArgs
  }

  export type AllergiesGetPayload<
    S extends boolean | null | undefined | AllergiesArgs,
    U = keyof S
      > = S extends true
        ? Allergies
    : S extends undefined
    ? never
    : S extends AllergiesArgs | AllergiesFindManyArgs
    ?'include' extends U
    ? Allergies  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'allergies_drink'
        ? Array < Allergies_drinksGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? AllergiesCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Allergies ?Allergies [P]
  : 
          P extends 'allergies_drink'
        ? Array < Allergies_drinksGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? AllergiesCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Allergies
  : Allergies


  type AllergiesCountArgs = Merge<
    Omit<AllergiesFindManyArgs, 'select' | 'include'> & {
      select?: AllergiesCountAggregateInputType | true
    }
  >

  export interface AllergiesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Allergies that matches the filter.
     * @param {AllergiesFindUniqueArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AllergiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AllergiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Allergies'> extends True ? CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>> : CheckSelect<T, Prisma__AllergiesClient<Allergies | null >, Prisma__AllergiesClient<AllergiesGetPayload<T> | null >>

    /**
     * Find the first Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesFindFirstArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AllergiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AllergiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Allergies'> extends True ? CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>> : CheckSelect<T, Prisma__AllergiesClient<Allergies | null >, Prisma__AllergiesClient<AllergiesGetPayload<T> | null >>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergies.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergiesWithIdOnly = await prisma.allergies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AllergiesFindManyArgs>(
      args?: SelectSubset<T, AllergiesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Allergies>>, PrismaPromise<Array<AllergiesGetPayload<T>>>>

    /**
     * Create a Allergies.
     * @param {AllergiesCreateArgs} args - Arguments to create a Allergies.
     * @example
     * // Create one Allergies
     * const Allergies = await prisma.allergies.create({
     *   data: {
     *     // ... data to create a Allergies
     *   }
     * })
     * 
    **/
    create<T extends AllergiesCreateArgs>(
      args: SelectSubset<T, AllergiesCreateArgs>
    ): CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>>

    /**
     * Create many Allergies.
     *     @param {AllergiesCreateManyArgs} args - Arguments to create many Allergies.
     *     @example
     *     // Create many Allergies
     *     const allergies = await prisma.allergies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AllergiesCreateManyArgs>(
      args?: SelectSubset<T, AllergiesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Allergies.
     * @param {AllergiesDeleteArgs} args - Arguments to delete one Allergies.
     * @example
     * // Delete one Allergies
     * const Allergies = await prisma.allergies.delete({
     *   where: {
     *     // ... filter to delete one Allergies
     *   }
     * })
     * 
    **/
    delete<T extends AllergiesDeleteArgs>(
      args: SelectSubset<T, AllergiesDeleteArgs>
    ): CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>>

    /**
     * Update one Allergies.
     * @param {AllergiesUpdateArgs} args - Arguments to update one Allergies.
     * @example
     * // Update one Allergies
     * const allergies = await prisma.allergies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AllergiesUpdateArgs>(
      args: SelectSubset<T, AllergiesUpdateArgs>
    ): CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>>

    /**
     * Delete zero or more Allergies.
     * @param {AllergiesDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AllergiesDeleteManyArgs>(
      args?: SelectSubset<T, AllergiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergies = await prisma.allergies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AllergiesUpdateManyArgs>(
      args: SelectSubset<T, AllergiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Allergies.
     * @param {AllergiesUpsertArgs} args - Arguments to update or create a Allergies.
     * @example
     * // Update or create a Allergies
     * const allergies = await prisma.allergies.upsert({
     *   create: {
     *     // ... data to create a Allergies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergies we want to update
     *   }
     * })
    **/
    upsert<T extends AllergiesUpsertArgs>(
      args: SelectSubset<T, AllergiesUpsertArgs>
    ): CheckSelect<T, Prisma__AllergiesClient<Allergies>, Prisma__AllergiesClient<AllergiesGetPayload<T>>>

    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergies.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends AllergiesCountArgs>(
      args?: Subset<T, AllergiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllergiesAggregateArgs>(args: Subset<T, AllergiesAggregateArgs>): PrismaPromise<GetAllergiesAggregateType<T>>

    /**
     * Group by Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllergiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllergiesGroupByArgs['orderBy'] }
        : { orderBy?: AllergiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllergiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergiesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AllergiesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    allergies_drink<T extends Allergies_drinksFindManyArgs = {}>(args?: Subset<T, Allergies_drinksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Allergies_drinks>>, PrismaPromise<Array<Allergies_drinksGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Allergies findUnique
   */
  export type AllergiesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * Throw an Error if a Allergies can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Allergies to fetch.
     * 
    **/
    where: AllergiesWhereUniqueInput
  }


  /**
   * Allergies findFirst
   */
  export type AllergiesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * Throw an Error if a Allergies can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Allergies to fetch.
     * 
    **/
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     * 
    **/
    orderBy?: Enumerable<AllergiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     * 
    **/
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     * 
    **/
    distinct?: Enumerable<AllergiesScalarFieldEnum>
  }


  /**
   * Allergies findMany
   */
  export type AllergiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * Filter, which Allergies to fetch.
     * 
    **/
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     * 
    **/
    orderBy?: Enumerable<AllergiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies.
     * 
    **/
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AllergiesScalarFieldEnum>
  }


  /**
   * Allergies create
   */
  export type AllergiesCreateArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * The data needed to create a Allergies.
     * 
    **/
    data: XOR<AllergiesCreateInput, AllergiesUncheckedCreateInput>
  }


  /**
   * Allergies createMany
   */
  export type AllergiesCreateManyArgs = {
    data: Enumerable<AllergiesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Allergies update
   */
  export type AllergiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * The data needed to update a Allergies.
     * 
    **/
    data: XOR<AllergiesUpdateInput, AllergiesUncheckedUpdateInput>
    /**
     * Choose, which Allergies to update.
     * 
    **/
    where: AllergiesWhereUniqueInput
  }


  /**
   * Allergies updateMany
   */
  export type AllergiesUpdateManyArgs = {
    data: XOR<AllergiesUpdateManyMutationInput, AllergiesUncheckedUpdateManyInput>
    where?: AllergiesWhereInput
  }


  /**
   * Allergies upsert
   */
  export type AllergiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * The filter to search for the Allergies to update in case it exists.
     * 
    **/
    where: AllergiesWhereUniqueInput
    /**
     * In case the Allergies found by the `where` argument doesn't exist, create a new Allergies with this data.
     * 
    **/
    create: XOR<AllergiesCreateInput, AllergiesUncheckedCreateInput>
    /**
     * In case the Allergies was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AllergiesUpdateInput, AllergiesUncheckedUpdateInput>
  }


  /**
   * Allergies delete
   */
  export type AllergiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
    /**
     * Filter which Allergies to delete.
     * 
    **/
    where: AllergiesWhereUniqueInput
  }


  /**
   * Allergies deleteMany
   */
  export type AllergiesDeleteManyArgs = {
    where?: AllergiesWhereInput
  }


  /**
   * Allergies without action
   */
  export type AllergiesArgs = {
    /**
     * Select specific fields to fetch from the Allergies
     * 
    **/
    select?: AllergiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AllergiesInclude | null
  }



  /**
   * Model Allergies_drinks
   */


  export type AggregateAllergies_drinks = {
    _count: Allergies_drinksCountAggregateOutputType | null
    _avg: Allergies_drinksAvgAggregateOutputType | null
    _sum: Allergies_drinksSumAggregateOutputType | null
    _min: Allergies_drinksMinAggregateOutputType | null
    _max: Allergies_drinksMaxAggregateOutputType | null
  }

  export type Allergies_drinksAvgAggregateOutputType = {
    id: number | null
    allergieId: number | null
    drinkId: number | null
  }

  export type Allergies_drinksSumAggregateOutputType = {
    id: number | null
    allergieId: number | null
    drinkId: number | null
  }

  export type Allergies_drinksMinAggregateOutputType = {
    id: number | null
    allergieId: number | null
    drinkId: number | null
  }

  export type Allergies_drinksMaxAggregateOutputType = {
    id: number | null
    allergieId: number | null
    drinkId: number | null
  }

  export type Allergies_drinksCountAggregateOutputType = {
    id: number
    allergieId: number
    drinkId: number
    _all: number
  }


  export type Allergies_drinksAvgAggregateInputType = {
    id?: true
    allergieId?: true
    drinkId?: true
  }

  export type Allergies_drinksSumAggregateInputType = {
    id?: true
    allergieId?: true
    drinkId?: true
  }

  export type Allergies_drinksMinAggregateInputType = {
    id?: true
    allergieId?: true
    drinkId?: true
  }

  export type Allergies_drinksMaxAggregateInputType = {
    id?: true
    allergieId?: true
    drinkId?: true
  }

  export type Allergies_drinksCountAggregateInputType = {
    id?: true
    allergieId?: true
    drinkId?: true
    _all?: true
  }

  export type Allergies_drinksAggregateArgs = {
    /**
     * Filter which Allergies_drinks to aggregate.
     * 
    **/
    where?: Allergies_drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies_drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<Allergies_drinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Allergies_drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies_drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies_drinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies_drinks
    **/
    _count?: true | Allergies_drinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Allergies_drinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Allergies_drinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Allergies_drinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Allergies_drinksMaxAggregateInputType
  }

  export type GetAllergies_drinksAggregateType<T extends Allergies_drinksAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergies_drinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergies_drinks[P]>
      : GetScalarType<T[P], AggregateAllergies_drinks[P]>
  }


    
    
  export type Allergies_drinksGroupByArgs = {
    where?: Allergies_drinksWhereInput
    orderBy?: Enumerable<Allergies_drinksOrderByWithAggregationInput>
    by: Array<Allergies_drinksScalarFieldEnum>
    having?: Allergies_drinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Allergies_drinksCountAggregateInputType | true
    _avg?: Allergies_drinksAvgAggregateInputType
    _sum?: Allergies_drinksSumAggregateInputType
    _min?: Allergies_drinksMinAggregateInputType
    _max?: Allergies_drinksMaxAggregateInputType
  }


  export type Allergies_drinksGroupByOutputType = {
    id: number
    allergieId: number
    drinkId: number
    _count: Allergies_drinksCountAggregateOutputType | null
    _avg: Allergies_drinksAvgAggregateOutputType | null
    _sum: Allergies_drinksSumAggregateOutputType | null
    _min: Allergies_drinksMinAggregateOutputType | null
    _max: Allergies_drinksMaxAggregateOutputType | null
  }

  type GetAllergies_drinksGroupByPayload<T extends Allergies_drinksGroupByArgs> = Promise<
    Array<
      PickArray<Allergies_drinksGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Allergies_drinksGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Allergies_drinksGroupByOutputType[P]> 
            : GetScalarType<T[P], Allergies_drinksGroupByOutputType[P]>
        }
      > 
    >


  export type Allergies_drinksSelect = {
    id?: boolean
    allergie?: boolean | AllergiesArgs
    allergieId?: boolean
    drink?: boolean | DrinksArgs
    drinkId?: boolean
  }

  export type Allergies_drinksInclude = {
    allergie?: boolean | AllergiesArgs
    drink?: boolean | DrinksArgs
  }

  export type Allergies_drinksGetPayload<
    S extends boolean | null | undefined | Allergies_drinksArgs,
    U = keyof S
      > = S extends true
        ? Allergies_drinks
    : S extends undefined
    ? never
    : S extends Allergies_drinksArgs | Allergies_drinksFindManyArgs
    ?'include' extends U
    ? Allergies_drinks  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'allergie'
        ? AllergiesGetPayload<S['include'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Allergies_drinks ?Allergies_drinks [P]
  : 
          P extends 'allergie'
        ? AllergiesGetPayload<S['select'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['select'][P]> : never
  } 
    : Allergies_drinks
  : Allergies_drinks


  type Allergies_drinksCountArgs = Merge<
    Omit<Allergies_drinksFindManyArgs, 'select' | 'include'> & {
      select?: Allergies_drinksCountAggregateInputType | true
    }
  >

  export interface Allergies_drinksDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Allergies_drinks that matches the filter.
     * @param {Allergies_drinksFindUniqueArgs} args - Arguments to find a Allergies_drinks
     * @example
     * // Get one Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Allergies_drinksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Allergies_drinksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Allergies_drinks'> extends True ? CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>> : CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks | null >, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T> | null >>

    /**
     * Find the first Allergies_drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksFindFirstArgs} args - Arguments to find a Allergies_drinks
     * @example
     * // Get one Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Allergies_drinksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Allergies_drinksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Allergies_drinks'> extends True ? CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>> : CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks | null >, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T> | null >>

    /**
     * Find zero or more Allergies_drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.findMany()
     * 
     * // Get first 10 Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergies_drinksWithIdOnly = await prisma.allergies_drinks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Allergies_drinksFindManyArgs>(
      args?: SelectSubset<T, Allergies_drinksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Allergies_drinks>>, PrismaPromise<Array<Allergies_drinksGetPayload<T>>>>

    /**
     * Create a Allergies_drinks.
     * @param {Allergies_drinksCreateArgs} args - Arguments to create a Allergies_drinks.
     * @example
     * // Create one Allergies_drinks
     * const Allergies_drinks = await prisma.allergies_drinks.create({
     *   data: {
     *     // ... data to create a Allergies_drinks
     *   }
     * })
     * 
    **/
    create<T extends Allergies_drinksCreateArgs>(
      args: SelectSubset<T, Allergies_drinksCreateArgs>
    ): CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>>

    /**
     * Create many Allergies_drinks.
     *     @param {Allergies_drinksCreateManyArgs} args - Arguments to create many Allergies_drinks.
     *     @example
     *     // Create many Allergies_drinks
     *     const allergies_drinks = await prisma.allergies_drinks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Allergies_drinksCreateManyArgs>(
      args?: SelectSubset<T, Allergies_drinksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Allergies_drinks.
     * @param {Allergies_drinksDeleteArgs} args - Arguments to delete one Allergies_drinks.
     * @example
     * // Delete one Allergies_drinks
     * const Allergies_drinks = await prisma.allergies_drinks.delete({
     *   where: {
     *     // ... filter to delete one Allergies_drinks
     *   }
     * })
     * 
    **/
    delete<T extends Allergies_drinksDeleteArgs>(
      args: SelectSubset<T, Allergies_drinksDeleteArgs>
    ): CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>>

    /**
     * Update one Allergies_drinks.
     * @param {Allergies_drinksUpdateArgs} args - Arguments to update one Allergies_drinks.
     * @example
     * // Update one Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Allergies_drinksUpdateArgs>(
      args: SelectSubset<T, Allergies_drinksUpdateArgs>
    ): CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>>

    /**
     * Delete zero or more Allergies_drinks.
     * @param {Allergies_drinksDeleteManyArgs} args - Arguments to filter Allergies_drinks to delete.
     * @example
     * // Delete a few Allergies_drinks
     * const { count } = await prisma.allergies_drinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Allergies_drinksDeleteManyArgs>(
      args?: SelectSubset<T, Allergies_drinksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies_drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Allergies_drinksUpdateManyArgs>(
      args: SelectSubset<T, Allergies_drinksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Allergies_drinks.
     * @param {Allergies_drinksUpsertArgs} args - Arguments to update or create a Allergies_drinks.
     * @example
     * // Update or create a Allergies_drinks
     * const allergies_drinks = await prisma.allergies_drinks.upsert({
     *   create: {
     *     // ... data to create a Allergies_drinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergies_drinks we want to update
     *   }
     * })
    **/
    upsert<T extends Allergies_drinksUpsertArgs>(
      args: SelectSubset<T, Allergies_drinksUpsertArgs>
    ): CheckSelect<T, Prisma__Allergies_drinksClient<Allergies_drinks>, Prisma__Allergies_drinksClient<Allergies_drinksGetPayload<T>>>

    /**
     * Count the number of Allergies_drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksCountArgs} args - Arguments to filter Allergies_drinks to count.
     * @example
     * // Count the number of Allergies_drinks
     * const count = await prisma.allergies_drinks.count({
     *   where: {
     *     // ... the filter for the Allergies_drinks we want to count
     *   }
     * })
    **/
    count<T extends Allergies_drinksCountArgs>(
      args?: Subset<T, Allergies_drinksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Allergies_drinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergies_drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Allergies_drinksAggregateArgs>(args: Subset<T, Allergies_drinksAggregateArgs>): PrismaPromise<GetAllergies_drinksAggregateType<T>>

    /**
     * Group by Allergies_drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allergies_drinksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Allergies_drinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Allergies_drinksGroupByArgs['orderBy'] }
        : { orderBy?: Allergies_drinksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Allergies_drinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergies_drinksGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergies_drinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Allergies_drinksClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    allergie<T extends AllergiesArgs = {}>(args?: Subset<T, AllergiesArgs>): CheckSelect<T, Prisma__AllergiesClient<Allergies | null >, Prisma__AllergiesClient<AllergiesGetPayload<T> | null >>;

    drink<T extends DrinksArgs = {}>(args?: Subset<T, DrinksArgs>): CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Allergies_drinks findUnique
   */
  export type Allergies_drinksFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * Throw an Error if a Allergies_drinks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Allergies_drinks to fetch.
     * 
    **/
    where: Allergies_drinksWhereUniqueInput
  }


  /**
   * Allergies_drinks findFirst
   */
  export type Allergies_drinksFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * Throw an Error if a Allergies_drinks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Allergies_drinks to fetch.
     * 
    **/
    where?: Allergies_drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies_drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<Allergies_drinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies_drinks.
     * 
    **/
    cursor?: Allergies_drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies_drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies_drinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies_drinks.
     * 
    **/
    distinct?: Enumerable<Allergies_drinksScalarFieldEnum>
  }


  /**
   * Allergies_drinks findMany
   */
  export type Allergies_drinksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * Filter, which Allergies_drinks to fetch.
     * 
    **/
    where?: Allergies_drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies_drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<Allergies_drinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies_drinks.
     * 
    **/
    cursor?: Allergies_drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies_drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies_drinks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Allergies_drinksScalarFieldEnum>
  }


  /**
   * Allergies_drinks create
   */
  export type Allergies_drinksCreateArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * The data needed to create a Allergies_drinks.
     * 
    **/
    data: XOR<Allergies_drinksCreateInput, Allergies_drinksUncheckedCreateInput>
  }


  /**
   * Allergies_drinks createMany
   */
  export type Allergies_drinksCreateManyArgs = {
    data: Enumerable<Allergies_drinksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Allergies_drinks update
   */
  export type Allergies_drinksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * The data needed to update a Allergies_drinks.
     * 
    **/
    data: XOR<Allergies_drinksUpdateInput, Allergies_drinksUncheckedUpdateInput>
    /**
     * Choose, which Allergies_drinks to update.
     * 
    **/
    where: Allergies_drinksWhereUniqueInput
  }


  /**
   * Allergies_drinks updateMany
   */
  export type Allergies_drinksUpdateManyArgs = {
    data: XOR<Allergies_drinksUpdateManyMutationInput, Allergies_drinksUncheckedUpdateManyInput>
    where?: Allergies_drinksWhereInput
  }


  /**
   * Allergies_drinks upsert
   */
  export type Allergies_drinksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * The filter to search for the Allergies_drinks to update in case it exists.
     * 
    **/
    where: Allergies_drinksWhereUniqueInput
    /**
     * In case the Allergies_drinks found by the `where` argument doesn't exist, create a new Allergies_drinks with this data.
     * 
    **/
    create: XOR<Allergies_drinksCreateInput, Allergies_drinksUncheckedCreateInput>
    /**
     * In case the Allergies_drinks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Allergies_drinksUpdateInput, Allergies_drinksUncheckedUpdateInput>
  }


  /**
   * Allergies_drinks delete
   */
  export type Allergies_drinksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
    /**
     * Filter which Allergies_drinks to delete.
     * 
    **/
    where: Allergies_drinksWhereUniqueInput
  }


  /**
   * Allergies_drinks deleteMany
   */
  export type Allergies_drinksDeleteManyArgs = {
    where?: Allergies_drinksWhereInput
  }


  /**
   * Allergies_drinks without action
   */
  export type Allergies_drinksArgs = {
    /**
     * Select specific fields to fetch from the Allergies_drinks
     * 
    **/
    select?: Allergies_drinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Allergies_drinksInclude | null
  }



  /**
   * Model Categories
   */


  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs = {
    /**
     * Filter which Categories to aggregate.
     * 
    **/
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }


    
    
  export type CategoriesGroupByArgs = {
    where?: CategoriesWhereInput
    orderBy?: Enumerable<CategoriesOrderByWithAggregationInput>
    by: Array<CategoriesScalarFieldEnum>
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }


  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Promise<
    Array<
      PickArray<CategoriesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]> 
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      > 
    >


  export type CategoriesSelect = {
    id?: boolean
    name?: boolean
    Drinks?: boolean | DrinksFindManyArgs
    _count?: boolean | CategoriesCountOutputTypeArgs
  }

  export type CategoriesInclude = {
    Drinks?: boolean | DrinksFindManyArgs
    _count?: boolean | CategoriesCountOutputTypeArgs
  }

  export type CategoriesGetPayload<
    S extends boolean | null | undefined | CategoriesArgs,
    U = keyof S
      > = S extends true
        ? Categories
    : S extends undefined
    ? never
    : S extends CategoriesArgs | CategoriesFindManyArgs
    ?'include' extends U
    ? Categories  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Drinks'
        ? Array < DrinksGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CategoriesCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Categories ?Categories [P]
  : 
          P extends 'Drinks'
        ? Array < DrinksGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CategoriesCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Categories
  : Categories


  type CategoriesCountArgs = Merge<
    Omit<CategoriesFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesCountAggregateInputType | true
    }
  >

  export interface CategoriesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Categories'> extends True ? CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>> : CheckSelect<T, Prisma__CategoriesClient<Categories | null >, Prisma__CategoriesClient<CategoriesGetPayload<T> | null >>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Categories'> extends True ? CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>> : CheckSelect<T, Prisma__CategoriesClient<Categories | null >, Prisma__CategoriesClient<CategoriesGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriesFindManyArgs>(
      args?: SelectSubset<T, CategoriesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Categories>>, PrismaPromise<Array<CategoriesGetPayload<T>>>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends CategoriesCreateArgs>(
      args: SelectSubset<T, CategoriesCreateArgs>
    ): CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesCreateManyArgs>(
      args?: SelectSubset<T, CategoriesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesDeleteArgs>(
      args: SelectSubset<T, CategoriesDeleteArgs>
    ): CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesUpdateArgs>(
      args: SelectSubset<T, CategoriesUpdateArgs>
    ): CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesDeleteManyArgs>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesUpdateManyArgs>(
      args: SelectSubset<T, CategoriesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesUpsertArgs>(
      args: SelectSubset<T, CategoriesUpsertArgs>
    ): CheckSelect<T, Prisma__CategoriesClient<Categories>, Prisma__CategoriesClient<CategoriesGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoriesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Drinks<T extends DrinksFindManyArgs = {}>(args?: Subset<T, DrinksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Drinks>>, PrismaPromise<Array<DrinksGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * Throw an Error if a Categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * Throw an Error if a Categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * Categories create
   */
  export type CategoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * The data needed to create a Categories.
     * 
    **/
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }


  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs = {
    data: Enumerable<CategoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Categories update
   */
  export type CategoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * The data needed to update a Categories.
     * 
    **/
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     * 
    **/
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs = {
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    where?: CategoriesWhereInput
  }


  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * The filter to search for the Categories to update in case it exists.
     * 
    **/
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     * 
    **/
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }


  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
    /**
     * Filter which Categories to delete.
     * 
    **/
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs = {
    where?: CategoriesWhereInput
  }


  /**
   * Categories without action
   */
  export type CategoriesArgs = {
    /**
     * Select specific fields to fetch from the Categories
     * 
    **/
    select?: CategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesInclude | null
  }



  /**
   * Model Comments
   */


  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    drinkId: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs = {
    /**
     * Filter which Comments to aggregate.
     * 
    **/
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }


    
    
  export type CommentsGroupByArgs = {
    where?: CommentsWhereInput
    orderBy?: Enumerable<CommentsOrderByWithAggregationInput>
    by: Array<CommentsScalarFieldEnum>
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }


  export type CommentsGroupByOutputType = {
    id: number
    userId: number
    drinkId: number
    content: string
    created_at: Date | null
    updated_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Promise<
    Array<
      PickArray<CommentsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CommentsGroupByOutputType[P]> 
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      > 
    >


  export type CommentsSelect = {
    id?: boolean
    user?: boolean | UsersArgs
    userId?: boolean
    drink?: boolean | DrinksArgs
    drinkId?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CommentsInclude = {
    user?: boolean | UsersArgs
    drink?: boolean | DrinksArgs
  }

  export type CommentsGetPayload<
    S extends boolean | null | undefined | CommentsArgs,
    U = keyof S
      > = S extends true
        ? Comments
    : S extends undefined
    ? never
    : S extends CommentsArgs | CommentsFindManyArgs
    ?'include' extends U
    ? Comments  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UsersGetPayload<S['include'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comments ?Comments [P]
  : 
          P extends 'user'
        ? UsersGetPayload<S['select'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['select'][P]> : never
  } 
    : Comments
  : Comments


  type CommentsCountArgs = Merge<
    Omit<CommentsFindManyArgs, 'select' | 'include'> & {
      select?: CommentsCountAggregateInputType | true
    }
  >

  export interface CommentsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comments'> extends True ? CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>> : CheckSelect<T, Prisma__CommentsClient<Comments | null >, Prisma__CommentsClient<CommentsGetPayload<T> | null >>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comments'> extends True ? CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>> : CheckSelect<T, Prisma__CommentsClient<Comments | null >, Prisma__CommentsClient<CommentsGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentsFindManyArgs>(
      args?: SelectSubset<T, CommentsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comments>>, PrismaPromise<Array<CommentsGetPayload<T>>>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends CommentsCreateArgs>(
      args: SelectSubset<T, CommentsCreateArgs>
    ): CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentsCreateManyArgs>(
      args?: SelectSubset<T, CommentsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends CommentsDeleteArgs>(
      args: SelectSubset<T, CommentsDeleteArgs>
    ): CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentsUpdateArgs>(
      args: SelectSubset<T, CommentsUpdateArgs>
    ): CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentsDeleteManyArgs>(
      args?: SelectSubset<T, CommentsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentsUpdateManyArgs>(
      args: SelectSubset<T, CommentsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends CommentsUpsertArgs>(
      args: SelectSubset<T, CommentsUpsertArgs>
    ): CheckSelect<T, Prisma__CommentsClient<Comments>, Prisma__CommentsClient<CommentsGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    drink<T extends DrinksArgs = {}>(args?: Subset<T, DrinksArgs>): CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * Throw an Error if a Comments can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * Throw an Error if a Comments can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Comments create
   */
  export type CommentsCreateArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * The data needed to create a Comments.
     * 
    **/
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }


  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs = {
    data: Enumerable<CommentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comments update
   */
  export type CommentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * The data needed to update a Comments.
     * 
    **/
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     * 
    **/
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs = {
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    where?: CommentsWhereInput
  }


  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * The filter to search for the Comments to update in case it exists.
     * 
    **/
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     * 
    **/
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }


  /**
   * Comments delete
   */
  export type CommentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
    /**
     * Filter which Comments to delete.
     * 
    **/
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs = {
    where?: CommentsWhereInput
  }


  /**
   * Comments without action
   */
  export type CommentsArgs = {
    /**
     * Select specific fields to fetch from the Comments
     * 
    **/
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentsInclude | null
  }



  /**
   * Model Drinks
   */


  export type AggregateDrinks = {
    _count: DrinksCountAggregateOutputType | null
    _avg: DrinksAvgAggregateOutputType | null
    _sum: DrinksSumAggregateOutputType | null
    _min: DrinksMinAggregateOutputType | null
    _max: DrinksMaxAggregateOutputType | null
  }

  export type DrinksAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    isNew: number | null
  }

  export type DrinksSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    isNew: number | null
  }

  export type DrinksMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    koreanName: string | null
    englishName: string | null
    description: string | null
    isNew: number | null
  }

  export type DrinksMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    koreanName: string | null
    englishName: string | null
    description: string | null
    isNew: number | null
  }

  export type DrinksCountAggregateOutputType = {
    id: number
    categoryId: number
    koreanName: number
    englishName: number
    description: number
    isNew: number
    _all: number
  }


  export type DrinksAvgAggregateInputType = {
    id?: true
    categoryId?: true
    isNew?: true
  }

  export type DrinksSumAggregateInputType = {
    id?: true
    categoryId?: true
    isNew?: true
  }

  export type DrinksMinAggregateInputType = {
    id?: true
    categoryId?: true
    koreanName?: true
    englishName?: true
    description?: true
    isNew?: true
  }

  export type DrinksMaxAggregateInputType = {
    id?: true
    categoryId?: true
    koreanName?: true
    englishName?: true
    description?: true
    isNew?: true
  }

  export type DrinksCountAggregateInputType = {
    id?: true
    categoryId?: true
    koreanName?: true
    englishName?: true
    description?: true
    isNew?: true
    _all?: true
  }

  export type DrinksAggregateArgs = {
    /**
     * Filter which Drinks to aggregate.
     * 
    **/
    where?: DrinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<DrinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DrinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drinks
    **/
    _count?: true | DrinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinksMaxAggregateInputType
  }

  export type GetDrinksAggregateType<T extends DrinksAggregateArgs> = {
        [P in keyof T & keyof AggregateDrinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrinks[P]>
      : GetScalarType<T[P], AggregateDrinks[P]>
  }


    
    
  export type DrinksGroupByArgs = {
    where?: DrinksWhereInput
    orderBy?: Enumerable<DrinksOrderByWithAggregationInput>
    by: Array<DrinksScalarFieldEnum>
    having?: DrinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinksCountAggregateInputType | true
    _avg?: DrinksAvgAggregateInputType
    _sum?: DrinksSumAggregateInputType
    _min?: DrinksMinAggregateInputType
    _max?: DrinksMaxAggregateInputType
  }


  export type DrinksGroupByOutputType = {
    id: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    _count: DrinksCountAggregateOutputType | null
    _avg: DrinksAvgAggregateOutputType | null
    _sum: DrinksSumAggregateOutputType | null
    _min: DrinksMinAggregateOutputType | null
    _max: DrinksMaxAggregateOutputType | null
  }

  type GetDrinksGroupByPayload<T extends DrinksGroupByArgs> = Promise<
    Array<
      PickArray<DrinksGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DrinksGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DrinksGroupByOutputType[P]> 
            : GetScalarType<T[P], DrinksGroupByOutputType[P]>
        }
      > 
    >


  export type DrinksSelect = {
    id?: boolean
    category?: boolean | CategoriesArgs
    categoryId?: boolean
    koreanName?: boolean
    englishName?: boolean
    description?: boolean
    isNew?: boolean
    Allergies_drinks?: boolean | Allergies_drinksFindManyArgs
    Comments?: boolean | CommentsFindManyArgs
    Images?: boolean | ImagesFindManyArgs
    Likes?: boolean | LikesFindManyArgs
    Nutrition?: boolean | NutritionFindManyArgs
    _count?: boolean | DrinksCountOutputTypeArgs
  }

  export type DrinksInclude = {
    category?: boolean | CategoriesArgs
    Allergies_drinks?: boolean | Allergies_drinksFindManyArgs
    Comments?: boolean | CommentsFindManyArgs
    Images?: boolean | ImagesFindManyArgs
    Likes?: boolean | LikesFindManyArgs
    Nutrition?: boolean | NutritionFindManyArgs
    _count?: boolean | DrinksCountOutputTypeArgs
  }

  export type DrinksGetPayload<
    S extends boolean | null | undefined | DrinksArgs,
    U = keyof S
      > = S extends true
        ? Drinks
    : S extends undefined
    ? never
    : S extends DrinksArgs | DrinksFindManyArgs
    ?'include' extends U
    ? Drinks  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'category'
        ? CategoriesGetPayload<S['include'][P]> :
        P extends 'Allergies_drinks'
        ? Array < Allergies_drinksGetPayload<S['include'][P]>>  :
        P extends 'Comments'
        ? Array < CommentsGetPayload<S['include'][P]>>  :
        P extends 'Images'
        ? Array < ImagesGetPayload<S['include'][P]>>  :
        P extends 'Likes'
        ? Array < LikesGetPayload<S['include'][P]>>  :
        P extends 'Nutrition'
        ? Array < NutritionGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? DrinksCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Drinks ?Drinks [P]
  : 
          P extends 'category'
        ? CategoriesGetPayload<S['select'][P]> :
        P extends 'Allergies_drinks'
        ? Array < Allergies_drinksGetPayload<S['select'][P]>>  :
        P extends 'Comments'
        ? Array < CommentsGetPayload<S['select'][P]>>  :
        P extends 'Images'
        ? Array < ImagesGetPayload<S['select'][P]>>  :
        P extends 'Likes'
        ? Array < LikesGetPayload<S['select'][P]>>  :
        P extends 'Nutrition'
        ? Array < NutritionGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? DrinksCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Drinks
  : Drinks


  type DrinksCountArgs = Merge<
    Omit<DrinksFindManyArgs, 'select' | 'include'> & {
      select?: DrinksCountAggregateInputType | true
    }
  >

  export interface DrinksDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Drinks that matches the filter.
     * @param {DrinksFindUniqueArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DrinksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DrinksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Drinks'> extends True ? CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>> : CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>

    /**
     * Find the first Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksFindFirstArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DrinksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DrinksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Drinks'> extends True ? CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>> : CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>

    /**
     * Find zero or more Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drinks
     * const drinks = await prisma.drinks.findMany()
     * 
     * // Get first 10 Drinks
     * const drinks = await prisma.drinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinksWithIdOnly = await prisma.drinks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DrinksFindManyArgs>(
      args?: SelectSubset<T, DrinksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Drinks>>, PrismaPromise<Array<DrinksGetPayload<T>>>>

    /**
     * Create a Drinks.
     * @param {DrinksCreateArgs} args - Arguments to create a Drinks.
     * @example
     * // Create one Drinks
     * const Drinks = await prisma.drinks.create({
     *   data: {
     *     // ... data to create a Drinks
     *   }
     * })
     * 
    **/
    create<T extends DrinksCreateArgs>(
      args: SelectSubset<T, DrinksCreateArgs>
    ): CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>>

    /**
     * Create many Drinks.
     *     @param {DrinksCreateManyArgs} args - Arguments to create many Drinks.
     *     @example
     *     // Create many Drinks
     *     const drinks = await prisma.drinks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DrinksCreateManyArgs>(
      args?: SelectSubset<T, DrinksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Drinks.
     * @param {DrinksDeleteArgs} args - Arguments to delete one Drinks.
     * @example
     * // Delete one Drinks
     * const Drinks = await prisma.drinks.delete({
     *   where: {
     *     // ... filter to delete one Drinks
     *   }
     * })
     * 
    **/
    delete<T extends DrinksDeleteArgs>(
      args: SelectSubset<T, DrinksDeleteArgs>
    ): CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>>

    /**
     * Update one Drinks.
     * @param {DrinksUpdateArgs} args - Arguments to update one Drinks.
     * @example
     * // Update one Drinks
     * const drinks = await prisma.drinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DrinksUpdateArgs>(
      args: SelectSubset<T, DrinksUpdateArgs>
    ): CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>>

    /**
     * Delete zero or more Drinks.
     * @param {DrinksDeleteManyArgs} args - Arguments to filter Drinks to delete.
     * @example
     * // Delete a few Drinks
     * const { count } = await prisma.drinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DrinksDeleteManyArgs>(
      args?: SelectSubset<T, DrinksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drinks
     * const drinks = await prisma.drinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DrinksUpdateManyArgs>(
      args: SelectSubset<T, DrinksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Drinks.
     * @param {DrinksUpsertArgs} args - Arguments to update or create a Drinks.
     * @example
     * // Update or create a Drinks
     * const drinks = await prisma.drinks.upsert({
     *   create: {
     *     // ... data to create a Drinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drinks we want to update
     *   }
     * })
    **/
    upsert<T extends DrinksUpsertArgs>(
      args: SelectSubset<T, DrinksUpsertArgs>
    ): CheckSelect<T, Prisma__DrinksClient<Drinks>, Prisma__DrinksClient<DrinksGetPayload<T>>>

    /**
     * Count the number of Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksCountArgs} args - Arguments to filter Drinks to count.
     * @example
     * // Count the number of Drinks
     * const count = await prisma.drinks.count({
     *   where: {
     *     // ... the filter for the Drinks we want to count
     *   }
     * })
    **/
    count<T extends DrinksCountArgs>(
      args?: Subset<T, DrinksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrinksAggregateArgs>(args: Subset<T, DrinksAggregateArgs>): PrismaPromise<GetDrinksAggregateType<T>>

    /**
     * Group by Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinksGroupByArgs['orderBy'] }
        : { orderBy?: DrinksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinksGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DrinksClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category<T extends CategoriesArgs = {}>(args?: Subset<T, CategoriesArgs>): CheckSelect<T, Prisma__CategoriesClient<Categories | null >, Prisma__CategoriesClient<CategoriesGetPayload<T> | null >>;

    Allergies_drinks<T extends Allergies_drinksFindManyArgs = {}>(args?: Subset<T, Allergies_drinksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Allergies_drinks>>, PrismaPromise<Array<Allergies_drinksGetPayload<T>>>>;

    Comments<T extends CommentsFindManyArgs = {}>(args?: Subset<T, CommentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comments>>, PrismaPromise<Array<CommentsGetPayload<T>>>>;

    Images<T extends ImagesFindManyArgs = {}>(args?: Subset<T, ImagesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Images>>, PrismaPromise<Array<ImagesGetPayload<T>>>>;

    Likes<T extends LikesFindManyArgs = {}>(args?: Subset<T, LikesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Likes>>, PrismaPromise<Array<LikesGetPayload<T>>>>;

    Nutrition<T extends NutritionFindManyArgs = {}>(args?: Subset<T, NutritionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Nutrition>>, PrismaPromise<Array<NutritionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Drinks findUnique
   */
  export type DrinksFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * Throw an Error if a Drinks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Drinks to fetch.
     * 
    **/
    where: DrinksWhereUniqueInput
  }


  /**
   * Drinks findFirst
   */
  export type DrinksFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * Throw an Error if a Drinks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Drinks to fetch.
     * 
    **/
    where?: DrinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<DrinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drinks.
     * 
    **/
    cursor?: DrinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drinks.
     * 
    **/
    distinct?: Enumerable<DrinksScalarFieldEnum>
  }


  /**
   * Drinks findMany
   */
  export type DrinksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * Filter, which Drinks to fetch.
     * 
    **/
    where?: DrinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     * 
    **/
    orderBy?: Enumerable<DrinksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drinks.
     * 
    **/
    cursor?: DrinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DrinksScalarFieldEnum>
  }


  /**
   * Drinks create
   */
  export type DrinksCreateArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * The data needed to create a Drinks.
     * 
    **/
    data: XOR<DrinksCreateInput, DrinksUncheckedCreateInput>
  }


  /**
   * Drinks createMany
   */
  export type DrinksCreateManyArgs = {
    data: Enumerable<DrinksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Drinks update
   */
  export type DrinksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * The data needed to update a Drinks.
     * 
    **/
    data: XOR<DrinksUpdateInput, DrinksUncheckedUpdateInput>
    /**
     * Choose, which Drinks to update.
     * 
    **/
    where: DrinksWhereUniqueInput
  }


  /**
   * Drinks updateMany
   */
  export type DrinksUpdateManyArgs = {
    data: XOR<DrinksUpdateManyMutationInput, DrinksUncheckedUpdateManyInput>
    where?: DrinksWhereInput
  }


  /**
   * Drinks upsert
   */
  export type DrinksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * The filter to search for the Drinks to update in case it exists.
     * 
    **/
    where: DrinksWhereUniqueInput
    /**
     * In case the Drinks found by the `where` argument doesn't exist, create a new Drinks with this data.
     * 
    **/
    create: XOR<DrinksCreateInput, DrinksUncheckedCreateInput>
    /**
     * In case the Drinks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DrinksUpdateInput, DrinksUncheckedUpdateInput>
  }


  /**
   * Drinks delete
   */
  export type DrinksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
    /**
     * Filter which Drinks to delete.
     * 
    **/
    where: DrinksWhereUniqueInput
  }


  /**
   * Drinks deleteMany
   */
  export type DrinksDeleteManyArgs = {
    where?: DrinksWhereInput
  }


  /**
   * Drinks without action
   */
  export type DrinksArgs = {
    /**
     * Select specific fields to fetch from the Drinks
     * 
    **/
    select?: DrinksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DrinksInclude | null
  }



  /**
   * Model Images
   */


  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    drinkId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    drinkId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    drinkId: number | null
    imageUrl: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    drinkId: number | null
    imageUrl: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    drinkId: number
    imageUrl: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    drinkId?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    drinkId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    drinkId?: true
    imageUrl?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    drinkId?: true
    imageUrl?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    drinkId?: true
    imageUrl?: true
    _all?: true
  }

  export type ImagesAggregateArgs = {
    /**
     * Filter which Images to aggregate.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }


    
    
  export type ImagesGroupByArgs = {
    where?: ImagesWhereInput
    orderBy?: Enumerable<ImagesOrderByWithAggregationInput>
    by: Array<ImagesScalarFieldEnum>
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }


  export type ImagesGroupByOutputType = {
    id: number
    drinkId: number
    imageUrl: string
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Promise<
    Array<
      PickArray<ImagesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ImagesGroupByOutputType[P]> 
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      > 
    >


  export type ImagesSelect = {
    id?: boolean
    drink?: boolean | DrinksArgs
    drinkId?: boolean
    imageUrl?: boolean
  }

  export type ImagesInclude = {
    drink?: boolean | DrinksArgs
  }

  export type ImagesGetPayload<
    S extends boolean | null | undefined | ImagesArgs,
    U = keyof S
      > = S extends true
        ? Images
    : S extends undefined
    ? never
    : S extends ImagesArgs | ImagesFindManyArgs
    ?'include' extends U
    ? Images  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'drink'
        ? DrinksGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Images ?Images [P]
  : 
          P extends 'drink'
        ? DrinksGetPayload<S['select'][P]> : never
  } 
    : Images
  : Images


  type ImagesCountArgs = Merge<
    Omit<ImagesFindManyArgs, 'select' | 'include'> & {
      select?: ImagesCountAggregateInputType | true
    }
  >

  export interface ImagesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Images'> extends True ? CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>> : CheckSelect<T, Prisma__ImagesClient<Images | null >, Prisma__ImagesClient<ImagesGetPayload<T> | null >>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Images'> extends True ? CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>> : CheckSelect<T, Prisma__ImagesClient<Images | null >, Prisma__ImagesClient<ImagesGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesFindManyArgs>(
      args?: SelectSubset<T, ImagesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Images>>, PrismaPromise<Array<ImagesGetPayload<T>>>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
    **/
    create<T extends ImagesCreateArgs>(
      args: SelectSubset<T, ImagesCreateArgs>
    ): CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const images = await prisma.images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesCreateManyArgs>(
      args?: SelectSubset<T, ImagesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
    **/
    delete<T extends ImagesDeleteArgs>(
      args: SelectSubset<T, ImagesDeleteArgs>
    ): CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesUpdateArgs>(
      args: SelectSubset<T, ImagesUpdateArgs>
    ): CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesDeleteManyArgs>(
      args?: SelectSubset<T, ImagesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesUpdateManyArgs>(
      args: SelectSubset<T, ImagesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesUpsertArgs>(
      args: SelectSubset<T, ImagesUpsertArgs>
    ): CheckSelect<T, Prisma__ImagesClient<Images>, Prisma__ImagesClient<ImagesGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    drink<T extends DrinksArgs = {}>(args?: Subset<T, DrinksArgs>): CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Throw an Error if a Images can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Throw an Error if a Images can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images findMany
   */
  export type ImagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images create
   */
  export type ImagesCreateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to create a Images.
     * 
    **/
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }


  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs = {
    data: Enumerable<ImagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Images update
   */
  export type ImagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to update a Images.
     * 
    **/
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs = {
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    where?: ImagesWhereInput
  }


  /**
   * Images upsert
   */
  export type ImagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The filter to search for the Images to update in case it exists.
     * 
    **/
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     * 
    **/
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }


  /**
   * Images delete
   */
  export type ImagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter which Images to delete.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs = {
    where?: ImagesWhereInput
  }


  /**
   * Images without action
   */
  export type ImagesArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
  }



  /**
   * Model Likes
   */


  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    drinkId: number | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userId: number
    drinkId: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    _all?: true
  }

  export type LikesAggregateArgs = {
    /**
     * Filter which Likes to aggregate.
     * 
    **/
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }


    
    
  export type LikesGroupByArgs = {
    where?: LikesWhereInput
    orderBy?: Enumerable<LikesOrderByWithAggregationInput>
    by: Array<LikesScalarFieldEnum>
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }


  export type LikesGroupByOutputType = {
    id: number
    userId: number
    drinkId: number
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Promise<
    Array<
      PickArray<LikesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], LikesGroupByOutputType[P]> 
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      > 
    >


  export type LikesSelect = {
    id?: boolean
    userId?: boolean
    drinkId?: boolean
    user?: boolean | UsersArgs
    drink?: boolean | DrinksArgs
  }

  export type LikesInclude = {
    user?: boolean | UsersArgs
    drink?: boolean | DrinksArgs
  }

  export type LikesGetPayload<
    S extends boolean | null | undefined | LikesArgs,
    U = keyof S
      > = S extends true
        ? Likes
    : S extends undefined
    ? never
    : S extends LikesArgs | LikesFindManyArgs
    ?'include' extends U
    ? Likes  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UsersGetPayload<S['include'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Likes ?Likes [P]
  : 
          P extends 'user'
        ? UsersGetPayload<S['select'][P]> :
        P extends 'drink'
        ? DrinksGetPayload<S['select'][P]> : never
  } 
    : Likes
  : Likes


  type LikesCountArgs = Merge<
    Omit<LikesFindManyArgs, 'select' | 'include'> & {
      select?: LikesCountAggregateInputType | true
    }
  >

  export interface LikesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LikesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Likes'> extends True ? CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>> : CheckSelect<T, Prisma__LikesClient<Likes | null >, Prisma__LikesClient<LikesGetPayload<T> | null >>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LikesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Likes'> extends True ? CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>> : CheckSelect<T, Prisma__LikesClient<Likes | null >, Prisma__LikesClient<LikesGetPayload<T> | null >>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikesFindManyArgs>(
      args?: SelectSubset<T, LikesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Likes>>, PrismaPromise<Array<LikesGetPayload<T>>>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
    **/
    create<T extends LikesCreateArgs>(
      args: SelectSubset<T, LikesCreateArgs>
    ): CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>>

    /**
     * Create many Likes.
     *     @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const likes = await prisma.likes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikesCreateManyArgs>(
      args?: SelectSubset<T, LikesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
    **/
    delete<T extends LikesDeleteArgs>(
      args: SelectSubset<T, LikesDeleteArgs>
    ): CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikesUpdateArgs>(
      args: SelectSubset<T, LikesUpdateArgs>
    ): CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikesDeleteManyArgs>(
      args?: SelectSubset<T, LikesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikesUpdateManyArgs>(
      args: SelectSubset<T, LikesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
    **/
    upsert<T extends LikesUpsertArgs>(
      args: SelectSubset<T, LikesUpsertArgs>
    ): CheckSelect<T, Prisma__LikesClient<Likes>, Prisma__LikesClient<LikesGetPayload<T>>>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LikesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    drink<T extends DrinksArgs = {}>(args?: Subset<T, DrinksArgs>): CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * Throw an Error if a Likes can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where: LikesWhereUniqueInput
  }


  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * Throw an Error if a Likes can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     * 
    **/
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     * 
    **/
    distinct?: Enumerable<LikesScalarFieldEnum>
  }


  /**
   * Likes findMany
   */
  export type LikesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     * 
    **/
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LikesScalarFieldEnum>
  }


  /**
   * Likes create
   */
  export type LikesCreateArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * The data needed to create a Likes.
     * 
    **/
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }


  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs = {
    data: Enumerable<LikesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Likes update
   */
  export type LikesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * The data needed to update a Likes.
     * 
    **/
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     * 
    **/
    where: LikesWhereUniqueInput
  }


  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs = {
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    where?: LikesWhereInput
  }


  /**
   * Likes upsert
   */
  export type LikesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * The filter to search for the Likes to update in case it exists.
     * 
    **/
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     * 
    **/
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }


  /**
   * Likes delete
   */
  export type LikesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
    /**
     * Filter which Likes to delete.
     * 
    **/
    where: LikesWhereUniqueInput
  }


  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs = {
    where?: LikesWhereInput
  }


  /**
   * Likes without action
   */
  export type LikesArgs = {
    /**
     * Select specific fields to fetch from the Likes
     * 
    **/
    select?: LikesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikesInclude | null
  }



  /**
   * Model Nutrition
   */


  export type AggregateNutrition = {
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  export type NutritionAvgAggregateOutputType = {
    id: number | null
    drinkId: number | null
    calorie: number | null
    natrium: number | null
    fat: number | null
    sugar: number | null
    protein: number | null
    caffeine: number | null
  }

  export type NutritionSumAggregateOutputType = {
    id: number | null
    drinkId: number | null
    calorie: number | null
    natrium: number | null
    fat: number | null
    sugar: number | null
    protein: number | null
    caffeine: number | null
  }

  export type NutritionMinAggregateOutputType = {
    id: number | null
    drinkId: number | null
    calorie: number | null
    natrium: number | null
    fat: number | null
    sugar: number | null
    protein: number | null
    caffeine: number | null
  }

  export type NutritionMaxAggregateOutputType = {
    id: number | null
    drinkId: number | null
    calorie: number | null
    natrium: number | null
    fat: number | null
    sugar: number | null
    protein: number | null
    caffeine: number | null
  }

  export type NutritionCountAggregateOutputType = {
    id: number
    drinkId: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
    _all: number
  }


  export type NutritionAvgAggregateInputType = {
    id?: true
    drinkId?: true
    calorie?: true
    natrium?: true
    fat?: true
    sugar?: true
    protein?: true
    caffeine?: true
  }

  export type NutritionSumAggregateInputType = {
    id?: true
    drinkId?: true
    calorie?: true
    natrium?: true
    fat?: true
    sugar?: true
    protein?: true
    caffeine?: true
  }

  export type NutritionMinAggregateInputType = {
    id?: true
    drinkId?: true
    calorie?: true
    natrium?: true
    fat?: true
    sugar?: true
    protein?: true
    caffeine?: true
  }

  export type NutritionMaxAggregateInputType = {
    id?: true
    drinkId?: true
    calorie?: true
    natrium?: true
    fat?: true
    sugar?: true
    protein?: true
    caffeine?: true
  }

  export type NutritionCountAggregateInputType = {
    id?: true
    drinkId?: true
    calorie?: true
    natrium?: true
    fat?: true
    sugar?: true
    protein?: true
    caffeine?: true
    _all?: true
  }

  export type NutritionAggregateArgs = {
    /**
     * Filter which Nutrition to aggregate.
     * 
    **/
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     * 
    **/
    orderBy?: Enumerable<NutritionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nutritions
    **/
    _count?: true | NutritionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionMaxAggregateInputType
  }

  export type GetNutritionAggregateType<T extends NutritionAggregateArgs> = {
        [P in keyof T & keyof AggregateNutrition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutrition[P]>
      : GetScalarType<T[P], AggregateNutrition[P]>
  }


    
    
  export type NutritionGroupByArgs = {
    where?: NutritionWhereInput
    orderBy?: Enumerable<NutritionOrderByWithAggregationInput>
    by: Array<NutritionScalarFieldEnum>
    having?: NutritionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionCountAggregateInputType | true
    _avg?: NutritionAvgAggregateInputType
    _sum?: NutritionSumAggregateInputType
    _min?: NutritionMinAggregateInputType
    _max?: NutritionMaxAggregateInputType
  }


  export type NutritionGroupByOutputType = {
    id: number
    drinkId: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
    _count: NutritionCountAggregateOutputType | null
    _avg: NutritionAvgAggregateOutputType | null
    _sum: NutritionSumAggregateOutputType | null
    _min: NutritionMinAggregateOutputType | null
    _max: NutritionMaxAggregateOutputType | null
  }

  type GetNutritionGroupByPayload<T extends NutritionGroupByArgs> = Promise<
    Array<
      PickArray<NutritionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof NutritionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], NutritionGroupByOutputType[P]> 
            : GetScalarType<T[P], NutritionGroupByOutputType[P]>
        }
      > 
    >


  export type NutritionSelect = {
    id?: boolean
    drink?: boolean | DrinksArgs
    drinkId?: boolean
    calorie?: boolean
    natrium?: boolean
    fat?: boolean
    sugar?: boolean
    protein?: boolean
    caffeine?: boolean
  }

  export type NutritionInclude = {
    drink?: boolean | DrinksArgs
  }

  export type NutritionGetPayload<
    S extends boolean | null | undefined | NutritionArgs,
    U = keyof S
      > = S extends true
        ? Nutrition
    : S extends undefined
    ? never
    : S extends NutritionArgs | NutritionFindManyArgs
    ?'include' extends U
    ? Nutrition  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'drink'
        ? DrinksGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Nutrition ?Nutrition [P]
  : 
          P extends 'drink'
        ? DrinksGetPayload<S['select'][P]> : never
  } 
    : Nutrition
  : Nutrition


  type NutritionCountArgs = Merge<
    Omit<NutritionFindManyArgs, 'select' | 'include'> & {
      select?: NutritionCountAggregateInputType | true
    }
  >

  export interface NutritionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Nutrition that matches the filter.
     * @param {NutritionFindUniqueArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NutritionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NutritionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Nutrition'> extends True ? CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>> : CheckSelect<T, Prisma__NutritionClient<Nutrition | null >, Prisma__NutritionClient<NutritionGetPayload<T> | null >>

    /**
     * Find the first Nutrition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindFirstArgs} args - Arguments to find a Nutrition
     * @example
     * // Get one Nutrition
     * const nutrition = await prisma.nutrition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NutritionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NutritionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Nutrition'> extends True ? CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>> : CheckSelect<T, Prisma__NutritionClient<Nutrition | null >, Prisma__NutritionClient<NutritionGetPayload<T> | null >>

    /**
     * Find zero or more Nutritions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nutritions
     * const nutritions = await prisma.nutrition.findMany()
     * 
     * // Get first 10 Nutritions
     * const nutritions = await prisma.nutrition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionWithIdOnly = await prisma.nutrition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NutritionFindManyArgs>(
      args?: SelectSubset<T, NutritionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Nutrition>>, PrismaPromise<Array<NutritionGetPayload<T>>>>

    /**
     * Create a Nutrition.
     * @param {NutritionCreateArgs} args - Arguments to create a Nutrition.
     * @example
     * // Create one Nutrition
     * const Nutrition = await prisma.nutrition.create({
     *   data: {
     *     // ... data to create a Nutrition
     *   }
     * })
     * 
    **/
    create<T extends NutritionCreateArgs>(
      args: SelectSubset<T, NutritionCreateArgs>
    ): CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>>

    /**
     * Create many Nutritions.
     *     @param {NutritionCreateManyArgs} args - Arguments to create many Nutritions.
     *     @example
     *     // Create many Nutritions
     *     const nutrition = await prisma.nutrition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NutritionCreateManyArgs>(
      args?: SelectSubset<T, NutritionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Nutrition.
     * @param {NutritionDeleteArgs} args - Arguments to delete one Nutrition.
     * @example
     * // Delete one Nutrition
     * const Nutrition = await prisma.nutrition.delete({
     *   where: {
     *     // ... filter to delete one Nutrition
     *   }
     * })
     * 
    **/
    delete<T extends NutritionDeleteArgs>(
      args: SelectSubset<T, NutritionDeleteArgs>
    ): CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>>

    /**
     * Update one Nutrition.
     * @param {NutritionUpdateArgs} args - Arguments to update one Nutrition.
     * @example
     * // Update one Nutrition
     * const nutrition = await prisma.nutrition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NutritionUpdateArgs>(
      args: SelectSubset<T, NutritionUpdateArgs>
    ): CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>>

    /**
     * Delete zero or more Nutritions.
     * @param {NutritionDeleteManyArgs} args - Arguments to filter Nutritions to delete.
     * @example
     * // Delete a few Nutritions
     * const { count } = await prisma.nutrition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NutritionDeleteManyArgs>(
      args?: SelectSubset<T, NutritionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nutritions
     * const nutrition = await prisma.nutrition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NutritionUpdateManyArgs>(
      args: SelectSubset<T, NutritionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Nutrition.
     * @param {NutritionUpsertArgs} args - Arguments to update or create a Nutrition.
     * @example
     * // Update or create a Nutrition
     * const nutrition = await prisma.nutrition.upsert({
     *   create: {
     *     // ... data to create a Nutrition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nutrition we want to update
     *   }
     * })
    **/
    upsert<T extends NutritionUpsertArgs>(
      args: SelectSubset<T, NutritionUpsertArgs>
    ): CheckSelect<T, Prisma__NutritionClient<Nutrition>, Prisma__NutritionClient<NutritionGetPayload<T>>>

    /**
     * Count the number of Nutritions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionCountArgs} args - Arguments to filter Nutritions to count.
     * @example
     * // Count the number of Nutritions
     * const count = await prisma.nutrition.count({
     *   where: {
     *     // ... the filter for the Nutritions we want to count
     *   }
     * })
    **/
    count<T extends NutritionCountArgs>(
      args?: Subset<T, NutritionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutritionAggregateArgs>(args: Subset<T, NutritionAggregateArgs>): PrismaPromise<GetNutritionAggregateType<T>>

    /**
     * Group by Nutrition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutritionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionGroupByArgs['orderBy'] }
        : { orderBy?: NutritionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nutrition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NutritionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    drink<T extends DrinksArgs = {}>(args?: Subset<T, DrinksArgs>): CheckSelect<T, Prisma__DrinksClient<Drinks | null >, Prisma__DrinksClient<DrinksGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Nutrition findUnique
   */
  export type NutritionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * Throw an Error if a Nutrition can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Nutrition to fetch.
     * 
    **/
    where: NutritionWhereUniqueInput
  }


  /**
   * Nutrition findFirst
   */
  export type NutritionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * Throw an Error if a Nutrition can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Nutrition to fetch.
     * 
    **/
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     * 
    **/
    orderBy?: Enumerable<NutritionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nutritions.
     * 
    **/
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nutritions.
     * 
    **/
    distinct?: Enumerable<NutritionScalarFieldEnum>
  }


  /**
   * Nutrition findMany
   */
  export type NutritionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * Filter, which Nutritions to fetch.
     * 
    **/
    where?: NutritionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nutritions to fetch.
     * 
    **/
    orderBy?: Enumerable<NutritionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nutritions.
     * 
    **/
    cursor?: NutritionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nutritions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nutritions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NutritionScalarFieldEnum>
  }


  /**
   * Nutrition create
   */
  export type NutritionCreateArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * The data needed to create a Nutrition.
     * 
    **/
    data: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
  }


  /**
   * Nutrition createMany
   */
  export type NutritionCreateManyArgs = {
    data: Enumerable<NutritionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Nutrition update
   */
  export type NutritionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * The data needed to update a Nutrition.
     * 
    **/
    data: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
    /**
     * Choose, which Nutrition to update.
     * 
    **/
    where: NutritionWhereUniqueInput
  }


  /**
   * Nutrition updateMany
   */
  export type NutritionUpdateManyArgs = {
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyInput>
    where?: NutritionWhereInput
  }


  /**
   * Nutrition upsert
   */
  export type NutritionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * The filter to search for the Nutrition to update in case it exists.
     * 
    **/
    where: NutritionWhereUniqueInput
    /**
     * In case the Nutrition found by the `where` argument doesn't exist, create a new Nutrition with this data.
     * 
    **/
    create: XOR<NutritionCreateInput, NutritionUncheckedCreateInput>
    /**
     * In case the Nutrition was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NutritionUpdateInput, NutritionUncheckedUpdateInput>
  }


  /**
   * Nutrition delete
   */
  export type NutritionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
    /**
     * Filter which Nutrition to delete.
     * 
    **/
    where: NutritionWhereUniqueInput
  }


  /**
   * Nutrition deleteMany
   */
  export type NutritionDeleteManyArgs = {
    where?: NutritionWhereInput
  }


  /**
   * Nutrition without action
   */
  export type NutritionArgs = {
    /**
     * Select specific fields to fetch from the Nutrition
     * 
    **/
    select?: NutritionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NutritionInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    address: string | null
    phoneNumber: string | null
    policyAgreed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    address: string | null
    phoneNumber: string | null
    policyAgreed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    address: number
    phoneNumber: number
    policyAgreed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    address?: true
    phoneNumber?: true
    policyAgreed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    address?: true
    phoneNumber?: true
    policyAgreed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    address?: true
    phoneNumber?: true
    policyAgreed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string | null
    address: string | null
    phoneNumber: string | null
    policyAgreed: boolean
    createdAt: Date | null
    updatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type UsersSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    address?: boolean
    phoneNumber?: boolean
    policyAgreed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Comments?: boolean | CommentsFindManyArgs
    Likes?: boolean | LikesFindManyArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type UsersInclude = {
    Comments?: boolean | CommentsFindManyArgs
    Likes?: boolean | LikesFindManyArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Comments'
        ? Array < CommentsGetPayload<S['include'][P]>>  :
        P extends 'Likes'
        ? Array < LikesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UsersCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Users ?Users [P]
  : 
          P extends 'Comments'
        ? Array < CommentsGetPayload<S['select'][P]>>  :
        P extends 'Likes'
        ? Array < LikesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UsersCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Comments<T extends CommentsFindManyArgs = {}>(args?: Subset<T, CommentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comments>>, PrismaPromise<Array<CommentsGetPayload<T>>>>;

    Likes<T extends LikesFindManyArgs = {}>(args?: Subset<T, LikesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Likes>>, PrismaPromise<Array<LikesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AllergiesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AllergiesScalarFieldEnum = (typeof AllergiesScalarFieldEnum)[keyof typeof AllergiesScalarFieldEnum]


  export const Allergies_drinksScalarFieldEnum: {
    id: 'id',
    allergieId: 'allergieId',
    drinkId: 'drinkId'
  };

  export type Allergies_drinksScalarFieldEnum = (typeof Allergies_drinksScalarFieldEnum)[keyof typeof Allergies_drinksScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    drinkId: 'drinkId',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const DrinksScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    koreanName: 'koreanName',
    englishName: 'englishName',
    description: 'description',
    isNew: 'isNew'
  };

  export type DrinksScalarFieldEnum = (typeof DrinksScalarFieldEnum)[keyof typeof DrinksScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    drinkId: 'drinkId',
    imageUrl: 'imageUrl'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    drinkId: 'drinkId'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const NutritionScalarFieldEnum: {
    id: 'id',
    drinkId: 'drinkId',
    calorie: 'calorie',
    natrium: 'natrium',
    fat: 'fat',
    sugar: 'sugar',
    protein: 'protein',
    caffeine: 'caffeine'
  };

  export type NutritionScalarFieldEnum = (typeof NutritionScalarFieldEnum)[keyof typeof NutritionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    address: 'address',
    phoneNumber: 'phoneNumber',
    policyAgreed: 'policyAgreed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type AllergiesWhereInput = {
    AND?: Enumerable<AllergiesWhereInput>
    OR?: Enumerable<AllergiesWhereInput>
    NOT?: Enumerable<AllergiesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    allergies_drink?: Allergies_drinksListRelationFilter
  }

  export type AllergiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    allergies_drink?: Allergies_drinksOrderByRelationAggregateInput
  }

  export type AllergiesWhereUniqueInput = {
    id?: number
  }

  export type AllergiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AllergiesCountOrderByAggregateInput
    _avg?: AllergiesAvgOrderByAggregateInput
    _max?: AllergiesMaxOrderByAggregateInput
    _min?: AllergiesMinOrderByAggregateInput
    _sum?: AllergiesSumOrderByAggregateInput
  }

  export type AllergiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AllergiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<AllergiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AllergiesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type Allergies_drinksWhereInput = {
    AND?: Enumerable<Allergies_drinksWhereInput>
    OR?: Enumerable<Allergies_drinksWhereInput>
    NOT?: Enumerable<Allergies_drinksWhereInput>
    id?: IntFilter | number
    allergie?: XOR<AllergiesRelationFilter, AllergiesWhereInput>
    allergieId?: IntFilter | number
    drink?: XOR<DrinksRelationFilter, DrinksWhereInput>
    drinkId?: IntFilter | number
  }

  export type Allergies_drinksOrderByWithRelationInput = {
    id?: SortOrder
    allergie?: AllergiesOrderByWithRelationInput
    allergieId?: SortOrder
    drink?: DrinksOrderByWithRelationInput
    drinkId?: SortOrder
  }

  export type Allergies_drinksWhereUniqueInput = {
    id?: number
  }

  export type Allergies_drinksOrderByWithAggregationInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
    _count?: Allergies_drinksCountOrderByAggregateInput
    _avg?: Allergies_drinksAvgOrderByAggregateInput
    _max?: Allergies_drinksMaxOrderByAggregateInput
    _min?: Allergies_drinksMinOrderByAggregateInput
    _sum?: Allergies_drinksSumOrderByAggregateInput
  }

  export type Allergies_drinksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Allergies_drinksScalarWhereWithAggregatesInput>
    OR?: Enumerable<Allergies_drinksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Allergies_drinksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    allergieId?: IntWithAggregatesFilter | number
    drinkId?: IntWithAggregatesFilter | number
  }

  export type CategoriesWhereInput = {
    AND?: Enumerable<CategoriesWhereInput>
    OR?: Enumerable<CategoriesWhereInput>
    NOT?: Enumerable<CategoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Drinks?: DrinksListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Drinks?: DrinksOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = {
    id?: number
  }

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type CommentsWhereInput = {
    AND?: Enumerable<CommentsWhereInput>
    OR?: Enumerable<CommentsWhereInput>
    NOT?: Enumerable<CommentsWhereInput>
    id?: IntFilter | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    userId?: IntFilter | number
    drink?: XOR<DrinksRelationFilter, DrinksWhereInput>
    drinkId?: IntFilter | number
    content?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    user?: UsersOrderByWithRelationInput
    userId?: SortOrder
    drink?: DrinksOrderByWithRelationInput
    drinkId?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentsWhereUniqueInput = {
    id?: number
  }

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    drinkId?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DrinksWhereInput = {
    AND?: Enumerable<DrinksWhereInput>
    OR?: Enumerable<DrinksWhereInput>
    NOT?: Enumerable<DrinksWhereInput>
    id?: IntFilter | number
    category?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
    categoryId?: IntFilter | number
    koreanName?: StringFilter | string
    englishName?: StringFilter | string
    description?: StringFilter | string
    isNew?: IntFilter | number
    Allergies_drinks?: Allergies_drinksListRelationFilter
    Comments?: CommentsListRelationFilter
    Images?: ImagesListRelationFilter
    Likes?: LikesListRelationFilter
    Nutrition?: NutritionListRelationFilter
  }

  export type DrinksOrderByWithRelationInput = {
    id?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    categoryId?: SortOrder
    koreanName?: SortOrder
    englishName?: SortOrder
    description?: SortOrder
    isNew?: SortOrder
    Allergies_drinks?: Allergies_drinksOrderByRelationAggregateInput
    Comments?: CommentsOrderByRelationAggregateInput
    Images?: ImagesOrderByRelationAggregateInput
    Likes?: LikesOrderByRelationAggregateInput
    Nutrition?: NutritionOrderByRelationAggregateInput
  }

  export type DrinksWhereUniqueInput = {
    id?: number
  }

  export type DrinksOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    koreanName?: SortOrder
    englishName?: SortOrder
    description?: SortOrder
    isNew?: SortOrder
    _count?: DrinksCountOrderByAggregateInput
    _avg?: DrinksAvgOrderByAggregateInput
    _max?: DrinksMaxOrderByAggregateInput
    _min?: DrinksMinOrderByAggregateInput
    _sum?: DrinksSumOrderByAggregateInput
  }

  export type DrinksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DrinksScalarWhereWithAggregatesInput>
    OR?: Enumerable<DrinksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DrinksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    koreanName?: StringWithAggregatesFilter | string
    englishName?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    isNew?: IntWithAggregatesFilter | number
  }

  export type ImagesWhereInput = {
    AND?: Enumerable<ImagesWhereInput>
    OR?: Enumerable<ImagesWhereInput>
    NOT?: Enumerable<ImagesWhereInput>
    id?: IntFilter | number
    drink?: XOR<DrinksRelationFilter, DrinksWhereInput>
    drinkId?: IntFilter | number
    imageUrl?: StringFilter | string
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    drink?: DrinksOrderByWithRelationInput
    drinkId?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImagesWhereUniqueInput = {
    id?: number
  }

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    drinkId?: SortOrder
    imageUrl?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    drinkId?: IntWithAggregatesFilter | number
    imageUrl?: StringWithAggregatesFilter | string
  }

  export type LikesWhereInput = {
    AND?: Enumerable<LikesWhereInput>
    OR?: Enumerable<LikesWhereInput>
    NOT?: Enumerable<LikesWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    drinkId?: IntFilter | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    drink?: XOR<DrinksRelationFilter, DrinksWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    user?: UsersOrderByWithRelationInput
    drink?: DrinksOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = {
    id?: number
  }

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _avg?: LikesAvgOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
    _sum?: LikesSumOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LikesScalarWhereWithAggregatesInput>
    OR?: Enumerable<LikesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LikesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    drinkId?: IntWithAggregatesFilter | number
  }

  export type NutritionWhereInput = {
    AND?: Enumerable<NutritionWhereInput>
    OR?: Enumerable<NutritionWhereInput>
    NOT?: Enumerable<NutritionWhereInput>
    id?: IntFilter | number
    drink?: XOR<DrinksRelationFilter, DrinksWhereInput>
    drinkId?: IntFilter | number
    calorie?: FloatFilter | number
    natrium?: FloatFilter | number
    fat?: FloatFilter | number
    sugar?: FloatFilter | number
    protein?: FloatFilter | number
    caffeine?: FloatFilter | number
  }

  export type NutritionOrderByWithRelationInput = {
    id?: SortOrder
    drink?: DrinksOrderByWithRelationInput
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type NutritionWhereUniqueInput = {
    id?: number
  }

  export type NutritionOrderByWithAggregationInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
    _count?: NutritionCountOrderByAggregateInput
    _avg?: NutritionAvgOrderByAggregateInput
    _max?: NutritionMaxOrderByAggregateInput
    _min?: NutritionMinOrderByAggregateInput
    _sum?: NutritionSumOrderByAggregateInput
  }

  export type NutritionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NutritionScalarWhereWithAggregatesInput>
    OR?: Enumerable<NutritionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NutritionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    drinkId?: IntWithAggregatesFilter | number
    calorie?: FloatWithAggregatesFilter | number
    natrium?: FloatWithAggregatesFilter | number
    fat?: FloatWithAggregatesFilter | number
    sugar?: FloatWithAggregatesFilter | number
    protein?: FloatWithAggregatesFilter | number
    caffeine?: FloatWithAggregatesFilter | number
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    username?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    phoneNumber?: StringNullableFilter | string | null
    policyAgreed?: BoolFilter | boolean
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    Comments?: CommentsListRelationFilter
    Likes?: LikesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    policyAgreed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Likes?: LikesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    policyAgreed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    phoneNumber?: StringNullableWithAggregatesFilter | string | null
    policyAgreed?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type AllergiesCreateInput = {
    name: string
    allergies_drink?: Allergies_drinksCreateNestedManyWithoutAllergieInput
  }

  export type AllergiesUncheckedCreateInput = {
    id?: number
    name: string
    allergies_drink?: Allergies_drinksUncheckedCreateNestedManyWithoutAllergieInput
  }

  export type AllergiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    allergies_drink?: Allergies_drinksUpdateManyWithoutAllergieInput
  }

  export type AllergiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    allergies_drink?: Allergies_drinksUncheckedUpdateManyWithoutAllergieInput
  }

  export type AllergiesCreateManyInput = {
    id?: number
    name: string
  }

  export type AllergiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AllergiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Allergies_drinksCreateInput = {
    allergie: AllergiesCreateNestedOneWithoutAllergies_drinkInput
    drink: DrinksCreateNestedOneWithoutAllergies_drinksInput
  }

  export type Allergies_drinksUncheckedCreateInput = {
    id?: number
    allergieId: number
    drinkId: number
  }

  export type Allergies_drinksUpdateInput = {
    allergie?: AllergiesUpdateOneRequiredWithoutAllergies_drinkInput
    drink?: DrinksUpdateOneRequiredWithoutAllergies_drinksInput
  }

  export type Allergies_drinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergieId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type Allergies_drinksCreateManyInput = {
    id?: number
    allergieId: number
    drinkId: number
  }

  export type Allergies_drinksUpdateManyMutationInput = {

  }

  export type Allergies_drinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergieId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateInput = {
    name: string
    Drinks?: DrinksCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    Drinks?: DrinksUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Drinks?: DrinksUpdateManyWithoutCategoryInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Drinks?: DrinksUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateInput = {
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UsersCreateNestedOneWithoutCommentsInput
    drink: DrinksCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    userId: number
    drinkId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutCommentsInput
    drink?: DrinksUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyInput = {
    id?: number
    userId: number
    drinkId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DrinksCreateInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUpdateInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type DrinksCreateManyInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
  }

  export type DrinksUpdateManyMutationInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
  }

  export type DrinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateInput = {
    imageUrl: string
    drink: DrinksCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    drinkId: number
    imageUrl: string
  }

  export type ImagesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    drink?: DrinksUpdateOneRequiredWithoutImagesInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyInput = {
    id?: number
    drinkId: number
    imageUrl: string
  }

  export type ImagesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LikesCreateInput = {
    user: UsersCreateNestedOneWithoutLikesInput
    drink: DrinksCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: number
    userId: number
    drinkId: number
  }

  export type LikesUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutLikesInput
    drink?: DrinksUpdateOneRequiredWithoutLikesInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type LikesCreateManyInput = {
    id?: number
    userId: number
    drinkId: number
  }

  export type LikesUpdateManyMutationInput = {

  }

  export type LikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionCreateInput = {
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
    drink: DrinksCreateNestedOneWithoutNutritionInput
  }

  export type NutritionUncheckedCreateInput = {
    id?: number
    drinkId: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
  }

  export type NutritionUpdateInput = {
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
    drink?: DrinksUpdateOneRequiredWithoutNutritionInput
  }

  export type NutritionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionCreateManyInput = {
    id?: number
    drinkId: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
  }

  export type NutritionUpdateManyMutationInput = {
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type UsersCreateInput = {
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUserInput
    Likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    Likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUserInput
    Likes?: LikesUpdateManyWithoutUserInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUserInput
    Likes?: LikesUncheckedUpdateManyWithoutUserInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type Allergies_drinksListRelationFilter = {
    every?: Allergies_drinksWhereInput
    some?: Allergies_drinksWhereInput
    none?: Allergies_drinksWhereInput
  }

  export type Allergies_drinksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AllergiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AllergiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type AllergiesRelationFilter = {
    is?: AllergiesWhereInput
    isNot?: AllergiesWhereInput
  }

  export type DrinksRelationFilter = {
    is?: DrinksWhereInput
    isNot?: DrinksWhereInput
  }

  export type Allergies_drinksCountOrderByAggregateInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
  }

  export type Allergies_drinksAvgOrderByAggregateInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
  }

  export type Allergies_drinksMaxOrderByAggregateInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
  }

  export type Allergies_drinksMinOrderByAggregateInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
  }

  export type Allergies_drinksSumOrderByAggregateInput = {
    id?: SortOrder
    allergieId?: SortOrder
    drinkId?: SortOrder
  }

  export type DrinksListRelationFilter = {
    every?: DrinksWhereInput
    some?: DrinksWhereInput
    none?: DrinksWhereInput
  }

  export type DrinksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type CategoriesRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type NutritionListRelationFilter = {
    every?: NutritionWhereInput
    some?: NutritionWhereInput
    none?: NutritionWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrinksCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    koreanName?: SortOrder
    englishName?: SortOrder
    description?: SortOrder
    isNew?: SortOrder
  }

  export type DrinksAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    isNew?: SortOrder
  }

  export type DrinksMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    koreanName?: SortOrder
    englishName?: SortOrder
    description?: SortOrder
    isNew?: SortOrder
  }

  export type DrinksMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    koreanName?: SortOrder
    englishName?: SortOrder
    description?: SortOrder
    isNew?: SortOrder
  }

  export type DrinksSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    isNew?: SortOrder
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    imageUrl?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type LikesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type LikesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NutritionCountOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type NutritionAvgOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type NutritionMaxOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type NutritionMinOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type NutritionSumOrderByAggregateInput = {
    id?: SortOrder
    drinkId?: SortOrder
    calorie?: SortOrder
    natrium?: SortOrder
    fat?: SortOrder
    sugar?: SortOrder
    protein?: SortOrder
    caffeine?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    policyAgreed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    policyAgreed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    policyAgreed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type Allergies_drinksCreateNestedManyWithoutAllergieInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutAllergieInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutAllergieInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutAllergieInput>
    createMany?: Allergies_drinksCreateManyAllergieInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
  }

  export type Allergies_drinksUncheckedCreateNestedManyWithoutAllergieInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutAllergieInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutAllergieInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutAllergieInput>
    createMany?: Allergies_drinksCreateManyAllergieInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Allergies_drinksUpdateManyWithoutAllergieInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutAllergieInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutAllergieInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutAllergieInput>
    upsert?: Enumerable<Allergies_drinksUpsertWithWhereUniqueWithoutAllergieInput>
    createMany?: Allergies_drinksCreateManyAllergieInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
    set?: Enumerable<Allergies_drinksWhereUniqueInput>
    disconnect?: Enumerable<Allergies_drinksWhereUniqueInput>
    delete?: Enumerable<Allergies_drinksWhereUniqueInput>
    update?: Enumerable<Allergies_drinksUpdateWithWhereUniqueWithoutAllergieInput>
    updateMany?: Enumerable<Allergies_drinksUpdateManyWithWhereWithoutAllergieInput>
    deleteMany?: Enumerable<Allergies_drinksScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Allergies_drinksUncheckedUpdateManyWithoutAllergieInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutAllergieInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutAllergieInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutAllergieInput>
    upsert?: Enumerable<Allergies_drinksUpsertWithWhereUniqueWithoutAllergieInput>
    createMany?: Allergies_drinksCreateManyAllergieInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
    set?: Enumerable<Allergies_drinksWhereUniqueInput>
    disconnect?: Enumerable<Allergies_drinksWhereUniqueInput>
    delete?: Enumerable<Allergies_drinksWhereUniqueInput>
    update?: Enumerable<Allergies_drinksUpdateWithWhereUniqueWithoutAllergieInput>
    updateMany?: Enumerable<Allergies_drinksUpdateManyWithWhereWithoutAllergieInput>
    deleteMany?: Enumerable<Allergies_drinksScalarWhereInput>
  }

  export type AllergiesCreateNestedOneWithoutAllergies_drinkInput = {
    create?: XOR<AllergiesCreateWithoutAllergies_drinkInput, AllergiesUncheckedCreateWithoutAllergies_drinkInput>
    connectOrCreate?: AllergiesCreateOrConnectWithoutAllergies_drinkInput
    connect?: AllergiesWhereUniqueInput
  }

  export type DrinksCreateNestedOneWithoutAllergies_drinksInput = {
    create?: XOR<DrinksCreateWithoutAllergies_drinksInput, DrinksUncheckedCreateWithoutAllergies_drinksInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutAllergies_drinksInput
    connect?: DrinksWhereUniqueInput
  }

  export type AllergiesUpdateOneRequiredWithoutAllergies_drinkInput = {
    create?: XOR<AllergiesCreateWithoutAllergies_drinkInput, AllergiesUncheckedCreateWithoutAllergies_drinkInput>
    connectOrCreate?: AllergiesCreateOrConnectWithoutAllergies_drinkInput
    upsert?: AllergiesUpsertWithoutAllergies_drinkInput
    connect?: AllergiesWhereUniqueInput
    update?: XOR<AllergiesUpdateWithoutAllergies_drinkInput, AllergiesUncheckedUpdateWithoutAllergies_drinkInput>
  }

  export type DrinksUpdateOneRequiredWithoutAllergies_drinksInput = {
    create?: XOR<DrinksCreateWithoutAllergies_drinksInput, DrinksUncheckedCreateWithoutAllergies_drinksInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutAllergies_drinksInput
    upsert?: DrinksUpsertWithoutAllergies_drinksInput
    connect?: DrinksWhereUniqueInput
    update?: XOR<DrinksUpdateWithoutAllergies_drinksInput, DrinksUncheckedUpdateWithoutAllergies_drinksInput>
  }

  export type DrinksCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<DrinksCreateWithoutCategoryInput>, Enumerable<DrinksUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<DrinksCreateOrConnectWithoutCategoryInput>
    createMany?: DrinksCreateManyCategoryInputEnvelope
    connect?: Enumerable<DrinksWhereUniqueInput>
  }

  export type DrinksUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<DrinksCreateWithoutCategoryInput>, Enumerable<DrinksUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<DrinksCreateOrConnectWithoutCategoryInput>
    createMany?: DrinksCreateManyCategoryInputEnvelope
    connect?: Enumerable<DrinksWhereUniqueInput>
  }

  export type DrinksUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<DrinksCreateWithoutCategoryInput>, Enumerable<DrinksUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<DrinksCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<DrinksUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: DrinksCreateManyCategoryInputEnvelope
    connect?: Enumerable<DrinksWhereUniqueInput>
    set?: Enumerable<DrinksWhereUniqueInput>
    disconnect?: Enumerable<DrinksWhereUniqueInput>
    delete?: Enumerable<DrinksWhereUniqueInput>
    update?: Enumerable<DrinksUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<DrinksUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<DrinksScalarWhereInput>
  }

  export type DrinksUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<DrinksCreateWithoutCategoryInput>, Enumerable<DrinksUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<DrinksCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<DrinksUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: DrinksCreateManyCategoryInputEnvelope
    connect?: Enumerable<DrinksWhereUniqueInput>
    set?: Enumerable<DrinksWhereUniqueInput>
    disconnect?: Enumerable<DrinksWhereUniqueInput>
    delete?: Enumerable<DrinksWhereUniqueInput>
    update?: Enumerable<DrinksUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<DrinksUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<DrinksScalarWhereInput>
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type DrinksCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DrinksCreateWithoutCommentsInput, DrinksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutCommentsInput
    connect?: DrinksWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type DrinksUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<DrinksCreateWithoutCommentsInput, DrinksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutCommentsInput
    upsert?: DrinksUpsertWithoutCommentsInput
    connect?: DrinksWhereUniqueInput
    update?: XOR<DrinksUpdateWithoutCommentsInput, DrinksUncheckedUpdateWithoutCommentsInput>
  }

  export type CategoriesCreateNestedOneWithoutDrinksInput = {
    create?: XOR<CategoriesCreateWithoutDrinksInput, CategoriesUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutDrinksInput
    connect?: CategoriesWhereUniqueInput
  }

  export type Allergies_drinksCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutDrinkInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutDrinkInput>
    createMany?: Allergies_drinksCreateManyDrinkInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
  }

  export type CommentsCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutDrinkInput>, Enumerable<CommentsUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutDrinkInput>
    createMany?: CommentsCreateManyDrinkInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type ImagesCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<ImagesCreateWithoutDrinkInput>, Enumerable<ImagesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<ImagesCreateOrConnectWithoutDrinkInput>
    createMany?: ImagesCreateManyDrinkInputEnvelope
    connect?: Enumerable<ImagesWhereUniqueInput>
  }

  export type LikesCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<LikesCreateWithoutDrinkInput>, Enumerable<LikesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutDrinkInput>
    createMany?: LikesCreateManyDrinkInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
  }

  export type NutritionCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<NutritionCreateWithoutDrinkInput>, Enumerable<NutritionUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<NutritionCreateOrConnectWithoutDrinkInput>
    createMany?: NutritionCreateManyDrinkInputEnvelope
    connect?: Enumerable<NutritionWhereUniqueInput>
  }

  export type Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutDrinkInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutDrinkInput>
    createMany?: Allergies_drinksCreateManyDrinkInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
  }

  export type CommentsUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutDrinkInput>, Enumerable<CommentsUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutDrinkInput>
    createMany?: CommentsCreateManyDrinkInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type ImagesUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<ImagesCreateWithoutDrinkInput>, Enumerable<ImagesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<ImagesCreateOrConnectWithoutDrinkInput>
    createMany?: ImagesCreateManyDrinkInputEnvelope
    connect?: Enumerable<ImagesWhereUniqueInput>
  }

  export type LikesUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<LikesCreateWithoutDrinkInput>, Enumerable<LikesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutDrinkInput>
    createMany?: LikesCreateManyDrinkInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
  }

  export type NutritionUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<Enumerable<NutritionCreateWithoutDrinkInput>, Enumerable<NutritionUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<NutritionCreateOrConnectWithoutDrinkInput>
    createMany?: NutritionCreateManyDrinkInputEnvelope
    connect?: Enumerable<NutritionWhereUniqueInput>
  }

  export type CategoriesUpdateOneRequiredWithoutDrinksInput = {
    create?: XOR<CategoriesCreateWithoutDrinksInput, CategoriesUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutDrinksInput
    upsert?: CategoriesUpsertWithoutDrinksInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<CategoriesUpdateWithoutDrinksInput, CategoriesUncheckedUpdateWithoutDrinksInput>
  }

  export type Allergies_drinksUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutDrinkInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<Allergies_drinksUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: Allergies_drinksCreateManyDrinkInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
    set?: Enumerable<Allergies_drinksWhereUniqueInput>
    disconnect?: Enumerable<Allergies_drinksWhereUniqueInput>
    delete?: Enumerable<Allergies_drinksWhereUniqueInput>
    update?: Enumerable<Allergies_drinksUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<Allergies_drinksUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<Allergies_drinksScalarWhereInput>
  }

  export type CommentsUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutDrinkInput>, Enumerable<CommentsUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: CommentsCreateManyDrinkInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type ImagesUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<ImagesCreateWithoutDrinkInput>, Enumerable<ImagesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<ImagesCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<ImagesUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: ImagesCreateManyDrinkInputEnvelope
    connect?: Enumerable<ImagesWhereUniqueInput>
    set?: Enumerable<ImagesWhereUniqueInput>
    disconnect?: Enumerable<ImagesWhereUniqueInput>
    delete?: Enumerable<ImagesWhereUniqueInput>
    update?: Enumerable<ImagesUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<ImagesUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<ImagesScalarWhereInput>
  }

  export type LikesUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<LikesCreateWithoutDrinkInput>, Enumerable<LikesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<LikesUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: LikesCreateManyDrinkInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
    set?: Enumerable<LikesWhereUniqueInput>
    disconnect?: Enumerable<LikesWhereUniqueInput>
    delete?: Enumerable<LikesWhereUniqueInput>
    update?: Enumerable<LikesUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<LikesUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<LikesScalarWhereInput>
  }

  export type NutritionUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<NutritionCreateWithoutDrinkInput>, Enumerable<NutritionUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<NutritionCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<NutritionUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: NutritionCreateManyDrinkInputEnvelope
    connect?: Enumerable<NutritionWhereUniqueInput>
    set?: Enumerable<NutritionWhereUniqueInput>
    disconnect?: Enumerable<NutritionWhereUniqueInput>
    delete?: Enumerable<NutritionWhereUniqueInput>
    update?: Enumerable<NutritionUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<NutritionUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<NutritionScalarWhereInput>
  }

  export type Allergies_drinksUncheckedUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<Allergies_drinksCreateWithoutDrinkInput>, Enumerable<Allergies_drinksUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<Allergies_drinksCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<Allergies_drinksUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: Allergies_drinksCreateManyDrinkInputEnvelope
    connect?: Enumerable<Allergies_drinksWhereUniqueInput>
    set?: Enumerable<Allergies_drinksWhereUniqueInput>
    disconnect?: Enumerable<Allergies_drinksWhereUniqueInput>
    delete?: Enumerable<Allergies_drinksWhereUniqueInput>
    update?: Enumerable<Allergies_drinksUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<Allergies_drinksUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<Allergies_drinksScalarWhereInput>
  }

  export type CommentsUncheckedUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutDrinkInput>, Enumerable<CommentsUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: CommentsCreateManyDrinkInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type ImagesUncheckedUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<ImagesCreateWithoutDrinkInput>, Enumerable<ImagesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<ImagesCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<ImagesUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: ImagesCreateManyDrinkInputEnvelope
    connect?: Enumerable<ImagesWhereUniqueInput>
    set?: Enumerable<ImagesWhereUniqueInput>
    disconnect?: Enumerable<ImagesWhereUniqueInput>
    delete?: Enumerable<ImagesWhereUniqueInput>
    update?: Enumerable<ImagesUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<ImagesUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<ImagesScalarWhereInput>
  }

  export type LikesUncheckedUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<LikesCreateWithoutDrinkInput>, Enumerable<LikesUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<LikesUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: LikesCreateManyDrinkInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
    set?: Enumerable<LikesWhereUniqueInput>
    disconnect?: Enumerable<LikesWhereUniqueInput>
    delete?: Enumerable<LikesWhereUniqueInput>
    update?: Enumerable<LikesUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<LikesUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<LikesScalarWhereInput>
  }

  export type NutritionUncheckedUpdateManyWithoutDrinkInput = {
    create?: XOR<Enumerable<NutritionCreateWithoutDrinkInput>, Enumerable<NutritionUncheckedCreateWithoutDrinkInput>>
    connectOrCreate?: Enumerable<NutritionCreateOrConnectWithoutDrinkInput>
    upsert?: Enumerable<NutritionUpsertWithWhereUniqueWithoutDrinkInput>
    createMany?: NutritionCreateManyDrinkInputEnvelope
    connect?: Enumerable<NutritionWhereUniqueInput>
    set?: Enumerable<NutritionWhereUniqueInput>
    disconnect?: Enumerable<NutritionWhereUniqueInput>
    delete?: Enumerable<NutritionWhereUniqueInput>
    update?: Enumerable<NutritionUpdateWithWhereUniqueWithoutDrinkInput>
    updateMany?: Enumerable<NutritionUpdateManyWithWhereWithoutDrinkInput>
    deleteMany?: Enumerable<NutritionScalarWhereInput>
  }

  export type DrinksCreateNestedOneWithoutImagesInput = {
    create?: XOR<DrinksCreateWithoutImagesInput, DrinksUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutImagesInput
    connect?: DrinksWhereUniqueInput
  }

  export type DrinksUpdateOneRequiredWithoutImagesInput = {
    create?: XOR<DrinksCreateWithoutImagesInput, DrinksUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutImagesInput
    upsert?: DrinksUpsertWithoutImagesInput
    connect?: DrinksWhereUniqueInput
    update?: XOR<DrinksUpdateWithoutImagesInput, DrinksUncheckedUpdateWithoutImagesInput>
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    connect?: UsersWhereUniqueInput
  }

  export type DrinksCreateNestedOneWithoutLikesInput = {
    create?: XOR<DrinksCreateWithoutLikesInput, DrinksUncheckedCreateWithoutLikesInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutLikesInput
    connect?: DrinksWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    upsert?: UsersUpsertWithoutLikesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type DrinksUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<DrinksCreateWithoutLikesInput, DrinksUncheckedCreateWithoutLikesInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutLikesInput
    upsert?: DrinksUpsertWithoutLikesInput
    connect?: DrinksWhereUniqueInput
    update?: XOR<DrinksUpdateWithoutLikesInput, DrinksUncheckedUpdateWithoutLikesInput>
  }

  export type DrinksCreateNestedOneWithoutNutritionInput = {
    create?: XOR<DrinksCreateWithoutNutritionInput, DrinksUncheckedCreateWithoutNutritionInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutNutritionInput
    connect?: DrinksWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DrinksUpdateOneRequiredWithoutNutritionInput = {
    create?: XOR<DrinksCreateWithoutNutritionInput, DrinksUncheckedCreateWithoutNutritionInput>
    connectOrCreate?: DrinksCreateOrConnectWithoutNutritionInput
    upsert?: DrinksUpsertWithoutNutritionInput
    connect?: DrinksWhereUniqueInput
    update?: XOR<DrinksUpdateWithoutNutritionInput, DrinksUncheckedUpdateWithoutNutritionInput>
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutUserInput>, Enumerable<CommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutUserInput>
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikesCreateWithoutUserInput>, Enumerable<LikesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutUserInput>
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutUserInput>, Enumerable<CommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutUserInput>
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikesCreateWithoutUserInput>, Enumerable<LikesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutUserInput>
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CommentsUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutUserInput>, Enumerable<CommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type LikesUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikesCreateWithoutUserInput>, Enumerable<LikesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
    set?: Enumerable<LikesWhereUniqueInput>
    disconnect?: Enumerable<LikesWhereUniqueInput>
    delete?: Enumerable<LikesWhereUniqueInput>
    update?: Enumerable<LikesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikesScalarWhereInput>
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutUserInput>, Enumerable<CommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikesCreateWithoutUserInput>, Enumerable<LikesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: Enumerable<LikesWhereUniqueInput>
    set?: Enumerable<LikesWhereUniqueInput>
    disconnect?: Enumerable<LikesWhereUniqueInput>
    delete?: Enumerable<LikesWhereUniqueInput>
    update?: Enumerable<LikesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikesScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type Allergies_drinksCreateWithoutAllergieInput = {
    drink: DrinksCreateNestedOneWithoutAllergies_drinksInput
  }

  export type Allergies_drinksUncheckedCreateWithoutAllergieInput = {
    id?: number
    drinkId: number
  }

  export type Allergies_drinksCreateOrConnectWithoutAllergieInput = {
    where: Allergies_drinksWhereUniqueInput
    create: XOR<Allergies_drinksCreateWithoutAllergieInput, Allergies_drinksUncheckedCreateWithoutAllergieInput>
  }

  export type Allergies_drinksCreateManyAllergieInputEnvelope = {
    data: Enumerable<Allergies_drinksCreateManyAllergieInput>
    skipDuplicates?: boolean
  }

  export type Allergies_drinksUpsertWithWhereUniqueWithoutAllergieInput = {
    where: Allergies_drinksWhereUniqueInput
    update: XOR<Allergies_drinksUpdateWithoutAllergieInput, Allergies_drinksUncheckedUpdateWithoutAllergieInput>
    create: XOR<Allergies_drinksCreateWithoutAllergieInput, Allergies_drinksUncheckedCreateWithoutAllergieInput>
  }

  export type Allergies_drinksUpdateWithWhereUniqueWithoutAllergieInput = {
    where: Allergies_drinksWhereUniqueInput
    data: XOR<Allergies_drinksUpdateWithoutAllergieInput, Allergies_drinksUncheckedUpdateWithoutAllergieInput>
  }

  export type Allergies_drinksUpdateManyWithWhereWithoutAllergieInput = {
    where: Allergies_drinksScalarWhereInput
    data: XOR<Allergies_drinksUpdateManyMutationInput, Allergies_drinksUncheckedUpdateManyWithoutAllergies_drinkInput>
  }

  export type Allergies_drinksScalarWhereInput = {
    AND?: Enumerable<Allergies_drinksScalarWhereInput>
    OR?: Enumerable<Allergies_drinksScalarWhereInput>
    NOT?: Enumerable<Allergies_drinksScalarWhereInput>
    id?: IntFilter | number
    allergieId?: IntFilter | number
    drinkId?: IntFilter | number
  }

  export type AllergiesCreateWithoutAllergies_drinkInput = {
    name: string
  }

  export type AllergiesUncheckedCreateWithoutAllergies_drinkInput = {
    id?: number
    name: string
  }

  export type AllergiesCreateOrConnectWithoutAllergies_drinkInput = {
    where: AllergiesWhereUniqueInput
    create: XOR<AllergiesCreateWithoutAllergies_drinkInput, AllergiesUncheckedCreateWithoutAllergies_drinkInput>
  }

  export type DrinksCreateWithoutAllergies_drinksInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutAllergies_drinksInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutAllergies_drinksInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutAllergies_drinksInput, DrinksUncheckedCreateWithoutAllergies_drinksInput>
  }

  export type AllergiesUpsertWithoutAllergies_drinkInput = {
    update: XOR<AllergiesUpdateWithoutAllergies_drinkInput, AllergiesUncheckedUpdateWithoutAllergies_drinkInput>
    create: XOR<AllergiesCreateWithoutAllergies_drinkInput, AllergiesUncheckedCreateWithoutAllergies_drinkInput>
  }

  export type AllergiesUpdateWithoutAllergies_drinkInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AllergiesUncheckedUpdateWithoutAllergies_drinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DrinksUpsertWithoutAllergies_drinksInput = {
    update: XOR<DrinksUpdateWithoutAllergies_drinksInput, DrinksUncheckedUpdateWithoutAllergies_drinksInput>
    create: XOR<DrinksCreateWithoutAllergies_drinksInput, DrinksUncheckedCreateWithoutAllergies_drinksInput>
  }

  export type DrinksUpdateWithoutAllergies_drinksInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutAllergies_drinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type DrinksCreateWithoutCategoryInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutCategoryInput = {
    id?: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutCategoryInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutCategoryInput, DrinksUncheckedCreateWithoutCategoryInput>
  }

  export type DrinksCreateManyCategoryInputEnvelope = {
    data: Enumerable<DrinksCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type DrinksUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DrinksWhereUniqueInput
    update: XOR<DrinksUpdateWithoutCategoryInput, DrinksUncheckedUpdateWithoutCategoryInput>
    create: XOR<DrinksCreateWithoutCategoryInput, DrinksUncheckedCreateWithoutCategoryInput>
  }

  export type DrinksUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DrinksWhereUniqueInput
    data: XOR<DrinksUpdateWithoutCategoryInput, DrinksUncheckedUpdateWithoutCategoryInput>
  }

  export type DrinksUpdateManyWithWhereWithoutCategoryInput = {
    where: DrinksScalarWhereInput
    data: XOR<DrinksUpdateManyMutationInput, DrinksUncheckedUpdateManyWithoutDrinksInput>
  }

  export type DrinksScalarWhereInput = {
    AND?: Enumerable<DrinksScalarWhereInput>
    OR?: Enumerable<DrinksScalarWhereInput>
    NOT?: Enumerable<DrinksScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    koreanName?: StringFilter | string
    englishName?: StringFilter | string
    description?: StringFilter | string
    isNew?: IntFilter | number
  }

  export type UsersCreateWithoutCommentsInput = {
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type DrinksCreateWithoutCommentsInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutCommentsInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutCommentsInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutCommentsInput, DrinksUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Likes?: LikesUpdateManyWithoutUserInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Likes?: LikesUncheckedUpdateManyWithoutUserInput
  }

  export type DrinksUpsertWithoutCommentsInput = {
    update: XOR<DrinksUpdateWithoutCommentsInput, DrinksUncheckedUpdateWithoutCommentsInput>
    create: XOR<DrinksCreateWithoutCommentsInput, DrinksUncheckedCreateWithoutCommentsInput>
  }

  export type DrinksUpdateWithoutCommentsInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type CategoriesCreateWithoutDrinksInput = {
    name: string
  }

  export type CategoriesUncheckedCreateWithoutDrinksInput = {
    id?: number
    name: string
  }

  export type CategoriesCreateOrConnectWithoutDrinksInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutDrinksInput, CategoriesUncheckedCreateWithoutDrinksInput>
  }

  export type Allergies_drinksCreateWithoutDrinkInput = {
    allergie: AllergiesCreateNestedOneWithoutAllergies_drinkInput
  }

  export type Allergies_drinksUncheckedCreateWithoutDrinkInput = {
    id?: number
    allergieId: number
  }

  export type Allergies_drinksCreateOrConnectWithoutDrinkInput = {
    where: Allergies_drinksWhereUniqueInput
    create: XOR<Allergies_drinksCreateWithoutDrinkInput, Allergies_drinksUncheckedCreateWithoutDrinkInput>
  }

  export type Allergies_drinksCreateManyDrinkInputEnvelope = {
    data: Enumerable<Allergies_drinksCreateManyDrinkInput>
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutDrinkInput = {
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutDrinkInput = {
    id?: number
    userId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutDrinkInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutDrinkInput, CommentsUncheckedCreateWithoutDrinkInput>
  }

  export type CommentsCreateManyDrinkInputEnvelope = {
    data: Enumerable<CommentsCreateManyDrinkInput>
    skipDuplicates?: boolean
  }

  export type ImagesCreateWithoutDrinkInput = {
    imageUrl: string
  }

  export type ImagesUncheckedCreateWithoutDrinkInput = {
    id?: number
    imageUrl: string
  }

  export type ImagesCreateOrConnectWithoutDrinkInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutDrinkInput, ImagesUncheckedCreateWithoutDrinkInput>
  }

  export type ImagesCreateManyDrinkInputEnvelope = {
    data: Enumerable<ImagesCreateManyDrinkInput>
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutDrinkInput = {
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutDrinkInput = {
    id?: number
    userId: number
  }

  export type LikesCreateOrConnectWithoutDrinkInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutDrinkInput, LikesUncheckedCreateWithoutDrinkInput>
  }

  export type LikesCreateManyDrinkInputEnvelope = {
    data: Enumerable<LikesCreateManyDrinkInput>
    skipDuplicates?: boolean
  }

  export type NutritionCreateWithoutDrinkInput = {
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
  }

  export type NutritionUncheckedCreateWithoutDrinkInput = {
    id?: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
  }

  export type NutritionCreateOrConnectWithoutDrinkInput = {
    where: NutritionWhereUniqueInput
    create: XOR<NutritionCreateWithoutDrinkInput, NutritionUncheckedCreateWithoutDrinkInput>
  }

  export type NutritionCreateManyDrinkInputEnvelope = {
    data: Enumerable<NutritionCreateManyDrinkInput>
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutDrinksInput = {
    update: XOR<CategoriesUpdateWithoutDrinksInput, CategoriesUncheckedUpdateWithoutDrinksInput>
    create: XOR<CategoriesCreateWithoutDrinksInput, CategoriesUncheckedCreateWithoutDrinksInput>
  }

  export type CategoriesUpdateWithoutDrinksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateWithoutDrinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Allergies_drinksUpsertWithWhereUniqueWithoutDrinkInput = {
    where: Allergies_drinksWhereUniqueInput
    update: XOR<Allergies_drinksUpdateWithoutDrinkInput, Allergies_drinksUncheckedUpdateWithoutDrinkInput>
    create: XOR<Allergies_drinksCreateWithoutDrinkInput, Allergies_drinksUncheckedCreateWithoutDrinkInput>
  }

  export type Allergies_drinksUpdateWithWhereUniqueWithoutDrinkInput = {
    where: Allergies_drinksWhereUniqueInput
    data: XOR<Allergies_drinksUpdateWithoutDrinkInput, Allergies_drinksUncheckedUpdateWithoutDrinkInput>
  }

  export type Allergies_drinksUpdateManyWithWhereWithoutDrinkInput = {
    where: Allergies_drinksScalarWhereInput
    data: XOR<Allergies_drinksUpdateManyMutationInput, Allergies_drinksUncheckedUpdateManyWithoutAllergies_drinksInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutDrinkInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutDrinkInput, CommentsUncheckedUpdateWithoutDrinkInput>
    create: XOR<CommentsCreateWithoutDrinkInput, CommentsUncheckedCreateWithoutDrinkInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutDrinkInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutDrinkInput, CommentsUncheckedUpdateWithoutDrinkInput>
  }

  export type CommentsUpdateManyWithWhereWithoutDrinkInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: Enumerable<CommentsScalarWhereInput>
    OR?: Enumerable<CommentsScalarWhereInput>
    NOT?: Enumerable<CommentsScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    drinkId?: IntFilter | number
    content?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ImagesUpsertWithWhereUniqueWithoutDrinkInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutDrinkInput, ImagesUncheckedUpdateWithoutDrinkInput>
    create: XOR<ImagesCreateWithoutDrinkInput, ImagesUncheckedCreateWithoutDrinkInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutDrinkInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutDrinkInput, ImagesUncheckedUpdateWithoutDrinkInput>
  }

  export type ImagesUpdateManyWithWhereWithoutDrinkInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: Enumerable<ImagesScalarWhereInput>
    OR?: Enumerable<ImagesScalarWhereInput>
    NOT?: Enumerable<ImagesScalarWhereInput>
    id?: IntFilter | number
    drinkId?: IntFilter | number
    imageUrl?: StringFilter | string
  }

  export type LikesUpsertWithWhereUniqueWithoutDrinkInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutDrinkInput, LikesUncheckedUpdateWithoutDrinkInput>
    create: XOR<LikesCreateWithoutDrinkInput, LikesUncheckedCreateWithoutDrinkInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutDrinkInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutDrinkInput, LikesUncheckedUpdateWithoutDrinkInput>
  }

  export type LikesUpdateManyWithWhereWithoutDrinkInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutLikesInput>
  }

  export type LikesScalarWhereInput = {
    AND?: Enumerable<LikesScalarWhereInput>
    OR?: Enumerable<LikesScalarWhereInput>
    NOT?: Enumerable<LikesScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    drinkId?: IntFilter | number
  }

  export type NutritionUpsertWithWhereUniqueWithoutDrinkInput = {
    where: NutritionWhereUniqueInput
    update: XOR<NutritionUpdateWithoutDrinkInput, NutritionUncheckedUpdateWithoutDrinkInput>
    create: XOR<NutritionCreateWithoutDrinkInput, NutritionUncheckedCreateWithoutDrinkInput>
  }

  export type NutritionUpdateWithWhereUniqueWithoutDrinkInput = {
    where: NutritionWhereUniqueInput
    data: XOR<NutritionUpdateWithoutDrinkInput, NutritionUncheckedUpdateWithoutDrinkInput>
  }

  export type NutritionUpdateManyWithWhereWithoutDrinkInput = {
    where: NutritionScalarWhereInput
    data: XOR<NutritionUpdateManyMutationInput, NutritionUncheckedUpdateManyWithoutNutritionInput>
  }

  export type NutritionScalarWhereInput = {
    AND?: Enumerable<NutritionScalarWhereInput>
    OR?: Enumerable<NutritionScalarWhereInput>
    NOT?: Enumerable<NutritionScalarWhereInput>
    id?: IntFilter | number
    drinkId?: IntFilter | number
    calorie?: FloatFilter | number
    natrium?: FloatFilter | number
    fat?: FloatFilter | number
    sugar?: FloatFilter | number
    protein?: FloatFilter | number
    caffeine?: FloatFilter | number
  }

  export type DrinksCreateWithoutImagesInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutImagesInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutImagesInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutImagesInput, DrinksUncheckedCreateWithoutImagesInput>
  }

  export type DrinksUpsertWithoutImagesInput = {
    update: XOR<DrinksUpdateWithoutImagesInput, DrinksUncheckedUpdateWithoutImagesInput>
    create: XOR<DrinksCreateWithoutImagesInput, DrinksUncheckedCreateWithoutImagesInput>
  }

  export type DrinksUpdateWithoutImagesInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type UsersCreateWithoutLikesInput = {
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    address?: string | null
    phoneNumber?: string | null
    policyAgreed?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type DrinksCreateWithoutLikesInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutLikesInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutLikesInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutLikesInput, DrinksUncheckedCreateWithoutLikesInput>
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUserInput
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    policyAgreed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUserInput
  }

  export type DrinksUpsertWithoutLikesInput = {
    update: XOR<DrinksUpdateWithoutLikesInput, DrinksUncheckedUpdateWithoutLikesInput>
    create: XOR<DrinksCreateWithoutLikesInput, DrinksUncheckedCreateWithoutLikesInput>
  }

  export type DrinksUpdateWithoutLikesInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type DrinksCreateWithoutNutritionInput = {
    koreanName: string
    englishName: string
    description: string
    isNew: number
    category: CategoriesCreateNestedOneWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksCreateNestedManyWithoutDrinkInput
    Comments?: CommentsCreateNestedManyWithoutDrinkInput
    Images?: ImagesCreateNestedManyWithoutDrinkInput
    Likes?: LikesCreateNestedManyWithoutDrinkInput
  }

  export type DrinksUncheckedCreateWithoutNutritionInput = {
    id?: number
    categoryId: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
    Allergies_drinks?: Allergies_drinksUncheckedCreateNestedManyWithoutDrinkInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutDrinkInput
    Images?: ImagesUncheckedCreateNestedManyWithoutDrinkInput
    Likes?: LikesUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinksCreateOrConnectWithoutNutritionInput = {
    where: DrinksWhereUniqueInput
    create: XOR<DrinksCreateWithoutNutritionInput, DrinksUncheckedCreateWithoutNutritionInput>
  }

  export type DrinksUpsertWithoutNutritionInput = {
    update: XOR<DrinksUpdateWithoutNutritionInput, DrinksUncheckedUpdateWithoutNutritionInput>
    create: XOR<DrinksCreateWithoutNutritionInput, DrinksUncheckedCreateWithoutNutritionInput>
  }

  export type DrinksUpdateWithoutNutritionInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutDrinksInput
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutNutritionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
  }

  export type CommentsCreateWithoutUserInput = {
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    drink: DrinksCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    drinkId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: Enumerable<CommentsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    drink: DrinksCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: number
    drinkId: number
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: Enumerable<LikesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutLikesInput>
  }

  export type Allergies_drinksCreateManyAllergieInput = {
    id?: number
    drinkId: number
  }

  export type Allergies_drinksUpdateWithoutAllergieInput = {
    drink?: DrinksUpdateOneRequiredWithoutAllergies_drinksInput
  }

  export type Allergies_drinksUncheckedUpdateWithoutAllergieInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type Allergies_drinksUncheckedUpdateManyWithoutAllergies_drinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }

  export type DrinksCreateManyCategoryInput = {
    id?: number
    koreanName: string
    englishName: string
    description: string
    isNew: number
  }

  export type DrinksUpdateWithoutCategoryInput = {
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUpdateManyWithoutDrinkInput
    Comments?: CommentsUpdateManyWithoutDrinkInput
    Images?: ImagesUpdateManyWithoutDrinkInput
    Likes?: LikesUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
    Allergies_drinks?: Allergies_drinksUncheckedUpdateManyWithoutDrinkInput
    Comments?: CommentsUncheckedUpdateManyWithoutDrinkInput
    Images?: ImagesUncheckedUpdateManyWithoutDrinkInput
    Likes?: LikesUncheckedUpdateManyWithoutDrinkInput
    Nutrition?: NutritionUncheckedUpdateManyWithoutDrinkInput
  }

  export type DrinksUncheckedUpdateManyWithoutDrinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    koreanName?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isNew?: IntFieldUpdateOperationsInput | number
  }

  export type Allergies_drinksCreateManyDrinkInput = {
    id?: number
    allergieId: number
  }

  export type CommentsCreateManyDrinkInput = {
    id?: number
    userId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ImagesCreateManyDrinkInput = {
    id?: number
    imageUrl: string
  }

  export type LikesCreateManyDrinkInput = {
    id?: number
    userId: number
  }

  export type NutritionCreateManyDrinkInput = {
    id?: number
    calorie: number
    natrium: number
    fat: number
    sugar: number
    protein: number
    caffeine: number
  }

  export type Allergies_drinksUpdateWithoutDrinkInput = {
    allergie?: AllergiesUpdateOneRequiredWithoutAllergies_drinkInput
  }

  export type Allergies_drinksUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergieId?: IntFieldUpdateOperationsInput | number
  }

  export type Allergies_drinksUncheckedUpdateManyWithoutAllergies_drinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergieId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUpdateWithoutDrinkInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentsUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImagesUpdateWithoutDrinkInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LikesUpdateWithoutDrinkInput = {
    user?: UsersUpdateOneRequiredWithoutLikesInput
  }

  export type LikesUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NutritionUpdateWithoutDrinkInput = {
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type NutritionUncheckedUpdateManyWithoutNutritionInput = {
    id?: IntFieldUpdateOperationsInput | number
    calorie?: FloatFieldUpdateOperationsInput | number
    natrium?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    caffeine?: FloatFieldUpdateOperationsInput | number
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    drinkId: number
    content: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type LikesCreateManyUserInput = {
    id?: number
    drinkId: number
  }

  export type CommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drink?: DrinksUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUpdateWithoutUserInput = {
    drink?: DrinksUpdateOneRequiredWithoutLikesInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    drinkId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}