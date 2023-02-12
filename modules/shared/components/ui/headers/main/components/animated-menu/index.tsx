import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// components
import { Link } from '@md-ui/link';
import MenuItem from '@md-ui/headers/main/components/animated-menu/components/menu-item';
import SubItem from '@md-ui/headers/main/components/animated-menu/components/sub-item';
import SendArrow from '../../../../../../../../public/static/icons/send-arrow';
// theme
import { colors } from '@md-styles/styled/theme';
// types
import { IMenuItem } from '@md-modules/shared/providers/menu-provider';
// views
import { MotionUnderline, NavWrapper } from '@md-ui/headers/main/components/animated-menu/view';

interface Props {
  isScroll: boolean;

  menuData: IMenuItem[];
}

const AnimatedMenu: React.FC<Props> = ({ isScroll, menuData }) => {
  const [selectedTab, setSelectedTab] = React.useState<{ index: number; selectedTab: IMenuItem }>({
    index: 0,
    selectedTab: menuData[0]
  });

  const controls = useAnimation();

  React.useEffect(() => {
    void controls.set((i) => {
      if (i === selectedTab.index) {
        return { y: 0, opacity: 1, overflow: 'visible', height: 'max-content', transition: { duration: 0.2 } };
      }

      return { y: -10, opacity: 0, overflow: 'hidden', height: 0, transition: { duration: 0.2 } };
    });
  }, [selectedTab.index]);

  return (
    <MenuItem activeColor={selectedTab?.selectedTab.bgColor} isScroll={isScroll} text='menu.services.menuItemTitle'>
      <NavWrapper>
        {menuData.map((item, index) => (
          <div key={item.label} style={{ position: 'relative', width: '100%' }}>
            <SubItem
              className={item === selectedTab?.selectedTab ? 'selected' : ''}
              title={item.label}
              onMouseMove={() => setSelectedTab({ selectedTab: item, index })}
            />

            {item.label === selectedTab.selectedTab.label ? <MotionUnderline layoutId='underline' /> : null}
          </div>
        ))}
      </NavWrapper>

      <main
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          background: '#f1f1f1',
          padding: '28px 28px 28px 10px'
        }}
      >
        <AnimatePresence key={selectedTab ? selectedTab.selectedTab.label : 'empty'}>
          {menuData.map((item, index) => (
            <motion.div
              key={selectedTab ? selectedTab.selectedTab.label : 'empty'}
              animate={controls}
              custom={index}
              transition={{ duration: 0.2 }}
              style={{
                display: 'grid',
                gap: '0 10px',
                position: 'absolute',
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 260px))',
                width: '100%'
              }}
            >
              {item.data?.map(({ l, h }) => (
                <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                  <FormattedMessage id={l} />
                  <SendArrow />
                </Link>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </MenuItem>
  );
};

export default AnimatedMenu;
