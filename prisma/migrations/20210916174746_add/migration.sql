/*
  Warnings:

  - You are about to drop the column `ennglish_name` on the `products` table. All the data in the column will be lost.
  - Added the required column `english_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `ennglish_name`,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL;
