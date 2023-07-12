import { Injectable } from "@angular/core";
import { Product } from "../pages/products/interface/product.interface";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ShoppingCartService {
    products: Product[] = [];

    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);
    
    get cartAction$(): Observable<Product[]>{
        return this.cartSubject.asObservable();
    }

    get totalAction$(): Observable<number>{
        return this.totalSubject.asObservable();
    }

    get quantityAction$(): Observable<number>{
        return this.quantitySubject.asObservable();
    }

    updateCart(product: Product): void {
        this.addtoCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    resetCart(): void {
        this.cartSubject.next([]);
        this.totalSubject.next(0);
        this.quantitySubject.next(0);
        this.products = [];
    }

    // Suma de los precios totales de todo lo comprado
    private calcTotal(): void {
        const total = this.products.reduce((acc, product) => acc += (product.price * product.qty), 0);
        this.totalSubject.next(total);
    }

    // Cantidad de productos
    private quantityProducts(): void {
        const quantity = this.products.reduce((acc, product) =>acc += product.qty, 0);
        this.quantitySubject.next(quantity);
    }

    // Productos añadidos al carrito
    private addtoCart(product: Product): void {
        const isProductInCart = this.products.find(({id}) => id === product.id)
        if(isProductInCart){
            isProductInCart.qty += 1;
        }else{
            this.products.push({...product, qty: 1})
        }
        this.cartSubject.next(this.products);
    }

    

    
}