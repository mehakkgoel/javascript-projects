const form = document.querySelector('form');
// const weight =parseInt(document.querySelector('#weight').value);
//if written outside empty value will be stored here as when site opened script runs immediately

form.addEventListener('submit', function (e){
    e.preventDefault(); //to stop the default action of get or post to server
    const height =parseInt(document.querySelector('#height').value); //value is in string so to convert to int
    const weight =parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const comment = document.querySelector('#comment');
    if (height === '' || height < 0 || isNaN(height))  { //isnan checks whether it is convertible in no or not 
        result.innerHTML = "please give a valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight))  { //isnan checks whether it is convertible in no or not 
        result.innerHTML = "please give a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);  //2 decimal value tak fix
        result.innerHTML =  bmi;

        if(bmi<=18.6){
    comment.innerHTML = " you are underweight";
        }
        else if(bmi<=24.9){
            comment.innerHTML = " you are healthy";
                }
                else{
                    comment.innerHTML = " you are overweight";
                        }
    }

})