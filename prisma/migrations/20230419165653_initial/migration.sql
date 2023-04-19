-- CreateEnum
CREATE TYPE "history_type" AS ENUM ('books', 'highlights');

-- CreateEnum
CREATE TYPE "reading_status" AS ENUM ('Unread', 'Next', 'Reading', 'Read');

-- CreateTable
CREATE TABLE "authors" (
    "first_name" TEXT NOT NULL,
    "id" UUID NOT NULL,
    "last_name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "audio_length" TEXT NOT NULL,
    "author_id" UUID NOT NULL,
    "book_number" INTEGER,
    "cover_url" TEXT NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL,
    "genre_id" UUID NOT NULL,
    "id" UUID NOT NULL,
    "rating" INTEGER NOT NULL,
    "reading_status" "reading_status" NOT NULL,
    "series_id" UUID NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book_tags" (
    "book_id" UUID NOT NULL,
    "tag_id" UUID NOT NULL,

    CONSTRAINT "book_tags_pkey" PRIMARY KEY ("book_id","tag_id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_goals" (
    "id" UUID NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "reading_goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_histories" (
    "book_id" UUID NOT NULL,
    "date_completed" TIMESTAMP(3) NOT NULL,
    "id" UUID NOT NULL,

    CONSTRAINT "reading_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readwise_books" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "number_of_highlights" INTEGER NOT NULL,
    "last_highlighted_at" TIMESTAMP(3) NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL,
    "cover_url" TEXT NOT NULL,
    "highlights_url" TEXT NOT NULL,
    "asin" TEXT,

    CONSTRAINT "readwise_books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readwise_histories" (
    "id" UUID NOT NULL,
    "historyType" "history_type" NOT NULL,
    "last_run" TIMESTAMP(3),

    CONSTRAINT "readwise_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readwise_history_details" (
    "id" UUID NOT NULL,
    "readwise_history_id" UUID NOT NULL,
    "num_books_added" INTEGER,
    "num_books_updated" INTEGER,
    "num_highlights_added" INTEGER,
    "import_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "readwise_history_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "number_of_books" INTEGER NOT NULL,
    "author_id" UUID NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tags" ADD CONSTRAINT "book_tags_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_tags" ADD CONSTRAINT "book_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_histories" ADD CONSTRAINT "reading_histories_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readwise_history_details" ADD CONSTRAINT "readwise_history_details_readwise_history_id_fkey" FOREIGN KEY ("readwise_history_id") REFERENCES "readwise_histories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
