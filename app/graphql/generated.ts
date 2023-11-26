import type { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

type GraphQLClientRequestHeaders = Headers | string[][] | Record<string, string>

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "poc1_posts" */
  delete_poc1_posts?: Maybe<Poc1_Posts_Mutation_Response>;
  /** delete single row from the table: "poc1_posts" */
  delete_poc1_posts_by_pk?: Maybe<Poc1_Posts>;
  /** delete data from the table: "poc1_users" */
  delete_poc1_users?: Maybe<Poc1_Users_Mutation_Response>;
  /** delete single row from the table: "poc1_users" */
  delete_poc1_users_by_pk?: Maybe<Poc1_Users>;
  /** insert data into the table: "poc1_posts" */
  insert_poc1_posts?: Maybe<Poc1_Posts_Mutation_Response>;
  /** insert a single row into the table: "poc1_posts" */
  insert_poc1_posts_one?: Maybe<Poc1_Posts>;
  /** insert data into the table: "poc1_users" */
  insert_poc1_users?: Maybe<Poc1_Users_Mutation_Response>;
  /** insert a single row into the table: "poc1_users" */
  insert_poc1_users_one?: Maybe<Poc1_Users>;
  /** update data of the table: "poc1_posts" */
  update_poc1_posts?: Maybe<Poc1_Posts_Mutation_Response>;
  /** update single row of the table: "poc1_posts" */
  update_poc1_posts_by_pk?: Maybe<Poc1_Posts>;
  /** update multiples rows of table: "poc1_posts" */
  update_poc1_posts_many?: Maybe<Array<Maybe<Poc1_Posts_Mutation_Response>>>;
  /** update data of the table: "poc1_users" */
  update_poc1_users?: Maybe<Poc1_Users_Mutation_Response>;
  /** update single row of the table: "poc1_users" */
  update_poc1_users_by_pk?: Maybe<Poc1_Users>;
  /** update multiples rows of table: "poc1_users" */
  update_poc1_users_many?: Maybe<Array<Maybe<Poc1_Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Poc1_PostsArgs = {
  where: Poc1_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poc1_Posts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Poc1_UsersArgs = {
  where: Poc1_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poc1_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Poc1_PostsArgs = {
  objects: Array<Poc1_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Poc1_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poc1_Posts_OneArgs = {
  object: Poc1_Posts_Insert_Input;
  on_conflict?: InputMaybe<Poc1_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poc1_UsersArgs = {
  objects: Array<Poc1_Users_Insert_Input>;
  on_conflict?: InputMaybe<Poc1_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poc1_Users_OneArgs = {
  object: Poc1_Users_Insert_Input;
  on_conflict?: InputMaybe<Poc1_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_PostsArgs = {
  _inc?: InputMaybe<Poc1_Posts_Inc_Input>;
  _set?: InputMaybe<Poc1_Posts_Set_Input>;
  where: Poc1_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_Posts_By_PkArgs = {
  _inc?: InputMaybe<Poc1_Posts_Inc_Input>;
  _set?: InputMaybe<Poc1_Posts_Set_Input>;
  pk_columns: Poc1_Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_Posts_ManyArgs = {
  updates: Array<Poc1_Posts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_UsersArgs = {
  _set?: InputMaybe<Poc1_Users_Set_Input>;
  where: Poc1_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_Users_By_PkArgs = {
  _set?: InputMaybe<Poc1_Users_Set_Input>;
  pk_columns: Poc1_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poc1_Users_ManyArgs = {
  updates: Array<Poc1_Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "poc1_posts" */
export type Poc1_Posts = {
  __typename?: 'poc1_posts';
  body: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  is_public: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "poc1_posts" */
export type Poc1_Posts_Aggregate = {
  __typename?: 'poc1_posts_aggregate';
  aggregate?: Maybe<Poc1_Posts_Aggregate_Fields>;
  nodes: Array<Poc1_Posts>;
};

/** aggregate fields of "poc1_posts" */
export type Poc1_Posts_Aggregate_Fields = {
  __typename?: 'poc1_posts_aggregate_fields';
  avg?: Maybe<Poc1_Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Poc1_Posts_Max_Fields>;
  min?: Maybe<Poc1_Posts_Min_Fields>;
  stddev?: Maybe<Poc1_Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Poc1_Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poc1_Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Poc1_Posts_Sum_Fields>;
  var_pop?: Maybe<Poc1_Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Poc1_Posts_Var_Samp_Fields>;
  variance?: Maybe<Poc1_Posts_Variance_Fields>;
};


/** aggregate fields of "poc1_posts" */
export type Poc1_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poc1_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Poc1_Posts_Avg_Fields = {
  __typename?: 'poc1_posts_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "poc1_posts". All fields are combined with a logical 'AND'. */
export type Poc1_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Poc1_Posts_Bool_Exp>>;
  _not?: InputMaybe<Poc1_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Poc1_Posts_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "poc1_posts" */
export enum Poc1_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  Poc1PostsPkey = 'poc1_posts_pkey'
}

/** input type for incrementing numeric columns in table "poc1_posts" */
export type Poc1_Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "poc1_posts" */
export type Poc1_Posts_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Poc1_Posts_Max_Fields = {
  __typename?: 'poc1_posts_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Poc1_Posts_Min_Fields = {
  __typename?: 'poc1_posts_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "poc1_posts" */
export type Poc1_Posts_Mutation_Response = {
  __typename?: 'poc1_posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Poc1_Posts>;
};

/** on_conflict condition type for table "poc1_posts" */
export type Poc1_Posts_On_Conflict = {
  constraint: Poc1_Posts_Constraint;
  update_columns?: Array<Poc1_Posts_Update_Column>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "poc1_posts". */
export type Poc1_Posts_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poc1_posts */
export type Poc1_Posts_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "poc1_posts" */
export enum Poc1_Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "poc1_posts" */
export type Poc1_Posts_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Poc1_Posts_Stddev_Fields = {
  __typename?: 'poc1_posts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Poc1_Posts_Stddev_Pop_Fields = {
  __typename?: 'poc1_posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Poc1_Posts_Stddev_Samp_Fields = {
  __typename?: 'poc1_posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "poc1_posts" */
export type Poc1_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poc1_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poc1_Posts_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Poc1_Posts_Sum_Fields = {
  __typename?: 'poc1_posts_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "poc1_posts" */
export enum Poc1_Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Poc1_Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poc1_Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poc1_Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poc1_Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poc1_Posts_Var_Pop_Fields = {
  __typename?: 'poc1_posts_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Poc1_Posts_Var_Samp_Fields = {
  __typename?: 'poc1_posts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Poc1_Posts_Variance_Fields = {
  __typename?: 'poc1_posts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "poc1_users" */
export type Poc1_Users = {
  __typename?: 'poc1_users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
};

/** aggregated selection of "poc1_users" */
export type Poc1_Users_Aggregate = {
  __typename?: 'poc1_users_aggregate';
  aggregate?: Maybe<Poc1_Users_Aggregate_Fields>;
  nodes: Array<Poc1_Users>;
};

/** aggregate fields of "poc1_users" */
export type Poc1_Users_Aggregate_Fields = {
  __typename?: 'poc1_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Poc1_Users_Max_Fields>;
  min?: Maybe<Poc1_Users_Min_Fields>;
};


/** aggregate fields of "poc1_users" */
export type Poc1_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poc1_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "poc1_users". All fields are combined with a logical 'AND'. */
export type Poc1_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Poc1_Users_Bool_Exp>>;
  _not?: InputMaybe<Poc1_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Poc1_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "poc1_users" */
export enum Poc1_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  Poc1UsersPkey = 'poc1_users_pkey'
}

/** input type for inserting data into table "poc1_users" */
export type Poc1_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Poc1_Users_Max_Fields = {
  __typename?: 'poc1_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Poc1_Users_Min_Fields = {
  __typename?: 'poc1_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "poc1_users" */
export type Poc1_Users_Mutation_Response = {
  __typename?: 'poc1_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Poc1_Users>;
};

/** on_conflict condition type for table "poc1_users" */
export type Poc1_Users_On_Conflict = {
  constraint: Poc1_Users_Constraint;
  update_columns?: Array<Poc1_Users_Update_Column>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "poc1_users". */
export type Poc1_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poc1_users */
export type Poc1_Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "poc1_users" */
export enum Poc1_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "poc1_users" */
export type Poc1_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "poc1_users" */
export type Poc1_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poc1_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poc1_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "poc1_users" */
export enum Poc1_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type Poc1_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poc1_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poc1_Users_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "poc1_posts" */
  poc1_posts: Array<Poc1_Posts>;
  /** fetch aggregated fields from the table: "poc1_posts" */
  poc1_posts_aggregate: Poc1_Posts_Aggregate;
  /** fetch data from the table: "poc1_posts" using primary key columns */
  poc1_posts_by_pk?: Maybe<Poc1_Posts>;
  /** fetch data from the table: "poc1_users" */
  poc1_users: Array<Poc1_Users>;
  /** fetch aggregated fields from the table: "poc1_users" */
  poc1_users_aggregate: Poc1_Users_Aggregate;
  /** fetch data from the table: "poc1_users" using primary key columns */
  poc1_users_by_pk?: Maybe<Poc1_Users>;
};


export type Query_RootPoc1_PostsArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Posts_Order_By>>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};


export type Query_RootPoc1_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Posts_Order_By>>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};


export type Query_RootPoc1_Posts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPoc1_UsersArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Users_Order_By>>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};


export type Query_RootPoc1_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Users_Order_By>>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};


export type Query_RootPoc1_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "poc1_posts" */
  poc1_posts: Array<Poc1_Posts>;
  /** fetch aggregated fields from the table: "poc1_posts" */
  poc1_posts_aggregate: Poc1_Posts_Aggregate;
  /** fetch data from the table: "poc1_posts" using primary key columns */
  poc1_posts_by_pk?: Maybe<Poc1_Posts>;
  /** fetch data from the table in a streaming manner: "poc1_posts" */
  poc1_posts_stream: Array<Poc1_Posts>;
  /** fetch data from the table: "poc1_users" */
  poc1_users: Array<Poc1_Users>;
  /** fetch aggregated fields from the table: "poc1_users" */
  poc1_users_aggregate: Poc1_Users_Aggregate;
  /** fetch data from the table: "poc1_users" using primary key columns */
  poc1_users_by_pk?: Maybe<Poc1_Users>;
  /** fetch data from the table in a streaming manner: "poc1_users" */
  poc1_users_stream: Array<Poc1_Users>;
};


export type Subscription_RootPoc1_PostsArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Posts_Order_By>>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};


export type Subscription_RootPoc1_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Posts_Order_By>>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};


export type Subscription_RootPoc1_Posts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPoc1_Posts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Poc1_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Poc1_Posts_Bool_Exp>;
};


export type Subscription_RootPoc1_UsersArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Users_Order_By>>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};


export type Subscription_RootPoc1_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poc1_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poc1_Users_Order_By>>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};


export type Subscription_RootPoc1_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPoc1_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Poc1_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Poc1_Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'query_root', poc1_posts: Array<{ __typename?: 'poc1_posts', title: string, body: string, status: string, id: number, is_public: boolean, created_at: any }> };

export type Posts_By_IdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Posts_By_IdQuery = { __typename?: 'query_root', poc1_posts_by_pk?: { __typename?: 'poc1_posts', body: string, created_at: any, title: string, status: string, id: number } | null };


export const PostsDocument = gql`
    query posts {
  poc1_posts {
    title
    body
    status
    id
    is_public
    created_at
  }
}
    `;
export const Posts_By_IdDocument = gql`
    query posts_by_id($id: Int!) {
  poc1_posts_by_pk(id: $id) {
    body
    created_at
    title
    status
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    posts(variables?: PostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posts', 'query');
    },
    posts_by_id(variables: Posts_By_IdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Posts_By_IdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Posts_By_IdQuery>(Posts_By_IdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'posts_by_id', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;