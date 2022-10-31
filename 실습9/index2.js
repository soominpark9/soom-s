// setTimeout(function () {
//     document.body.style.backgroundColor = "red";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "orange";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "green";
//           setTimeout(function () {
//             document.body.style.backgroundColor = "blue";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);

function colorChange(colors) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = colors;
      resolve();
    }, 1000);
  });
}

colorChange("red")
  .then(function () {
    return colorChange("orange");
  })

  .then(function () {
    return colorChange("yellow");
  })

  .then(function () {
    return colorChange("green");
  })

  .then(function () {
    return colorChange("blue");
  });
