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

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isScroll: boolean;
}

const AnimatedMenu: React.FC<Props> = ({ isScroll }) => {
  // TODO fix it

  const tabs = [
    {
      label: 'menu.services.categories.popular.title',
      data: menuItemsPopular
    },
    {
      label: 'menu.services.categories.individuals.title',
      data: menuItemsIndividual,
      bgColor: colors.purple100
    },
    {
      label: 'menu.services.categories.admission.title',
      data: menuItemsAdmission,
      bgColor: colors.yellow300
    },
    {
      label: 'menu.services.categories.forBusiness.title',
      data: menuItemsRelatedBusiness,
      bgColor: colors.blue100
    },
    {
      label: 'menu.services.categories.transport.title',
      data: menuItemsTransport,
      bgColor: colors.green150
    }
  ];

  const [selectedTab, setSelectedTab] = React.useState<{
    label: string;
    bgColor?: string;
    data: { l: string; h: string }[];
  }>(tabs[0]);

  return (
    <MenuItem activeColor={selectedTab.bgColor} isScroll={isScroll} text='menu.services.menuItemTitle'>
      <nav style={{ padding: '28px 0 28px 28px' }}>
        {tabs.map((item) => (
          <div key={item.label} style={{ position: 'relative', width: '100%' }}>
            <SubItem
              className={item === selectedTab ? 'selected' : ''}
              title={item.label}
              onMouseMove={() => setSelectedTab(item)}
            />

            {item.label === selectedTab.label ? (
              <motion.div
                layoutId='underline'
                style={{
                  position: 'absolute',
                  background: '#f1f1f1',
                  width: '100%',
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                  height: '100%',
                  top: '0',
                  bottom: '0'
                }}
              />
            ) : null}
          </div>
        ))}
      </nav>
      <main style={{ flex: 1, background: '#f1f1f1', padding: '28px 28px 28px 10px' }}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'grid',
              gap: '0 10px',
              justifyContent: 'center',
              gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 260px))',
              width: '100%'
            }}
          >
            {selectedTab &&
              selectedTab.data?.map(({ l, h }) => (
                <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                  <FormattedMessage id={l} />
                  <SendArrow />
                </Link>
              ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/*<div>*/}
      {/*  <SubItem title='menu.services.categories.individuals.title'>*/}
      {/*    {menuItemsIndividual.map(({ l, h }) => (*/}
      {/*      <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>*/}
      {/*        <FormattedMessage id={l} />*/}
      {/*        <SendArrow />*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </SubItem>*/}

      {/*  <SubItem title='menu.services.categories.popular.title'>*/}
      {/*    {menuItemsPopular.map(({ l, h }) => (*/}
      {/*      <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>*/}
      {/*        <FormattedMessage id={l} />*/}
      {/*        <SendArrow />*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </SubItem>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <SubItem title='menu.services.categories.admission.title'>*/}
      {/*    {menuItemsAdmission.map(({ l, h }) => (*/}
      {/*      <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>*/}
      {/*        <FormattedMessage id={l} />*/}
      {/*        <SendArrow />*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </SubItem>*/}

      {/*  <SubItem title='menu.services.categories.forBusiness.title'>*/}
      {/*    {menuItemsRelatedBusiness.map(({ l, h }) => (*/}
      {/*      <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>*/}
      {/*        <FormattedMessage id={l} />*/}
      {/*        <SendArrow />*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </SubItem>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <SubItem title='menu.services.categories.transport.title'>*/}
      {/*    {menuItemsTransport.map(({ l, h }) => (*/}
      {/*      <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>*/}
      {/*        <FormattedMessage id={l} />*/}
      {/*        <SendArrow />*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </SubItem>*/}
      {/*</div>*/}
    </MenuItem>
  );
};

export default AnimatedMenu;
