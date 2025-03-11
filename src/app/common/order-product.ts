export class OrderProduct {
    push(orderProduct: OrderProduct) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id:number | null,
        public productId:number,
        public quantity:number,
        public price:number

    ){}
}
