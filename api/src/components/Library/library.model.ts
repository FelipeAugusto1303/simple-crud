import { Column, Table, Model, DataType } from "sequelize-typescript";

@Table
export default class Library extends Model<Library> {
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING
    })
    description: string;

    @Column({
        type: DataType.STRING
    })
    author: string;

    @Column({
        type: DataType.INTEGER
    })
    pageQnt: number;

}