window.onload = () => {
            fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk",{
                method: "GET", 

                headers: {'X-RapidAPI-Host' : 'community-open-weather-map.p.rapidapi.com', 
'X-RapidAPI-Key' : '53489752c7msh9de81d046117cacp12b1e0jsnfb9ed7c0f048'}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('ikz7u').textContent = data.sys.type;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('irppr').textContent = data.sys.type;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };