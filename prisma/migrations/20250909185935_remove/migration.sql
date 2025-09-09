/*
  Warnings:

  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizCompletion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Option" DROP CONSTRAINT "Option_quizQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quiz" DROP CONSTRAINT "Quiz_studyPlanId_fkey";

-- DropForeignKey
ALTER TABLE "public"."QuizCompletion" DROP CONSTRAINT "QuizCompletion_quizId_fkey";

-- DropForeignKey
ALTER TABLE "public"."QuizCompletion" DROP CONSTRAINT "QuizCompletion_studyPlanId_fkey";

-- DropForeignKey
ALTER TABLE "public"."QuizCompletion" DROP CONSTRAINT "QuizCompletion_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."QuizQuestion" DROP CONSTRAINT "QuizQuestion_quizId_fkey";

-- DropTable
DROP TABLE "public"."Quiz";

-- DropTable
DROP TABLE "public"."QuizCompletion";

-- DropTable
DROP TABLE "public"."QuizQuestion";
