import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1763813079460 implements MigrationInterface {
  name = 'InitialMigration1763813079460';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cities\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a0ae8d83b7d32359578c486e7f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`seats\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`seatNumber\` int NOT NULL, \`seatType\` varchar(255) NOT NULL, \`audiId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`movies\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`tickets\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`showId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`showSeats\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`showSeatStatus\` varchar(255) NOT NULL, \`showId\` varchar(36) NOT NULL, \`seatId\` varchar(36) NOT NULL, \`ticketId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`shows\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`showStartTime\` timestamp NOT NULL, \`showEndTime\` timestamp NOT NULL, \`date\` date NOT NULL, \`movieId\` varchar(36) NULL, \`audiId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`audies\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`capacity\` int NOT NULL, \`theatreId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`theatres\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`cityId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`seats\` ADD CONSTRAINT \`FK_1791c42cf807ab22b069e4f84e5\` FOREIGN KEY (\`audiId\`) REFERENCES \`audies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`tickets\` ADD CONSTRAINT \`FK_4bb45e096f521845765f657f5c8\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`tickets\` ADD CONSTRAINT \`FK_030f38a8e63ab576cd9a44be9a0\` FOREIGN KEY (\`showId\`) REFERENCES \`shows\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` ADD CONSTRAINT \`FK_28ae57c167831c1a82a09336c13\` FOREIGN KEY (\`showId\`) REFERENCES \`shows\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` ADD CONSTRAINT \`FK_52d31be9ef46fa4090b4e120a23\` FOREIGN KEY (\`seatId\`) REFERENCES \`seats\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` ADD CONSTRAINT \`FK_06cc66267c99e6df1bfe6a97675\` FOREIGN KEY (\`ticketId\`) REFERENCES \`tickets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shows\` ADD CONSTRAINT \`FK_c3b308f49df8783e504f63dc3f0\` FOREIGN KEY (\`movieId\`) REFERENCES \`movies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shows\` ADD CONSTRAINT \`FK_45338f08c355c91d2ef4a3856d7\` FOREIGN KEY (\`audiId\`) REFERENCES \`audies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`audies\` ADD CONSTRAINT \`FK_72cb01c533268fdecefc9c02efe\` FOREIGN KEY (\`theatreId\`) REFERENCES \`theatres\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`theatres\` ADD CONSTRAINT \`FK_67e1916bb7e8c9778a934f5e82a\` FOREIGN KEY (\`cityId\`) REFERENCES \`cities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`theatres\` DROP FOREIGN KEY \`FK_67e1916bb7e8c9778a934f5e82a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`audies\` DROP FOREIGN KEY \`FK_72cb01c533268fdecefc9c02efe\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`shows\` DROP FOREIGN KEY \`FK_45338f08c355c91d2ef4a3856d7\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`shows\` DROP FOREIGN KEY \`FK_c3b308f49df8783e504f63dc3f0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` DROP FOREIGN KEY \`FK_06cc66267c99e6df1bfe6a97675\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` DROP FOREIGN KEY \`FK_52d31be9ef46fa4090b4e120a23\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`showSeats\` DROP FOREIGN KEY \`FK_28ae57c167831c1a82a09336c13\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`tickets\` DROP FOREIGN KEY \`FK_030f38a8e63ab576cd9a44be9a0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`tickets\` DROP FOREIGN KEY \`FK_4bb45e096f521845765f657f5c8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`seats\` DROP FOREIGN KEY \`FK_1791c42cf807ab22b069e4f84e5\``,
    );
    await queryRunner.query(`DROP TABLE \`theatres\``);
    await queryRunner.query(`DROP TABLE \`audies\``);
    await queryRunner.query(`DROP TABLE \`shows\``);
    await queryRunner.query(`DROP TABLE \`showSeats\``);
    await queryRunner.query(`DROP TABLE \`tickets\``);
    await queryRunner.query(`DROP TABLE \`movies\``);
    await queryRunner.query(`DROP TABLE \`seats\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_a0ae8d83b7d32359578c486e7f\` ON \`cities\``,
    );
    await queryRunner.query(`DROP TABLE \`cities\``);
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
