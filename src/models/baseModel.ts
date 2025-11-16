import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseModel {
  // we set the id column which will be the primary key for all the models
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date; // This column will automatically store the entity's creation date.

  @UpdateDateColumn()
  updatedAt: Date; // This column will automatically store the entity's last update date.
}
