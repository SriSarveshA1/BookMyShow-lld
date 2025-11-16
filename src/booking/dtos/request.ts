import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAudiRequestDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;
}

export class CreateCityRequestDto {
  @IsString()
  name: string;
}
