import { v4 as uuidv4 } from 'uuid';

export default function GetUniqueId(): string {
  return uuidv4();
}
