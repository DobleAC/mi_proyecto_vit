
function MyFetchAPIs() {
    function fcnXMLHttpRequest() {
        console.log("¡Ejecutando GET API!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/unknown', true );
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
        console.log("¡Ejecutando GET API!");
        fetch('https://reqres.in/api/unknown')
        .then(resp => resp.json())
        .then(respObj => {
                console.log("Response Fetch:",respObj.data);
        });
        
    };
  fcnXMLHttpRequest()
  .then (response=> {
        console.log('Response XMLHttp:', response);
  });
  fcnFetchRequest();
    return (
        <>
            <div>
                <h2>
                    FETCH APIs
                </h2>
            </div>
       
        </>
    );
};
export default MyFetchAPIs;



