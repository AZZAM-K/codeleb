-- CreateEnum
CREATE TYPE "public"."Rank" AS ENUM ('BEGINNER', 'JUNIOR', 'MID', 'SENIOR', 'EXPERT', 'MASTER', 'LEGEND');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "lastStudiedAt" TIMESTAMP(3),
ADD COLUMN     "rank" "public"."Rank" NOT NULL DEFAULT 'BEGINNER',
ADD COLUMN     "streak" INTEGER NOT NULL DEFAULT 0;
