/*
  Warnings:

  - You are about to drop the column `order` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `prompt` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `description` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xp` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Made the column `starterCode` on table `Challenge` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('Easy', 'Medium', 'Hard');

-- AlterTable
ALTER TABLE "public"."Challenge" DROP COLUMN "order",
DROP COLUMN "prompt",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "difficulty" "public"."Difficulty" NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "xp" INTEGER NOT NULL,
ALTER COLUMN "starterCode" SET NOT NULL;
