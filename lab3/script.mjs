import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.mjs';

// Initial test data
let data = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
];

console.log('Initial Data:');
console.log(get_items(data));

console.log('\nAdding New Item (ID: 4):');
const newItem = { id: 4, title: 'Book 4' };
console.log(add_item(newItem));
console.log(get_items());

console.log('\nAdding Existing Item (ID: 2):');
const duplicateItem = { id: 2, title: 'Book 2 Duplicate' };
console.log(add_item(duplicateItem));
console.log(get_items());

console.log('\nUpdating Title of Item with ID 2:');
console.log(update_item_title_by_id(2, 'Updated Book 2'));
console.log(get_items());

console.log('\nUpdating Title of Non-Existent Item with ID 5:');
console.log(update_item_title_by_id(5, 'Non-Existent Book'));

console.log('\nDeleting Item with ID 3:');
console.log(delete_item_by_id(3));
console.log(get_items());

console.log('\nDeleting Non-Existent Item with ID 5:');
console.log(delete_item_by_id(5));


console.log('\nGetting Title of Item with ID 2:');
console.log(get_item_title_by_id(2));

console.log('\nGetting Title of Non-Existent Item with ID 5:');
console.log(get_item_title_by_id(5));

console.log('Final Data:');
console.log(get_items(data));

