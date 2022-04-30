import { Person } from "./person";
import { Support } from "./support";

export interface Regres {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Person[],
  support: Support
}
