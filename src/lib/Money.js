export default class Money {
  constructor(money = 0) {
    let priceKOR = [];
    let price = money;
    if (price > 100000000) {
      let hundredBillion = parseInt(price / 100000000); // 억
      if (hundredBillion > 0) priceKOR.push(`${hundredBillion}억`);
      price = price % 100000000;
    }

    if (price > 10000) {
      let tenThousand = parseInt(price / 10000); // 만
      if (tenThousand > 0) priceKOR.push(`${tenThousand}만`);
      price = price % 10000;
    } else {
      priceKOR.push(`${price}`);
    }

    this.price = priceKOR.join(' ');
  }
}
