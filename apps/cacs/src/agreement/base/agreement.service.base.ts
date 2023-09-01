/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Agreement, User } from "@prisma/client";

export class AgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AgreementCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementCountArgs>
  ): Promise<number> {
    return this.prisma.agreement.count(args);
  }

  async findMany<T extends Prisma.AgreementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementFindManyArgs>
  ): Promise<Agreement[]> {
    return this.prisma.agreement.findMany(args);
  }
  async findOne<T extends Prisma.AgreementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementFindUniqueArgs>
  ): Promise<Agreement | null> {
    return this.prisma.agreement.findUnique(args);
  }
  async create<T extends Prisma.AgreementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementCreateArgs>
  ): Promise<Agreement> {
    return this.prisma.agreement.create<T>(args);
  }
  async update<T extends Prisma.AgreementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementUpdateArgs>
  ): Promise<Agreement> {
    return this.prisma.agreement.update<T>(args);
  }
  async delete<T extends Prisma.AgreementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgreementDeleteArgs>
  ): Promise<Agreement> {
    return this.prisma.agreement.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.agreement
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
