
import React from 'react';
import Hornedbeasts from './Hornbeasts'
import beastArr from './hornedbeasts.json';


class Main extends React.Component {

    render() {

        return (
            <div>
                {beastArr.map(item => {


                    return (<Hornedbeasts title={item.title} image_url={item.image_url}
                        description={item.description} keyword={item.description} horns={item.horns}


                    />)

                })}
            </div>

        )
    }

}

export default Main;