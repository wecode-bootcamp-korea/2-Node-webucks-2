/*
  Warnings:

  - You are about to drop the column `categories_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categories_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categories_id`,
    ADD COLUMN `category_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
