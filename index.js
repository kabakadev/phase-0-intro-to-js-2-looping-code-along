// Code your solutions in this file
function writeCards(arry_input, event_name) {
    const new_array = []
    for (let i = 0; i < arry_input.length; i++) {

        const new_message = `Thank you, ${arry_input[i]}, for the wonderful ${event_name} gift!`
        new_array.push(new_message);
    }
    return new_array;
}

function countDown(positive_int) {
    while (positive_int >= 0) {
        console.log(positive_int)
        positive_int--;
    }
}