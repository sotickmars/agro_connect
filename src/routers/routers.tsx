import { RouteObject } from 'react-router-dom';
import { RootContainer, Settings, DNDKit, CounterRTK } from '../pages';
import { RouterPath } from '../enums/routers';

export const routers: RouteObject[] = [
  {
    path: RouterPath.Root,
    element: <RootContainer />,
    errorElement: <>ERROR</>,
    children: [
      {
        path: RouterPath.Settings,
        element: <Settings />,
      },
      {
        path: RouterPath.CounterRTK,
        element: <CounterRTK />,
      },
      {
        path: RouterPath.DNDKit,
        element: <DNDKit />,
      },
    ],
  },
];
