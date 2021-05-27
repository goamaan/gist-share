/*
  Warnings:

  - The primary key for the `Gist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Gist` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `authorId` column on the `Gist` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Gist" DROP CONSTRAINT "Gist_authorId_fkey";

-- AlterTable
ALTER TABLE "Gist" DROP CONSTRAINT "Gist_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "authorId",
ADD COLUMN     "authorId" INTEGER,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Gist" ADD FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
