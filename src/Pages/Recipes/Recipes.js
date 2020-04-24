import React from 'react';
import CornCasserole from '../../Assets/Recipes/corn-casserole.jpg';
import { Page } from '../../Components/Common/Page';
import RecipeTile from '../../Components/Recipes/RecipeTile/RecipeTile';
import './styles.scss';

function Recipes() {

  return (
    <Page>
      <div className='recipes__wrap'>
        <RecipeTile
          title='Corn Casserole'
          description='A Thanksgiving favorite'
          imgSrc={CornCasserole}
        />
      </div>
    </Page>
  );

}

export default Recipes;