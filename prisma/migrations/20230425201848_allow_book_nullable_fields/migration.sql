-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_series_id_fkey";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "audio_length" DROP NOT NULL,
ALTER COLUMN "cover_url" DROP NOT NULL,
ALTER COLUMN "series_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
