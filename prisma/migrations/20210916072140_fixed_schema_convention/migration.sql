/*
  Warnings:

  - You are about to alter the column `name` on the `allergies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `contents` on the `comments` table. All the data in the column will be lost.
  - You are about to alter the column `korean_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `english_name` on the `drinks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `calories` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the column `sugars` on the `nutrition` table. All the data in the column will be lost.
  - Added the required column `content` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calorie` to the `nutrition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `contents`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drinks` MODIFY `korean_name` VARCHAR(100) NOT NULL,
    MODIFY `english_name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `nutrition` DROP COLUMN `calories`,
    DROP COLUMN `sugars`,
    ADD COLUMN `calorie` DOUBLE NOT NULL,
    ADD COLUMN `sugar` DOUBLE NOT NULL;
