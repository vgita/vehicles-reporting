import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1950)
  @Max(2050)
  year: number;

  @IsNumber()
  @Min(-90)
  @Max(90)
  lng: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  lat: number;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
}
