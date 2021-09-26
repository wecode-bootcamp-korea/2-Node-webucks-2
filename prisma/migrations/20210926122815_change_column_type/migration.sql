/*
  Warnings:

  - You are about to alter the column `english_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `english_name` VARCHAR(191) NOT NULL;
