/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ReviewCreateNestedManyWithoutJobsInput } from "./ReviewCreateNestedManyWithoutJobsInput";
import { TransactionCreateNestedManyWithoutJobsInput } from "./TransactionCreateNestedManyWithoutJobsInput";

@InputType()
class JobCreateInput {
  @ApiProperty({
    required: false,
    type: () => BidCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => BidCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => BidCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  bids?: BidCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  budget!: number;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  client!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutJobsInput;
}

export { JobCreateInput as JobCreateInput };
