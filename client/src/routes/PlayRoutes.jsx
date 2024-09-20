import SelectGamePage from '../pages/SelectGamePage';
import PetFoodMatch from '../games/PetFoodMatch';
import BubblePopColor from '../games/BubblePopColor';
import PinwheelPage from '../games/PinwheelPage';
import TraceGame from '../games/TraceGame';
import DragNDropJack from '../games/DragNDropJack';
import FreeDraw from '../games/FreeDraw';
import BubbleFallLeaves from '../games/BubbleFallLeaves';
import AppleCount from '../games/AppleCount';

const playRoutes = [
  {
    path: 'play',
    element: <SelectGamePage />,
    children: [
      {
        path: 'petfoodmatch',
        element: <PetFoodMatch />,
      },
      {
        path: 'bubblepopcolor',
        element: <BubblePopColor />,
      },
	  {
		path: 'bubblefallleaves',
		element: <BubbleFallLeaves />,
	  },
      {
        path: 'pinwheel',
        element: <PinwheelPage />,
      },
	  {
		path: 'tracegame',
		element: <TraceGame />,
	  },
	  {
		path: 'dragndropjack',
		element: <DragNDropJack/>,
	  },
	  {
		path: 'freedraw',
		element: <FreeDraw />,
	  },
	  {
		path: 'applecount',
		element: <AppleCount />,
	  },
    ],
  },
];

export default playRoutes;