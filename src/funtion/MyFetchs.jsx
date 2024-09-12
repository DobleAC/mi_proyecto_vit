function MyFetchAPIs() {
    function fcnXMLHttpRequest() {
        console.log("¡Execute GET API by XMLHttpRequest!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true );
        request.send(null);
       
        return new Promise(function(resolve, reject){
       
            request.onreadystatechange = function( state ){
           
                if (request.readyState === 4) {
                   
                    var resp = request.response;
                   
                    var respObj = JSON.parse(resp);
                   
                    resolve(respObj.data);
                };       
          };
        });
    };
    function fcnFetchRequest() {
        console.log("¡Execute GET API by Fetch!");
        //FIC: Función Fetch 
        fetch('https://reqres.in/api/users')
            //.then(resp => {
            //console.log("Response Fetch:",resp);
            //FIC: Para mandar todo en formato JSON.
            // resp.json().then(respjson=> {
            //    console.log("Response Fetch:", respjson)
        .then(resp => resp.json())
        .then(respObj => {
                //console.log(respObj);
                //console.log(respObj.page);
                //console.log(respObj.per_page);
                console.log("Response Fetch:",respObj.data);
        });
        //});
    };
  //*** Principal Code ***//
  //FIC: Call local function for execute GET API
  //with XMLHttpRequesnt Class
  fcnXMLHttpRequest()
  .then (response=> {
        console.log('Response XMLHttp:', response);
  });
  //FIC: Call local function for execute GET API
  //with Fetch Class
  fcnFetchRequest();
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchAPIs;
