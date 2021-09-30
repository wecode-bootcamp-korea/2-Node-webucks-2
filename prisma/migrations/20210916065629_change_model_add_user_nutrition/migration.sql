/*
  Warnings:

  - You are about to drop the column `drinks_id` on the `images` table. All the data in the column will be lost.
  - You are about to drop the `arllgies_drinks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `drinks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutrients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_id` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `arllgies_drinks` DROP FOREIGN KEY `arllgies_drinks_allergies_id_fkey`;

-- DropForeignKey
ALTER TABLE `arllgies_drinks` DROP FOREIGN KEY `arllgies_drinks_drink_id_fkey`;

-- DropForeignKey
ALTER TABLE `drinks` DROP FOREIGN KEY `drinks_categories_id_fkey`;

-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `nutrients` DROP FOREIGN KEY `nutrients_drink_id_fkey`;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `drinks_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `arllgies_drinks`;

-- DropTable
DROP TABLE `drinks`;

-- DropTable
DROP TABLE `nutrients`;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `korean_name` VARCHAR(191) NOT NULL,
    `english_name` BOOLEAN NOT NULL,
    `categories_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `allergies_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191),
    `address` VARCHAR(191),
    `phone_number` INTEGER,
    `policy_agreed` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_allergies` ADD CONSTRAINT `product_allergies_allergies_id_fkey` FOREIGN KEY (`allergies_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_allergies` ADD CONSTRAINT `product_allergies_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
