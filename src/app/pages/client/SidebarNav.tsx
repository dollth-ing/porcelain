import { useRef } from 'react';
import { Scroll } from 'folds';

import {
  SidebarRight,
  Sidebar,
  SidebarContent,
  SidebarStackSeparator,
  SidebarStack,
} from '$components/sidebar';
import {
  DirectTab,
  DirectDMsList,
  HomeTab,
  SpaceTabs,
  InboxTab,
  ExploreTab,
  UnverifiedTab,
  SearchTab,
  AccountSwitcherTab,
} from './sidebar';
import { CreateTab } from './sidebar/CreateTab';
import { useSetting } from '$state/hooks/settings';
import { settingsAtom } from '$state/settings';

export function SidebarNav() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [swapNavBar] = useSetting(settingsAtom, 'swapNavBar');

  if (swapNavBar) {
    return (
      <SidebarRight>
        <SidebarContent
          scrollable={
            <Scroll ref={scrollRef} variant="Background" size="0">
              <SidebarStack>
                <HomeTab />
                <DirectTab />
                <DirectDMsList />
              </SidebarStack>
              <SpaceTabs scrollRef={scrollRef} />
              <SidebarStackSeparator />
              <SidebarStack>
                <ExploreTab />
                <CreateTab />
              </SidebarStack>
            </Scroll>
          }
          sticky={
            <>
              <SidebarStackSeparator />
              <SidebarStack>
                <SearchTab />
                <UnverifiedTab />
                <InboxTab />
                <AccountSwitcherTab />
              </SidebarStack>
            </>
          }
        />
      </SidebarRight>
    );
  } else {
    return (
      <Sidebar>
        <SidebarContent
          scrollable={
            <Scroll ref={scrollRef} variant="Background" size="0">
              <SidebarStack>
                <HomeTab />
                <DirectTab />
                <DirectDMsList />
              </SidebarStack>
              <SpaceTabs scrollRef={scrollRef} />
              <SidebarStackSeparator />
              <SidebarStack>
                <ExploreTab />
                <CreateTab />
              </SidebarStack>
            </Scroll>
          }
          sticky={
            <>
              <SidebarStackSeparator />
              <SidebarStack>
                <SearchTab />
                <UnverifiedTab />
                <InboxTab />
                <AccountSwitcherTab />
              </SidebarStack>
            </>
          }
        />
      </Sidebar>
    );
  }
}
