import './App.css';
import { ConfigProvider } from 'antd';
import Sample from './component/Sample';
import whchTheme from '../theme.tsx';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: whchTheme(),

      // algorithm: theme.darkAlgorithm
      // token: {
      //   colorPrimary: '#00b96b',
      //   // colorBgContainer: '#00b96b',
      // },
    }}
  >
    <Sample></Sample>
  </ConfigProvider>
);

export default App;
