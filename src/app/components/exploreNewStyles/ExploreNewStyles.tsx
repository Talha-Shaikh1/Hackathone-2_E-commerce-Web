// import React from 'react';
// import Image from 'next/image';

// const ExploreNewStyles = () => {
//   const styles = [
//     {
//       image: '/chair1.jpg',
//       label: 'Anonymous',
//     },
//     {
//       image: '/chair2.jpg',
//     },
//     {
//       image: '/chair3.jpg',
//       label: 'IKEA',
//     },
//     {
//       image: '/chair4.jpg',
//     },
//   ];

//   return (
//     <section className="explore-styles">
//       <h2 className="explore-heading">EXPLORE NEW AND POPULAR STYLES</h2>
//       <div className="style-grid grid grid-cols-4 gap-4">
//         {styles.map((style, index) => (
//           <div key={index} className="style-card">
//             <Image src={style.image} alt={`Style ${index + 1}`} width={200} height={200} />
//             {style.label && <p className="style-label">{style.label}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExploreNewStyles;