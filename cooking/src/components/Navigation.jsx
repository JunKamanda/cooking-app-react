import React from 'react';

const Navigation = () => {
    return (
        <div className='navigation'>
            <form>
                <input type="text" id='nom' placeholder="Tapez le nom d'un aliment (en anglais)"/>
            </form>
        </div>
    );
};

export default Navigation;