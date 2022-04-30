import { Component } from '@angular/core';

import {exchangeRates} from '../services/exchange-rates-API';

@Component({
    selector: 'app-converter',
    templateUrl: './converter-form-component.html',
    styleUrls:['./converter-form-component.scss']
    
})
export class ConverterFormComponent { 

    saleAmount = 0;
    buyAmount = 0;
    saleCurrencyType = 'UAH';
    buyCurrencyType = 'UAH';

    
    getCurrencyType() {
        const currencyTypeList = exchangeRates.reduce((acc, { ccy, base_ccy }) => {
            if (base_ccy === 'UAH') {
                if (!acc.includes(ccy)) {
                    acc.push(ccy);
                }
            }
            return acc
        }, ['UAH']);
        return currencyTypeList
    }

    
    calculation(type: string) {
        const salePrice = exchangeRates.find(({ ccy }) => {  return ccy === this.buyCurrencyType })
        const buyPrice = exchangeRates.find(({ ccy }) => {  return ccy === this.saleCurrencyType })
        
        if (type === 'sale') {
            if (this.saleCurrencyType === this.buyCurrencyType) {
                return this.saleAmount
            } else {
                if (this.saleCurrencyType === 'UAH') {
                    return this.saleAmount / salePrice.sale
                } else {
                    if (this.buyCurrencyType === 'UAH') {
                        return this.saleAmount / buyPrice.buy
                    } else {
                        return this.saleAmount * buyPrice.buy / salePrice.sale
                    }
                }
            }
            
        } else {
            if (this.saleCurrencyType === this.buyCurrencyType) {
                return this.buyAmount
            } else {
                if (this.buyCurrencyType === 'UAH') {
                    return this.buyAmount / buyPrice.buy
                } else {
                    if (this.saleCurrencyType === 'UAH') {
                        return this.buyAmount * salePrice.sale                        
                    } else {
                        return this.buyAmount * salePrice.sale / buyPrice.buy
                    }
                }
            }
        }
    }
    
    selectHandler(event: any) {
        if (event.name === "saleCurrencyType") {
            this.saleCurrencyType = event.value
            this.saleAmount = +this.calculation('buy').toFixed(2)
        } else {
            this.buyCurrencyType = event.value
            this.buyAmount = +this.calculation('sale').toFixed(2)
        }
    }
    
    inputHandler(event: any) {
        if (event.target.name === "saleInput") {
            let amount = event.target.value
            this.saleAmount = +amount
            this.buyAmount = +this.calculation('sale').toFixed(2)
        } else {
            let amount = event.target.value
            this.buyAmount = +amount
            this.saleAmount = +this.calculation('buy').toFixed(2)
        }
    }
}