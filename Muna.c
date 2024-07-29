// 
// #include <stdio.h>

// int main() {
//     char character;
//     printf("Enter a character: ");
//     scanf("%c", &character);
//     if(character >= '0' && character <= '9'){
//         printf("%c is a digit.", character);
//     }
//     else{
//         printf("%c is not a digit.", character);
//     }
//     return 0;
// }


// #include<stdio.h>
// int main(){
//     int a,b,c,d;
//     a=3,b=5,c=5,d=8;
//     float total = a+b+c+d;
//     printf("%f the average ",total/4.0);
//     return 0;
// }


#include<stdio.h>
int main(){
    int sum = 0;
    for(int i=5; i<=50; i++){
        sum += i;
    }
    printf("The sum of all numbers from 5 to 50 is: %d", sum);
    return 0;
}
