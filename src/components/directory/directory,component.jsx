import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Hats',
                imageUrl: 'https://images.pexels.com/photos/792535/pexels-photo-792535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 1
            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                title: 'Sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id: 3
            },
            {
                title: 'Womans',
                imageUrl: 'https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 4
            },
            {
                title: 'Mens',
                imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 5
            }
        ]
        }
    }

    render() {
        return(
            <div className= 'directory-menu'>
                { 
                    this.state.sections.map(({title, imageUrl, id, size}) => ( 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)) 
                }
            </div>
        )
    }
}

export default Directory;