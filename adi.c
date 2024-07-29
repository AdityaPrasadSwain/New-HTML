#include <stdio.h>

int main() {
    float a, b, perimeter;

    // Taking input from the user
    printf("Enter the length of side a: ");
    scanf("%f", &a);
    printf("Enter the length of side b: ");
    scanf("%f", &b);

    // Calculating the perimeter of the rectangle
    perimeter = 2 * (a + b);

    // Displaying the result
    printf("The perimeter of the rectangle is: %.2f\n", perimeter);

    return 0;
}
