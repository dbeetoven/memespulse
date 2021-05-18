import Image from 'next/image'

const Img = (props) => (
  <Image
   className={props.className}
    src={props.url}
    height={props.height ||144}
    width={props.width || 144} 
    alt={props.alt}
  />
);

export default Img;
