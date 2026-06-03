import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCollectionDto {
  @ApiProperty({ example: 'Best of 2025' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 'Top rated books of 2025' })
  @IsOptional()
  @IsString()
  description?: string;
}
