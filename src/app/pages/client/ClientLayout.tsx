import { ReactNode } from 'react';
import { Box } from 'folds';
import { useSetting } from '$state/hooks/settings';
import { settingsAtom } from '$state/settings';

type ClientLayoutProps = {
  nav: ReactNode;
  children: ReactNode;
};
export function ClientLayout({ nav, children }: ClientLayoutProps) {
  const [swapNavBar] = useSetting(settingsAtom, 'swapNavBar');

  if (swapNavBar) {
    return (
      <Box grow="Yes">
        <Box grow="Yes">{children}</Box>
        <Box shrink="No">{nav}</Box>
      </Box>
    );
  } else {
    return (
      <Box grow="Yes">
        <Box shrink="No">{nav}</Box>
        <Box grow="Yes">{children}</Box>
      </Box>
    );
  }
}
