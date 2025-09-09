/*
  Warnings:

  - You are about to drop the column `solution` on the `Challenge` table. All the data in the column will be lost.
  - Added the required column `description` to the `StudyPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `StudyPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Challenge" DROP COLUMN "solution";

-- AlterTable
ALTER TABLE "public"."StudyPlan" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "img" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."TestCase" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "expected" TEXT NOT NULL,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "challengeId" TEXT NOT NULL,

    CONSTRAINT "TestCase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TestCase" ADD CONSTRAINT "TestCase_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "public"."Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
