import * as React from 'react';
// libs
import styled from 'styled-components';
import { LottiePlayer } from 'lottie-web';

export const LogoBlock = styled.div`
  width: 36px;
  height: 36px;
`;

const Logo = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null);

  React.useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  React.useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/static/animations/LOADINGfast.json'
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <LogoBlock ref={ref} />;
};

export { Logo };
