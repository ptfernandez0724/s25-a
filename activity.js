// Activity - s25

// Solution 1: Use the count operator to count the total number of fruits on sale.

//db.fruits.aggregate([
// 						{$match: {onSale: true}},
// 						{$count: 'on_Sale'}
// ]);

// Solution 2: Use the count operator to count the total number of fruits with stock more than 20.

// db.fruits.aggregate([
//                     {$match: {stock: {$gt: 20}}},
//                     {$count: 'on_Stock'}
//                     ]);

// Solution 3: Use the average operator to get the average price of fruits onSale per supplier.

// db.fruits.aggregate([
//                     {
//                         $group:
//                             {
//                                 _id: '$supplier_id',
//                                 avgPrice: {$avg: '$price'}
//                             }
//                         }
//                     ]);

// Solution 4: Use the max operator to get the highest price of a fruit per supplier.

// db.fruits.aggregate([
//                     {
//                         $group:
//                             {
//                                 _id: '$supplier_id',
//                                 maxPrice: {$max: '$price'}
//                             }
//                         }
//                     ]);

// Solution 5: Use the min operator to get the lowest price of a fruit per supplier.

// db.fruits.aggregate([
//                     {
//                         $group:
//                             {
//                                 _id: '$supplier_id',
//                                 minPrice: {$min: '$price'}
//                             }
//                         }
//                     ]);