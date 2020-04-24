import React from 'react';
import CornCasserole from '../../Assets/Recipes/corn-casserole.jpg';
import { Content } from '../../Components/Common/Content';
import { Page } from '../../Components/Common/Page';
import { Sidebar } from '../../Components/Common/Sidebar';
import RecipeTile from '../../Components/Recipes/RecipeTile/RecipeTile';
import './styles.scss';

function Recipes() {

  return (
    <Page>
      <Sidebar className='recipes__sidebar'>
      </Sidebar>
      <Content>
        <RecipeTile
          title='Corn Casserole'
          description='A Thanksgiving favorite'
          imgSrc={CornCasserole}
        />
      </Content>
    </Page>
  );

}

export default Recipes;