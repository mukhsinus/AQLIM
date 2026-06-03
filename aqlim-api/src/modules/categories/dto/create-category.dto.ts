import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Fiction' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 'Fictional literature and novels' })
  @IsOptional()
  @IsString()
  description?: string;
}
