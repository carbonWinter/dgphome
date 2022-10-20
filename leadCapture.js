
async function submitToSalesJet(api_key, event_name, email, first_name, last_name, phone_number) {
    try {
      const response = await fetch("https://sj-api.com/externalapp/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: api_key
        },
        body: JSON.stringify({
          event_name: event_name, 
          contact: {
            email: email, 
            first_name: first_name, 
            last_name: last_name, 
            phone_number: phone_number 
          },
        }),
      });

      // YOU CAN GET HOLD OF THE RESPONSE OBJECT FROM SALES JET TO CHECK IF THE CONNECTION WAS SUCCESSFUL:
      console.log(response);
    }
    catch(error){
        console.error(error);
    }
}

$('#leadForm').submit(async function(event) {

    const inputs = $('#leadForm :input');
    console.log(inputs);

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    let values = {};
    inputs.each(function() {
        values[this.name] = $(this).val();
    });

    const splitName = values?.name.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];

    //"BgCOwE_tEe2pq_8debCIIg"
    await submitToSalesJet("BgCOwE_tEe2pq_8debCIIg", "dgp form submission", values?.email, firstName, lastName, values?.phone);
    window.location.assign("/thank-you.html");
  
    console.log(values);

    return false; // return false to cancel form action
});