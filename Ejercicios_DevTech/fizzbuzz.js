function FizzBuzz(num1, num2, palabra1, palabra2)
{
    for (let i =1; i <=100; i++)
    {
        if (i % num1 == 0 && i % num2 ==0)
        {
            console.log(palabra1 + palabra2);
        }
        else if (i % num1 == 0)
        {
            console.log(palabra1);
        }
        else if (i % num2 == 0)
        {
            console.log(palabra2);
        }
        else 
        {
            console.log(i)
        }
    }
}

FizzBuzz(3,6, 'Fizz', 'Buzz');