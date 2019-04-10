import { Product } from './Product';
import { PurchaseRequest } from './PurchaseRequest';

export class PurchaseRequestLineItem {
    id: number;
    purchaseRequest: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor(id: number, purchaseRequest: PurchaseRequest, product: Product, quantity: number) {
             this.id = id;
             this.purchaseRequest = purchaseRequest;
             this.product = product;
             this.quantity = quantity;
         }
}