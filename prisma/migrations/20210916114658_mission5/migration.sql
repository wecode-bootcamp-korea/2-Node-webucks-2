/*
  Warnings:

  - You are about to drop the column `name` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calories` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugars` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `name`,
    ADD COLUMN `caffeine` DOUBLE NOT NULL,
    ADD COLUMN `calories` DOUBLE NOT NULL,
    ADD COLUMN `fat` DOUBLE NOT NULL,
    ADD COLUMN `protein` DOUBLE NOT NULL,
    ADD COLUMN `sodium` DOUBLE NOT NULL,
    ADD COLUMN `sugars` DOUBLE NOT NULL,
    MODIFY `amount` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `description` VARCHAR(191) NOT NULL;
