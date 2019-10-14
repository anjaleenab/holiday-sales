import React from 'react';

function ProductListItem(props) {
  props.items.map(item => {
    var itemImage = item['Image'][0];
    var style = {
      backgroundImage: 'url(' + itemImage + ')',
      width: 200 + 'px',
      height: 200 + 'px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
    return (
      <div key={item.id}>
        <div style={style}>
        </div>
        ${item.price}
        <br />
        {item.shortDescription}
      </div>
    );

  });
}

// props.items.map(item => {
//   var itemImage = item['Image'][0];
// var style = {
//     backgroundImage: 'url(' + itemURL + ')',
//     width: 200 + 'px',
//     height: 200 + 'px',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat'
//   };
//     return (
//       <div key={item.id} style="background-color: blue">
//       </div>
//     );
//   });
// }

// props.items.map(item => {
//   var itemURL = item['Image'][0];
//   var style = {
//     backgroundImage: 'url(' + itemURL + ')',
//     width: 200 + 'px',
//     height: 200 + 'px',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat'
//   };
//   return (
//     <div key={props.item.id} style={style}>

//         ${props.item.price}
//       <br />
//       {props.item.shortDescription}

//     </div>
//   );
// });

// complete edition
// var itemURLs = props.items.map(item => {
//   return item['Image'][0];
// });
// var styleObs = itemURLs.map(itemURL => {
//   var style = {
//     backgroundImage: 'url(' + itemURL + ')',
//     width: 200 + 'px',
//     height: 200 + 'px',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat'
//   };
// });
// props.items.map(data => {
//   return (
//     <div key={data.id}>
//       {test}
//         ${data.price}
//       <br />
//       {data.shortDescription}
//     </div>
//   );
//   function test() {
//     styleObs.map(styleStuff => {
//       return <div style={style}>
//       </div>;
//     }
//     );
//   }
// });
// }

export default ProductListItem;
