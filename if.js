function mySquare(input)
{
    number = input;
    var square;
    if(number< 0)
    {
        square = 0;
    }
    else if(number > 10000)
    {
        square=0;
    }
    else if (number == null){
        square = 0;
    }
    else{
        square = number * number;
    }
    return square;
}