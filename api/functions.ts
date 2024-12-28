import { TReturnValue } from "../lib/types";

export async function fetchData<T>(url: string): Promise<TReturnValue<T>> {

  let response: Response;

  try {
    response = await fetch(url);
  } catch (error) {
    if (error instanceof TypeError) return { error: { message: "Type error", status: -1 } };
    if (error instanceof SyntaxError) return { error: { message: "Syntax Error, return was not valid JSON", status: -2} };
    throw error;
  }

  if (response.ok) {
    const data = await response.json();
    return { data: data };
  }
  if (response.status === 404) return { error: { message: "Error: 404 not found", status: 404 } };
  if (response.status === 500) return { error: { message: "Error: 500 internal server error", status: 500 } };
  if (response.status === 401) return { error: { message: "Error: 401 invalid or expired key", status: 401 } };
  throw new Error(response.status.toString());
}

