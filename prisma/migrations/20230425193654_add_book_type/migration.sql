/*
  Warnings:

  - Added the required column `book_type` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookType" AS ENUM ('Audio', 'Kindle', 'Pdf', 'Physical');

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "book_type" "BookType" NOT NULL;
