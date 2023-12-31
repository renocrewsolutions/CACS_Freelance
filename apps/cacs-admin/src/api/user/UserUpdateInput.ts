import { AgreementUpdateManyWithoutUsersInput } from "./AgreementUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  agreements?: AgreementUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
