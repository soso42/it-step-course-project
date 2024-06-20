import { Product } from "./product";

export interface ProductResponse {
  "total": number,
  "limit": number,
  "page": number,
  "skip": number,
  "products": Product[],
}
