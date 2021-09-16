/*
  Warnings:

  - You are about to drop the column `dirnks_id` on the `allergies_drinks` table. All the data in the column will be lost.
  - You are about to drop the column `drink_id` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `dirnk_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the `Nutrition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drinks_id` to the `allergies_drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinks_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinks_id` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Nutrition` DROP FOREIGN KEY `Nutrition_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `allergies_drinks` DROP FOREIGN KEY `allergies_drinks_dirnks_id_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_drink_id_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `likes_dirnk_id_fkey`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `likes_user_id_fkey`;

-- AlterTable
ALTER TABLE `allergies_drinks` DROP COLUMN `dirnks_id`,
    ADD COLUMN `drinks_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `drink_id`,
    ADD COLUMN `drinks_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `likes` DROP COLUMN `dirnk_id`,
    ADD COLUMN `drinks_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Nutrition`;

-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drinks_id` INTEGER NOT NULL,
    `calories` DOUBLE NOT NULL,
    `natrium` DOUBLE NOT NULL,
    `fat` DOUBLE NOT NULL,
    `sugars` DOUBLE NOT NULL,
    `protein` DOUBLE NOT NULL,
    `caffeine` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191),
    `address` VARCHAR(191),
    `phone_number` VARCHAR(191),
    `policy_agreed` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `allergies_drinks` ADD CONSTRAINT `allergies_drinks_drinks_id_fkey` FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_drinks_id_fkey` FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_drinks_id_fkey` FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutrition` ADD CONSTRAINT `nutrition_drinks_id_fkey` FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
