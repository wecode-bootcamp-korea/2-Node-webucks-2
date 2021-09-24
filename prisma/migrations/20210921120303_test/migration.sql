/*
  Warnings:

  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Allergy` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kcal` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natrium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categories_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product_allergies` DROP FOREIGN KEY `product_allergies_allergy_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_category_id_fkey`;

-- AlterTable
ALTER TABLE `nutritions` ADD COLUMN `caffeine` DOUBLE NOT NULL,
    ADD COLUMN `fat` DOUBLE NOT NULL,
    ADD COLUMN `kcal` DOUBLE NOT NULL,
    ADD COLUMN `natrium` DOUBLE NOT NULL,
    ADD COLUMN `protein` DOUBLE NOT NULL,
    ADD COLUMN `sugar` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `category_id`,
    ADD COLUMN `categories_id` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Allergy`;

-- CreateTable
CREATE TABLE `allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_allergies` ADD CONSTRAINT `product_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
