import * as React from 'react';
// libs
import { LottiePlayer } from 'lottie-web';
// types
import { LoaderPresets } from '@md-ui/loaders/loader/presets';
// views
import { Wrapper } from './views';

interface Props {
  preset?: LoaderPresets;
}

const Loader: React.FC<Props> = ({ preset }) => {
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
        path: '/static/animations/LOADINGslow.json'
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <Wrapper preset={preset}>
      <div ref={ref} />
    </Wrapper>
  );
};

export { Loader };
