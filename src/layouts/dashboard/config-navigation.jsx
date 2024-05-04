
import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },

  {
    title: 'This Sem',
    path: '/info',
    icon: icon('ic_info'),
  },

     {
        title: 'Feedback',
        path: '/feedback',
        icon: icon('ic_feedback'),
      },
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('ic_user'),
  },
 
];

export default navConfig;
