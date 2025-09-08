/*
  Warnings:

  - You are about to drop the column `explanation` on the `Section` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Section" DROP COLUMN "explanation";

-- CreateTable
CREATE TABLE "public"."SubSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,

    CONSTRAINT "SubSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SubSection" ADD CONSTRAINT "SubSection_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
