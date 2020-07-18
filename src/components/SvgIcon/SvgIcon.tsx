import dynamic from 'next/dynamic';

function SvgIcon({iconName}){
  const DynamicComponent = dynamic(() => import(`../../../public/images/icons/${iconName}.svg`))

  return <DynamicComponent/>
}

export default SvgIcon
