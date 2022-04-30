import { Component, OnInit } from '@angular/core';

import { fetchExchangeRate } from '../services/exchange-rates-API';
import {exchangeRates} from '../services/exchange-rates-API';
 

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    
    
    ngOnInit() {
        fetchExchangeRate();
    }

    getExchangeRates() {
        const exchangeRatesList = exchangeRates.reduce((acc, { ccy, base_ccy, buy, sale }) => {
            if (base_ccy === 'UAH') {
                const buyPrice = buy.slice(0, 5);
                const salePrice = sale.slice(0, 5);
                acc.push({ ccy, buyPrice, salePrice });
            }
            return acc
        }, []);
        return exchangeRatesList
    }
 
}


    