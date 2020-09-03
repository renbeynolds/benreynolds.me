import React from 'react';
import { Button } from '../../Components/Common/Button';
import Drawer from '../../Components/Common/Drawer/Drawer';
import { Page } from '../../Components/Common/Page';
import './styles.scss';

function Recipes() {

    return (
        <Page>
            <Drawer>
                <Button
                    text='New Recipe'
                    onClick={() => {console.log('New Recipe')}}
                />
            </Drawer>
        </Page>
    );

}

export default Recipes;