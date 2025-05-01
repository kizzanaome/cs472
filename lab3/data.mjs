//Question 4
let data = [];

export function get_items() {
    return data;
}

export function add_item(new_item) {
    const exists = data.some(item => item.id == new_item.id)
    if (!exists) {
        data.push(new_item);
        return true
    } else {
        return false;
    }
}

export function update_item_title_by_id(id, new_title) {
    const itemIndex = data.findIndex(
        item => item.id == id
    )
    if (itemIndex == -1) {
        return false;
    }
    data[itemIndex].title = new_title;
    return true;
}

export function delete_item_by_id(id) {
    const itemIndex = data.findIndex(
        item => item.id ==id)

    if (itemIndex == -1) {
        return false;
    }
    data.splice(itemIndex, 1);
    return true;
}

export function get_item_title_by_id(id) {
    const item = data.find(item => item.id == id);
    return item ? item.title : null

}
