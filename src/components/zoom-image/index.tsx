// import { useInView } from 'react-intersection-observer';
//
// type Props = {
//     src: string
// }
// export default function Component(item: Props) {
//     const { ref, inView } = useInView({
//         threshold: 0., // 50% ko'rinishi bilan zoom boshlanadi
//         triggerOnce: true,
//     });
//
//     return (
//         <img
//             ref={ref}
//             src={item.src}
//             className={`transition-transform duration-500 ease-out ${inView ? 'scale-110' : 'scale-100'}`}
//             alt="Zoomable"
//         />
//     );
// };