/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SkillService } from "../skill.service";
import { SkillCreateInput } from "./SkillCreateInput";
import { SkillWhereInput } from "./SkillWhereInput";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";
import { SkillFindManyArgs } from "./SkillFindManyArgs";
import { SkillUpdateInput } from "./SkillUpdateInput";
import { Skill } from "./Skill";

export class SkillControllerBase {
  constructor(protected readonly service: SkillService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Skill })
  async create(@common.Body() data: SkillCreateInput): Promise<Skill> {
    return await this.service.create({
      data: data,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Skill] })
  @ApiNestedQuery(SkillFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Skill[]> {
    const args = plainToClass(SkillFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SkillWhereUniqueInput
  ): Promise<Skill | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SkillWhereUniqueInput,
    @common.Body() data: SkillUpdateInput
  ): Promise<Skill | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          description: true,
          id: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Skill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SkillWhereUniqueInput
  ): Promise<Skill | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          description: true,
          id: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}