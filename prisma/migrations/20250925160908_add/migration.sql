/*
  Warnings:

  - Added the required column `functionName` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Challenge" ADD COLUMN     "functionName" TEXT NOT NULL;
