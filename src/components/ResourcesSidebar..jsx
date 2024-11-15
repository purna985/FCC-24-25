import * as React from 'react';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
} from './ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';

const resourcesData = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Installation', href: '#installation' },
      { title: 'Configuration', href: '#configuration' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Components', href: '#components' },
      { title: 'Routing', href: '#routing' },
      { title: 'State Management', href: '#state-management' },
    ],
  },
  {
    title: 'Advanced Topics',
    items: [
      {
        title: 'Performance Optimization',
        href: '#performance-optimization',
        subitems: [
          { title: 'Code Splitting', href: '#code-splitting' },
          { title: 'Lazy Loading', href: '#lazy-loading' },
        ],
      },
      { title: 'Server-Side Rendering', href: '#server-side-rendering' },
      { title: 'Testing', href: '#testing' },
    ],
  },
];

export default function ResourceSidebar() {
  return (
      <div className="absolute h-fit flex flex-col">
        <div className="container items-start lg:gap-10 mt-16">
      
          <Sidebar
            variant='sidebar'
            className={` dark md:block fixed top-0 left-0 z-30 h-full bg-gray-800 dark:bg-gray-900`}
          >

            <SidebarHeader>
              <div className="w-full flex h-16 items-center justify-between px-4">
                <h2 className="text-lg font-semibold tracking-tight text-white">Resources</h2>
              </div>
            </SidebarHeader>

            <SidebarContent>
              {resourcesData.map((section) => (
                <SidebarGroup key={section.title}>
                  <Collapsible>
                    <SidebarGroupLabel asChild>

                      <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-sm text-white">
                        {section.title}
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>

                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {section.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                              {item.subitems ? (
                                <Collapsible>
                                  <CollapsibleTrigger asChild>
                                    <SidebarMenuButton className="w-full justify-between text-white">
                                      {item.title}
                                      <ChevronRight className="h-4 w-4" />
                                    </SidebarMenuButton>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent>
                                    <SidebarMenuSub>
                                      {item.subitems.map((subitem) => (
                                        <SidebarMenuSubItem key={subitem.title}>
                                          <SidebarMenuSubButton asChild>
                                            <a href={subitem.href} className="text-white">{subitem.title}</a>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      ))}
                                    </SidebarMenuSub>
                                  </CollapsibleContent>
                                </Collapsible>
                              ) : (
                                <SidebarMenuButton asChild>
                                  <a href={item.href} className="text-white">{item.title}</a>
                                </SidebarMenuButton>
                              )}
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
              ))}
            </SidebarContent>

          </Sidebar>

        </div>
      </div>

  );
}
