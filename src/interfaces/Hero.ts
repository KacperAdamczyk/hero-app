import { Type } from './Type';

export interface Hero {
  id: string;
  avatar_url: string;
  full_name: string;
  description: string;
  type: Type;
}
