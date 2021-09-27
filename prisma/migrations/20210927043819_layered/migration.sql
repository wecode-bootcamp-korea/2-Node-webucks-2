/*
  Warnings:

  - You are about to drop the column `product_id` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products_allergies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drink_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `products_allergies` DROP FOREIGN KEY `products_allergies_allergy_id_fkey`;

-- DropForeignKey
ALTER TABLE `products_allergies` DROP FOREIGN KEY `products_allergies_product_id_fkey`;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `product_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `product_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `products`;

-- DropTable
DROP TABLE `products_allergies`;

-- CreateTable
CREATE TABLE `drinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NOT NULL,
    `korean_name` VARCHAR(191) NOT NULL,
    `english_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drinks_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drink_id` INTEGER NOT NULL,
    `allergy_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drinks` ADD CONSTRAINT `drinks_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drinks_allergies` ADD CONSTRAINT `drinks_allergies_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drinks_allergies` ADD CONSTRAINT `drinks_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
