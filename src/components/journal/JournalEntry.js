import React from 'react'

export const JournalEntry = () => {
  
    return (
        <div className="journal__entry pointer"> {/* flex : elementos hojos uno abarca alado del otro  */}
            
            <div 
                className="journal__entry-picture"
                style={{ // en react style tiene que ser objeto donde especificamos todo ... que va tener este elemento 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                }} /* image la hemos puesto como background del div - asi podemos jugar con su posicion dentro del div padre etc  */
            ></div>


            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Reprehenderit id in duis consectetur deserunt veniam fugiat.
                </p>
            </div>


            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )

}
