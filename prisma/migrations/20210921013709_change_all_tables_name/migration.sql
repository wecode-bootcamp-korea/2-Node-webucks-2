/*
  Warnings:

  - You are about to drop the column `englishName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `koreanName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Allergies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nutritions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `english_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Nutritions` DROP FOREIGN KEY `Nutritions_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_allergies` DROP FOREIGN KEY `product_allergies_allergy_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `englishName`,
    DROP COLUMN `koreanName`,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Allergies`;

-- DropTable
DROP TABLE `Nutritions`;

-- CreateTable
CREATE TABLE `Allergy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_allergies` ADD CONSTRAINT `product_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `Allergy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
