import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  approved: boolean;

  @Expose()
  price: number;

  @Expose()
  make: string;

  @Expose()
  model: string;

  @Expose()
  year: number;

  @Expose()
  lng: number;

  @Expose()
  lat: number;

  @Expose()
  mileage: number;

  user: User;

  @Expose()
  @Transform(({ obj }) => obj.user.id)
  userId: number;
}
