import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddCategoriyIdToTransactions1604959654922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('transactions', new TableColumn({
        name: 'category_id',
        type: 'uuid',
        isNullable: false
      }));

      await queryRunner.createForeignKey('transactions', new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        name: 'transactions_category',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('transactions', 'transactions_category');
      await queryRunner.dropColumn('transactions', 'category_id')
    }

}
