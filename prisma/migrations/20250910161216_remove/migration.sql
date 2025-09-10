/*
  Warnings:

  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Option" DROP CONSTRAINT "Option_exerciseId_fkey";

-- AlterTable
ALTER TABLE "public"."Exercise" ADD COLUMN     "options" TEXT[];

-- DropTable
DROP TABLE "public"."Option";
