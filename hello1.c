#include <stdio.h>

void insertionSort(int arr[], int n) {
    int key, j;
    for (int i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {6, 2, 1, 3, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    insertionSort(arr, n);
    
    // Output sorted array
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    
    return 0;
}
