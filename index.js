
async function initialLoad() {

  }

  function breedSelectHandler() {
  }
  async function initialLoad() {
    try {
      
      const response = await fetch('live_HHVQWRxHJ2C1HDrMLIyTgvmw2eW4XyOV6KxAh10gzMm3JLRgoJopcfELSZZmnSXI');
      const breeds = await response.json();
      

    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  }
  
  function breedSelectHandler() {
    const selectedBreedId = document.getElementById('breedSelect').value;
  
    axios.get(`live_HHVQWRxHJ2C1HDrMLIyTgvmw2eW4XyOV6KxAh10gzMm3JLRgoJopcfELSZZmnSXI
`)
      .then(response => {
        const breedInfo = response.data;

      })
      .catch(error => {
        console.error('Error fetching breed information:', error);
      });
  }
  
  axios.interceptors.request.use((config) => {

    document.body.style.cursor = "progress";
    
    console.log("Request begins");
    
    document.getElementById("progressBar").style.width = "0%";
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use((response) => {
    document.body.style.cursor = "default";
  
    return response;
  }, (error) => {
    return Promise.reject(error);
  });

  function updateProgress(event) {
    console.log(event);

  }
  
  export function favourite(id) {

  }
  
  initialLoad();
  