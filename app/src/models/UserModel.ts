import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  timestamps: true,
  tableName: 'user',
  underscored: true,
})
export class UserModel extends Model {

  @AutoIncrement
  @PrimaryKey
  @Column
  declare readonly id: number

  @Column
  readonly name: string


}
