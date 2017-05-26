// This function gets the user input and then jQuery interacts with the API and append the results to the food log. 
function myInputFunction(){
    var text = document.getElementById('inputlg').value;
    var encodedFood = encodeURIComponent(text);
// Ajax call to API and then appends the returned info to the food log. 
    $.ajax({
        url: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        headers: {
            'x-app-id': "21bfe461",
            'x-app-key': "92a5336bd8610998f760c810bde65196",
            "Content-Type": "application/json"
        },
        "type": "POST",
        "dataType": 'json',
        'processData': false,
        data: JSON.stringify({"query": encodedFood}),
        success: function(response) {
            console.log(response)
            

            $ ('#log').append("Food Name:  " + response.foods[0].food_name +" Food Calories  " + response.foods[0].nf_calories );
        }

    });
 }




