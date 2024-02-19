function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(array, position, start, end) {
    if (start >= end) return start;

    var l = start;
    var r = end - 1;
    var pivot = array[position];

    while (l <= r) {
        if (array[l] < pivot) {
            l++;
        }
        else if (array[r] > pivot) {
            r--;
        }
        else if (l <= r) {
            swap(array, l, r);
            l++;
            r--;
        }
    }
    return l;
}

function quicksort(array) {
    var stack = [];
    stack.push(0); 
    stack.push(array.length); 

    while (stack.length > 0) {
        var end = stack.pop();
        var start = stack.pop();

        if (end - start < 2) {
            continue;
        }

        var piv = partition(array, start, start, end);
        stack.push(piv);
        stack.push(end);
        stack.push(start);
        stack.push(piv);
    }

    return array;
}
