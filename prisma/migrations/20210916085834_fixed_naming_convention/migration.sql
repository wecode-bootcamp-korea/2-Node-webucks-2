/*
  Warnings:

  - You are about to drop the column `allergies_id` on the `allergies_drinks` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_id` on the `allergies_drinks` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_id` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `categories_id` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_id` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `images_url` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `drinks_id` on the `nutrition` table. All the data in the column will be lost.
  - Added the required column `allergie_id` to the `allergies_drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `allergies_drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drink_id` to the `nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `allergies_drinks` DROP FOREIGN KEY `allergies_drinks_allergies_id_fkey`;

-- DropForeignKey
ALTER TABLE `allergies_drinks` DROP FOREIGN KEY `allergies_drinks_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `drinks` DROP FOREIGN KEY `drinks_categories_id_fkey`;

-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `images_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `likes_drinks_id_fkey`;

-- DropForeignKey
ALTER TABLE `nutrition` DROP FOREIGN KEY `nutrition_drinks_id_fkey`;

-- AlterTable
ALTER TABLE `allergies_drinks` DROP COLUMN `allergies_id`,
    DROP COLUMN `drinks_id`,
    ADD COLUMN `allergie_id` INTEGER NOT NULL,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `drinks_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `drinks` DROP COLUMN `categories_id`,
    ADD COLUMN `category_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `images` DROP COLUMN `drinks_id`,
    DROP COLUMN `images_url`,
    ADD COLUMN `drink_id` INTEGER NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `likes` DROP COLUMN `drinks_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `nutrition` DROP COLUMN `drinks_id`,
    ADD COLUMN `drink_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `allergies_drinks` ADD CONSTRAINT `allergies_drinks_allergie_id_fkey` FOREIGN KEY (`allergie_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `allergies_drinks` ADD CONSTRAINT `allergies_drinks_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drinks` ADD CONSTRAINT `drinks_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutrition` ADD CONSTRAINT `nutrition_drink_id_fkey` FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
