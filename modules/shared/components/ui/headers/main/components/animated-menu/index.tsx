import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Link } from '@md-ui/link';
import MenuItem from '@md-ui/headers/main/components/animated-menu/components/menu-item';
import SubItem from '@md-ui/headers/main/components/animated-menu/components/sub-item';
import SendArrow from '../../../../../../../../public/static/icons/send-arrow';
// constants
import {
  menuItemsAdmission,
  menuItemsIndividual,
  menuItemsPopular,
  menuItemsRelatedBusiness,
  menuItemsTransport
} from '@md-ui/headers/main/constants';
// theme
import { colors } from '@md-styles/styled/theme';

interface Props {
  isScroll: boolean;
}

const AnimatedMenu: React.FC<Props> = ({ isScroll }) => (
  <MenuItem isScroll={isScroll} text='menu.services.menuItemTitle'>
    <div>
      <SubItem title='menu.services.categories.individuals.title'>
        {menuItemsIndividual.map(({ l, h }) => (
          <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
            <FormattedMessage id={l} />
            <SendArrow />
          </Link>
        ))}
      </SubItem>

      <SubItem title='menu.services.categories.popular.title'>
        {menuItemsPopular.map(({ l, h }) => (
          <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
            <FormattedMessage id={l} />
            <SendArrow />
          </Link>
        ))}
      </SubItem>
    </div>

    <div>
      <SubItem title='menu.services.categories.admission.title'>
        {menuItemsAdmission.map(({ l, h }) => (
          <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
            <FormattedMessage id={l} />
            <SendArrow />
          </Link>
        ))}
      </SubItem>

      <SubItem title='menu.services.categories.forBusiness.title'>
        {menuItemsRelatedBusiness.map(({ l, h }) => (
          <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
            <FormattedMessage id={l} />
            <SendArrow />
          </Link>
        ))}
      </SubItem>
    </div>

    <div>
      <SubItem title='menu.services.categories.transport.title'>
        {menuItemsTransport.map(({ l, h }) => (
          <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
            <FormattedMessage id={l} />
            <SendArrow />
          </Link>
        ))}
      </SubItem>
    </div>
  </MenuItem>
);

export default AnimatedMenu;
