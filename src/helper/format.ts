import crypto from "crypto";

export const createPasswordHash = (string: string) => {
  const hash = crypto.createHash("sha256").update(string).digest("hex");
  return hash;
};
