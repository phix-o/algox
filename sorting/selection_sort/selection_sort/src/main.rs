
fn sort(list: &Vec<i32>, ascending: bool) -> Vec<i32> {
    let mut list = list.clone();
    let mut list_sorted = vec![];

    while list.len() != 0 {
        let lb = &mut list;
        let mut item_of_interest_index = 0;
        let mut item_of_interest = lb[item_of_interest_index];

        for (index, value) in lb.into_iter().enumerate() {
            if ascending && *value < item_of_interest {
                item_of_interest = *value;
                item_of_interest_index = index;
            } else if !ascending && *value > item_of_interest {
                item_of_interest = *value;
                item_of_interest_index = index;
            }
        }

        list_sorted.push(item_of_interest);
        lb.remove(item_of_interest_index);
    }

    list_sorted
}

fn main() {
    let list = vec![4, 2, 3, 45, 8, 1, 2, 0, -5, -12, 10, 45];
    let sorted_asc = sort(&list, true);
    let sorted_desc = sort(&list, false);

    println!("{:?}", sorted_asc);
    println!("{:?}", sorted_desc);
}
