// This function gets the user input and then jQuery interacts with the API and append the results to the food log. 
function myJsFunction(){
    var text = document.getElementById('inputlg').value;
    var encodedFood = encodeURIComponent(text);

    $.get(`https://api.nutritionix.com/v1_1/search/${encodedFood}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=21bfe461&appKey=92a5336bd8610998f760c810bde65196`, function(response) {
        console.log(response)
        console.log(response.hits[0].fields.item_name)
        console.log(response.hits[0].fields.nf_calories)

        $ ('#log').append("Food Name:  " + response.hits[0].fields.item_name +" Food Calories  " +response.hits[0].fields.nf_calories );
    });
 }




