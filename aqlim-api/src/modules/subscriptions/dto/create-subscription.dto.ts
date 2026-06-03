import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum PlanType {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
}

export class CreateSubscriptionDto {
  @ApiProperty({ example: 'Premium Plan' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 'Access to all books' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 9900 })
  @IsNumber()
  price!: number;

  @ApiProperty({ enum: PlanType, example: PlanType.PREMIUM })
  @IsEnum(PlanType)
  planType!: PlanType;

  @ApiProperty({ example: 30, description: 'Duration in days' })
  @IsNumber()
  durationDays!: number;
}
