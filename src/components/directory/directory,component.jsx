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
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'Sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'Womans',
                imageUrl: 'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'Mens',
                imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 5,
                linkUrl: ''
            }
        ]
        }
    }

    render() {
        return(
            <div className= 'directory-menu'>
                { 
                    this.state.sections.map(({id, ...otherSectionsProps}) => ( 
                    <MenuItem key={id} {...otherSectionsProps}/>)) 
                }
            </div>
        )
    }
}

export default Directory;