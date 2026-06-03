import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'F. Scott Fitzgerald' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 'American novelist and short-story writer' })
  @IsOptional()
  @IsString()
  bio?: string;
}
