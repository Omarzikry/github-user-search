import { UserResponse } from "../containers/GithubUser/GithubUser";

// types
type OkType<T> = { type: "Ok"; value: T };
type ErrType<T> = { type: "Err"; error: T };
type Result<Value, Error> = OkType<Value> | ErrType<Error>;

// responses
export const Err = <T>(error: T): ErrType<T> => ({ type: "Err", error });
export const Ok = <T>(value: T): OkType<T> => ({ type: "Ok", value });

// check types
export const isString = (v: any): v is string => typeof v === "string";
export const isNumber = (v: any): v is Number => typeof v === "number";

// validation functions
export const validateUser = (data: any): Result<UserResponse, string> => {
  const u: UserResponse = data;
  if (!u) return Err("Empty data");
  if (
    !isNumber(u.id) ||
    !isString(u.html_url) ||
    (!isString(u.name) && u.name !== null) ||
    !isString(u.avatar_url) ||
    (!isString(u.bio) && u.bio !== null)
  )
    return Err("Invalid data " + JSON.stringify(data));
  const value: UserResponse = {
    id: u.id,
    html_url: u.html_url,
    avatar_url: u.avatar_url,
    name: u.name,
    bio: u.bio,
  };
  return Ok(value);
};
