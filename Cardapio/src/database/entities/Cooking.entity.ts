import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Plate } from './Plate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cookings')
export class Cooking {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty({
    name: 'plate_id',
  })
  @Column()
  plateId: number;

  @OneToMany(
    () => Plate,
    plate => plate.plateType,
  )
  plates: Plate[];
}
