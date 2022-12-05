import { Link } from 'react-router-dom';
import { TAB_BAR_CASE } from '../../utils/constants';


export const TabBarCase : React.FC = () => {
  return (
    <>
    {TAB_BAR_CASE.map((tab) => (
      <Link to={tab.path} key={tab.id}>
        <div id={tab.id}>
          {tab.name}
        </div>
      </Link>
    ))}
    </>
  )
}