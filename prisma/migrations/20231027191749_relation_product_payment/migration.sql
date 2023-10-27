/*
  Warnings:

  - You are about to drop the column `productId` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_productId_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_PaymentToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PaymentToProduct_AB_unique" ON "_PaymentToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_PaymentToProduct_B_index" ON "_PaymentToProduct"("B");

-- AddForeignKey
ALTER TABLE "_PaymentToProduct" ADD CONSTRAINT "_PaymentToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Payment"("paymentId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PaymentToProduct" ADD CONSTRAINT "_PaymentToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;
