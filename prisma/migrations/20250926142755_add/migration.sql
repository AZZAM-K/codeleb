/*
  Warnings:

  - The values [Easy,Medium,Hard] on the enum `Difficulty` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `expected` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `isHidden` on the `TestCase` table. All the data in the column will be lost.
  - Added the required column `output` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `input` on the `TestCase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Difficulty_new" AS ENUM ('EASY', 'MEDIUM', 'HARD');
ALTER TABLE "public"."Challenge" ALTER COLUMN "difficulty" TYPE "public"."Difficulty_new" USING ("difficulty"::text::"public"."Difficulty_new");
ALTER TYPE "public"."Difficulty" RENAME TO "Difficulty_old";
ALTER TYPE "public"."Difficulty_new" RENAME TO "Difficulty";
DROP TYPE "public"."Difficulty_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."TestCase" DROP COLUMN "expected",
DROP COLUMN "isHidden",
ADD COLUMN     "output" JSONB NOT NULL,
DROP COLUMN "input",
ADD COLUMN     "input" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "public"."ChallengeExample" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,

    CONSTRAINT "ChallengeExample_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ChallengeExample" ADD CONSTRAINT "ChallengeExample_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "public"."Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
