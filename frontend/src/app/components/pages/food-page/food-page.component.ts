import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    // activatedRoute.params.subscribe((params) => {
    //   if (params.id)
    //     foodService.getFoodById(params.id).subscribe((serverFood) => {
    //       this.food = serverFood;
    //     });
    // });
    activatedRoute.params
      .pipe(
        switchMap((params) => {
          //console.log(params);
          if (params.id) {
            return foodService.getFoodById(params.id);
          }
          return of(null);
        })
      )
      .subscribe((serverFood) => {
        this.food = serverFood || new Food();
      });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
