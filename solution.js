var q = [
  { name: 'banana',  price: 0.29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'coffee', price: 5 },
  { name: 'flower', price: 2 },
  { name: 'smokes', price: 7 },
  { name: 'donut', price: 2 },
  { name: 'bike', price: 300 },
  { name: 'shirt', price: 30 },
  { name: 'light bulbs', price: 7},
  { name: 'flour', price: 3 },
  { name: 'shoes', price: 45 },
  { name: 'hat', price: 20 },
  { name: 'coat', price: 50 },
  { name: 'cat', price: 50 }
];

function calculateTotal(itemQueue){
var length = itemQueue.length;
var total = 0;
var counter = 0;
do {
	
	var discount = 0;
	console.log("counter" +counter);
	var item = q.shift();
	counter ++;
	if ((counter % 3 === 0) && (counter % 5 === 0)){
		discount = item.price * 0.3;
	} else if (counter % 3 === 0) {
		discount = item.price * 0.1;
	} else if (counter % 5 === 0){
		discount = item.price * 0.2;
	} else {
		discount = 0;
	}
	var discountPrice = item.price - discount;
	total += discountPrice;
	console.log("ITEM: " + item.name +" ORIGINAL PRICE: " + item.price + " DISCOUNT PRICE: " + discountPrice);
} while (counter < length);

console.log("TOTAL: " + total);
}