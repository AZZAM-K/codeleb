/*
  Warnings:

  - You are about to drop the column `language` on the `StudyPlan` table. All the data in the column will be lost.
  - Added the required column `title` to the `StudyPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."StudyPlan" DROP COLUMN "language",
ADD COLUMN     "title" TEXT NOT NULL;
