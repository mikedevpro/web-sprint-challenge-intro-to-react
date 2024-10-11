import React, { useState } from 'react'

function Character(props) { 
  
  const { planets } = props;
  const { people } = props;
  // ❗ Add the props

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // function homeworldElement() {
  //   const [isRendering, setIsRendering] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }, []);

  //   return (
  //     <div>
  //       {isLoading ? (
  //         <p>Loading homeworld...</p>
  //       ) : (
  //         <HomeworldData />
  //       )}
  //     </div>
  //   );
  // }
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  // function toggleHomeworld () {
  //   const homeworldElement = document.getElementById('homeworld');

  //   if (homeworldElement.style.display === 'none') {
  //     homeworldElement.style.display = 'block';
  //   } else {
  //     homeworldElement.style.display = 'none';
  //   }
  // }
    
      
    //{/* Use the same markup with the same attributes as in the mock */}
    //  return (
    //    <div className="character-card">
    //    <h3>className="character-name"</h3>
    //    <p>className="character-planet"</p>
    //    </div>
    //  )
  
}

export default Character
